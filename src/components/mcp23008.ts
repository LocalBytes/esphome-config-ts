/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: mcp23008.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/mcp23008
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes)
 **/
import { type ID, type Pin, EsphomeComponent } from "@/lib/base.js";
import type { CoreCOMPONENT_SCHEMA } from "./esphome.js";

export class Mcp23008 extends EsphomeComponent<Mcp23008Config> {
    componentName: string = "mcp23008";
}

export interface Mcp23008Config extends CoreCOMPONENT_SCHEMA {
    address?: any;
    i2c_id?: ID;
    id: string;
    interrupt_pin?: any;
    open_drain_interrupt?: boolean;
}
