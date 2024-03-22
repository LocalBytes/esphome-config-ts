/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: ballu.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/ballu
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes) 2023
 **/
import type { ID, Pin } from "../base.js";
import { BaseComponent } from "../base.js";
import type { ClimateCLIMATE_SCHEMA } from "./climate.js";
import type { CoreCOMPONENT_SCHEMA } from "./esphome.js";

export class BalluClimate extends BaseComponent<BalluClimateConfig> {
    componentName: string = "ballu.climate";
}

export interface BalluClimateConfig extends ClimateCLIMATE_SCHEMA, CoreCOMPONENT_SCHEMA {
    transmitter_id?: ID;
    supports_cool?: boolean;
    supports_heat?: boolean;
    sensor?: ID;
    receiver_id?: ID;
    id?: any;
}
