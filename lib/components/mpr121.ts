/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: mpr121.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/mpr121
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes) 2023
 **/
import type { ID, Pin } from "../base.js";
import { BaseComponent } from "../base.js";
import type { CoreCOMPONENT_SCHEMA } from "./esphome.js";
import type { BinarySensorBINARY_SENSOR_SCHEMA } from "./binary_sensor.js";

export class Mpr121 extends BaseComponent<Mpr121Config> {
    componentName: string = "mpr121";
}

export interface Mpr121Config extends CoreCOMPONENT_SCHEMA {
    id?: ID;
    release_debounce?: number;
    touch_debounce?: number;
    touch_threshold?: number;
    release_threshold?: number;
    i2c_id?: ID;
    address?: any;
}

export class Mpr121BinarySensor extends BaseComponent<Mpr121BinarySensorConfig> {
    componentName: string = "mpr121.binary_sensor";
}

export interface Mpr121BinarySensorConfig extends BinarySensorBINARY_SENSOR_SCHEMA {
    id?: any;
    mpr121_id?: ID;
    channel: number;
    touch_threshold?: number;
    release_threshold?: number;
}
