/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: delonghi.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/delonghi
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes)
 **/
import { type ID, type Pin, EsphomeComponent } from "@/lib/base.js";
import type { ClimateIrCLIMATE_IR_WITH_RECEIVER_SCHEMA } from "./climate_ir.js";

export class DelonghiClimate extends EsphomeComponent<DelonghiClimateConfig> {
    componentName: string = "delonghi.climate";
}

export interface DelonghiClimateConfig extends ClimateIrCLIMATE_IR_WITH_RECEIVER_SCHEMA {
    id?: any;
}
