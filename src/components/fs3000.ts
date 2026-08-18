/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: fs3000.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/fs3000
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes)
 **/
import { type ID, type Pin, EsphomeComponent } from "@/lib/base.js";
import type { Sensor_SENSOR_SCHEMA } from "./sensor.js";
import type { CoreCOMPONENT_SCHEMA } from "./esphome.js";

export class Fs3000Sensor extends EsphomeComponent<Fs3000SensorConfig> {
    componentName: string = "fs3000.sensor";
}

export type Fs3000SensorConfigModel = '1005' | '1015';
export type Fs3000SensorConfig = {
        accuracy_decimals?: any;
        address?: any;
        device_class?: any;
        i2c_id?: ID;
        id?: any;
        model: Fs3000SensorConfigModel;
        state_class?: any;
        unit_of_measurement?: any;
        update_interval?: any;
    } & Sensor_SENSOR_SCHEMA & CoreCOMPONENT_SCHEMA;
