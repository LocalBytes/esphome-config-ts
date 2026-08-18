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
import { type ID, type Pin, EsphomeComponent } from "@/lib/base.js";
import type { CoreCOMPONENTSCHEMA } from "./esphome.js";
import type { OutputFLOATOUTPUTSCHEMA } from "./output.js";

export class Mcp4728 extends EsphomeComponent<Mcp4728Config> {
    componentName: string = "mcp4728";
}

export interface Mcp4728Config extends CoreCOMPONENTSCHEMA {
    address?: any;
    i2c_id?: ID;
    id?: ID;
    store_in_eeprom?: boolean;
}

export class Mcp4728Output extends EsphomeComponent<Mcp4728OutputConfig> {
    componentName: string = "mcp4728.output";
}

export type Mcp4728OutputConfigChannel = 'A' | 'B' | 'C' | 'D';
export type Mcp4728OutputConfigGain = 'X1' | 'X2';
export type Mcp4728OutputConfigPowerDown = 'normal' | 'gnd_1k' | 'gnd_100k' | 'gnd_500k';
export type Mcp4728OutputConfigVref = 'vdd' | 'internal';

export interface Mcp4728OutputConfig extends OutputFLOATOUTPUTSCHEMA {
    channel: Mcp4728OutputConfigChannel;
    gain?: Mcp4728OutputConfigGain;
    id: string;
    mcp4728_id?: ID;
    power_down?: Mcp4728OutputConfigPowerDown;
    vref?: Mcp4728OutputConfigVref;
}
