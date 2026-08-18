/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: microphone.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/microphone
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes)
 **/
import { type ID, type Pin, EsphomeComponent } from "@/lib/base.js";

export abstract class Microphone extends EsphomeComponent {
    componentName: string = "microphone";
}

export interface MicrophoneMICROPHONEACTIONSCHEMA {
    id?: ID;
}

export interface MicrophoneMICROPHONESCHEMA {
    bits_per_sample?: number;
    num_channels?: number;
    on_data?: object[];
    sample_rate?: number;
}
