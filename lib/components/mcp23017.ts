/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: mcp23017.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/mcp23017
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes) 2023
 **/
import type { ID, Pin } from "../base.js";
import { BaseComponent } from "../base.js";
import type { CoreCOMPONENT_SCHEMA } from "./esphome.js";

export class Mcp23017 extends BaseComponent<Mcp23017Config> {
    componentName: string = "mcp23017";
}

export interface Mcp23017Config extends CoreCOMPONENT_SCHEMA {
    id: string;
    open_drain_interrupt?: boolean;
    i2c_id?: ID;
    address?: any;
}
