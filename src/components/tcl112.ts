/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: tcl112.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/tcl112
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes)
 **/
import { type ID, type Pin, EsphomeComponent } from "@/lib/base.js";
import type { Climate_CLIMATE_SCHEMA } from "./climate.js";
import type { CoreCOMPONENT_SCHEMA } from "./esphome.js";
import type { RemoteBaseREMOTE_TRANSMITTABLE_SCHEMA } from "./remote_base.js";

export class Tcl112Climate extends EsphomeComponent<Tcl112ClimateConfig> {
    componentName: string = "tcl112.climate";
}

export type Tcl112ClimateConfig = {
        humidity_sensor?: ID;
        id?: ID;
        receiver_id?: ID;
        sensor?: ID;
        supports_cool?: boolean;
        supports_heat?: boolean;
    } & Climate_CLIMATE_SCHEMA & CoreCOMPONENT_SCHEMA & RemoteBaseREMOTE_TRANSMITTABLE_SCHEMA;
