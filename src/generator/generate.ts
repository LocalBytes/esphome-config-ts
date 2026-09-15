import * as fs from "node:fs/promises";
import * as path from "node:path";
import * as os from "node:os";
import unzipper from "unzipper";
import { setRegistry, synthesizeFile, synthesizePin } from "@/generator/build.js";

const PIN_PLATFORMS = ["esp32", "esp8266", "rp2040", "host"];

const CFG = {
  version: "2026.6.0"
};

const cachePath = path.join(os.tmpdir(), `esphome-schema-${CFG.version}.zip`);

let zipBuffer: Buffer;
if (await fs.access(cachePath).then(() => true, () => false)) {
  console.log("Using cached schema:", cachePath);
  zipBuffer = await fs.readFile(cachePath);
} else {
  const url = `https://schema.esphome.io/${CFG.version}/schema.zip`
  console.log("Fetching: ", url);

  const schemaResponse = await fetch(url);
  if (!schemaResponse.ok) {
    throw new Error("Failed to fetch schema");
  }

  zipBuffer = Buffer.from(await schemaResponse.arrayBuffer());
  await fs.writeFile(cachePath, zipBuffer);
}

const dest = path.join(import.meta.dirname, "../src/components");
await fs.rm(dest, {recursive: true, force: true});
await fs.mkdir(dest, {recursive: true});

const schemaBundle = await unzipper.Open.buffer(zipBuffer)

const registry: Record<string, any> = {};
for (const file of schemaBundle.files) {
  if (file.type !== "File" || !file.path.endsWith(".json")) continue;
  const basename = path.basename(file.path, ".json");
  registry[basename] = JSON.parse((await file.buffer()).toString("utf-8"));
}
setRegistry(registry);

const usedNames = new Set<string>();
const domainVariants = new Map<string, { name: string; modulePath: string }[]>();

let written = 0, skipped = 0;
for (const [outName, data] of Object.entries(registry)) {
  try {
    const results = synthesizeFile(data);

    for (const { path: relPath, source, key, name } of results) {
      await fs.writeFile(path.join(dest, relPath), source);
      written++;
      usedNames.add(name);

      if (key.includes(".")) {
        const domain = key.split(".")[1];
        const list = domainVariants.get(domain) ?? [];
        list.push({ name, modulePath: "./" + relPath.replace(/\.ts$/, ".js") });
        domainVariants.set(domain, list);
      }
    }
  } catch (e) {
    console.error(`Skipping ${outName}:`, e);
    skipped++;
  }
}

for (const [domain, variants] of domainVariants) {
  const ucDomain = domain.charAt(0).toUpperCase() + domain.slice(1).replace(/_([a-z])/g, (_, c) => c.toUpperCase());
  if (variants.length < 2 || usedNames.has(ucDomain)) continue;

  const imports = variants.map(v => `import { ${v.name} } from ${JSON.stringify(v.modulePath)};`).join("\n");
  const source = `${imports}

export { ${variants.map(v => v.name).join(", ")} };
export type ${ucDomain} = ${variants.map(v => v.name).join(" | ")};
`;

  await fs.writeFile(path.join(dest, `${ucDomain}.ts`), source);
  written++;
  usedNames.add(ucDomain);
}

for (const platform of PIN_PLATFORMS) {
  const result = synthesizePin(platform);
  if (!result || usedNames.has(result.name)) continue;
  await fs.writeFile(path.join(dest, result.path), result.source);
  written++;
  usedNames.add(result.name);
}

console.log(`Wrote ${written} component files to ${dest} (${skipped} skipped)`);
