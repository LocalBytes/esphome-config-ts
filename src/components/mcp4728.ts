/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: mcp4728.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/mcp4728
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes)
 **/
import { type ID, type Pin, BaseComponent } from "@/lib/base.js";
import type { CoreCOMPONENT_SCHEMA } from "./esphome.js";
import type { OutputFLOAT_OUTPUT_SCHEMA } from "./output.js";

export class Mcp4728 extends BaseComponent<Mcp4728Config> {
    componentName: string = "mcp4728";
}

export interface Mcp4728Config extends CoreCOMPONENT_SCHEMA {
    id?: ID;
    store_in_eeprom?: boolean;
    i2c_id?: ID;
    address?: any;
}

export class Mcp4728Output extends BaseComponent<Mcp4728OutputConfig> {
    componentName: string = "mcp4728.output";
}

export type Mcp4728OutputConfigChannel = 'A' | 'B' | 'C' | 'D';
export type Mcp4728OutputConfigVref = 'vdd' | 'internal';
export type Mcp4728OutputConfigPowerDown = 'normal' | 'gnd_1k' | 'gnd_100k' | 'gnd_500k';
export type Mcp4728OutputConfigGain = 'X1' | 'X2';

export interface Mcp4728OutputConfig extends OutputFLOAT_OUTPUT_SCHEMA {
    id: string;
    mcp4728_id?: ID;
    channel: Mcp4728OutputConfigChannel;
    vref?: Mcp4728OutputConfigVref;
    power_down?: Mcp4728OutputConfigPowerDown;
    gain?: Mcp4728OutputConfigGain;
}
