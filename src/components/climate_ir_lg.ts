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
import type { CorePositiveTimePeriodMicroseconds } from "./esphome.js";
import type { ClimateIrCLIMATE_IR_WITH_RECEIVER_SCHEMA } from "./climate_ir.js";

export class ClimateIrLgClimate extends EsphomeComponent<ClimateIrLgClimateConfig> {
    componentName: string = "climate_ir_lg.climate";
}

export type ClimateIrLgClimateConfigHeaderHigh = CorePositiveTimePeriodMicroseconds;
export type ClimateIrLgClimateConfigHeaderLow = CorePositiveTimePeriodMicroseconds;
export type ClimateIrLgClimateConfigBitHigh = CorePositiveTimePeriodMicroseconds;
export type ClimateIrLgClimateConfigBitOneLow = CorePositiveTimePeriodMicroseconds;
export type ClimateIrLgClimateConfigBitZeroLow = CorePositiveTimePeriodMicroseconds;

export interface ClimateIrLgClimateConfig extends ClimateIrCLIMATE_IR_WITH_RECEIVER_SCHEMA {
    id?: any;
    header_high?: ClimateIrLgClimateConfigHeaderHigh;
    header_low?: ClimateIrLgClimateConfigHeaderLow;
    bit_high?: ClimateIrLgClimateConfigBitHigh;
    bit_one_low?: ClimateIrLgClimateConfigBitOneLow;
    bit_zero_low?: ClimateIrLgClimateConfigBitZeroLow;
}
