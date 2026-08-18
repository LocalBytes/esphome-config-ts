/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: whynter.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/whynter
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes)
 **/
import { type ID, type Pin, EsphomeComponent } from "@/lib/base.js";
import type { Climate_CLIMATE_SCHEMA } from "./climate.js";
import type { CoreCOMPONENT_SCHEMA } from "./esphome.js";
import type { RemoteBaseREMOTE_TRANSMITTABLE_SCHEMA } from "./remote_base.js";

export class WhynterClimate extends EsphomeComponent<WhynterClimateConfig> {
    componentName: string = "whynter.climate";
}

export type WhynterClimateConfig = {
        humidity_sensor?: ID;
        id?: ID;
        receiver_id?: ID;
        sensor?: ID;
        supports_cool?: boolean;
        supports_heat?: boolean;
        use_fahrenheit?: boolean;
    } & Climate_CLIMATE_SCHEMA & CoreCOMPONENT_SCHEMA & RemoteBaseREMOTE_TRANSMITTABLE_SCHEMA;
