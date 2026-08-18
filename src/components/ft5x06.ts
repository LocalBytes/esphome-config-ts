/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: ft5x06.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/ft5x06
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes)
 **/
import { type ID, type Pin, EsphomeComponent } from "@/lib/base.js";
import type { TouchscreenTOUCHSCREEN_SCHEMA } from "./touchscreen.js";

export class Ft5x06Touchscreen extends EsphomeComponent<Ft5x06TouchscreenConfig> {
    componentName: string = "ft5x06.touchscreen";
}

export interface Ft5x06TouchscreenConfig extends TouchscreenTOUCHSCREEN_SCHEMA {
    address?: any;
    i2c_id?: ID;
    id?: ID;
    interrupt_pin?: Pin;
}
