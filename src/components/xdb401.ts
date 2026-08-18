/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: xdb401.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/xdb401
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes)
 **/
import { type ID, type Pin, EsphomeComponent } from "@/lib/base.js";
import type { Sensor_SENSOR_SCHEMA } from "./sensor.js";
import type { CoreCOMPONENT_SCHEMA } from "./esphome.js";

export class Xdb401Sensor extends EsphomeComponent<Xdb401SensorConfig> {
    componentName: string = "xdb401.sensor";
}

export interface Xdb401SensorConfigPressure extends Sensor_SENSOR_SCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export type Xdb401SensorConfigPressureRangeBar = '1' | '2' | '5' | '10' | '20' | '50' | '100';

export interface Xdb401SensorConfigTemperature extends Sensor_SENSOR_SCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface Xdb401SensorConfig extends CoreCOMPONENT_SCHEMA {
    address?: any;
    i2c_id?: ID;
    id?: ID;
    pressure?: Xdb401SensorConfigPressure;
    pressure_range_bar?: Xdb401SensorConfigPressureRangeBar;
    temperature?: Xdb401SensorConfigTemperature;
    update_interval?: any;
}
