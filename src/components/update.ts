/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: update.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/update
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes)
 **/
import { type ID, type Pin, EsphomeComponent } from "@/lib/base.js";
import type { CoreENTITY_BASE_SCHEMA, CoreMQTT_COMMAND_COMPONENT_SCHEMA } from "./esphome.js";

export abstract class Update extends EsphomeComponent {
    componentName: string = "update";
}

export type Update_UPDATE_SCHEMADeviceClass = '' | 'firmware';

export interface Update_UPDATE_SCHEMAWebServer {
    sorting_group_id?: ID;
    sorting_weight?: any;
    web_server_id?: ID;
}

export type Update_UPDATE_SCHEMA = {
        device_class?: Update_UPDATE_SCHEMADeviceClass;
        entity_category?: any;
        mqtt_id?: any;
        on_update_available?: object[];
        web_server?: Update_UPDATE_SCHEMAWebServer;
        id?: any;
        name?: any;
        disabled_by_default?: any;
        icon?: any;
        internal?: any;
    } & CoreENTITY_BASE_SCHEMA & CoreMQTT_COMMAND_COMPONENT_SCHEMA;
