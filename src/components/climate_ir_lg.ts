/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: climate_ir_lg.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/climate_ir_lg
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes)
 **/
import { type ID, type Pin, EsphomeComponent } from "@/lib/base.js";
import type { CorePositiveTimePeriodMicroseconds, CoreCOMPONENT_SCHEMA } from "./esphome.js";
import type { Climate_CLIMATE_SCHEMA } from "./climate.js";

export class ClimateIrLgClimate extends EsphomeComponent<ClimateIrLgClimateConfig> {
    componentName: string = "climate_ir_lg.climate";
}

export type ClimateIrLgClimateConfigBitHigh = CorePositiveTimePeriodMicroseconds;
export type ClimateIrLgClimateConfigBitOneLow = CorePositiveTimePeriodMicroseconds;
export type ClimateIrLgClimateConfigBitZeroLow = CorePositiveTimePeriodMicroseconds;
export type ClimateIrLgClimateConfigHeaderHigh = CorePositiveTimePeriodMicroseconds;
export type ClimateIrLgClimateConfigHeaderLow = CorePositiveTimePeriodMicroseconds;
export type ClimateIrLgClimateConfig = {
        bit_high?: ClimateIrLgClimateConfigBitHigh;
        bit_one_low?: ClimateIrLgClimateConfigBitOneLow;
        bit_zero_low?: ClimateIrLgClimateConfigBitZeroLow;
        header_high?: ClimateIrLgClimateConfigHeaderHigh;
        header_low?: ClimateIrLgClimateConfigHeaderLow;
        humidity_sensor?: ID;
        id?: ID;
        receiver_id?: ID;
        sensor?: ID;
        supports_cool?: boolean;
        supports_heat?: boolean;
        transmitter_id?: ID;
    } & Climate_CLIMATE_SCHEMA & CoreCOMPONENT_SCHEMA;
