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
    represent: (data: object) => {
        let tData = data as unknown as Extend;
        return tData.content;
    },
    instanceOf: Extend,
})
