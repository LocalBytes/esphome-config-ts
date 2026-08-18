/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: yashima.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/yashima
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes)
 **/
import { type ID, type Pin, EsphomeComponent } from "@/lib/base.js";
import type { ClimateCLIMATESCHEMA } from "./climate.js";
import type { CoreCOMPONENTSCHEMA } from "./esphome.js";

export class YashimaClimate extends EsphomeComponent<YashimaClimateConfig> {
    componentName: string = "yashima.climate";
}

export type YashimaClimateConfig = {
        id?: ID;
        sensor?: ID;
        supports_cool?: boolean;
        supports_heat?: boolean;
        transmitter_id?: ID;
    } & ClimateCLIMATESCHEMA & CoreCOMPONENTSCHEMA;
