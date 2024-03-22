/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: hx711.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/hx711
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes) 2023
 **/
import type { ID, Pin } from "../base.js";
import { BaseComponent } from "../base.js";
import type { SensorSENSOR_SCHEMA } from "./sensor.js";
import type { CoreCOMPONENT_SCHEMA } from "./esphome.js";

export class Hx711Sensor extends BaseComponent<Hx711SensorConfig> {
    componentName: string = "hx711.sensor";
}

export interface Hx711SensorConfig extends SensorSENSOR_SCHEMA, CoreCOMPONENT_SCHEMA {
    id?: any;
    icon?: any;
    accuracy_decimals?: any;
    state_class?: any;
    dout_pin: Pin;
    clk_pin: Pin;
    gain?: Hx711SensorConfigGain;
    update_interval?: any;
}

export type Hx711SensorConfigGain = '32' | '64' | '128';
