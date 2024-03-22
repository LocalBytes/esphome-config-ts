/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: toshiba.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/toshiba
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes) 2023
 **/
import type { ID, Pin } from "../base.js";
import { BaseComponent } from "../base.js";
import type { ClimateIrCLIMATE_IR_WITH_RECEIVER_SCHEMA } from "./climate_ir.js";

export class ToshibaClimate extends BaseComponent<ToshibaClimateConfig> {
    componentName: string = "toshiba.climate";
}

export interface ToshibaClimateConfig extends ClimateIrCLIMATE_IR_WITH_RECEIVER_SCHEMA {
    id?: any;
    model?: ToshibaClimateConfigModel;
}

export type ToshibaClimateConfigModel = 'GENERIC' | 'RAC-PT1411HWRU-C' | 'RAC-PT1411HWRU-F';
