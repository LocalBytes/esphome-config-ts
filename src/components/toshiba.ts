/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: toshiba.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/toshiba
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes)
 **/
import { type ID, type Pin, EsphomeComponent } from "@/lib/base.js";
import type { ClimateIrCLIMATE_IR_WITH_RECEIVER_SCHEMA } from "./climate_ir.js";

export class ToshibaClimate extends EsphomeComponent<ToshibaClimateConfig> {
    componentName: string = "toshiba.climate";
}

export type ToshibaClimateConfigModel = 'GENERIC' | 'RAC-PT1411HWRU-C' | 'RAC-PT1411HWRU-F';

export interface ToshibaClimateConfig extends ClimateIrCLIMATE_IR_WITH_RECEIVER_SCHEMA {
    id?: any;
    model?: ToshibaClimateConfigModel;
}
