/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: datetime.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/datetime
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes)
 **/
import { type ID, type Pin, EsphomeComponent } from "@/lib/base.js";
import type { CoreENTITYBASESCHEMA, CoreMQTTCOMMANDCOMPONENTSCHEMA } from "./esphome.js";

export abstract class Datetime extends EsphomeComponent {
    componentName: string = "datetime";
}

export interface DatetimeDATETIMESCHEMAWebServer {
    sorting_group_id?: ID;
    sorting_weight?: any;
    web_server_id?: ID;
}

export type DatetimeDATETIMESCHEMA = {
        on_value?: object[];
        time_id?: ID;
        web_server?: DatetimeDATETIMESCHEMAWebServer;
        name?: any;
        icon?: any;
        internal?: any;
        disabled_by_default?: any;
        entity_category?: any;
    } & CoreENTITYBASESCHEMA & CoreMQTTCOMMANDCOMPONENTSCHEMA;

export abstract class DatetimeDatetime extends EsphomeComponent {
    componentName: string = "datetime.datetime";
}
