/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: bme280_base.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/bme280_base
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes)
 **/
import { type ID, type Pin, EsphomeComponent } from "@/lib/base.js";
import type { Sensor_SENSOR_SCHEMA } from "./sensor.js";
import type { CoreCOMPONENT_SCHEMA } from "./esphome.js";

export abstract class Bme280Base extends EsphomeComponent {
    componentName: string = "bme280_base";
}

export type Bme280BaseCONFIG_SCHEMA_BASEHumidityOversampling = 'NONE' | '1X' | '2X' | '4X' | '8X' | '16X';

export interface Bme280BaseCONFIG_SCHEMA_BASEHumidity extends Sensor_SENSOR_SCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    oversampling?: Bme280BaseCONFIG_SCHEMA_BASEHumidityOversampling;
    state_class?: any;
    unit_of_measurement?: any;
}

export type Bme280BaseCONFIG_SCHEMA_BASEIirFilter = 'OFF' | '2X' | '4X' | '8X' | '16X';
export type Bme280BaseCONFIG_SCHEMA_BASEPressureOversampling = 'NONE' | '1X' | '2X' | '4X' | '8X' | '16X';

export interface Bme280BaseCONFIG_SCHEMA_BASEPressure extends Sensor_SENSOR_SCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    oversampling?: Bme280BaseCONFIG_SCHEMA_BASEPressureOversampling;
    state_class?: any;
    unit_of_measurement?: any;
}

export type Bme280BaseCONFIG_SCHEMA_BASETemperatureOversampling = 'NONE' | '1X' | '2X' | '4X' | '8X' | '16X';

export interface Bme280BaseCONFIG_SCHEMA_BASETemperature extends Sensor_SENSOR_SCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    oversampling?: Bme280BaseCONFIG_SCHEMA_BASETemperatureOversampling;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface Bme280BaseCONFIG_SCHEMA_BASE extends CoreCOMPONENT_SCHEMA {
    humidity?: Bme280BaseCONFIG_SCHEMA_BASEHumidity;
    iir_filter?: Bme280BaseCONFIG_SCHEMA_BASEIirFilter;
    pressure?: Bme280BaseCONFIG_SCHEMA_BASEPressure;
    temperature?: Bme280BaseCONFIG_SCHEMA_BASETemperature;
    update_interval?: any;
}
