/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: switch.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/switch
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes)
 **/
import { type ID, type Pin, EsphomeComponent } from "@/lib/base.js";
import type { CoreENTITY_BASE_SCHEMA, CoreMQTT_COMMAND_COMPONENT_SCHEMA, CoreCOMPONENT_SCHEMA } from "./esphome.js";
import type { BinarySensor_BINARY_SENSOR_SCHEMA } from "./binary_sensor.js";

export abstract class Switch extends EsphomeComponent {
    componentName: string = "switch";
}

export interface SwitchSWITCH_ACTION_SCHEMA {
    id: ID;
}

export interface SwitchSWITCH_CONTROL_ACTION_SCHEMA {
    id: ID;
    state: boolean;
}

export type Switch_SWITCH_SCHEMADeviceClass = '' | 'outlet' | 'switch';
export type Switch_SWITCH_SCHEMARestoreMode = 'RESTORE_DEFAULT_OFF' | 'RESTORE_DEFAULT_ON' | 'ALWAYS_OFF' | 'ALWAYS_ON' | 'RESTORE_INVERTED_DEFAULT_OFF' | 'RESTORE_INVERTED_DEFAULT_ON' | 'DISABLED';

export interface Switch_SWITCH_SCHEMAWebServer {
    sorting_group_id?: ID;
    sorting_weight?: any;
    web_server_id?: ID;
}

export type Switch_SWITCH_SCHEMA = {
        device_class?: Switch_SWITCH_SCHEMADeviceClass;
        inverted?: boolean;
        mqtt_id?: any;
        on_state?: object[];
        on_turn_off?: object[];
        on_turn_on?: object[];
        restore_mode?: Switch_SWITCH_SCHEMARestoreMode;
        web_server?: Switch_SWITCH_SCHEMAWebServer;
        zigbee_id?: ID;
        zigbee_switch?: any;
        id?: any;
        name?: any;
        icon?: any;
        internal?: any;
        disabled_by_default?: any;
        entity_category?: any;
    } & CoreENTITY_BASE_SCHEMA & CoreMQTT_COMMAND_COMPONENT_SCHEMA;

export class SwitchBinarySensor extends EsphomeComponent<SwitchBinarySensorConfig> {
    componentName: string = "switch.binary_sensor";
}

export type SwitchBinarySensorConfig = {
        id?: any;
        source_id: ID;
    } & BinarySensor_BINARY_SENSOR_SCHEMA & CoreCOMPONENT_SCHEMA;
