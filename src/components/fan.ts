/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: fan.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/fan
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes)
 **/
import { type ID, type Pin, EsphomeComponent } from "@/lib/base.js";
import type { CoreENTITY_BASE_SCHEMA, CoreMQTT_COMMAND_COMPONENT_SCHEMA } from "./esphome.js";

export abstract class Fan extends EsphomeComponent {
    componentName: string = "fan";
}

export interface FanFAN_ACTION_SCHEMA {
    id: ID;
}

export type Fan_FAN_SCHEMARestoreMode = 'NO_RESTORE' | 'ALWAYS_OFF' | 'ALWAYS_ON' | 'RESTORE_DEFAULT_OFF' | 'RESTORE_DEFAULT_ON' | 'RESTORE_INVERTED_DEFAULT_OFF' | 'RESTORE_INVERTED_DEFAULT_ON';

export interface Fan_FAN_SCHEMAWebServer {
    sorting_group_id?: ID;
    sorting_weight?: any;
    web_server_id?: ID;
}

export type Fan_FAN_SCHEMA = {
        direction_command_topic?: any;
        direction_state_topic?: any;
        mqtt_id?: any;
        on_direction_set?: object[];
        on_oscillating_set?: object[];
        on_preset_set?: object[];
        on_speed_set?: object[];
        on_state?: object[];
        on_turn_off?: object[];
        on_turn_on?: object[];
        oscillation_command_topic?: any;
        oscillation_state_topic?: any;
        restore_mode?: Fan_FAN_SCHEMARestoreMode;
        speed_command_topic?: any;
        speed_level_command_topic?: any;
        speed_level_state_topic?: any;
        speed_state_topic?: any;
        web_server?: Fan_FAN_SCHEMAWebServer;
        id?: any;
        name?: any;
        icon?: any;
        internal?: any;
        disabled_by_default?: any;
        entity_category?: any;
    } & CoreENTITY_BASE_SCHEMA & CoreMQTT_COMMAND_COMPONENT_SCHEMA;
