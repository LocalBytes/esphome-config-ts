import { defineScalarTag } from "js-yaml";
import type { ScalarTagDefinition } from "js-yaml";

export class Extend {
    content: string;

    constructor(content: string) {
        this.content = content;
    }
}

export const extend = (content: string): Extend => new Extend(content);

export const extendYamlType: ScalarTagDefinition<Extend> = defineScalarTag("!extend", {
    resolve: (source) => extend(source),
    identify: (data) => data instanceof Extend,
    represent: (data) => (data as Extend).content,
});
