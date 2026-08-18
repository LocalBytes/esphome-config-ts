/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: ft63x6.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/ft63x6
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes)
 **/
import { type ID, type Pin, EsphomeComponent } from "@/lib/base.js";
import type { TouchscreenTOUCHSCREEN_SCHEMA } from "./touchscreen.js";

export class Ft63x6Touchscreen extends EsphomeComponent<Ft63x6TouchscreenConfig> {
    componentName: string = "ft63x6.touchscreen";
}

export interface Ft63x6TouchscreenConfig extends TouchscreenTOUCHSCREEN_SCHEMA {
    address?: any;
    i2c_id?: ID;
    id?: ID;
    interrupt_pin?: Pin;
    reset_pin?: Pin;
    threshold?: number;
}
