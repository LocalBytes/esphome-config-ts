/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: sx1509.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/sx1509
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes)
 **/
import { type ID, type Pin, EsphomeComponent } from "@/lib/base.js";
import type { CoreCOMPONENTSCHEMA } from "./esphome.js";
import type { BinarySensorBINARYSENSORSCHEMA } from "./binary_sensor.js";
import type { OutputFLOATOUTPUTSCHEMA } from "./output.js";

export class Sx1509 extends EsphomeComponent<Sx1509Config> {
    componentName: string = "sx1509";
}

export interface Sx1509ConfigKeypad {
    debounce_time?: number;
    key_columns: number;
    key_rows: number;
    keys?: string;
    on_key?: object[];
    scan_time?: number;
    sleep_time?: number;
}

export interface Sx1509Config extends CoreCOMPONENTSCHEMA {
    address?: any;
    i2c_id?: ID;
    id?: ID;
    keypad?: Sx1509ConfigKeypad;
}

export class Sx1509BinarySensor extends EsphomeComponent<Sx1509BinarySensorConfig> {
    componentName: string = "sx1509.binary_sensor";
}

export interface Sx1509BinarySensorConfig extends BinarySensorBINARYSENSORSCHEMA {
    col: number;
    id?: any;
    row: number;
    sx1509_id?: ID;
}

export class Sx1509Output extends EsphomeComponent<Sx1509OutputConfig> {
    componentName: string = "sx1509.output";
}

export type Sx1509OutputConfig = {
        id: string;
        pin: number;
        sx1509_id?: ID;
    } & OutputFLOATOUTPUTSCHEMA & CoreCOMPONENTSCHEMA;
