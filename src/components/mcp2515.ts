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
export type Mcp2515CanbusConfigSpiMode = '0' | '1' | '2' | '3' | 'MODE0' | 'MODE1' | 'MODE2' | 'MODE3';

export interface Mcp2515CanbusConfig extends CanbusCANBUS_SCHEMA {
    clock?: Mcp2515CanbusConfigClock;
    cs_pin: Pin;
    data_rate?: any;
    id?: any;
    mode?: Mcp2515CanbusConfigMode;
    release_device?: boolean;
    spi_id?: ID;
    spi_mode?: Mcp2515CanbusConfigSpiMode;
}
