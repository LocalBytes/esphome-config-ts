/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: ota.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/ota
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes)
 **/
import { type ID, type Pin, EsphomeComponent } from "@/lib/base.js";
import type { CorePositiveTimePeriodMilliseconds, CoreCOMPONENT_SCHEMA } from "./esphome.js";

export class Ota extends EsphomeComponent<OtaConfig> {
    componentName: string = "ota";
}

export type OtaConfigRebootTimeout = CorePositiveTimePeriodMilliseconds;

export interface OtaConfig extends CoreCOMPONENT_SCHEMA {
    id?: ID;
    safe_mode?: boolean;
    port?: number;
    password?: string;
    reboot_timeout?: OtaConfigRebootTimeout;
    num_attempts?: number;
    on_state_change?: object[];
    on_begin?: object[];
    on_error?: object[];
    on_progress?: object[];
    on_end?: object[];
}
