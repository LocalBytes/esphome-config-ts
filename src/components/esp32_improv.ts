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
import type { CorePositiveTimePeriodMilliseconds, CoreCOMPONENTSCHEMA } from "./esphome.js";

export class Esp32Improv extends EsphomeComponent<Esp32ImprovConfig> {
    componentName: string = "esp32_improv";
}

export type Esp32ImprovConfigAuthorizedDuration = CorePositiveTimePeriodMilliseconds;
export type Esp32ImprovConfigIdentifyDuration = CorePositiveTimePeriodMilliseconds;
export type Esp32ImprovConfigWifiTimeout = CorePositiveTimePeriodMilliseconds;

export interface Esp32ImprovConfig extends CoreCOMPONENTSCHEMA {
    authorized_duration?: Esp32ImprovConfigAuthorizedDuration;
    authorizer: ID;
    id?: ID;
    identify_duration?: Esp32ImprovConfigIdentifyDuration;
    next_url?: any;
    on_provisioned?: object[];
    on_provisioning?: object[];
    on_start?: object[];
    on_state?: object[];
    on_stop?: object[];
    status_indicator?: ID;
    wifi_timeout?: Esp32ImprovConfigWifiTimeout;
}
