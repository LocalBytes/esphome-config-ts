/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: hdc2010.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/hdc2010
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes)
 **/
import { type ID, type Pin, EsphomeComponent } from "@/lib/base.js";
import type { Sensor_SENSOR_SCHEMA } from "./sensor.js";
import type { CoreCOMPONENT_SCHEMA } from "./esphome.js";

export class Hdc2010Sensor extends EsphomeComponent<Hdc2010SensorConfig> {
    componentName: string = "hdc2010.sensor";
}

export interface Hdc2010SensorConfigHumidity extends Sensor_SENSOR_SCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface Hdc2010SensorConfigTemperature extends Sensor_SENSOR_SCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface Hdc2010SensorConfig extends CoreCOMPONENT_SCHEMA {
    address?: any;
    humidity?: Hdc2010SensorConfigHumidity;
    i2c_id?: ID;
    id?: ID;
    temperature?: Hdc2010SensorConfigTemperature;
    update_interval?: any;
}
