import {BaseComponent, type SynthComponent} from "@/lib/base.js";

import {dump as dumpEsphomeYaml} from "@/yaml/esphome-yaml.js";
import {type ArrayMaybe, ensureArray} from "@/lib/utils.js";
// Imported directly, not via the "@/components" barrel - see the same note in lib/base.ts.
import {ApiPlatform} from "@/components/ApiPlatform.js";
import {CaptivePortalPlatform} from "@/components/CaptivePortalPlatform.js";
import {EsphomeOta} from "@/components/EsphomeOta.js";
import {LoggerPlatform} from "@/components/LoggerPlatform.js";
import {WebServerPlatform} from "@/components/WebServerPlatform.js";
import {WifiPlatform} from "@/components/WifiPlatform.js";

// Domains with no "platform" key (so not already forced into array form by the reduce below)
// that are still list-typed in ESPHome even with a single entry - e.g. `script:`/`globals:`
// always take a list, unlike `esphome:`/`wifi:`/etc. which are genuinely single mappings.
const LIST_DOMAINS = new Set(["script", "globals", "interval"]);

export class Configuration {
  components: BaseComponent[] = [];

  updateComponent(component: ArrayMaybe<BaseComponent>): this {
    let components = ensureArray(component);

    components.forEach((component) => {
      let index = this.components.findIndex((c) => c.componentName === component.componentName);
      if (index !== -1) {
        this.components[index] = component;
      } else {
        this.addComponent(component);
      }
    });

    return this;
  }

  addComponent(component: ArrayMaybe<BaseComponent>): this {
    this.components.push(...ensureArray(component));
    return this;
  }

  addDefaults(): this {
    return this.addComponent(new WifiPlatform({ap: {}}))
      .addComponent(new CaptivePortalPlatform({}))
      .addComponent(new LoggerPlatform({logs: {}}))
      .addComponent(new WebServerPlatform({}))
      .addComponent(new ApiPlatform({}))
      .addComponent(new EsphomeOta({}));
  }

  synth(): object {
    return this.synthRecursive(this.components).reduce(
      (acc, cur) => {
        let {_domain: domain, ...rest} = cur;

        if (acc[domain] != null && !Array.isArray(acc[domain])) {
          acc[domain] = [acc[domain], rest];
          return acc;
        }

        if (!rest.platform && !LIST_DOMAINS.has(domain)) {
          // Core services (esphome, wifi, logger, ...) don't have multiple instances
          // and expect a mapping, not a list.
          acc[domain] = rest;
          return acc;
        }

        acc[domain] ??= [];
        acc[domain].push(rest);
        return acc;
      },
      {} as Record<string, any>,
    );
  }

  synthYaml(): string {
    return dumpEsphomeYaml(this.synth());
  }

  private synthRecursive(components: BaseComponent[]): Array<SynthComponent> {
    return components.flatMap((component) => {
      return component.synth().flatMap((result) => {
        return result instanceof BaseComponent ? this.synthRecursive([result]) : [result];
      });
    });
  }
}
