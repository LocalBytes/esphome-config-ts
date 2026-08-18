/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: button.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/button
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes)
 **/
import { type ID, type Pin, EsphomeComponent } from "@/lib/base.js";
import type { CoreENTITYBASESCHEMA, CoreMQTTCOMMANDCOMPONENTSCHEMA } from "./esphome.js";

export abstract class Button extends EsphomeComponent {
    componentName: string = "button";
}

export interface ButtonBUTTONPRESSSCHEMA {
    id: ID;
}

export type ButtonBUTTONSCHEMADeviceClass = '' | 'identify' | 'restart' | 'update';

export interface ButtonBUTTONSCHEMAWebServer {
    sorting_group_id?: ID;
    sorting_weight?: any;
    web_server_id?: ID;
}

export type ButtonBUTTONSCHEMA = {
        device_class?: ButtonBUTTONSCHEMADeviceClass;
        mqtt_id?: any;
        on_press?: object[];
        web_server?: ButtonBUTTONSCHEMAWebServer;
        id?: any;
        name?: any;
        icon?: any;
        internal?: any;
        disabled_by_default?: any;
        entity_category?: any;
    } & CoreENTITYBASESCHEMA & CoreMQTTCOMMANDCOMPONENTSCHEMA;
