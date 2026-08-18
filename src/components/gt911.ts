/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: gt911.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/gt911
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes)
 **/
import { type ID, type Pin, EsphomeComponent } from "@/lib/base.js";
import type { BinarySensor_BINARY_SENSOR_SCHEMA } from "./binary_sensor.js";
import type { TouchscreenTOUCHSCREEN_SCHEMA } from "./touchscreen.js";

export class Gt911BinarySensor extends EsphomeComponent<Gt911BinarySensorConfig> {
    componentName: string = "gt911.binary_sensor";
}

export interface Gt911BinarySensorConfig extends BinarySensor_BINARY_SENSOR_SCHEMA {
    gt911_id?: ID;
    id?: any;
    index?: number;
}

export class Gt911Touchscreen extends EsphomeComponent<Gt911TouchscreenConfig> {
    componentName: string = "gt911.touchscreen";
}

export interface Gt911TouchscreenConfig extends TouchscreenTOUCHSCREEN_SCHEMA {
    address?: any;
    i2c_id?: ID;
    id?: ID;
    interrupt_pin?: Pin;
    reset_pin?: Pin;
}
