/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: esp_ldo.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/esp_ldo
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes)
 **/
import { type ID, type Pin, EsphomeComponent } from "@/lib/base.js";
import type { CoreCOMPONENT_SCHEMA } from "./esphome.js";

export class EspLdo extends EsphomeComponent<EspLdoConfig> {
    componentName: string = "esp_ldo";
}

export type EspLdoConfigChannel = '1' | '2' | '3' | '4';

export interface EspLdoConfig extends CoreCOMPONENT_SCHEMA {
    adjustable?: boolean;
    allow_internal_channel?: boolean;
    channel: EspLdoConfigChannel;
    id?: ID;
    voltage: string;
}
