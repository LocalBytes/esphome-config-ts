import { existsSync } from "node:fs";
import { readdir } from "node:fs/promises";
import { basename, extname, resolve as resolvePath } from "node:path";
import { pathToFileURL } from "node:url";
import type { TsdownPlugin } from "tsdown";

const VIRTUAL_PREFIX = "virtual:barrel/";

export function barrelPlugin(dirs: Record<string, string>): TsdownPlugin {
  const aliasIds = new Map<string, string>(Object.keys(dirs).flatMap(name => [[`@/${name}/index.js`, name], [`@/${name}`, name]]));
  let root = process.cwd();

  async function barrelFiles(name: string): Promise<string[]> {
    return (await readdir(resolvePath(root, dirs[name]!)).catch(() => []))
      .filter(f => f.endsWith(".ts") && !f.endsWith(".d.ts"))
      .sort();
  }

  return {
    name: "barrel-plugin",

    async tsdownConfig(config) {
      root = config.cwd ?? process.cwd();

      const toNamed = (entry: string) => [basename(entry, extname(entry)), entry] as const;
      const existing = (() => {
        if (typeof config.entry === "string") return Object.fromEntries([toNamed(config.entry)]);
        if (Array.isArray(config.entry)) {
          return Object.fromEntries(config.entry.filter((e): e is string => typeof e === "string").map(toNamed));
        }
        return config.entry ?? {};
      })();

      return {
        entry: {
          ...existing,
          ...Object.fromEntries(Object.keys(dirs).map(name => [name === "lib" ? "index" : name, VIRTUAL_PREFIX + name])),
        },
      };
    },

    async buildStart() {
      const declarations = await Promise.all(Object.keys(dirs).map(async name => {
        const files = await barrelFiles(name);
        const body = files.map(f => `  export * from ${JSON.stringify(`./${dirs[name]}/${f.replace(/\.ts$/, ".js")}`)};`).join("\n");
        return [
          `declare module "@/${name}/index.js" {\n${body}\n}`,
          `declare module "@/${name}" {\n${body}\n}`,
        ].join("\n\n");
      }));
      this.emitFile({ type: "asset", fileName: "global.d.ts", source: declarations.join("\n\n") + "\n" });
    },

    resolveId: {
      filter: { id: new RegExp(`^${VIRTUAL_PREFIX}|^@/(${Object.keys(dirs).join("|")})(/index\\.js)?$`) },
      handler(id: string) {
        if (id.startsWith(VIRTUAL_PREFIX)) {
          const name = id.slice(VIRTUAL_PREFIX.length);
          // Appending .ts is load-bearing: rolldown-plugin-dts only picks up ids matching its own
          // JS/TS extension filter, and relies on internal (undocumented) behaviour — see its README.
          if (name in dirs) return "\0" + id + ".ts";
          return;
        }

        const name = aliasIds.get(id);
        if (name && name in dirs && existsSync(resolvePath(root, dirs[name]!))) return "\0" + VIRTUAL_PREFIX + name + ".ts";
      },
    },

    load: {
      filter: { id: new RegExp(`^\0${VIRTUAL_PREFIX}.*\\.ts$`) },
      async handler(id: string) {
        const name = id.slice(("\0" + VIRTUAL_PREFIX).length, -".ts".length);
        const dir = resolvePath(root, dirs[name]!);
        const files = await barrelFiles(name);

        return files
          .map(f => `export * from ${JSON.stringify(pathToFileURL(resolvePath(dir, f)).href)};`)
          .join("\n");
      },
    },
  };
}
