/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: rp2040_pio_led_strip.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/rp2040_pio_led_strip
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes) 2023
 **/
import type { ID, Pin } from "../base.js";
import { BaseComponent } from "../base.js";
import type { LightADDRESSABLE_LIGHT_SCHEMA } from "./light.js";

export class Rp2040PioLedStripLight extends BaseComponent<Rp2040PioLedStripLightConfig> {
    componentName: string = "rp2040_pio_led_strip.light";
}

export interface Rp2040PioLedStripLightConfig extends LightADDRESSABLE_LIGHT_SCHEMA {
    output_id?: ID;
    pin: Pin;
    num_leds: number;
    rgb_order: Rp2040PioLedStripLightConfigRgbOrder;
    pio: Rp2040PioLedStripLightConfigPio;
    chipset?: Rp2040PioLedStripLightConfigChipset;
    is_rgbw?: boolean;
    bit0_high?: any;
    bit0_low?: any;
    bit1_high?: any;
    bit1_low?: any;
}

export type Rp2040PioLedStripLightConfigRgbOrder = 'RGB' | 'RBG' | 'GRB' | 'GBR' | 'BGR' | 'BRG';
export type Rp2040PioLedStripLightConfigPio = '0' | '1';
export type Rp2040PioLedStripLightConfigChipset = 'WS2812' | 'WS2812B' | 'SK6812' | 'SM16703';
