import {BaseComponent, type SynthComponent} from "./base.js";

import {Wifi} from "@/components/wifi.js";
import {CaptivePortal} from "@/components/captive_portal.js";
import {Logger} from "@/components/logger.js";
import {WebServer} from "@/components/web_server.js";
import {Api} from "@/components/api.js";
import {Ota} from "@/components/ota.js";

import espHomeYaml from "@/yaml/index.js";
import {type ArrayMaybe, ensureArray} from "@/generator/utils.js";

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

    addComponent(component: BaseComponent | BaseComponent[]) {
        this.components.push(...(Array.isArray(component) ? component : [component]));
        return this;
    }

    addDefaults() {
        return this
            .addComponent(new Wifi({ap: {}}))
            .addComponent(new CaptivePortal({}))
            .addComponent(new Logger({logs: {}}))
            .addComponent(new WebServer({}))
            .addComponent(new Api({}))
            .addComponent(new Ota({}));
    }

    synth(): object {
        return this.synthRecursive(this.components).reduce((acc, cur) => {
            let domain = cur._domain;
            acc[domain] ??= [];

            let {_domain, ...rest} = cur;

            acc[domain].push(rest);

            if (!rest.platform) {
                // Core services don't have multiple instances, and expect a mapping.
                // These are identifiable based on the lack of a platform.
                acc[domain] = rest;
            }
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
