/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: fastled_base.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/fastled_base
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes)
 **/
import { type ID, type Pin, BaseComponent } from "@/lib/base.js";
import type { CorePositiveTimePeriodMicroseconds, CoreCOMPONENT_SCHEMA } from "./esphome.js";
import type { LightADDRESSABLE_LIGHT_SCHEMA } from "./light.js";

export abstract class FastledBase extends BaseComponent {
    componentName: string = "fastled_base";
}

export type FastledBaseBASE_SCHEMARgbOrder = 'RGB' | 'RBG' | 'GRB' | 'GBR' | 'BRG' | 'BGR';
export type FastledBaseBASE_SCHEMAMaxRefreshRate = CorePositiveTimePeriodMicroseconds;
export type FastledBaseBASE_SCHEMA = {
        output_id?: ID;
        num_leds: number;
        rgb_order?: FastledBaseBASE_SCHEMARgbOrder;
        max_refresh_rate?: FastledBaseBASE_SCHEMAMaxRefreshRate;
    } & LightADDRESSABLE_LIGHT_SCHEMA & CoreCOMPONENT_SCHEMA;
