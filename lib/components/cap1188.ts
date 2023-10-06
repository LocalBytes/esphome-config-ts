/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: cap1188.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/cap1188
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes) 2023
 **/
import { ID, Pin, BaseComponent } from "../base.js";
import { CoreCOMPONENT_SCHEMA } from "./esphome.js";
import { BinarySensorBINARY_SENSOR_SCHEMA } from "./binary_sensor.js";

export class Cap1188 extends BaseComponent<Cap1188Config> {
    componentName: string = "cap1188";
}

export interface Cap1188Config extends CoreCOMPONENT_SCHEMA {
    id?: ID;
    reset_pin?: Pin;
    touch_threshold?: number;
    allow_multiple_touches?: boolean;
    i2c_id?: ID;
    address?: any;
}

export class Cap1188BinarySensor extends BaseComponent<Cap1188BinarySensorConfig> {
    componentName: string = "cap1188.binary_sensor";
}

export interface Cap1188BinarySensorConfig extends BinarySensorBINARY_SENSOR_SCHEMA {
    id?: any;
    cap1188_id?: ID;
    channel: number;
}
