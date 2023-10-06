/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: cover.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/cover
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes) 2023
 **/
import { ID, Pin, BaseComponent } from "../base.js";
import { CoreENTITY_BASE_SCHEMA, CoreMQTT_COMMAND_COMPONENT_SCHEMA } from "./esphome.js";

export abstract class Cover extends BaseComponent {
    componentName: string = "cover";
}

export interface CoverCOVER_SCHEMA extends CoreENTITY_BASE_SCHEMA, CoreMQTT_COMMAND_COMPONENT_SCHEMA {
    id?: ID;
    mqtt_id?: any;
    device_class?: CoverCOVER_SCHEMADeviceClass;
    position_command_topic?: any;
    position_state_topic?: any;
    tilt_command_topic?: any;
    tilt_state_topic?: any;
    on_open?: object[];
    on_closed?: object[];
}

export type CoverCOVER_SCHEMADeviceClass = 'awning' | 'blind' | 'curtain' | 'damper' | 'door' | '' | 'garage' | 'gate' | 'shade' | 'shutter' | 'window';

export interface CoverCOVER_ACTION_SCHEMA {
    id: ID;
}

export interface CoverCOVER_CONTROL_ACTION_SCHEMA {
    id: ID;
    stop?: boolean;
    state?: CoverCOVER_CONTROL_ACTION_SCHEMAState;
    position?: any;
    tilt?: any;
}

export type CoverCOVER_CONTROL_ACTION_SCHEMAState = 'OPEN' | 'CLOSED';
