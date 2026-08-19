export const toCamel = (s: string) => s.replace(/[-_.]+([a-zA-Z0-9])/g, g => g[g.length - 1].toUpperCase());
export const ucfirst = (s: string) => s.charAt(0).toUpperCase() + s.slice(1);
export const toUpperCamel = (s: string) => ucfirst(toCamel(s));

export function nameForKey(key: string): string {
  if (key.includes(".")) {
    const [platform, domain] = key.split(".");
    return toUpperCamel(platform) + toUpperCamel(domain);
  }
  return toUpperCamel(key) + "Platform";
}

export function filePathForKey(key: string): string {
  return `${nameForKey(key)}.ts`;
}

export function defaultExpr(raw: string | undefined): string {
  if (raw === undefined) return "";
  if (raw === "True") return ".default(true)";
  if (raw === "False") return ".default(false)";
  if (/^-?\d+(\.\d+)?$/.test(raw)) return `.default(${raw})`;
  return `.default(${JSON.stringify(raw)})`;
}