/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: ektf2232.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/ektf2232
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes)
 **/
import { type ID, type Pin, EsphomeComponent } from "@/lib/base.js";
import type { TouchscreenTOUCHSCREEN_SCHEMA } from "./touchscreen.js";

export class Ektf2232Touchscreen extends EsphomeComponent<Ektf2232TouchscreenConfig> {
    componentName: string = "ektf2232.touchscreen";
}

export interface Ektf2232TouchscreenConfig extends TouchscreenTOUCHSCREEN_SCHEMA {
    address?: any;
    i2c_id?: ID;
    id?: ID;
    interrupt_pin: Pin;
    reset_pin: Pin;
}
