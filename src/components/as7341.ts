/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: as7341.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/as7341
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes)
 **/
import { type ID, type Pin, EsphomeComponent } from "@/lib/base.js";
import type { CoreCOMPONENTSCHEMA } from "./esphome.js";
import type { SensorSENSORSCHEMA } from "./sensor.js";

export class As7341Sensor extends EsphomeComponent<As7341SensorConfig> {
    componentName: string = "as7341.sensor";
}

export type As7341SensorConfigClear = As7341SensorSENSORSCHEMA;
export type As7341SensorConfigF1 = As7341SensorSENSORSCHEMA;
export type As7341SensorConfigF2 = As7341SensorSENSORSCHEMA;
export type As7341SensorConfigF3 = As7341SensorSENSORSCHEMA;
export type As7341SensorConfigF4 = As7341SensorSENSORSCHEMA;
export type As7341SensorConfigF5 = As7341SensorSENSORSCHEMA;
export type As7341SensorConfigF6 = As7341SensorSENSORSCHEMA;
export type As7341SensorConfigF7 = As7341SensorSENSORSCHEMA;
export type As7341SensorConfigF8 = As7341SensorSENSORSCHEMA;
export type As7341SensorConfigGain = 'X0.5' | 'X1' | 'X2' | 'X4' | 'X8' | 'X16' | 'X32' | 'X64' | 'X128' | 'X256' | 'X512';
export type As7341SensorConfigNir = As7341SensorSENSORSCHEMA;

export interface As7341SensorConfig extends CoreCOMPONENTSCHEMA {
    address?: any;
    astep?: number;
    atime?: number;
    clear?: As7341SensorConfigClear;
    f1?: As7341SensorConfigF1;
    f2?: As7341SensorConfigF2;
    f3?: As7341SensorConfigF3;
    f4?: As7341SensorConfigF4;
    f5?: As7341SensorConfigF5;
    f6?: As7341SensorConfigF6;
    f7?: As7341SensorConfigF7;
    f8?: As7341SensorConfigF8;
    gain?: As7341SensorConfigGain;
    i2c_id?: ID;
    id?: ID;
    nir?: As7341SensorConfigNir;
    update_interval?: any;
}

export interface As7341SensorSENSORSCHEMA extends SensorSENSORSCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    icon?: any;
    state_class?: any;
    unit_of_measurement?: any;
}
