/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: mcp23008.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/mcp23008
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes) 2023
 **/
import type { ID, Pin } from "../base.js";
import { BaseComponent } from "../base.js";
import type { CoreCOMPONENT_SCHEMA } from "./esphome.js";

export class Mcp23008 extends BaseComponent<Mcp23008Config> {
    componentName: string = "mcp23008";
}

export interface Mcp23008Config extends CoreCOMPONENT_SCHEMA {
    id: string;
    open_drain_interrupt?: boolean;
    i2c_id?: ID;
    address?: any;
}
