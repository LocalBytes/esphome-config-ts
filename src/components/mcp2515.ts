/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: mcp2515.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/mcp2515
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes)
 **/
import { type ID, type Pin, EsphomeComponent } from "@/lib/base.js";
import type { CanbusCANBUS_SCHEMA } from "./canbus.js";

export class Mcp2515Canbus extends EsphomeComponent<Mcp2515CanbusConfig> {
    componentName: string = "mcp2515.canbus";
}

export type Mcp2515CanbusConfigClock = '8MHZ' | '12MHZ' | '16MHZ' | '20MHZ';
export type Mcp2515CanbusConfigMode = 'NORMAL' | 'LOOPBACK' | 'LISTENONLY';

export interface Mcp2515CanbusConfig extends CanbusCANBUS_SCHEMA {
    id?: any;
    clock?: Mcp2515CanbusConfigClock;
    mode?: Mcp2515CanbusConfigMode;
    spi_id?: ID;
    cs_pin: Pin;
}
