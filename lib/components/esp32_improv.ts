/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: esp32_improv.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/esp32_improv
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes) 2023
 **/
import type { ID, Pin } from "../base.js";
import { BaseComponent } from "../base.js";
import type { CorePositiveTimePeriodMilliseconds, CoreCOMPONENT_SCHEMA } from "./esphome.js";

export class Esp32Improv extends BaseComponent<Esp32ImprovConfig> {
    componentName: string = "esp32_improv";
}

export interface Esp32ImprovConfig extends CoreCOMPONENT_SCHEMA {
    id?: ID;
    ble_server_id?: ID;
    authorizer: ID;
    status_indicator?: ID;
    identify_duration?: Esp32ImprovConfigIdentifyDuration;
    authorized_duration?: Esp32ImprovConfigAuthorizedDuration;
}

export interface Esp32ImprovConfigIdentifyDuration extends CorePositiveTimePeriodMilliseconds {
}

export interface Esp32ImprovConfigAuthorizedDuration extends CorePositiveTimePeriodMilliseconds {
}
