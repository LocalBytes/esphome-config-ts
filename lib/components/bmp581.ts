/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: bmp581.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/bmp581
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes) 2023
 **/
import type { ID, Pin } from "../base.js";
import { BaseComponent } from "../base.js";
import type { SensorSENSOR_SCHEMA } from "./sensor.js";
import type { CoreCOMPONENT_SCHEMA } from "./esphome.js";

export class Bmp581Sensor extends BaseComponent<Bmp581SensorConfig> {
    componentName: string = "bmp581.sensor";
}

export interface Bmp581SensorConfig extends CoreCOMPONENT_SCHEMA {
    id?: ID;
    temperature?: Bmp581SensorConfigTemperature;
    pressure?: Bmp581SensorConfigPressure;
    update_interval?: any;
    i2c_id?: ID;
    address?: any;
}

export interface Bmp581SensorConfigTemperature extends SensorSENSOR_SCHEMA {
    unit_of_measurement?: any;
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
    oversampling?: Bmp581SensorConfigTemperatureOversampling;
    iir_filter?: Bmp581SensorConfigTemperatureIirFilter;
}

export type Bmp581SensorConfigTemperatureOversampling = 'NONE' | '2X' | '4X' | '8X' | '16X' | '32X' | '64X' | '128X';
export type Bmp581SensorConfigTemperatureIirFilter = 'OFF' | '2X' | '4X' | '8X' | '16X' | '32X' | '64X' | '128X';

export interface Bmp581SensorConfigPressure extends SensorSENSOR_SCHEMA {
    unit_of_measurement?: any;
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
    oversampling?: Bmp581SensorConfigPressureOversampling;
    iir_filter?: Bmp581SensorConfigPressureIirFilter;
}

export type Bmp581SensorConfigPressureOversampling = 'NONE' | '2X' | '4X' | '8X' | '16X' | '32X' | '64X' | '128X';
export type Bmp581SensorConfigPressureIirFilter = 'OFF' | '2X' | '4X' | '8X' | '16X' | '32X' | '64X' | '128X';
