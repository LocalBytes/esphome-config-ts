/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: fastled_base.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/fastled_base
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes) 2023
 **/
import { ID, Pin, BaseComponent } from "../base.js";
import { CorePositiveTimePeriodMicroseconds, CoreCOMPONENT_SCHEMA } from "./esphome.js";
import { LightADDRESSABLE_LIGHT_SCHEMA } from "./light.js";

export abstract class FastledBase extends BaseComponent {
    componentName: string = "fastled_base";
}

export interface FastledBaseBASE_SCHEMA extends LightADDRESSABLE_LIGHT_SCHEMA, CoreCOMPONENT_SCHEMA {
    output_id?: ID;
    num_leds: number;
    rgb_order?: FastledBaseBASE_SCHEMARgbOrder;
    max_refresh_rate?: FastledBaseBASE_SCHEMAMaxRefreshRate;
}

export type FastledBaseBASE_SCHEMARgbOrder = 'RGB' | 'RBG' | 'GRB' | 'GBR' | 'BRG' | 'BGR';

export interface FastledBaseBASE_SCHEMAMaxRefreshRate extends CorePositiveTimePeriodMicroseconds {
}
