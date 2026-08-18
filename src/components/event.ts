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
import type { CoreENTITY_BASE_SCHEMA, CoreMQTT_COMPONENT_SCHEMA } from "./esphome.js";

export abstract class Event extends EsphomeComponent {
    componentName: string = "event";
}

export interface EventTRIGGER_EVENT_SCHEMA {
    event_type: string;
    id: ID;
}

export type Event_EVENT_SCHEMADeviceClass = 'button' | 'doorbell' | '' | 'motion';

export interface Event_EVENT_SCHEMAWebServer {
    sorting_group_id?: ID;
    sorting_weight?: any;
    web_server_id?: ID;
}

export type Event_EVENT_SCHEMA = {
        device_class?: Event_EVENT_SCHEMADeviceClass;
        id?: ID;
        mqtt_id?: any;
        on_event?: object[];
        web_server?: Event_EVENT_SCHEMAWebServer;
        name?: any;
        icon?: any;
        internal?: any;
        disabled_by_default?: any;
        entity_category?: any;
    } & CoreENTITY_BASE_SCHEMA & CoreMQTT_COMPONENT_SCHEMA;
