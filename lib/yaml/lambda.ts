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
    construct: (data: string) => lambda(data),
    represent: (data: object) => (data as unknown as Lambda).content,
    instanceOf: Lambda,
})
