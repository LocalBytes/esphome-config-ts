/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: bmp581_base.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/bmp581_base
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes)
 **/
import { type ID, type Pin, EsphomeComponent } from "@/lib/base.js";
import type { Sensor_SENSOR_SCHEMA } from "./sensor.js";
import type { CoreCOMPONENT_SCHEMA } from "./esphome.js";

export abstract class Bmp581Base extends EsphomeComponent {
    componentName: string = "bmp581_base";
}

export type Bmp581BaseCONFIG_SCHEMA_BASEPressureIirFilter = 'OFF' | '2X' | '4X' | '8X' | '16X' | '32X' | '64X' | '128X';
export type Bmp581BaseCONFIG_SCHEMA_BASEPressureOversampling = 'NONE' | '2X' | '4X' | '8X' | '16X' | '32X' | '64X' | '128X';

export interface Bmp581BaseCONFIG_SCHEMA_BASEPressure extends Sensor_SENSOR_SCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    iir_filter?: Bmp581BaseCONFIG_SCHEMA_BASEPressureIirFilter;
    oversampling?: Bmp581BaseCONFIG_SCHEMA_BASEPressureOversampling;
    state_class?: any;
    unit_of_measurement?: any;
}

export type Bmp581BaseCONFIG_SCHEMA_BASETemperatureIirFilter = 'OFF' | '2X' | '4X' | '8X' | '16X' | '32X' | '64X' | '128X';
export type Bmp581BaseCONFIG_SCHEMA_BASETemperatureOversampling = 'NONE' | '2X' | '4X' | '8X' | '16X' | '32X' | '64X' | '128X';

export interface Bmp581BaseCONFIG_SCHEMA_BASETemperature extends Sensor_SENSOR_SCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    iir_filter?: Bmp581BaseCONFIG_SCHEMA_BASETemperatureIirFilter;
    oversampling?: Bmp581BaseCONFIG_SCHEMA_BASETemperatureOversampling;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface Bmp581BaseCONFIG_SCHEMA_BASE extends CoreCOMPONENT_SCHEMA {
    id?: ID;
    pressure?: Bmp581BaseCONFIG_SCHEMA_BASEPressure;
    temperature?: Bmp581BaseCONFIG_SCHEMA_BASETemperature;
    update_interval?: any;
}
