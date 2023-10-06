/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: bmp3xx.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/bmp3xx
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes) 2023
 **/
import { ID, Pin, BaseComponent } from "../base.js";
import { SensorSENSOR_SCHEMA } from "./sensor.js";
import { CoreCOMPONENT_SCHEMA } from "./esphome.js";

export class Bmp3xxSensor extends BaseComponent<Bmp3xxSensorConfig> {
    componentName: string = "bmp3xx.sensor";
}

export interface Bmp3xxSensorConfig extends CoreCOMPONENT_SCHEMA {
    id?: ID;
    temperature?: Bmp3xxSensorConfigTemperature;
    pressure?: Bmp3xxSensorConfigPressure;
    iir_filter?: Bmp3xxSensorConfigIirFilter;
    update_interval?: any;
    i2c_id?: ID;
    address?: any;
}

export interface Bmp3xxSensorConfigTemperature extends SensorSENSOR_SCHEMA {
    unit_of_measurement?: any;
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
    oversampling?: Bmp3xxSensorConfigTemperatureOversampling;
}

export type Bmp3xxSensorConfigTemperatureOversampling = 'NONE' | '2X' | '4X' | '8X' | '16X' | '32X';

export interface Bmp3xxSensorConfigPressure extends SensorSENSOR_SCHEMA {
    unit_of_measurement?: any;
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
    oversampling?: Bmp3xxSensorConfigPressureOversampling;
}

export type Bmp3xxSensorConfigPressureOversampling = 'NONE' | '2X' | '4X' | '8X' | '16X' | '32X';
export type Bmp3xxSensorConfigIirFilter = 'OFF' | '2X' | '4X' | '8X' | '16X' | '32X' | '64X' | '128X';
