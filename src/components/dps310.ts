/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: dps310.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/dps310
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes)
 **/
import { type ID, type Pin, EsphomeComponent } from "@/lib/base.js";
import type { Sensor_SENSOR_SCHEMA } from "./sensor.js";
import type { CoreCOMPONENT_SCHEMA } from "./esphome.js";

export class Dps310Sensor extends EsphomeComponent<Dps310SensorConfig> {
    componentName: string = "dps310.sensor";
}

export interface Dps310SensorConfigPressure extends Sensor_SENSOR_SCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    icon?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface Dps310SensorConfigTemperature extends Sensor_SENSOR_SCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    icon?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface Dps310SensorConfig extends CoreCOMPONENT_SCHEMA {
    address?: any;
    i2c_id?: ID;
    id?: ID;
    pressure?: Dps310SensorConfigPressure;
    temperature?: Dps310SensorConfigTemperature;
    update_interval?: any;
}
