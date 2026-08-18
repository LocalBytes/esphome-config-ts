/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: es7210.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/es7210
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes)
 **/
import { type ID, type Pin, EsphomeComponent } from "@/lib/base.js";
import type { CoreCOMPONENTSCHEMA } from "./esphome.js";

export class Es7210AudioAdc extends EsphomeComponent<Es7210AudioAdcConfig> {
    componentName: string = "es7210.audio_adc";
}

export type Es7210AudioAdcConfigBitsPerSample = '16' | '24' | '32';
export type Es7210AudioAdcConfigMicGain = '0' | '3' | '6' | '9' | '12' | '15' | '18' | '21' | '24' | '27' | '30' | '33' | '36' | '34.5' | '37.5';

export interface Es7210AudioAdcConfig extends CoreCOMPONENTSCHEMA {
    address?: any;
    bits_per_sample?: Es7210AudioAdcConfigBitsPerSample;
    i2c_id?: ID;
    id?: ID;
    mic_gain?: Es7210AudioAdcConfigMicGain;
    sample_rate?: number;
}
