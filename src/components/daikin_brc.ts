/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: daikin_brc.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/daikin_brc
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes)
 **/
import { type ID, type Pin, EsphomeComponent } from "@/lib/base.js";
import type { ClimateIrCLIMATE_IR_WITH_RECEIVER_SCHEMA } from "./climate_ir.js";

export class DaikinBrcClimate extends EsphomeComponent<DaikinBrcClimateConfig> {
    componentName: string = "daikin_brc.climate";
}

export interface DaikinBrcClimateConfig extends ClimateIrCLIMATE_IR_WITH_RECEIVER_SCHEMA {
    id?: any;
    use_fahrenheit?: boolean;
}
