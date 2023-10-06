/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: climate_ir_lg.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/climate_ir_lg
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes) 2023
 **/
import { ID, Pin, BaseComponent } from "../base.js";
import { CorePositiveTimePeriodMicroseconds } from "./esphome.js";
import { ClimateIrCLIMATE_IR_WITH_RECEIVER_SCHEMA } from "./climate_ir.js";

export class ClimateIrLgClimate extends BaseComponent<ClimateIrLgClimateConfig> {
    componentName: string = "climate_ir_lg.climate";
}

export interface ClimateIrLgClimateConfig extends ClimateIrCLIMATE_IR_WITH_RECEIVER_SCHEMA {
    id?: any;
    header_high?: ClimateIrLgClimateConfigHeaderHigh;
    header_low?: ClimateIrLgClimateConfigHeaderLow;
    bit_high?: ClimateIrLgClimateConfigBitHigh;
    bit_one_low?: ClimateIrLgClimateConfigBitOneLow;
    bit_zero_low?: ClimateIrLgClimateConfigBitZeroLow;
}

export interface ClimateIrLgClimateConfigHeaderHigh extends CorePositiveTimePeriodMicroseconds {
}

export interface ClimateIrLgClimateConfigHeaderLow extends CorePositiveTimePeriodMicroseconds {
}

export interface ClimateIrLgClimateConfigBitHigh extends CorePositiveTimePeriodMicroseconds {
}

export interface ClimateIrLgClimateConfigBitOneLow extends CorePositiveTimePeriodMicroseconds {
}

export interface ClimateIrLgClimateConfigBitZeroLow extends CorePositiveTimePeriodMicroseconds {
}
