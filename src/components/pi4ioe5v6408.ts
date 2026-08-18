/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: pi4ioe5v6408.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/pi4ioe5v6408
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes)
 **/
import { type ID, type Pin, EsphomeComponent } from "@/lib/base.js";
import type { CoreCOMPONENT_SCHEMA } from "./esphome.js";

export class Pi4ioe5v6408 extends EsphomeComponent<Pi4ioe5v6408Config> {
    componentName: string = "pi4ioe5v6408";
}

export interface Pi4ioe5v6408Config extends CoreCOMPONENT_SCHEMA {
    address?: any;
    i2c_id?: ID;
    id: string;
    interrupt_pin?: Pin;
    reset?: boolean;
}
