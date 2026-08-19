import { defineScalarTag } from "js-yaml";
import type { ScalarTagDefinition } from "js-yaml";

export class Secret {
    content: string;

    constructor(content: string) {
        this.content = content;
    }
}

export const secret = (content: string): Secret => new Secret(content);

export const secretYamlType: ScalarTagDefinition<Secret> = defineScalarTag("!secret", {
    resolve: (source) => secret(source),
    identify: (data) => data instanceof Secret,
    represent: (data) => (data as Secret).content,
});
