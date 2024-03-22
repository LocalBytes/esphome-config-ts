/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: esp32_rmt_led_strip.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/esp32_rmt_led_strip
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes) 2023
 **/
import type { ID, Pin } from "../base.js";
import { BaseComponent } from "../base.js";
import type { CorePositiveTimePeriodMicroseconds } from "./esphome.js";
import type { LightADDRESSABLE_LIGHT_SCHEMA } from "./light.js";

export class Esp32RmtLedStripLight extends BaseComponent<Esp32RmtLedStripLightConfig> {
    componentName: string = "esp32_rmt_led_strip.light";
}

export interface Esp32RmtLedStripLightConfig extends LightADDRESSABLE_LIGHT_SCHEMA {
    output_id?: ID;
    pin: Pin;
    num_leds: number;
    rgb_order: Esp32RmtLedStripLightConfigRgbOrder;
    rmt_channel: string;
    max_refresh_rate?: Esp32RmtLedStripLightConfigMaxRefreshRate;
    chipset?: Esp32RmtLedStripLightConfigChipset;
    is_rgbw?: boolean;
    bit0_high?: Esp32RmtLedStripLightConfigBit0High;
    bit0_low?: Esp32RmtLedStripLightConfigBit0Low;
    bit1_high?: Esp32RmtLedStripLightConfigBit1High;
    bit1_low?: Esp32RmtLedStripLightConfigBit1Low;
}

export type Esp32RmtLedStripLightConfigRgbOrder = 'RGB' | 'RBG' | 'GRB' | 'GBR' | 'BGR' | 'BRG';

export interface Esp32RmtLedStripLightConfigMaxRefreshRate extends CorePositiveTimePeriodMicroseconds {
}

export type Esp32RmtLedStripLightConfigChipset = 'WS2812' | 'SK6812' | 'APA106' | 'SM16703';

export interface Esp32RmtLedStripLightConfigBit0High extends CorePositiveTimePeriodMicroseconds {
}

export interface Esp32RmtLedStripLightConfigBit0Low extends CorePositiveTimePeriodMicroseconds {
}

export interface Esp32RmtLedStripLightConfigBit1High extends CorePositiveTimePeriodMicroseconds {
}

export interface Esp32RmtLedStripLightConfigBit1Low extends CorePositiveTimePeriodMicroseconds {
}
