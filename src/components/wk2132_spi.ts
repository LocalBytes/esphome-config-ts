/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: wk2132_spi.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/wk2132_spi
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes)
 **/
import { type ID, type Pin, EsphomeComponent } from "@/lib/base.js";
import type { WeikaiWKBASESCHEMA } from "./weikai.js";

export class Wk2132Spi extends EsphomeComponent<Wk2132SpiConfig> {
    componentName: string = "wk2132_spi";
}

export type Wk2132SpiConfigSpiMode = '0' | '1' | '2' | '3' | 'MODE0' | 'MODE1' | 'MODE2' | 'MODE3';

export interface Wk2132SpiConfig extends WeikaiWKBASESCHEMA {
    cs_pin: Pin;
    data_rate?: any;
    id?: any;
    release_device?: boolean;
    spi_id?: ID;
    spi_mode?: Wk2132SpiConfigSpiMode;
}
