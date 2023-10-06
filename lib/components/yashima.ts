/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: yashima.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/yashima
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes) 2023
 **/
import { ID, Pin, BaseComponent } from "../base.js";
import { ClimateCLIMATE_SCHEMA } from "./climate.js";
import { CoreCOMPONENT_SCHEMA } from "./esphome.js";

export class YashimaClimate extends BaseComponent<YashimaClimateConfig> {
    componentName: string = "yashima.climate";
}

export interface YashimaClimateConfig extends ClimateCLIMATE_SCHEMA, CoreCOMPONENT_SCHEMA {
    id?: any;
    transmitter_id?: ID;
    supports_cool?: boolean;
    supports_heat?: boolean;
    sensor?: ID;
}
