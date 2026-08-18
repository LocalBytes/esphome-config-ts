/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: select.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/select
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes)
 **/
import { type ID, type Pin, EsphomeComponent } from "@/lib/base.js";
import type { CoreENTITY_BASE_SCHEMA, CoreMQTT_COMMAND_COMPONENT_SCHEMA } from "./esphome.js";

export abstract class Select extends EsphomeComponent {
    componentName: string = "select";
}

export interface SelectOPERATION_BASE_SCHEMA {
    id: ID;
}

export interface Select_SELECT_SCHEMAWebServer {
    sorting_group_id?: ID;
    sorting_weight?: any;
    web_server_id?: ID;
}

export type Select_SELECT_SCHEMA = {
        id?: ID;
        mqtt_id?: any;
        on_value?: object[];
        web_server?: Select_SELECT_SCHEMAWebServer;
        name?: any;
        icon?: any;
        internal?: any;
        disabled_by_default?: any;
        entity_category?: any;
    } & CoreENTITY_BASE_SCHEMA & CoreMQTT_COMMAND_COMPONENT_SCHEMA;
