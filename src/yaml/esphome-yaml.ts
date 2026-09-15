import * as yaml from "js-yaml";
import type { TagDefinition } from "js-yaml";
import { extendYamlType, lambdaYamlType, secretYamlType } from "./scalars.js";

export const yamlTypes: readonly TagDefinition[] = [
    extendYamlType,
    lambdaYamlType,
    secretYamlType,
] as const;

const TOP_KEYS = ["substitutions", "external_components", "esphome", "esp32", "wifi", "captive_portal", "ota", "logger", "api", "web_server"];

const esphomeYamlSortKeys = (a: any, b: any): number => {
    const lookup = (key: any) => TOP_KEYS.includes(key) ? TOP_KEYS.indexOf(key) : TOP_KEYS.length + 1;
    return lookup(a) - lookup(b);
}

export const schema: yaml.Schema = yaml.CORE_SCHEMA.withTags(yamlTypes);

export const dump = (data: any, opts?: yaml.DumpOptions): string => yaml.dump(data, {
    schema,
    sortKeys: esphomeYamlSortKeys,
    lineWidth: -1,
    ...opts
});

export const parse = (data: string): unknown => yaml.load(data, {schema});
