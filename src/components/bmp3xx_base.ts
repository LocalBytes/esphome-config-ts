/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: bmp3xx_base.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/bmp3xx_base
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes)
 **/
import { type ID, type Pin, EsphomeComponent } from "@/lib/base.js";
import type { Sensor_SENSOR_SCHEMA } from "./sensor.js";
import type { CoreCOMPONENT_SCHEMA } from "./esphome.js";

export abstract class Bmp3xxBase extends EsphomeComponent {
    componentName: string = "bmp3xx_base";
}

export type Bmp3xxBaseCONFIG_SCHEMA_BASEIirFilter = 'OFF' | '2X' | '4X' | '8X' | '16X' | '32X' | '64X' | '128X';
export type Bmp3xxBaseCONFIG_SCHEMA_BASEPressureOversampling = 'NONE' | '2X' | '4X' | '8X' | '16X' | '32X';

export interface Bmp3xxBaseCONFIG_SCHEMA_BASEPressure extends Sensor_SENSOR_SCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    oversampling?: Bmp3xxBaseCONFIG_SCHEMA_BASEPressureOversampling;
    state_class?: any;
    unit_of_measurement?: any;
}

export type Bmp3xxBaseCONFIG_SCHEMA_BASETemperatureOversampling = 'NONE' | '2X' | '4X' | '8X' | '16X' | '32X';

export interface Bmp3xxBaseCONFIG_SCHEMA_BASETemperature extends Sensor_SENSOR_SCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    oversampling?: Bmp3xxBaseCONFIG_SCHEMA_BASETemperatureOversampling;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface Bmp3xxBaseCONFIG_SCHEMA_BASE extends CoreCOMPONENT_SCHEMA {
    iir_filter?: Bmp3xxBaseCONFIG_SCHEMA_BASEIirFilter;
    pressure?: Bmp3xxBaseCONFIG_SCHEMA_BASEPressure;
    temperature?: Bmp3xxBaseCONFIG_SCHEMA_BASETemperature;
    update_interval?: any;
}
