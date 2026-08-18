/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: es8156.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/es8156
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes)
 **/
import { type ID, type Pin, EsphomeComponent } from "@/lib/base.js";
import type { CoreCOMPONENT_SCHEMA } from "./esphome.js";

export class Es8156AudioDac extends EsphomeComponent<Es8156AudioDacConfig> {
    componentName: string = "es8156.audio_dac";
}

export interface Es8156AudioDacConfig extends CoreCOMPONENT_SCHEMA {
    address?: any;
    i2c_id?: ID;
    id?: ID;
}
