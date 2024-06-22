/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 *
 * Schema: time.json
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/time
 *
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes)
 **/
import { type ID, type Pin, EsphomeComponent } from "@/lib/base.js";
import type { CoreCOMPONENT_SCHEMA } from "./esphome.js";

export abstract class Time extends EsphomeComponent {
    componentName: string = "time";
}

export interface TimeTIME_SCHEMA extends CoreCOMPONENT_SCHEMA {
    timezone?: any;
    on_time?: object[];
    on_time_sync?: object[];
    update_interval?: any;
}
