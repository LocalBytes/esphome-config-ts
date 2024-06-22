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

export type CoverCOVER_SCHEMADeviceClass = 'awning' | 'blind' | 'curtain' | 'damper' | 'door' | '' | 'garage' | 'gate' | 'shade' | 'shutter' | 'window';
export type CoverCOVER_SCHEMA = {
        id?: ID;
        mqtt_id?: any;
        device_class?: CoverCOVER_SCHEMADeviceClass;
        position_command_topic?: any;
        position_state_topic?: any;
        tilt_command_topic?: any;
        tilt_state_topic?: any;
        on_open?: object[];
        on_closed?: object[];
    } & CoreENTITY_BASE_SCHEMA & CoreMQTT_COMMAND_COMPONENT_SCHEMA;

export interface CoverCOVER_ACTION_SCHEMA {
    id: ID;
}

export type CoverCOVER_CONTROL_ACTION_SCHEMAState = 'OPEN' | 'CLOSED';

export interface CoverCOVER_CONTROL_ACTION_SCHEMA {
    id: ID;
    stop?: boolean;
    state?: CoverCOVER_CONTROL_ACTION_SCHEMAState;
    position?: any;
    tilt?: any;
}
