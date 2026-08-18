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
import type { CoreENTITYBASESCHEMA, CoreMQTTCOMMANDCOMPONENTSCHEMA } from "./esphome.js";

export abstract class Fan extends EsphomeComponent {
    componentName: string = "fan";
}

export interface FanFANACTIONSCHEMA {
    id: ID;
}

export type FanFANSCHEMARestoreMode = 'NO_RESTORE' | 'ALWAYS_OFF' | 'ALWAYS_ON' | 'RESTORE_DEFAULT_OFF' | 'RESTORE_DEFAULT_ON' | 'RESTORE_INVERTED_DEFAULT_OFF' | 'RESTORE_INVERTED_DEFAULT_ON';

export interface FanFANSCHEMAWebServer {
    sorting_group_id?: ID;
    sorting_weight?: any;
    web_server_id?: ID;
}

export type FanFANSCHEMA = {
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
        restore_mode?: FanFANSCHEMARestoreMode;
        speed_command_topic?: any;
        speed_level_command_topic?: any;
        speed_level_state_topic?: any;
        speed_state_topic?: any;
        web_server?: FanFANSCHEMAWebServer;
        id?: any;
        name?: any;
        icon?: any;
        internal?: any;
        disabled_by_default?: any;
        entity_category?: any;
    } & CoreENTITYBASESCHEMA & CoreMQTTCOMMANDCOMPONENTSCHEMA;
