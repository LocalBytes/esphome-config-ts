/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: hte501.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/hte501
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes)
 **/
import { type ID, type Pin, EsphomeComponent } from "@/lib/base.js";
import type { Sensor_SENSOR_SCHEMA } from "./sensor.js";
import type { CoreCOMPONENT_SCHEMA } from "./esphome.js";

export class Hte501Sensor extends EsphomeComponent<Hte501SensorConfig> {
    componentName: string = "hte501.sensor";
}

export interface Hte501SensorConfigHumidity extends Sensor_SENSOR_SCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface Hte501SensorConfigTemperature extends Sensor_SENSOR_SCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface Hte501SensorConfig extends CoreCOMPONENT_SCHEMA {
    address?: any;
    humidity?: Hte501SensorConfigHumidity;
    i2c_id?: ID;
    id?: ID;
    temperature?: Hte501SensorConfigTemperature;
    update_interval?: any;
}
