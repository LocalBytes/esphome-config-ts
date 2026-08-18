/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: wk2204_spi.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/wk2204_spi
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes)
 **/
import { type ID, type Pin, EsphomeComponent } from "@/lib/base.js";
import type { WeikaiWKBASE_SCHEMA } from "./weikai.js";

export class Wk2204Spi extends EsphomeComponent<Wk2204SpiConfig> {
    componentName: string = "wk2204_spi";
}

export type Wk2204SpiConfigSpiMode = '0' | '1' | '2' | '3' | 'MODE0' | 'MODE1' | 'MODE2' | 'MODE3';

export interface Wk2204SpiConfig extends WeikaiWKBASE_SCHEMA {
    cs_pin: Pin;
    data_rate?: any;
    id?: any;
    release_device?: boolean;
    spi_id?: ID;
    spi_mode?: Wk2204SpiConfigSpiMode;
}
