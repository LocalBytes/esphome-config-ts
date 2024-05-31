import {extendYamlType} from "./extend.js";
import {lambdaYamlType} from "./lambda.js";
import {secretYamlType} from "./secret.js";

import * as yaml from "js-yaml";

export const yamlTypes = [
    extendYamlType,
    lambdaYamlType,
    secretYamlType,
]

const esphomeYamlSchema = yaml.DEFAULT_SCHEMA.extend(yamlTypes);
const esphomeYamlDump = (data: any) => yaml.dump(data, {schema: esphomeYamlSchema})
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
