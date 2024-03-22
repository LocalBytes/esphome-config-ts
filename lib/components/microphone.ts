/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: microphone.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/microphone
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes) 2023
 **/
import type { ID, Pin } from "../base.js";
import { BaseComponent } from "../base.js";

export abstract class Microphone extends BaseComponent {
    componentName: string = "microphone";
}

export interface MicrophoneMICROPHONE_SCHEMA {
    on_data?: object[];
}

export interface MicrophoneMICROPHONE_ACTION_SCHEMA {
    id?: ID;
}
