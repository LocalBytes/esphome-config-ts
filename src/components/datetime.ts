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
import type { CoreENTITY_BASE_SCHEMA, CoreMQTT_COMMAND_COMPONENT_SCHEMA } from "./esphome.js";

export abstract class Datetime extends EsphomeComponent {
    componentName: string = "datetime";
}

export interface Datetime_DATETIME_SCHEMAWebServer {
    sorting_group_id?: ID;
    sorting_weight?: any;
    web_server_id?: ID;
}

export type Datetime_DATETIME_SCHEMA = {
        on_value?: object[];
        time_id?: ID;
        web_server?: Datetime_DATETIME_SCHEMAWebServer;
        name?: any;
        icon?: any;
        internal?: any;
        disabled_by_default?: any;
        entity_category?: any;
    } & CoreENTITY_BASE_SCHEMA & CoreMQTT_COMMAND_COMPONENT_SCHEMA;

export abstract class DatetimeDatetime extends EsphomeComponent {
    componentName: string = "datetime.datetime";
}
