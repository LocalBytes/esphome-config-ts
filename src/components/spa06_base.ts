/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: spa06_base.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/spa06_base
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes)
 **/
import { type ID, type Pin, EsphomeComponent } from "@/lib/base.js";
import type { Sensor_SENSOR_SCHEMA } from "./sensor.js";
import type { CoreCOMPONENT_SCHEMA } from "./esphome.js";

export abstract class Spa06Base extends EsphomeComponent {
    componentName: string = "spa06_base";
}

export type Spa06BaseCONFIG_SCHEMA_BASEPressureOversampling = 'NONE' | '2X' | '4X' | '8X' | '16X' | '32X' | '64X' | '128X';
export type Spa06BaseCONFIG_SCHEMA_BASEPressureSampleRate = '1' | '2' | '4' | '8' | '16' | '25' | '32' | '50' | '64' | '100' | '128' | '200' | '25p16' | '25p8' | '25p4' | '25p2';

export interface Spa06BaseCONFIG_SCHEMA_BASEPressure extends Sensor_SENSOR_SCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    oversampling?: Spa06BaseCONFIG_SCHEMA_BASEPressureOversampling;
    sample_rate?: Spa06BaseCONFIG_SCHEMA_BASEPressureSampleRate;
    state_class?: any;
    unit_of_measurement?: any;
}

export type Spa06BaseCONFIG_SCHEMA_BASETemperatureOversampling = 'NONE' | '2X' | '4X' | '8X' | '16X' | '32X' | '64X' | '128X';
export type Spa06BaseCONFIG_SCHEMA_BASETemperatureSampleRate = '1' | '2' | '4' | '8' | '16' | '25' | '32' | '50' | '64' | '100' | '128' | '200' | '25p16' | '25p8' | '25p4' | '25p2';

export interface Spa06BaseCONFIG_SCHEMA_BASETemperature extends Sensor_SENSOR_SCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    oversampling?: Spa06BaseCONFIG_SCHEMA_BASETemperatureOversampling;
    sample_rate?: Spa06BaseCONFIG_SCHEMA_BASETemperatureSampleRate;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface Spa06BaseCONFIG_SCHEMA_BASE extends CoreCOMPONENT_SCHEMA {
    id?: ID;
    pressure?: Spa06BaseCONFIG_SCHEMA_BASEPressure;
    temperature?: Spa06BaseCONFIG_SCHEMA_BASETemperature;
    update_interval?: any;
}
