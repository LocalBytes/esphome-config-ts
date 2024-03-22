/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: mcp23s08.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/mcp23s08
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes) 2023
 **/
import type { ID, Pin } from "../base.js";
import { BaseComponent } from "../base.js";
import type { CoreCOMPONENT_SCHEMA } from "./esphome.js";

export class Mcp23s08 extends BaseComponent<Mcp23s08Config> {
    componentName: string = "mcp23s08";
}

export interface Mcp23s08Config extends CoreCOMPONENT_SCHEMA {
    id: string;
    deviceaddress?: number;
    open_drain_interrupt?: boolean;
    spi_id?: ID;
    cs_pin: Pin;
}
