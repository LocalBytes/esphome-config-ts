/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: wl_134.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/wl_134
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes) 2023
 **/
import type { ID, Pin } from "../base.js";
import { BaseComponent } from "../base.js";
import type { TextSensorTEXT_SENSOR_SCHEMA } from "./text_sensor.js";
import type { UartUART_DEVICE_SCHEMA } from "./uart.js";

export class Wl_134TextSensor extends BaseComponent<Wl_134TextSensorConfig> {
    componentName: string = "wl_134.text_sensor";
}

export interface Wl_134TextSensorConfig extends TextSensorTEXT_SENSOR_SCHEMA, UartUART_DEVICE_SCHEMA {
    id?: any;
    icon?: any;
    reset?: boolean;
}
