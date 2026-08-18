/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: es7243e.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/es7243e
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes)
 **/
import { type ID, type Pin, EsphomeComponent } from "@/lib/base.js";
import type { CoreCOMPONENTSCHEMA } from "./esphome.js";

export class Es7243eAudioAdc extends EsphomeComponent<Es7243eAudioAdcConfig> {
    componentName: string = "es7243e.audio_adc";
}

export type Es7243eAudioAdcConfigMicGain = '0' | '3' | '6' | '9' | '12' | '15' | '18' | '21' | '24' | '27' | '30' | '33' | '36' | '34.5' | '37.5';

export interface Es7243eAudioAdcConfig extends CoreCOMPONENTSCHEMA {
    address?: any;
    i2c_id?: ID;
    id?: ID;
    mic_gain?: Es7243eAudioAdcConfigMicGain;
}
