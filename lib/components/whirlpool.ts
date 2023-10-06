/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: whirlpool.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/whirlpool
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes) 2023
 **/
import { ID, Pin, BaseComponent } from "../base.js";
import { ClimateIrCLIMATE_IR_WITH_RECEIVER_SCHEMA } from "./climate_ir.js";

export class WhirlpoolClimate extends BaseComponent<WhirlpoolClimateConfig> {
    componentName: string = "whirlpool.climate";
}

export interface WhirlpoolClimateConfig extends ClimateIrCLIMATE_IR_WITH_RECEIVER_SCHEMA {
    id?: any;
    model?: WhirlpoolClimateConfigModel;
}

export type WhirlpoolClimateConfigModel = 'DG11J1-3A' | 'DG11J1-91';
