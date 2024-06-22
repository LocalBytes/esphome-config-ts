/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: hyt271.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/hyt271
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes)
 **/
import { type ID, type Pin, EsphomeComponent } from "@/lib/base.js";
import type { SensorSENSOR_SCHEMA } from "./sensor.js";
import type { CoreCOMPONENT_SCHEMA } from "./esphome.js";

export class Hyt271Sensor extends EsphomeComponent<Hyt271SensorConfig> {
    componentName: string = "hyt271.sensor";
}

export interface Hyt271SensorConfigTemperature extends SensorSENSOR_SCHEMA {
    unit_of_measurement?: any;
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
}

export interface Hyt271SensorConfigHumidity extends SensorSENSOR_SCHEMA {
    unit_of_measurement?: any;
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
}

export interface Hyt271SensorConfig extends CoreCOMPONENT_SCHEMA {
    id?: ID;
    temperature: Hyt271SensorConfigTemperature;
    humidity: Hyt271SensorConfigHumidity;
    update_interval?: any;
    i2c_id?: ID;
    address?: any;
}
