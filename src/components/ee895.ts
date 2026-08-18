/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: ee895.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/ee895
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes)
 **/
import { type ID, type Pin, EsphomeComponent } from "@/lib/base.js";
import type { Sensor_SENSOR_SCHEMA } from "./sensor.js";
import type { CoreCOMPONENT_SCHEMA } from "./esphome.js";

export class Ee895Sensor extends EsphomeComponent<Ee895SensorConfig> {
    componentName: string = "ee895.sensor";
}

export interface Ee895SensorConfigCo2 extends Sensor_SENSOR_SCHEMA {
    accuracy_decimals?: any;
    icon?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface Ee895SensorConfigPressure extends Sensor_SENSOR_SCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface Ee895SensorConfigTemperature extends Sensor_SENSOR_SCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface Ee895SensorConfig extends CoreCOMPONENT_SCHEMA {
    address?: any;
    co2?: Ee895SensorConfigCo2;
    i2c_id?: ID;
    id?: ID;
    pressure?: Ee895SensorConfigPressure;
    temperature?: Ee895SensorConfigTemperature;
    update_interval?: any;
}
