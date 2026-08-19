import {BaseComponent, type SynthComponent} from "@/lib/base.js";

import espHomeYaml from "@/yaml/esphome-yaml.js";
import {type ArrayMaybe, ensureArray} from "@/lib/utils.js";
import {ApiPlatform, CaptivePortalPlatform, EsphomeOta, LoggerPlatform, WebServerPlatform, WifiPlatform} from "@/components/index.js";

export class Configuration {
    components: BaseComponent[] = [];

    updateComponent(component: ArrayMaybe<BaseComponent>): this {
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

    addComponent(component: ArrayMaybe<BaseComponent>): this {
        this.components.push(...(ensureArray(component)));
        return this;
    }

    addDefaults(): this {
        return this
            .addComponent(new WifiPlatform({ap: {}}))
            .addComponent(new CaptivePortalPlatform({}))
            .addComponent(new LoggerPlatform({logs: {}}))
            .addComponent(new WebServerPlatform({}))
            .addComponent(new ApiPlatform({}))
            .addComponent(new EsphomeOta({}));
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
