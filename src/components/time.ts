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
import type { CoreCOMPONENTSCHEMA } from "./esphome.js";

export abstract class Time extends EsphomeComponent {
    componentName: string = "time";
}

export interface TimeTIMESCHEMA extends CoreCOMPONENTSCHEMA {
    on_time?: object[];
    on_time_sync?: object[];
    timezone?: any;
    update_interval?: any;
    id?: any;
}

export abstract class TimeDatetime extends EsphomeComponent {
    componentName: string = "time.datetime";
}
