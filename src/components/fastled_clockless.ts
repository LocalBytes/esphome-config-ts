/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: fastled_clockless.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/fastled_clockless
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes)
 **/
import { type ID, type Pin, EsphomeComponent } from "@/lib/base.js";
import type { FastledBaseBASE_SCHEMA } from "./fastled_base.js";

export class FastledClocklessLight extends EsphomeComponent<FastledClocklessLightConfig> {
    componentName: string = "fastled_clockless.light";
}

export type FastledClocklessLightConfigChipset = 'NEOPIXEL' | 'TM1829' | 'TM1809' | 'TM1804' | 'TM1803' | 'UCS1903' | 'UCS1903B' | 'UCS1904' | 'UCS2903' | 'WS2812' | 'WS2852' | 'WS2812B' | 'SK6812' | 'SK6822' | 'APA106' | 'PL9823' | 'WS2811' | 'WS2813' | 'APA104' | 'WS2811_400' | 'GW6205' | 'GW6205_400' | 'LPD1886' | 'LPD1886_8BIT' | 'SM16703';

export interface FastledClocklessLightConfig extends FastledBaseBASE_SCHEMA {
    chipset: FastledClocklessLightConfigChipset;
    pin: Pin;
}
