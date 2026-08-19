import {z} from "zod";
import type {Configuration} from "@/lib/config.js";
import {type Esp32Pin, Esp32PinSchema, type Esp8266Pin, Esp8266PinSchema, type Rp2040Pin, Rp2040PinSchema, type HostPin, HostPinSchema} from "@/components/index.js";

export type ID = string;

export type Pin = string | number | Esp32Pin | Esp8266Pin | Rp2040Pin | HostPin;
export const PinSchema: z.ZodType<Pin> = z.union([z.string(), z.number(), Esp32PinSchema, Esp8266PinSchema, Rp2040PinSchema, HostPinSchema]);

export type TimePeriod<TObj = unknown> = string | TObj;

export function TimePeriodSchema<T extends z.ZodTypeAny>(objSchema: T): z.ZodType<TimePeriod<z.infer<T>>> {
  return z.union([z.string(), objSchema]);
}

export type ComponentName = `${string}.${string}`;

export type SynthPreamble = { _domain: string, platform?: string };
export type SynthComponent<TConfig extends Object = {}> = SynthPreamble & TConfig;

export abstract class BaseComponent<TConfig extends Object = {}> {
    config: TConfig;
    abstract componentName: ComponentName | string;

    constructor(config: TConfig) {
        this.config = config;
    }

    addTo(config: Configuration, update: boolean = false): this {
        config[update ? "updateComponent" : "addComponent"](this);
        return this;
    }

    abstract synth(): Array<SynthComponent | BaseComponent>
}

export abstract class EsphomeComponent<TConfig extends Object = {}> extends BaseComponent<TConfig> {
    constructor(config: TConfig) {
        super(config);
    }

    synth(): SynthComponent<TConfig>[] {
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
}

export abstract class VirtualComponent<TConfig extends Object = {}> extends BaseComponent<TConfig> {
    componentName = "virtual";

    abstract synth(): Array<SynthComponent | BaseComponent>;
}
