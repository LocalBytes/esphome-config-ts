import * as yaml from "js-yaml";

export class Lambda {
    content: string;

    constructor(content: string) {
        this.content = content;
    }
}

export const lambda = (content: string) => new Lambda(content);

export const lambdaYamlType = new yaml.Type("!lambda", {
    kind: "scalar",
    represent: (data: object) => {
        let tData = data as unknown as Lambda;
        return tData.content;
    },
    instanceOf: Lambda,
})
