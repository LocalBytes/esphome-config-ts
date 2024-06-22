/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 *
 * Schema: mcp23s17.json
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/mcp23s17
 *
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes)
 **/
import { type ID, type Pin, EsphomeComponent } from "@/lib/base.js";
import type { CoreCOMPONENT_SCHEMA } from "./esphome.js";

export class Mcp23s17 extends EsphomeComponent<Mcp23s17Config> {
    componentName: string = "mcp23s17";
}

export interface Mcp23s17Config extends CoreCOMPONENT_SCHEMA {
    id: string;
    deviceaddress?: number;
    open_drain_interrupt?: boolean;
    spi_id?: ID;
    cs_pin: Pin;
}
