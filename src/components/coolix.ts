/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: coolix.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/coolix
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes)
 **/
import { type ID, type Pin, EsphomeComponent } from "@/lib/base.js";
import type { ClimateCLIMATESCHEMA } from "./climate.js";
import type { CoreCOMPONENTSCHEMA } from "./esphome.js";

export class CoolixClimate extends EsphomeComponent<CoolixClimateConfig> {
    componentName: string = "coolix.climate";
}

export type CoolixClimateConfig = {
        humidity_sensor?: ID;
        id?: ID;
        receiver_id?: ID;
        sensor?: ID;
        supports_cool?: boolean;
        supports_heat?: boolean;
        transmitter_id?: ID;
    } & ClimateCLIMATESCHEMA & CoreCOMPONENTSCHEMA;
