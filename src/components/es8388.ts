/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: es8388.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/es8388
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes)
 **/
import { type ID, type Pin, EsphomeComponent } from "@/lib/base.js";
import type { CoreCOMPONENT_SCHEMA } from "./esphome.js";
import type { Select_SELECT_SCHEMA } from "./select.js";

export class Es8388AudioDac extends EsphomeComponent<Es8388AudioDacConfig> {
    componentName: string = "es8388.audio_dac";
}

export interface Es8388AudioDacConfig extends CoreCOMPONENT_SCHEMA {
    address?: any;
    i2c_id?: ID;
    id?: ID;
}

export class Es8388Select extends EsphomeComponent<Es8388SelectConfig> {
    componentName: string = "es8388.select";
}

export interface Es8388SelectConfigAdcInputMic extends Select_SELECT_SCHEMA {
    entity_category?: any;
    icon?: any;
    id?: any;
}

export interface Es8388SelectConfigDacOutput extends Select_SELECT_SCHEMA {
    entity_category?: any;
    icon?: any;
    id?: any;
}

export interface Es8388SelectConfig {
    adc_input_mic?: Es8388SelectConfigAdcInputMic;
    dac_output?: Es8388SelectConfigDacOutput;
    es8388_id?: ID;
}
