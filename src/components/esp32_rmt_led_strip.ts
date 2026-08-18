/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: esp32_rmt_led_strip.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/esp32_rmt_led_strip
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes)
 **/
import { type ID, type Pin, EsphomeComponent } from "@/lib/base.js";
import type { CorePositiveTimePeriodNanoseconds, CorePositiveTimePeriodMicroseconds, CoreCOMPONENT_SCHEMA } from "./esphome.js";
import type { LightADDRESSABLE_LIGHT_SCHEMA } from "./light.js";

export class Esp32RmtLedStripLight extends EsphomeComponent<Esp32RmtLedStripLightConfig> {
    componentName: string = "esp32_rmt_led_strip.light";
}

export type Esp32RmtLedStripLightConfigBit0High = CorePositiveTimePeriodNanoseconds;
export type Esp32RmtLedStripLightConfigBit0Low = CorePositiveTimePeriodNanoseconds;
export type Esp32RmtLedStripLightConfigBit1High = CorePositiveTimePeriodNanoseconds;
export type Esp32RmtLedStripLightConfigBit1Low = CorePositiveTimePeriodNanoseconds;
export type Esp32RmtLedStripLightConfigChipset = 'WS2811' | 'WS2812' | 'SK6812' | 'APA106' | 'SM16703';
export type Esp32RmtLedStripLightConfigMaxRefreshRate = CorePositiveTimePeriodMicroseconds;
export type Esp32RmtLedStripLightConfigResetHigh = CorePositiveTimePeriodNanoseconds;
export type Esp32RmtLedStripLightConfigResetLow = CorePositiveTimePeriodNanoseconds;
export type Esp32RmtLedStripLightConfigRgbOrder = 'RGB' | 'RBG' | 'GRB' | 'GBR' | 'BGR' | 'BRG';
export type Esp32RmtLedStripLightConfig = {
        bit0_high?: Esp32RmtLedStripLightConfigBit0High;
        bit0_low?: Esp32RmtLedStripLightConfigBit0Low;
        bit1_high?: Esp32RmtLedStripLightConfigBit1High;
        bit1_low?: Esp32RmtLedStripLightConfigBit1Low;
        chipset?: Esp32RmtLedStripLightConfigChipset;
        is_rgbw?: boolean;
        is_wrgb?: boolean;
        max_refresh_rate?: Esp32RmtLedStripLightConfigMaxRefreshRate;
        num_leds: number;
        output_id?: ID;
        pin: Pin;
        reset_high?: Esp32RmtLedStripLightConfigResetHigh;
        reset_low?: Esp32RmtLedStripLightConfigResetLow;
        rgb_order: Esp32RmtLedStripLightConfigRgbOrder;
        rmt_symbols?: number;
        use_dma?: boolean;
        use_psram?: boolean;
    } & LightADDRESSABLE_LIGHT_SCHEMA & CoreCOMPONENT_SCHEMA;
