/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: pn532_spi.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/pn532_spi
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes)
 **/
import { type ID, type Pin, EsphomeComponent } from "@/lib/base.js";
import type { Pn532PN532SCHEMA } from "./pn532.js";

export class Pn532Spi extends EsphomeComponent<Pn532SpiConfig> {
    componentName: string = "pn532_spi";
}

export type Pn532SpiConfigSpiMode = '0' | '1' | '2' | '3' | 'MODE0' | 'MODE1' | 'MODE2' | 'MODE3';

export interface Pn532SpiConfig extends Pn532PN532SCHEMA {
    cs_pin: Pin;
    data_rate?: any;
    id?: any;
    release_device?: boolean;
    spi_id?: ID;
    spi_mode?: Pn532SpiConfigSpiMode;
}
