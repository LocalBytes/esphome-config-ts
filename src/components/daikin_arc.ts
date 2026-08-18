/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: daikin_arc.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/daikin_arc
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes)
 **/
import { type ID, type Pin, EsphomeComponent } from "@/lib/base.js";
import type { Climate_CLIMATE_SCHEMA } from "./climate.js";
import type { CoreCOMPONENT_SCHEMA } from "./esphome.js";

export class DaikinArcClimate extends EsphomeComponent<DaikinArcClimateConfig> {
    componentName: string = "daikin_arc.climate";
}

export type DaikinArcClimateConfig = {
        humidity_sensor?: ID;
        id?: ID;
        receiver_id?: ID;
        sensor?: ID;
        supports_cool?: boolean;
        supports_heat?: boolean;
        transmitter_id?: ID;
    } & Climate_CLIMATE_SCHEMA & CoreCOMPONENT_SCHEMA;
