import type { ScalarTagDefinition } from "js-yaml";
import { scalarTag } from "./scalar-tag.js";

export class Extend {
    content: string;

    constructor(content: string) {
        this.content = content;
    }
}

export const extend = (content: string): Extend => new Extend(content);

export const extendYamlType: ScalarTagDefinition<Extend> = scalarTag("!extend", Extend);

export class Lambda {
    content: string;

    constructor(content: string) {
        this.content = content;
    }
}

export const lambda = (content: string): Lambda => new Lambda(content);

export const lambdaYamlType: ScalarTagDefinition<Lambda> = scalarTag("!lambda", Lambda);

export class Secret {
    content: string;

    constructor(content: string) {
        this.content = content;
    }
}

export const secret = (content: string): Secret => new Secret(content);

export const secretYamlType: ScalarTagDefinition<Secret> = scalarTag("!secret", Secret);
