/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: fujitsu_general.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/fujitsu_general
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes) 2023
 **/
import type { ID, Pin } from "../base.js";
import { BaseComponent } from "../base.js";
import type { ClimateIrCLIMATE_IR_WITH_RECEIVER_SCHEMA } from "./climate_ir.js";

export class FujitsuGeneralClimate extends BaseComponent<FujitsuGeneralClimateConfig> {
    componentName: string = "fujitsu_general.climate";
}

export interface FujitsuGeneralClimateConfig extends ClimateIrCLIMATE_IR_WITH_RECEIVER_SCHEMA {
    id?: any;
}
