/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: mcp23016.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/mcp23016
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes)
 **/
import { type ID, type Pin, EsphomeComponent } from "@/lib/base.js";
import type { CoreCOMPONENTSCHEMA } from "./esphome.js";

export class Mcp23016 extends EsphomeComponent<Mcp23016Config> {
    componentName: string = "mcp23016";
}

export interface Mcp23016Config extends CoreCOMPONENTSCHEMA {
    address?: any;
    i2c_id?: ID;
    id: string;
    interrupt_pin?: Pin;
}
