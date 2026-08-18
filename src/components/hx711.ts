/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: hx711.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/hx711
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes)
 **/
import { type ID, type Pin, EsphomeComponent } from "@/lib/base.js";
import type { Sensor_SENSOR_SCHEMA } from "./sensor.js";
import type { CoreCOMPONENT_SCHEMA } from "./esphome.js";

export class Hx711Sensor extends EsphomeComponent<Hx711SensorConfig> {
    componentName: string = "hx711.sensor";
}

export type Hx711SensorConfigGain = '32' | '64' | '128';
export type Hx711SensorConfig = {
        accuracy_decimals?: any;
        clk_pin: Pin;
        dout_pin: Pin;
        gain?: Hx711SensorConfigGain;
        icon?: any;
        id?: any;
        state_class?: any;
        update_interval?: any;
    } & Sensor_SENSOR_SCHEMA & CoreCOMPONENT_SCHEMA;
