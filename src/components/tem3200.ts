/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: tem3200.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/tem3200
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes)
 **/
import { type ID, type Pin, EsphomeComponent } from "@/lib/base.js";
import type { Sensor_SENSOR_SCHEMA } from "./sensor.js";
import type { CoreCOMPONENT_SCHEMA } from "./esphome.js";

export class Tem3200Sensor extends EsphomeComponent<Tem3200SensorConfig> {
    componentName: string = "tem3200.sensor";
}

export interface Tem3200SensorConfigRawPressure extends Sensor_SENSOR_SCHEMA {
    accuracy_decimals?: any;
    state_class?: any;
}

export interface Tem3200SensorConfigTemperature extends Sensor_SENSOR_SCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface Tem3200SensorConfig extends CoreCOMPONENT_SCHEMA {
    address?: any;
    i2c_id?: ID;
    id?: ID;
    raw_pressure?: Tem3200SensorConfigRawPressure;
    temperature?: Tem3200SensorConfigTemperature;
    update_interval?: any;
}
