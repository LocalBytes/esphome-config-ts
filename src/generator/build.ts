import { defaultExpr, filePathForKey, nameForKey, toUpperCamel } from "@/generator/utils.js";

export type SynthesizedFile = { path: string; source: string; key: string; name: string };

let registry: Record<string, any> = {};

export function setRegistry(files: Record<string, any>): void {
  registry = files;
}

function resolveExtendsRef(
  ref: string,
): { config_vars?: Record<string, any>; extends?: string[] } | undefined {
  const dot = ref.indexOf(".");
  if (dot === -1) return undefined;
  const namespace = ref.slice(0, dot);
  const key = ref.slice(dot + 1);

  const schemas =
    namespace === "core"
      ? registry.esphome?.core?.schemas
      : registry[namespace]?.[namespace]?.schemas;

  return schemas?.[key]?.schema;
}

let resolvedRefs: Set<string> = new Set();

function resolveConfigVars(
  schema:
    | {
        config_vars?: Record<string, any>;
        extends?: string[];
      }
    | undefined,
): Record<string, any> {
  const merged: Record<string, any> = {};

  for (const ref of schema?.extends ?? []) {
    if (resolvedRefs.has(ref)) continue;
    resolvedRefs.add(ref);
    const refSchema = resolveExtendsRef(ref);
    if (refSchema) Object.assign(merged, resolveConfigVars(refSchema));
  }

  Object.assign(merged, schema?.config_vars ?? {});
  return merged;
}

const TIME_PERIOD_REF =
  /^core\.(positive_)?time_period(_microseconds|_milliseconds|_minutes|_nanoseconds|_seconds)?$/;

type FieldType = { ts: string; zod: string };

// key_type marks an open string-keyed dict; ESPHome represents the value type as a single
// config_vars entry literally named "string".
function dictValueType(cv: any): FieldType {
  const valueCv = Object.values(cv.schema?.config_vars ?? {})[0] ?? {};
  const value = typeForConfigVar({ ...valueCv, key: "Required", default: undefined });
  return { ts: `Record<string, ${value.ts}>`, zod: `z.record(z.string(), ${value.zod})` };
}

function typedUnionType(cv: any): FieldType {
  const variants = Object.entries(cv.types ?? {}).map(([variantName, schema]: [string, any]) => {
    const base = objectTypeFor(resolveConfigVars(schema));
    const discriminant = JSON.stringify(cv.typed_key);
    const literal = JSON.stringify(variantName);
    return {
      ts: `(${base.ts} & { ${discriminant}: ${literal} })`,
      zod: `${base.zod}.extend({ ${discriminant}: z.literal(${literal}) })`,
    };
  });
  return variants.length
    ? {
        ts: variants.map((v) => v.ts).join(" | "),
        zod: `z.discriminatedUnion(${JSON.stringify(cv.typed_key)}, [${variants.map((v) => v.zod).join(", ")}])`,
      }
    : { ts: "any", zod: "z.any()" };
}

function typeForConfigVar(cv: any): FieldType {
  let type: FieldType = (() => {
    switch (cv?.type) {
      case "string":
        return { ts: "string", zod: "z.string()" };
      case "integer":
        return { ts: "number", zod: "z.number().int()" };
      case "boolean":
        return { ts: "boolean", zod: "z.boolean()" };
      case "enum": {
        const values = Object.keys(cv.values ?? {});
        return values.length
          ? {
              ts: values.map((v) => JSON.stringify(v)).join(" | "),
              zod: `z.enum(${JSON.stringify(values)})`,
            }
          : { ts: "string", zod: "z.string()" };
      }
      case "pin":
        return cv.schema?.config_vars
          ? objectTypeFor(resolveConfigVars(cv.schema))
          : { ts: "Pin", zod: "PinSchema" };
      case "schema": {
        if (cv.key_type) return dictValueType(cv);
        const obj = objectTypeFor(resolveConfigVars(cv.schema));
        return (cv.schema?.extends ?? []).some((ref: string) => TIME_PERIOD_REF.test(ref))
          ? { ts: `TimePeriod<${obj.ts}>`, zod: `TimePeriodSchema(${obj.zod})` }
          : obj;
      }
      case "typed":
        return typedUnionType(cv);
      case "trigger":
      case "registry":
        return { ts: "Record<string, any>[]", zod: "z.array(z.record(z.string(), z.any()))" };
      case "use_id":
        return { ts: "string", zod: "z.string()" };
      default:
        return { ts: "any", zod: "z.any()" };
    }
  })();

  if (cv?.templatable) {
    type = { ts: `(${type.ts} | Lambda)`, zod: `z.union([${type.zod}, z.instanceof(Lambda)])` };
  }
  if (cv?.is_list && cv?.type !== "trigger" && cv?.type !== "registry") {
    type = { ts: `${type.ts}[]`, zod: `z.array(${type.zod})` };
  }

  type = {
    ts: type.ts,
    zod: type.zod + defaultExpr(cv?.default) + (cv?.key !== "Required" ? ".optional()" : ""),
  };

  return type;
}

function objectTypeFor(configVars: Record<string, any>): FieldType {
  const fields = Object.entries(configVars).map(([name, cv]) => {
    const field = typeForConfigVar(cv);
    const optional = cv?.key !== "Required" ? "?" : "";
    return {
      ts: `  ${JSON.stringify(name)}${optional}: ${field.ts};`,
      zod: `  ${JSON.stringify(name)}: ${field.zod},`,
    };
  });

  return {
    ts: `{\n${fields.map((f) => f.ts).join("\n")}\n}`,
    zod: `z.object({\n${fields.map((f) => f.zod).join("\n")}\n})`,
  };
}

function synthesizeComponent(key: string, config: any): SynthesizedFile | undefined {
  const configSchema = config?.schemas?.CONFIG_SCHEMA;
  if (!configSchema || (configSchema.type !== "schema" && configSchema.type !== "typed"))
    return undefined;

  const name = nameForKey(key);
  const schemaConst = `${name}ConfigSchema`;
  const configType = `${name}Config`;
  resolvedRefs = new Set();
  const field = (() => {
    if (configSchema.type === "typed") return typedUnionType(configSchema);
    if (configSchema.key_type) return dictValueType(configSchema);
    return objectTypeFor(resolveConfigVars(configSchema.schema));
  })();

  // language=TypeScript
  const source = `
  import { z } from "zod";
  import { EsphomeComponent, type TimePeriod, TimePeriodSchema, type Pin, PinSchema } from "@/lib/base.js";
  import { Lambda } from "@/yaml/scalars.js";

  export type ${configType} = ${field.ts};
  export const ${schemaConst}: z.ZodType<${configType}> = ${field.zod};

  export class ${name} extends EsphomeComponent<${configType}> {
    componentName = ${JSON.stringify(key)};

    protected get schema(): z.ZodType<${configType}> {
      return ${schemaConst};
    }
  }
  `;

  return { path: filePathForKey(key), source, key, name };
}

export function synthesizeFile(data: Record<string, any>): SynthesizedFile[] {
  return Object.entries(data)
    .map(([key, config]) => synthesizeComponent(key, config))
    .filter((r): r is SynthesizedFile => r !== undefined);
}

export function synthesizePin(platform: string): SynthesizedFile | undefined {
  const pinNode = registry[platform]?.[platform]?.pin;
  if (!pinNode || pinNode.type !== "schema") return undefined;

  const name = `${toUpperCamel(platform)}Pin`;
  const schemaConst = `${name}Schema`;
  resolvedRefs = new Set();
  const field = objectTypeFor(resolveConfigVars(pinNode.schema));

  const source = `import { z } from "zod";

export type ${name} = ${field.ts};
export const ${schemaConst}: z.ZodType<${name}> = ${field.zod};
`;

  return { path: `${name}.ts`, source, key: `${platform}.pin`, name };
}
