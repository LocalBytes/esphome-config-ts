import {extendYamlType} from "./extend.js";
import {lambdaYamlType} from "./lambda.js";
import {secretYamlType} from "./secret.js";
import * as yaml from "js-yaml";

export {extend, Extend} from "./extend.js";
export {lambda, Lambda} from "./lambda.js";
export {secret, Secret} from "./secret.js";

export const yamlTypes = [
    extendYamlType,
    lambdaYamlType,
    secretYamlType,
]

const TOP_KEYS = ["substitutions", "external_components", "esphome", "esp32", "wifi", "captive_portal", "ota", "logger", "api", "web_server"];

const esphomeYamlSortKeys = (a: any, b: any) => {
    const lookup = (key: any) => TOP_KEYS.includes(key) ? TOP_KEYS.indexOf(key) : TOP_KEYS.length + 1;
    return lookup(a) - lookup(b);
}

const esphomeYamlSchema = yaml.DEFAULT_SCHEMA.extend(yamlTypes);
const esphomeYamlDump = (data: any, opts?: yaml.DumpOptions) => yaml.dump(data, {
    schema: esphomeYamlSchema,
    sortKeys: esphomeYamlSortKeys,
    ...opts
});
const esphomeYamlParse = (data: string) => yaml.load(data, {schema: esphomeYamlSchema})

const espHomeYaml = {
    schema: esphomeYamlSchema,
    dump: esphomeYamlDump,
    parse: esphomeYamlParse
}

export default espHomeYaml;

export {
    extendYamlType, lambdaYamlType, secretYamlType
};
