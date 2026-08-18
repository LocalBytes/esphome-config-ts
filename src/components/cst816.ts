/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: cst816.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/cst816
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes)
 **/
import { type ID, type Pin, EsphomeComponent } from "@/lib/base.js";
import type { TouchscreenTOUCHSCREENSCHEMA } from "./touchscreen.js";

export class Cst816Touchscreen extends EsphomeComponent<Cst816TouchscreenConfig> {
    componentName: string = "cst816.touchscreen";
}

export interface Cst816TouchscreenConfig extends TouchscreenTOUCHSCREENSCHEMA {
    address?: any;
    i2c_id?: ID;
    id?: ID;
    interrupt_pin?: Pin;
    reset_pin?: Pin;
    skip_probe?: boolean;
}
