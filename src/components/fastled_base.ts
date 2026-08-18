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
import { type ID, type Pin, EsphomeComponent } from "@/lib/base.js";
import type { CorePositiveTimePeriodMicroseconds, CoreCOMPONENTSCHEMA } from "./esphome.js";
import type { LightADDRESSABLELIGHTSCHEMA } from "./light.js";

export abstract class FastledBase extends EsphomeComponent {
    componentName: string = "fastled_base";
}

export type FastledBaseBASESCHEMAMaxRefreshRate = CorePositiveTimePeriodMicroseconds;
export type FastledBaseBASESCHEMARgbOrder = 'RGB' | 'RBG' | 'GRB' | 'GBR' | 'BRG' | 'BGR';
export type FastledBaseBASESCHEMA = {
        max_refresh_rate?: FastledBaseBASESCHEMAMaxRefreshRate;
        num_leds: number;
        output_id?: ID;
        rgb_order?: FastledBaseBASESCHEMARgbOrder;
    } & LightADDRESSABLELIGHTSCHEMA & CoreCOMPONENTSCHEMA;
