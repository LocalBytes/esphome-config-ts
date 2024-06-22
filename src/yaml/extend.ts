import * as yaml from "js-yaml";

export class Extend {
    content: string;

    constructor(content: string) {
        this.content = content;
    }
}

export const extend = (content: string) => new Extend(content);

export const extendYamlType = new yaml.Type("!extend", {
    kind: "scalar",
    construct: (data: string) => extend(data),
    represent: (data: object) => (data as unknown as Extend).content,
    instanceOf: Extend,
})
