/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: fujitsu_general.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/fujitsu_general
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes)
 **/
import { type ID, type Pin, EsphomeComponent } from "@/lib/base.js";
import type { ClimateCLIMATESCHEMA } from "./climate.js";
import type { CoreCOMPONENTSCHEMA } from "./esphome.js";

export class FujitsuGeneralClimate extends EsphomeComponent<FujitsuGeneralClimateConfig> {
    componentName: string = "fujitsu_general.climate";
}

export type FujitsuGeneralClimateConfig = {
        humidity_sensor?: ID;
        id?: ID;
        receiver_id?: ID;
        sensor?: ID;
        supports_cool?: boolean;
        supports_heat?: boolean;
        transmitter_id?: ID;
    } & ClimateCLIMATESCHEMA & CoreCOMPONENTSCHEMA;
