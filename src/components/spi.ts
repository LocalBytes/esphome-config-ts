/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: spi.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/spi
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes)
 **/
import { type ID, type Pin, EsphomeComponent } from "@/lib/base.js";

export class Spi extends EsphomeComponent<SpiConfig> {
    componentName: string = "spi";
}

export type SpiConfig = SpiConfigOctal | SpiConfigQuad | SpiConfigSingle;

export interface SpiConfigOctal {
    type: "octal" | "OCTAL";
    clk_pin: Pin;
    data_pins: Pin[];
    id?: ID;
    interface?: string;
}

export interface SpiConfigQuad {
    type: "quad" | "QUAD";
    clk_pin: Pin;
    data_pins: Pin[];
    id?: ID;
    interface?: string;
}

export interface SpiConfigSingle {
    type: "single" | "SINGLE";
    clk_pin: Pin;
    id?: ID;
    interface?: string;
    miso_pin?: Pin;
    mosi_pin?: Pin;
}
