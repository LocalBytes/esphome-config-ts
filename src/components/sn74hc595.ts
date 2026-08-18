/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: sn74hc595.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/sn74hc595
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes)
 **/
import { type ID, type Pin, EsphomeComponent } from "@/lib/base.js";

export class Sn74hc595 extends EsphomeComponent<Sn74hc595Config> {
    componentName: string = "sn74hc595";
}

export type Sn74hc595Config = Sn74hc595ConfigGpio | Sn74hc595ConfigSpi;

export interface Sn74hc595ConfigGpio {
    type: "gpio" | "GPIO";
    clock_pin: Pin;
    data_pin: Pin;
    id: string;
    sr_count?: any;
}

export type Sn74hc595ConfigSpiSpiMode = '0' | '1' | '2' | '3' | 'MODE0' | 'MODE1' | 'MODE2' | 'MODE3';

export interface Sn74hc595ConfigSpi {
    type: "spi" | "SPI";
    cs_pin?: Pin;
    data_rate?: any;
    id: string;
    release_device?: boolean;
    spi_id?: ID;
    spi_mode?: Sn74hc595ConfigSpiSpiMode;
    sr_count?: any;
}

export interface Sn74hc595_COMMON_SCHEMA {
    latch_pin: Pin;
    oe_pin?: Pin;
    sr_count?: number;
}
