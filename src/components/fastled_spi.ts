/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 *
 * Schema: fastled_spi.json
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/fastled_spi
 *
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes)
 **/
import { type ID, type Pin, EsphomeComponent } from "@/lib/base.js";
import type { FastledBaseBASE_SCHEMA } from "./fastled_base.js";

export class FastledSpiLight extends EsphomeComponent<FastledSpiLightConfig> {
    componentName: string = "fastled_spi.light";
}

export type FastledSpiLightConfigChipset = 'LPD8806' | 'WS2801' | 'WS2803' | 'SM16716' | 'P9813' | 'APA102' | 'SK9822' | 'DOTSTAR';

export interface FastledSpiLightConfig extends FastledBaseBASE_SCHEMA {
    chipset: FastledSpiLightConfigChipset;
    data_pin: Pin;
    clock_pin: Pin;
    data_rate?: any;
}
