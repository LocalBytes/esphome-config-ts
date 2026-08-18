/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: daikin_brc.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/daikin_brc
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes)
 **/
import { type ID, type Pin, EsphomeComponent } from "@/lib/base.js";
import type { ClimateCLIMATESCHEMA } from "./climate.js";
import type { CoreCOMPONENTSCHEMA } from "./esphome.js";

export class DaikinBrcClimate extends EsphomeComponent<DaikinBrcClimateConfig> {
    componentName: string = "daikin_brc.climate";
}

export type DaikinBrcClimateConfig = {
        humidity_sensor?: ID;
        id?: ID;
        receiver_id?: ID;
        sensor?: ID;
        supports_cool?: boolean;
        supports_heat?: boolean;
        transmitter_id?: ID;
        use_fahrenheit?: boolean;
    } & ClimateCLIMATESCHEMA & CoreCOMPONENTSCHEMA;
