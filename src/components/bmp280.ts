/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: bmp280.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/bmp280
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes)
 **/
import { type ID, type Pin, BaseComponent } from "@/lib/base.js";
import type { SensorSENSOR_SCHEMA } from "./sensor.js";
import type { CoreCOMPONENT_SCHEMA } from "./esphome.js";

export class Bmp280Sensor extends BaseComponent<Bmp280SensorConfig> {
    componentName: string = "bmp280.sensor";
}

export type Bmp280SensorConfigTemperatureOversampling = 'NONE' | '1X' | '2X' | '4X' | '8X' | '16X';

export interface Bmp280SensorConfigTemperature extends SensorSENSOR_SCHEMA {
    unit_of_measurement?: any;
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
    oversampling?: Bmp280SensorConfigTemperatureOversampling;
}

export type Bmp280SensorConfigPressureOversampling = 'NONE' | '1X' | '2X' | '4X' | '8X' | '16X';

export interface Bmp280SensorConfigPressure extends SensorSENSOR_SCHEMA {
    unit_of_measurement?: any;
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
    oversampling?: Bmp280SensorConfigPressureOversampling;
}

export type Bmp280SensorConfigIirFilter = 'OFF' | '2X' | '4X' | '8X' | '16X';

export interface Bmp280SensorConfig extends CoreCOMPONENT_SCHEMA {
    id?: ID;
    temperature?: Bmp280SensorConfigTemperature;
    pressure?: Bmp280SensorConfigPressure;
    iir_filter?: Bmp280SensorConfigIirFilter;
    update_interval?: any;
    i2c_id?: ID;
    address?: any;
}
