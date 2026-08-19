import { defineScalarTag } from "js-yaml";
import type { ScalarTagDefinition } from "js-yaml";

export class Lambda {
    content: string;

    constructor(content: string) {
        this.content = content;
    }
}

export const lambda = (content: string): Lambda => new Lambda(content);

export const lambdaYamlType: ScalarTagDefinition<Lambda> = defineScalarTag("!lambda", {
    resolve: (source) => lambda(source),
    identify: (data) => data instanceof Lambda,
    represent: (data) => (data as Lambda).content,
});
