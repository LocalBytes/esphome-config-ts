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
import type { CoreENTITYBASESCHEMA, CoreMQTTCOMMANDCOMPONENTSCHEMA } from "./esphome.js";

export abstract class Cover extends EsphomeComponent {
    componentName: string = "cover";
}

export interface CoverCOVERACTIONSCHEMA {
    id: ID;
}

export interface CoverCOVERCONDITIONSCHEMA {
    id: ID;
}

export type CoverCOVERCONTROLACTIONSCHEMAState = 'OPEN' | 'CLOSED';

export interface CoverCOVERCONTROLACTIONSCHEMA {
    id: ID;
    position?: any;
    state?: CoverCOVERCONTROLACTIONSCHEMAState;
    stop?: boolean;
    tilt?: any;
}

export type CoverCOVERSCHEMADeviceClass = 'awning' | 'blind' | 'curtain' | 'damper' | 'door' | '' | 'garage' | 'gate' | 'shade' | 'shutter' | 'window';

export interface CoverCOVERSCHEMAWebServer {
    sorting_group_id?: ID;
    sorting_weight?: any;
    web_server_id?: ID;
}

export type CoverCOVERSCHEMA = {
        device_class?: CoverCOVERSCHEMADeviceClass;
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
        web_server?: CoverCOVERSCHEMAWebServer;
        id?: any;
        name?: any;
        icon?: any;
        internal?: any;
        disabled_by_default?: any;
        entity_category?: any;
    } & CoreENTITYBASESCHEMA & CoreMQTTCOMMANDCOMPONENTSCHEMA;
