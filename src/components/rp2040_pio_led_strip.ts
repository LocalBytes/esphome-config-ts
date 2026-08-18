/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: rp2040_pio_led_strip.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/rp2040_pio_led_strip
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes)
 **/
import { type ID, type Pin, EsphomeComponent } from "@/lib/base.js";
import type { LightADDRESSABLELIGHTSCHEMA } from "./light.js";

export class Rp2040PioLedStripLight extends EsphomeComponent<Rp2040PioLedStripLightConfig> {
    componentName: string = "rp2040_pio_led_strip.light";
}

export type Rp2040PioLedStripLightConfigChipset = 'WS2812' | 'WS2812B' | 'SK6812' | 'SM16703';
export type Rp2040PioLedStripLightConfigPio = '0' | '1';
export type Rp2040PioLedStripLightConfigRgbOrder = 'RGB' | 'RBG' | 'GRB' | 'GBR' | 'BGR' | 'BRG';

export interface Rp2040PioLedStripLightConfig extends LightADDRESSABLELIGHTSCHEMA {
    bit0_high?: any;
    bit0_low?: any;
    bit1_high?: any;
    bit1_low?: any;
    chipset?: Rp2040PioLedStripLightConfigChipset;
    is_rgbw?: boolean;
    num_leds: number;
    output_id?: ID;
    pin: Pin;
    pio: Rp2040PioLedStripLightConfigPio;
    rgb_order: Rp2040PioLedStripLightConfigRgbOrder;
}
