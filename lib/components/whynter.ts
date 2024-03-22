/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: whynter.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/whynter
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes) 2023
 **/
import type { ID, Pin } from "../base.js";
import { BaseComponent } from "../base.js";
import type { ClimateIrCLIMATE_IR_WITH_RECEIVER_SCHEMA } from "./climate_ir.js";

export class WhynterClimate extends BaseComponent<WhynterClimateConfig> {
    componentName: string = "whynter.climate";
}

export interface WhynterClimateConfig extends ClimateIrCLIMATE_IR_WITH_RECEIVER_SCHEMA {
    id?: any;
    use_fahrenheit?: boolean;
}
