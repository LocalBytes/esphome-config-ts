/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: audio_adc.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/audio_adc
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes)
 **/
import { type ID, type Pin, EsphomeComponent } from "@/lib/base.js";

export abstract class AudioAdc extends EsphomeComponent {
    componentName: string = "audio_adc";
}

export interface AudioAdcSET_MIC_GAIN_ACTION_SCHEMA {
    id?: ID;
    mic_gain: string;
}
