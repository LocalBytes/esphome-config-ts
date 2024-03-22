/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: fan.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/fan
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes) 2023
 **/
import type { ID, Pin } from "../base.js";
import { BaseComponent } from "../base.js";
import type { CoreENTITY_BASE_SCHEMA, CoreMQTT_COMMAND_COMPONENT_SCHEMA } from "./esphome.js";

export abstract class Fan extends BaseComponent {
    componentName: string = "fan";
}

export interface FanFAN_SCHEMA extends CoreENTITY_BASE_SCHEMA, CoreMQTT_COMMAND_COMPONENT_SCHEMA {
    id?: ID;
    restore_mode?: FanFAN_SCHEMARestoreMode;
    mqtt_id?: any;
    oscillation_state_topic?: any;
    oscillation_command_topic?: any;
    speed_level_state_topic?: any;
    speed_level_command_topic?: any;
    speed_state_topic?: any;
    speed_command_topic?: any;
    on_turn_on?: object[];
    on_turn_off?: object[];
    on_speed_set?: object[];
}

export type FanFAN_SCHEMARestoreMode = 'NO_RESTORE' | 'ALWAYS_OFF' | 'ALWAYS_ON' | 'RESTORE_DEFAULT_OFF' | 'RESTORE_DEFAULT_ON' | 'RESTORE_INVERTED_DEFAULT_OFF' | 'RESTORE_INVERTED_DEFAULT_ON';

export interface FanFAN_ACTION_SCHEMA {
    id: ID;
}
