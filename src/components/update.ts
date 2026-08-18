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
import type { CoreENTITYBASESCHEMA, CoreMQTTCOMMANDCOMPONENTSCHEMA } from "./esphome.js";

export abstract class Update extends EsphomeComponent {
    componentName: string = "update";
}

export type UpdateUPDATESCHEMADeviceClass = '' | 'firmware';

export interface UpdateUPDATESCHEMAWebServer {
    sorting_group_id?: ID;
    sorting_weight?: any;
    web_server_id?: ID;
}

export type UpdateUPDATESCHEMA = {
        device_class?: UpdateUPDATESCHEMADeviceClass;
        entity_category?: any;
        mqtt_id?: any;
        on_update_available?: object[];
        web_server?: UpdateUPDATESCHEMAWebServer;
        id?: any;
        name?: any;
        disabled_by_default?: any;
        icon?: any;
        internal?: any;
    } & CoreENTITYBASESCHEMA & CoreMQTTCOMMANDCOMPONENTSCHEMA;
