import {BaseComponent, type SynthComponent} from "@/lib/base.js";

import espHomeYaml from "@/yaml/index.js";
import {type ArrayMaybe, ensureArray} from "@/lib/utils.js";
import {Api, CaptivePortal, Logger, Ota, WebServer, Wifi} from "@/components/index.js";

export class Configuration {
    components: BaseComponent[] = [];

    updateComponent(component: ArrayMaybe<BaseComponent>) {
        let components = ensureArray(component);

        components.forEach(component => {
            let index = this.components.findIndex(c => c.componentName === component.componentName);
            if (index !== -1) {
                this.components[index] = component;
            } else {
                this.addComponent(component);
            }
        });

        return this;
    }

    addComponent(component: ArrayMaybe<BaseComponent>) {
        this.components.push(...(ensureArray(component)));
        return this;
    }

    addDefaults() {
        return this
            .addComponent(new Wifi({ap: {}}))
            .addComponent(new CaptivePortal({}))
            .addComponent(new Logger({logs: {}}))
            .addComponent(new WebServer({}))
            .addComponent(new Api({}))
            .addComponent(new Ota({
                // @ts-ignore
                platform: "esphome",
            }));
    }

    synth(): object {
        return this
            .synthRecursive(this.components)
            .reduce((acc, cur) => {
                let {_domain: domain, ...rest} = cur;

                if (acc[domain] != null && !Array.isArray(acc[domain])) {
                    acc[domain] = [acc[domain], rest];
                    return acc;
                }

                if (!rest.platform) {
                    // Core services don't have multiple instances, and expect a mapping.
                    // These are identifiable based on the lack of a platform.
                    // However, some do (like, script
                    acc[domain] = rest;
                    return acc;
                }

                acc[domain] ??= [];
                acc[domain].push(rest);
                return acc;
            }, {} as Record<string, any>);
    }

    synthYaml(): string {
        return espHomeYaml.dump(this.synth());
    }

    private synthRecursive(components: BaseComponent[]): Array<SynthComponent> {
        return components.flatMap(component => {
            return component.synth().flatMap(result => {
                return result instanceof BaseComponent ? this.synthRecursive([result]) : [result];
            });
        });
    }
}
