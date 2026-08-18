/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: mpr121.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/mpr121
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes)
 **/
import { type ID, type Pin, EsphomeComponent } from "@/lib/base.js";
import type { CoreCOMPONENT_SCHEMA } from "./esphome.js";
import type { BinarySensor_BINARY_SENSOR_SCHEMA } from "./binary_sensor.js";

export class Mpr121 extends EsphomeComponent<Mpr121Config> {
    componentName: string = "mpr121";
}

export interface Mpr121Config extends CoreCOMPONENT_SCHEMA {
    address?: any;
    i2c_id?: ID;
    id?: ID;
    max_touch_channel?: number;
    release_debounce?: number;
    release_threshold?: number;
    touch_debounce?: number;
    touch_threshold?: number;
}

export class Mpr121BinarySensor extends EsphomeComponent<Mpr121BinarySensorConfig> {
    componentName: string = "mpr121.binary_sensor";
}

export interface Mpr121BinarySensorConfig extends BinarySensor_BINARY_SENSOR_SCHEMA {
    channel: number;
    id?: any;
    mpr121_id?: ID;
    release_threshold?: number;
    touch_threshold?: number;
}
