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
import type { CoreENTITYBASESCHEMA, CoreMQTTCOMMANDCOMPONENTSCHEMA } from "./esphome.js";

export abstract class Select extends EsphomeComponent {
    componentName: string = "select";
}

export interface SelectOPERATIONBASESCHEMA {
    id: ID;
}

export interface SelectSELECTSCHEMAWebServer {
    sorting_group_id?: ID;
    sorting_weight?: any;
    web_server_id?: ID;
}

export type SelectSELECTSCHEMA = {
        id?: ID;
        mqtt_id?: any;
        on_value?: object[];
        web_server?: SelectSELECTSCHEMAWebServer;
        name?: any;
        icon?: any;
        internal?: any;
        disabled_by_default?: any;
        entity_category?: any;
    } & CoreENTITYBASESCHEMA & CoreMQTTCOMMANDCOMPONENTSCHEMA;
