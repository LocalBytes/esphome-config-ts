import {Configuration} from "./config.js";

export type ID = string;
export type Pin = string;

export type ComponentName = `${string}.${string}`;

export type SynthPreamble = { _domain: string, platform?: string };
export type SynthComponent<TConfig extends Object = {}> = SynthPreamble & TConfig;

export abstract class BaseComponent<TConfig extends Object = {}> {
    config: TConfig;
    abstract componentName: ComponentName | string;

    constructor(config: TConfig) {
        this.config = config;
    }

    synth(): Array<SynthComponent<TConfig> | BaseComponent> {
        let parts = this.componentName.split('.');

        if (parts.length == 1) {
            return [{_domain: parts[0], ...this.config}];
        }

        return [{
            _domain: parts[1],
            platform: parts[0],
            ...this.config
        }];
    }

    addTo(config: Configuration, update: boolean = false) {
        config[update ? "updateComponent" : "addComponent"](this);
        return this;
    }
}

export abstract class VirtualComponent<TConfig extends Object = {}> extends BaseComponent<TConfig> {
    componentName = "virtual";

    abstract synth(): Array<BaseComponent | VirtualComponent>;
}
