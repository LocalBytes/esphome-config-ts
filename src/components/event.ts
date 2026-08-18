/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: event.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/event
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes)
 **/
import { type ID, type Pin, EsphomeComponent } from "@/lib/base.js";
import type { CoreENTITYBASESCHEMA, CoreMQTTCOMPONENTSCHEMA } from "./esphome.js";

export abstract class Event extends EsphomeComponent {
    componentName: string = "event";
}

export interface EventTRIGGEREVENTSCHEMA {
    event_type: string;
    id: ID;
}

export type EventEVENTSCHEMADeviceClass = 'button' | 'doorbell' | '' | 'motion';

export interface EventEVENTSCHEMAWebServer {
    sorting_group_id?: ID;
    sorting_weight?: any;
    web_server_id?: ID;
}

export type EventEVENTSCHEMA = {
        device_class?: EventEVENTSCHEMADeviceClass;
        id?: ID;
        mqtt_id?: any;
        on_event?: object[];
        web_server?: EventEVENTSCHEMAWebServer;
        name?: any;
        icon?: any;
        internal?: any;
        disabled_by_default?: any;
        entity_category?: any;
    } & CoreENTITYBASESCHEMA & CoreMQTTCOMPONENTSCHEMA;
