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

export type Mcp23s17ConfigSpiMode = '0' | '1' | '2' | '3' | 'MODE0' | 'MODE1' | 'MODE2' | 'MODE3';

export interface Mcp23s17Config extends CoreCOMPONENT_SCHEMA {
    cs_pin: Pin;
    data_rate?: any;
    deviceaddress?: number;
    id: string;
    interrupt_pin?: any;
    open_drain_interrupt?: boolean;
    release_device?: boolean;
    spi_id?: ID;
    spi_mode?: Mcp23s17ConfigSpiMode;
}
