/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: as3935_spi.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/as3935_spi
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes)
 **/
import { type ID, type Pin, EsphomeComponent } from "@/lib/base.js";
import type { As3935AS3935_SCHEMA } from "./as3935.js";
import type { CoreCOMPONENT_SCHEMA } from "./esphome.js";

export class As3935Spi extends EsphomeComponent<As3935SpiConfig> {
    componentName: string = "as3935_spi";
}

export type As3935SpiConfigSpiMode = '0' | '1' | '2' | '3' | 'MODE0' | 'MODE1' | 'MODE2' | 'MODE3';
export type As3935SpiConfig = {
        cs_pin: Pin;
        data_rate?: any;
        id?: any;
        release_device?: boolean;
        spi_id?: ID;
        spi_mode?: As3935SpiConfigSpiMode;
    } & As3935AS3935_SCHEMA & CoreCOMPONENT_SCHEMA;
