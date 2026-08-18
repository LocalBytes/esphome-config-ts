/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: neopixelbus.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/neopixelbus
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes)
 **/
import { type ID, type Pin, EsphomeComponent } from "@/lib/base.js";
import type { LightADDRESSABLELIGHTSCHEMA } from "./light.js";
import type { CoreCOMPONENTSCHEMA } from "./esphome.js";

export class NeopixelbusLight extends EsphomeComponent<NeopixelbusLightConfig> {
    componentName: string = "neopixelbus.light";
}

export type NeopixelbusLightConfigVariant = 'ws2811' | 'ws2812' | 'ws2812x' | 'ws2813' | 'sk6812' | 'tm1814' | 'tm1829' | 'tm1914' | '800kbps' | '400kbps' | 'apa106' | 'lc8812' | 'dotstar' | 'ws2801' | 'lpd6803' | 'lpd8806' | 'p9813';
export type NeopixelbusLightConfig = {
        clock_pin?: Pin;
        data_pin?: Pin;
        invert?: boolean;
        method?: any;
        num_leds: number;
        output_id?: ID;
        pin?: Pin;
        type?: any;
        variant: NeopixelbusLightConfigVariant;
    } & LightADDRESSABLELIGHTSCHEMA & CoreCOMPONENTSCHEMA;
