/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: es8311.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/es8311
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes)
 **/
import { type ID, type Pin, EsphomeComponent } from "@/lib/base.js";
import type { CoreCOMPONENTSCHEMA } from "./esphome.js";

export class Es8311AudioDac extends EsphomeComponent<Es8311AudioDacConfig> {
    componentName: string = "es8311.audio_dac";
}

export type Es8311AudioDacConfigBitsPerSample = '16' | '24' | '32';
export type Es8311AudioDacConfigMicGain = '0DB' | '6DB' | '12DB' | '18DB' | '24DB' | '30DB' | '36DB' | '42DB';

export interface Es8311AudioDacConfig extends CoreCOMPONENTSCHEMA {
    address?: any;
    bits_per_sample?: Es8311AudioDacConfigBitsPerSample;
    i2c_id?: ID;
    id?: ID;
    mic_gain?: Es8311AudioDacConfigMicGain;
    sample_rate?: number;
    use_mclk?: boolean;
    use_microphone?: boolean;
}
