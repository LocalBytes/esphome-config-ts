/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: valve.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/valve
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes)
 **/
import { type ID, type Pin, EsphomeComponent } from "@/lib/base.js";
import type { CoreENTITYBASESCHEMA, CoreMQTTCOMMANDCOMPONENTSCHEMA } from "./esphome.js";

export abstract class Valve extends EsphomeComponent {
    componentName: string = "valve";
}

export interface ValveVALVEACTIONSCHEMA {
    id: ID;
}

export type ValveVALVECONTROLACTIONSCHEMAState = 'OPEN' | 'CLOSED';

export interface ValveVALVECONTROLACTIONSCHEMA {
    id: ID;
    position?: any;
    state?: ValveVALVECONTROLACTIONSCHEMAState;
    stop?: boolean;
}

export type ValveVALVESCHEMADeviceClass = '' | 'gas' | 'water';

export interface ValveVALVESCHEMAWebServer {
    sorting_group_id?: ID;
    sorting_weight?: any;
    web_server_id?: ID;
}

export type ValveVALVESCHEMA = {
        device_class?: ValveVALVESCHEMADeviceClass;
        id?: ID;
        mqtt_id?: any;
        on_closed?: object[];
        on_open?: object[];
        position_command_topic?: any;
        position_state_topic?: any;
        web_server?: ValveVALVESCHEMAWebServer;
        name?: any;
        icon?: any;
        internal?: any;
        disabled_by_default?: any;
        entity_category?: any;
    } & CoreENTITYBASESCHEMA & CoreMQTTCOMMANDCOMPONENTSCHEMA;
