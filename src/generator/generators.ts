import {
    ClassDeclaration,
    type OptionalKind,
    type PropertySignatureStructure,
    SourceFile,
    TypeAliasDeclaration,
    type WriterFunction,
    type WriterFunctionOrValue,
    Writers
} from "ts-morph";
import {fileNameFromComponent, notEmpty, toUpperCamelCase} from "./utils.js";

let types: {
    idType: TypeAliasDeclaration; pinType: TypeAliasDeclaration; classType: ClassDeclaration;
}

export function handleIndex(project: SourceFile) {
    types = {
        idType: project.getTypeAliasOrThrow("ID"),
        pinType: project.getTypeAliasOrThrow("Pin"),
        classType: project.getClassOrThrow("EsphomeComponent"),
    };
}

export function generateClass(project: SourceFile, key: string, config: any) {
    let name = toUpperCamelCase(key);
    let addedClass = project.addClass({
        name: name, isExported: true, extends: types.classType.getName(),
    });
    addedClass.addProperty({
        name: "componentName",
        type: "string",
        initializer: `"${key}"`,
    })

    let configType = "{}";

    Object.entries(config?.schemas ?? {})
        .forEach(([key, value]) => {
            let isConfigSchema = key === "CONFIG_SCHEMA";
            let cfg = generateConfig(project, name + toUpperCamelCase(isConfigSchema ? "config" : key), value);
            if (isConfigSchema) {
                configType = cfg?.getName ? cfg.getName() : cfg;
            }
        });

    if (configType === "{}") {
        addedClass.setIsAbstract(true);
    } else {
        addedClass.setExtends(types.classType.getName() + `<${configType}>`);
    }

    return addedClass;
}

function generateStringMapping(project: SourceFile, name: string, json: any) {
    return project.addTypeAlias({
        name, isExported: true, type: "Record<string, string>",
    });
}

function generateConfig(project: SourceFile, name: string, json: any) {
    if (json?.key == "GeneratedID") {
        json.key = "Optional";
        return types.idType;
    }

    if (json.key === "String" && json.default === "{}") {
        return generateStringMapping(project, name, json)
    }

    switch (json.type) {
        case "schema":
            return generateSchema(project, name, json);
        case "enum":
            return generateEnum(project, name, json);
        case "typed":
            return generateTypedSchema(project, name, json);

        case "trigger":
            return "object[]";

        case "use_id":
            return types.idType;
        case "pin":
            return types.pinType;

        case "integer":
        case "float":
            return "number"

        case "boolean":
        case "string":
            return json.type;
    }


    if (json.key === "Required") {
        return "string"
    }

    return "any";
}

function generateSchema(file: SourceFile, name: string, json: any) {
    let properties = Object.entries((json.schema ?? json).config_vars ?? {})
        .map(([key, value]: [string, any]) => {
            let type = generateConfig(file, name + toUpperCamelCase(key), value);

            if (!type) {
                return null;
            }

            let typeName = (typeof type === "string" ? type : type.getName()) ?? null;

            return {
                name: key,
                type: typeName + (value.is_list ? '[]' : ''),
                hasQuestionToken: value.key === "Optional" || typeName === "any",
            } satisfies OptionalKind<PropertySignatureStructure>;
        }).filter(notEmpty);

    let extensions: string[] = (json.schema?.extends ?? []).map((extension: string) => {
        let extensionName = toUpperCamelCase(extension).replace(".", "");
        let firstDot = fileNameFromComponent(extension);

        if (file.getBaseNameWithoutExtension() !== firstDot) {
            let imp = file.getImportDeclaration(`./${firstDot}.js`)
            if (imp && !imp.getNamedImports().find(i => i.getName() === extensionName)) {
                imp.addNamedImport(extensionName);
            } else if (!imp) {
                file.addImportDeclaration({
                    moduleSpecifier: `./${firstDot}.js`,
                    namedImports: [extensionName],
                    isTypeOnly: true
                });
            }
        }
        return extensionName;
    });

    if (properties.length === 0 || extensions.length > 1) {
        const obj = Writers.objectType({properties});
        let writer: WriterFunctionOrValue | null = obj;

        if (properties.length === 0 && extensions.length == 1) {
            writer = extensions[0];
        } else if (properties.length === 0 && extensions.length == 2) {
            writer = Writers.intersectionType(extensions[0], extensions[1]);
        } else if (properties.length === 0 && extensions.length > 3) {
            writer = Writers.intersectionType(extensions[0], extensions[1], ...extensions.slice(2));
        } else if (extensions.length > 0) {
            writer = Writers.intersectionType(obj, extensions[0], ...extensions.slice(1))
        }

        return file.addTypeAlias({name, isExported: true, type: writer});
    }

    let addedInterface = file.addInterface({
        name, isExported: true,
    });
    addedInterface.addProperties(properties);
    addedInterface.addExtends(extensions);

    return addedInterface;
}

function generateTypedSchema(project: SourceFile, name: string, json: any) {
    let addedInterface = project.addTypeAlias({
        name, isExported: true, type: "any",
    });


    let types = Object.entries(json.types).map(([key, value]: [string, any]) => {
        let type = generateSchema(project, name + toUpperCamelCase(key), value);

        if (!type) return null;

        if (!(type instanceof TypeAliasDeclaration)) {
            type.insertProperties(0, [{
                name: json.typed_key,
                type: Writers.unionType(`"${key}"`, `"${key.toUpperCase()}"`),
            }])
        }
        return type;
    });

    addedInterface.set({
        type: makeUnionType(types
            .filter(notEmpty)
            .map((t) => t.getName())
        ),
    })

    return addedInterface;
}

function generateEnum(project: SourceFile, name: string, json: any) {
    return project.addTypeAlias({
        name, isExported: true, type: Object.keys(json.values).map(v => `'${v}'`).join(" | "),
    });
}

function makeUnionType<T extends WriterFunctionOrValue>(types: T[]): T | WriterFunction {
    if (types.length === 1) {
        return types[0];
    }
    let [one, two, ...rest] = types;
    return Writers.unionType(one, two, ...rest);
}
