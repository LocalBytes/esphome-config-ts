/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: dht12.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/dht12
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes)
 **/
import { type ID, type Pin, EsphomeComponent } from "@/lib/base.js";
import type { Sensor_SENSOR_SCHEMA } from "./sensor.js";
import type { CoreCOMPONENT_SCHEMA } from "./esphome.js";

export class Dht12Sensor extends EsphomeComponent<Dht12SensorConfig> {
    componentName: string = "dht12.sensor";
}

export interface Dht12SensorConfigHumidity extends Sensor_SENSOR_SCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface Dht12SensorConfigTemperature extends Sensor_SENSOR_SCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface Dht12SensorConfig extends CoreCOMPONENT_SCHEMA {
    address?: any;
    humidity?: Dht12SensorConfigHumidity;
    i2c_id?: ID;
    id?: ID;
    temperature?: Dht12SensorConfigTemperature;
    update_interval?: any;
}
