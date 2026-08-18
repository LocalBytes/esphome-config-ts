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
import type { CoreENTITY_BASE_SCHEMA, CoreMQTT_COMMAND_COMPONENT_SCHEMA } from "./esphome.js";

export abstract class Valve extends EsphomeComponent {
    componentName: string = "valve";
}

export interface ValveVALVE_ACTION_SCHEMA {
    id: ID;
}

export type ValveVALVE_CONTROL_ACTION_SCHEMAState = 'OPEN' | 'CLOSED';

export interface ValveVALVE_CONTROL_ACTION_SCHEMA {
    id: ID;
    position?: any;
    state?: ValveVALVE_CONTROL_ACTION_SCHEMAState;
    stop?: boolean;
}

export type Valve_VALVE_SCHEMADeviceClass = '' | 'gas' | 'water';

export interface Valve_VALVE_SCHEMAWebServer {
    sorting_group_id?: ID;
    sorting_weight?: any;
    web_server_id?: ID;
}

export type Valve_VALVE_SCHEMA = {
        device_class?: Valve_VALVE_SCHEMADeviceClass;
        id?: ID;
        mqtt_id?: any;
        on_closed?: object[];
        on_open?: object[];
        position_command_topic?: any;
        position_state_topic?: any;
        web_server?: Valve_VALVE_SCHEMAWebServer;
        name?: any;
        icon?: any;
        internal?: any;
        disabled_by_default?: any;
        entity_category?: any;
    } & CoreENTITY_BASE_SCHEMA & CoreMQTT_COMMAND_COMPONENT_SCHEMA;
