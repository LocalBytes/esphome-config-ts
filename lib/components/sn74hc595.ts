/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: sn74hc595.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/sn74hc595
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes) 2023
 **/
import type { ID, Pin } from "../base.js";
import { BaseComponent } from "../base.js";
import type { CoreCOMPONENT_SCHEMA } from "./esphome.js";

export class Sn74hc595 extends BaseComponent<Sn74hc595Config> {
    componentName: string = "sn74hc595";
}

export interface Sn74hc595Config extends CoreCOMPONENT_SCHEMA {
    id: string;
    data_pin: Pin;
    clock_pin: Pin;
    latch_pin: Pin;
    oe_pin?: Pin;
    sr_count?: number;
}
