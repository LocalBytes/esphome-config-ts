/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: bang_bang.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/bang_bang
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes)
 **/
import { type ID, type Pin, EsphomeComponent } from "@/lib/base.js";
import type { ClimateCLIMATESCHEMA } from "./climate.js";
import type { CoreCOMPONENTSCHEMA } from "./esphome.js";

export class BangBangClimate extends EsphomeComponent<BangBangClimateConfig> {
    componentName: string = "bang_bang.climate";
}

export interface BangBangClimateConfigAwayConfig {
    default_target_temperature_high: string;
    default_target_temperature_low: string;
}

export type BangBangClimateConfig = {
        away_config?: BangBangClimateConfigAwayConfig;
        cool_action?: object[];
        default_target_temperature_high: string;
        default_target_temperature_low: string;
        heat_action?: object[];
        humidity_sensor?: ID;
        id?: ID;
        idle_action: object[];
        sensor: ID;
    } & ClimateCLIMATESCHEMA & CoreCOMPONENTSCHEMA;
