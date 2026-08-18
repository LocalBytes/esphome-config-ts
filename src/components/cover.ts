/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: cover.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/cover
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes)
 **/
import { type ID, type Pin, EsphomeComponent } from "@/lib/base.js";
import type { CoreENTITY_BASE_SCHEMA, CoreMQTT_COMMAND_COMPONENT_SCHEMA } from "./esphome.js";

export abstract class Cover extends EsphomeComponent {
    componentName: string = "cover";
}

export interface CoverCOVER_ACTION_SCHEMA {
    id: ID;
}

export interface CoverCOVER_CONDITION_SCHEMA {
    id: ID;
}

export type CoverCOVER_CONTROL_ACTION_SCHEMAState = 'OPEN' | 'CLOSED';

export interface CoverCOVER_CONTROL_ACTION_SCHEMA {
    id: ID;
    position?: any;
    state?: CoverCOVER_CONTROL_ACTION_SCHEMAState;
    stop?: boolean;
    tilt?: any;
}

export type Cover_COVER_SCHEMADeviceClass = 'awning' | 'blind' | 'curtain' | 'damper' | 'door' | '' | 'garage' | 'gate' | 'shade' | 'shutter' | 'window';

export interface Cover_COVER_SCHEMAWebServer {
    sorting_group_id?: ID;
    sorting_weight?: any;
    web_server_id?: ID;
}

export type Cover_COVER_SCHEMA = {
        device_class?: Cover_COVER_SCHEMADeviceClass;
        mqtt_id?: any;
        mqtt_json_state_payload?: boolean;
        on_closed?: object[];
        on_closing?: object[];
        on_idle?: object[];
        on_open?: object[];
        on_opened?: object[];
        on_opening?: object[];
        position_command_topic?: any;
        position_state_topic?: any;
        tilt_command_topic?: any;
        tilt_state_topic?: any;
        web_server?: Cover_COVER_SCHEMAWebServer;
        id?: any;
        name?: any;
        icon?: any;
        internal?: any;
        disabled_by_default?: any;
        entity_category?: any;
    } & CoreENTITY_BASE_SCHEMA & CoreMQTT_COMMAND_COMPONENT_SCHEMA;
