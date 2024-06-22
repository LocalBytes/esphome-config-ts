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
import { type ID, type Pin, BaseComponent } from "@/lib/base.js";
import type { SensorSENSOR_SCHEMA } from "./sensor.js";
import type { CoreCOMPONENT_SCHEMA } from "./esphome.js";

export class Hx711Sensor extends BaseComponent<Hx711SensorConfig> {
    componentName: string = "hx711.sensor";
}

export type Hx711SensorConfigGain = '32' | '64' | '128';
export type Hx711SensorConfig = {
        id?: any;
        icon?: any;
        accuracy_decimals?: any;
        state_class?: any;
        dout_pin: Pin;
        clk_pin: Pin;
        gain?: Hx711SensorConfigGain;
        update_interval?: any;
    } & SensorSENSOR_SCHEMA & CoreCOMPONENT_SCHEMA;
