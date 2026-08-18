/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: pcm5122.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/pcm5122
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes)
 **/
import { type ID, type Pin, EsphomeComponent } from "@/lib/base.js";
import type { CoreCOMPONENTSCHEMA } from "./esphome.js";

export abstract class Pcm5122 extends EsphomeComponent {
    componentName: string = "pcm5122";
}

export class Pcm5122AudioDac extends EsphomeComponent<Pcm5122AudioDacConfig> {
    componentName: string = "pcm5122.audio_dac";
}

export type Pcm5122AudioDacConfigBitsPerSample = '16' | '24' | '32';

export interface Pcm5122AudioDacConfig extends CoreCOMPONENTSCHEMA {
    address?: any;
    bits_per_sample?: Pcm5122AudioDacConfigBitsPerSample;
    i2c_id?: ID;
    id?: ID;
}
