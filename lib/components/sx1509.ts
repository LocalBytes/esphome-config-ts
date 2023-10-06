/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: sx1509.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/sx1509
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes) 2023
 **/
import { ID, Pin, BaseComponent } from "../base.js";
import { CoreCOMPONENT_SCHEMA } from "./esphome.js";
import { BinarySensorBINARY_SENSOR_SCHEMA } from "./binary_sensor.js";
import { OutputFLOAT_OUTPUT_SCHEMA } from "./output.js";

export class Sx1509 extends BaseComponent<Sx1509Config> {
    componentName: string = "sx1509";
}

export interface Sx1509Config extends CoreCOMPONENT_SCHEMA {
    id?: ID;
    keypad?: Sx1509ConfigKeypad;
    i2c_id?: ID;
    address?: any;
}

export interface Sx1509ConfigKeypad {
    key_rows: number;
    key_columns: number;
    sleep_time?: number;
    scan_time?: number;
    debounce_time?: number;
}

export class Sx1509BinarySensor extends BaseComponent<Sx1509BinarySensorConfig> {
    componentName: string = "sx1509.binary_sensor";
}

export interface Sx1509BinarySensorConfig extends BinarySensorBINARY_SENSOR_SCHEMA {
    id?: any;
    sx1509_id?: ID;
    row: number;
    col: number;
}

export class Sx1509Output extends BaseComponent<Sx1509OutputConfig> {
    componentName: string = "sx1509.output";
}

export interface Sx1509OutputConfig extends OutputFLOAT_OUTPUT_SCHEMA, CoreCOMPONENT_SCHEMA {
    id: string;
    sx1509_id?: ID;
    pin: number;
}
