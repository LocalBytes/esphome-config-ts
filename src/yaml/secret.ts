import * as yaml from "js-yaml";

export class Secret {
    content: string;

    constructor(content: string) {
        this.content = content;
    }
}

export const secret = (content: string) => new Secret(content);

export const secretYamlType = new yaml.Type("!secret", {
    kind: "scalar",
    construct: (data: string) => secret(data),
    represent: (data: object) => (data as unknown as Secret).content,
    instanceOf: Secret,
})
