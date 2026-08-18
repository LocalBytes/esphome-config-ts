/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: audio_dac.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/audio_dac
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes)
 **/
import { type ID, type Pin, EsphomeComponent } from "@/lib/base.js";

export abstract class AudioDac extends EsphomeComponent {
    componentName: string = "audio_dac";
}

export interface AudioDacMUTEACTIONSCHEMA {
    id?: ID;
}

export interface AudioDacSETVOLUMEACTIONSCHEMA {
    id?: ID;
    volume: string;
}
