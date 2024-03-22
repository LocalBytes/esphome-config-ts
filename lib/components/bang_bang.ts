/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: bang_bang.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/bang_bang
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes) 2023
 **/
import type { ID, Pin } from "../base.js";
import { BaseComponent } from "../base.js";
import type { ClimateCLIMATE_SCHEMA } from "./climate.js";
import type { CoreCOMPONENT_SCHEMA } from "./esphome.js";

export class BangBangClimate extends BaseComponent<BangBangClimateConfig> {
    componentName: string = "bang_bang.climate";
}

export interface BangBangClimateConfig extends ClimateCLIMATE_SCHEMA, CoreCOMPONENT_SCHEMA {
    id?: any;
    sensor: ID;
    default_target_temperature_low: string;
    default_target_temperature_high: string;
    idle_action: object[];
    cool_action?: object[];
    heat_action?: object[];
    away_config?: BangBangClimateConfigAwayConfig;
}

export interface BangBangClimateConfigAwayConfig {
    default_target_temperature_low: string;
    default_target_temperature_high: string;
}
