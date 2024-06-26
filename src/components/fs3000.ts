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
import type { SensorSENSOR_SCHEMA } from "./sensor.js";
import type { CoreCOMPONENT_SCHEMA } from "./esphome.js";

export class Fs3000Sensor extends EsphomeComponent<Fs3000SensorConfig> {
    componentName: string = "fs3000.sensor";
}

export type Fs3000SensorConfigModel = '1005' | '1015';
export type Fs3000SensorConfig = {
        id?: any;
        unit_of_measurement?: any;
        accuracy_decimals?: any;
        device_class?: any;
        state_class?: any;
        model: Fs3000SensorConfigModel;
        update_interval?: any;
        i2c_id?: ID;
        address?: any;
    } & SensorSENSOR_SCHEMA & CoreCOMPONENT_SCHEMA;
