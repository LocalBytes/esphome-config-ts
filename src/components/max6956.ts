/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: max6956.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/max6956
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes)
 **/
import { type ID, type Pin, BaseComponent } from "@/lib/base.js";
import type { CoreCOMPONENT_SCHEMA } from "./esphome.js";
import type { OutputFLOAT_OUTPUT_SCHEMA } from "./output.js";

export class Max6956 extends BaseComponent<Max6956Config> {
    componentName: string = "max6956";
}

export type Max6956ConfigBrightnessMode = 'global' | 'segment';

export interface Max6956Config extends CoreCOMPONENT_SCHEMA {
    id: string;
    brightness_global?: number;
    brightness_mode?: Max6956ConfigBrightnessMode;
    i2c_id?: ID;
    address?: any;
}

export class Max6956Output extends BaseComponent<Max6956OutputConfig> {
    componentName: string = "max6956.output";
}

export type Max6956OutputConfig = {
        id: string;
        max6956?: ID;
        pin: number;
    } & OutputFLOAT_OUTPUT_SCHEMA & CoreCOMPONENT_SCHEMA;
