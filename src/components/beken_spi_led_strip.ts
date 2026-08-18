/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: beken_spi_led_strip.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/beken_spi_led_strip
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes)
 **/
import { type ID, type Pin, EsphomeComponent } from "@/lib/base.js";
import type { CorePositiveTimePeriodMicroseconds } from "./esphome.js";
import type { LightADDRESSABLELIGHTSCHEMA } from "./light.js";

export class BekenSpiLedStripLight extends EsphomeComponent<BekenSpiLedStripLightConfig> {
    componentName: string = "beken_spi_led_strip.light";
}

export type BekenSpiLedStripLightConfigChipset = 'WS2812' | 'SK6812' | 'APA106' | 'SM16703';
export type BekenSpiLedStripLightConfigMaxRefreshRate = CorePositiveTimePeriodMicroseconds;
export type BekenSpiLedStripLightConfigRgbOrder = 'RGB' | 'RBG' | 'GRB' | 'GBR' | 'BGR' | 'BRG';

export interface BekenSpiLedStripLightConfig extends LightADDRESSABLELIGHTSCHEMA {
    chipset: BekenSpiLedStripLightConfigChipset;
    is_rgbw?: boolean;
    is_wrgb?: boolean;
    max_refresh_rate?: BekenSpiLedStripLightConfigMaxRefreshRate;
    num_leds: number;
    output_id?: ID;
    pin: Pin;
    rgb_order: BekenSpiLedStripLightConfigRgbOrder;
}
