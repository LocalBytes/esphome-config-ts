/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: hitachi_ac424.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/hitachi_ac424
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes)
 **/
import { type ID, type Pin, EsphomeComponent } from "@/lib/base.js";
import type { ClimateCLIMATESCHEMA } from "./climate.js";
import type { CoreCOMPONENTSCHEMA } from "./esphome.js";

export class HitachiAc424Climate extends EsphomeComponent<HitachiAc424ClimateConfig> {
    componentName: string = "hitachi_ac424.climate";
}

export type HitachiAc424ClimateConfig = {
        humidity_sensor?: ID;
        id?: ID;
        receiver_id?: ID;
        sensor?: ID;
        supports_cool?: boolean;
        supports_heat?: boolean;
        transmitter_id?: ID;
    } & ClimateCLIMATESCHEMA & CoreCOMPONENTSCHEMA;
