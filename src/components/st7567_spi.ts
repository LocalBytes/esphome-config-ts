/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: st7567_spi.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/st7567_spi
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes)
 **/
import { type ID, type Pin, EsphomeComponent } from "@/lib/base.js";
import type { St7567BaseST7567_SCHEMA } from "./st7567_base.js";
import type { CoreCOMPONENT_SCHEMA } from "./esphome.js";

export class St7567SpiDisplay extends EsphomeComponent<St7567SpiDisplayConfig> {
    componentName: string = "st7567_spi.display";
}

export type St7567SpiDisplayConfigSpiMode = '0' | '1' | '2' | '3' | 'MODE0' | 'MODE1' | 'MODE2' | 'MODE3';
export type St7567SpiDisplayConfig = {
        cs_pin: Pin;
        data_rate?: any;
        dc_pin: Pin;
        id?: ID;
        release_device?: boolean;
        spi_id?: ID;
        spi_mode?: St7567SpiDisplayConfigSpiMode;
    } & St7567BaseST7567_SCHEMA & CoreCOMPONENT_SCHEMA;
