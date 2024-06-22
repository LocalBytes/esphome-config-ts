/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: esp32_improv.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/esp32_improv
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes)
 **/
import { type ID, type Pin, EsphomeComponent } from "@/lib/base.js";
import type { CorePositiveTimePeriodMilliseconds, CoreCOMPONENT_SCHEMA } from "./esphome.js";

export class Esp32Improv extends EsphomeComponent<Esp32ImprovConfig> {
    componentName: string = "esp32_improv";
}

export type Esp32ImprovConfigIdentifyDuration = CorePositiveTimePeriodMilliseconds;
export type Esp32ImprovConfigAuthorizedDuration = CorePositiveTimePeriodMilliseconds;

export interface Esp32ImprovConfig extends CoreCOMPONENT_SCHEMA {
    id?: ID;
    ble_server_id?: ID;
    authorizer: ID;
    status_indicator?: ID;
    identify_duration?: Esp32ImprovConfigIdentifyDuration;
    authorized_duration?: Esp32ImprovConfigAuthorizedDuration;
}
