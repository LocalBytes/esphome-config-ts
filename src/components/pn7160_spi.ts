/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: pn7160_spi.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/pn7160_spi
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes)
 **/
import { type ID, type Pin, EsphomeComponent } from "@/lib/base.js";
import type { Pn7160PN7160_SCHEMA } from "./pn7160.js";

export class Pn7160Spi extends EsphomeComponent<Pn7160SpiConfig> {
    componentName: string = "pn7160_spi";
}

export type Pn7160SpiConfigSpiMode = '0' | '1' | '2' | '3' | 'MODE0' | 'MODE1' | 'MODE2' | 'MODE3';

export interface Pn7160SpiConfig extends Pn7160PN7160_SCHEMA {
    cs_pin: Pin;
    data_rate?: any;
    id?: any;
    release_device?: boolean;
    spi_id?: ID;
    spi_mode?: Pn7160SpiConfigSpiMode;
}
