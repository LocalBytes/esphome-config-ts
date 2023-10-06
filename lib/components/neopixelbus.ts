/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: neopixelbus.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/neopixelbus
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes) 2023
 **/
import { ID, Pin, BaseComponent } from "../base.js";
import { LightADDRESSABLE_LIGHT_SCHEMA } from "./light.js";
import { CoreCOMPONENT_SCHEMA } from "./esphome.js";

export class NeopixelbusLight extends BaseComponent<NeopixelbusLightConfig> {
    componentName: string = "neopixelbus.light";
}

export interface NeopixelbusLightConfig extends LightADDRESSABLE_LIGHT_SCHEMA, CoreCOMPONENT_SCHEMA {
    output_id?: ID;
    type?: any;
    variant: NeopixelbusLightConfigVariant;
    method?: any;
    invert?: boolean;
    pin?: Pin;
    clock_pin?: Pin;
    data_pin?: Pin;
    num_leds: number;
}

export type NeopixelbusLightConfigVariant = 'ws2811' | 'ws2812' | 'ws2812x' | 'ws2813' | 'sk6812' | 'tm1814' | 'tm1829' | 'tm1914' | '800kbps' | '400kbps' | 'apa106' | 'lc8812' | 'dotstar' | 'ws2801' | 'lpd6803' | 'lpd8806' | 'p9813';
