import { defineScalarTag } from "js-yaml";
import type { ScalarTagDefinition } from "js-yaml";

export function scalarTag<T extends { content: string }>(tag: string, ctor: new (content: string) => T): ScalarTagDefinition<T> {
    return defineScalarTag(tag, {
        resolve: (source) => new ctor(source),
        identify: (data): data is T => data instanceof ctor,
        represent: (data) => data.content,
    });
}
