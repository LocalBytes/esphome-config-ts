/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: daikin.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/daikin
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes)
 **/
import { type ID, type Pin, EsphomeComponent } from "@/lib/base.js";
import type { Climate_CLIMATE_SCHEMA } from "./climate.js";
import type { CoreCOMPONENT_SCHEMA } from "./esphome.js";

export class DaikinClimate extends EsphomeComponent<DaikinClimateConfig> {
    componentName: string = "daikin.climate";
}

export type DaikinClimateConfig = {
        humidity_sensor?: ID;
        id?: ID;
        receiver_id?: ID;
        sensor?: ID;
        supports_cool?: boolean;
        supports_heat?: boolean;
        transmitter_id?: ID;
    } & Climate_CLIMATE_SCHEMA & CoreCOMPONENT_SCHEMA;
