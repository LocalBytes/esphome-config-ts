import * as yaml from "js-yaml";

import {BaseComponent, SynthComponent, VirtualComponent} from "./base.js";

import {Wifi} from "./components/wifi.js";
import {CaptivePortal} from "./components/captive_portal.js";
import {Logger} from "./components/logger.js";
import {WebServer} from "./components/web_server.js";
import {Api} from "./components/api.js";
import {Ota} from "./components/ota.js";
import {extendYamlType} from "./yaml/extend.js";
import {lambdaYamlType} from "./yaml/lambda.js";
import {secretYamlType} from "./yaml/secret.js";

type Component = BaseComponent | VirtualComponent;

export class Configuration {
    components: Component[] = [];

    updateComponent(component: Component | Component[]) {
        let components = Array.isArray(component) ? component : [component];

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

    addComponent(component: Component | Component[]) {
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
        return this.synthRecursive(this.components).reduce((acc, cur: SynthComponent) => {
            acc[cur._domain] ??= [];

            let {_domain, ...rest} = cur;

            acc[cur._domain].push(rest);

            if (!rest.platform) {
                // Core services don't have multiple instances, and expect a mapping.
                // These are identifiable based on the lack of a platform.
                acc[cur._domain] = rest;
            }
            return acc;
        }, {} as Record<string, any>);
    }

    synthYaml(): string {
        return yaml.dump(this.synth(), {
            schema: yaml.DEFAULT_SCHEMA.extend([
                extendYamlType,
                lambdaYamlType,
                secretYamlType,
            ])
        })
    }

    private synthRecursive(components: BaseComponent[]): SynthComponent[] {
        return components.flatMap(component => {
            return component.synth().flatMap(result => {
                return result instanceof BaseComponent ? this.synthRecursive([result]) : [result];
            });
        });
    }
}
