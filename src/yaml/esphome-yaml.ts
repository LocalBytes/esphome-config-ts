import * as yaml from "js-yaml";
import type { TagDefinition } from "js-yaml";
import { extendYamlType } from "./extend.js";
import { lambdaYamlType } from "./lambda.js";
import { secretYamlType } from "./secret.js";

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

const esphomeYamlSchema: yaml.Schema = yaml.CORE_SCHEMA.withTags(yamlTypes);
const esphomeYamlDump = (data: any, opts?: yaml.DumpOptions): string => yaml.dump(data, {
    schema: esphomeYamlSchema,
    sortKeys: esphomeYamlSortKeys,
    lineWidth: -1,
    ...opts
});
const esphomeYamlParse = (data: string): unknown => yaml.load(data, {schema: esphomeYamlSchema})

const espHomeYaml: {
    schema: yaml.Schema;
    dump: (data: any, opts?: yaml.DumpOptions) => string;
    parse: (data: string) => unknown;
} = {
    schema: esphomeYamlSchema,
    dump: esphomeYamlDump,
    parse: esphomeYamlParse
}

export default espHomeYaml;
