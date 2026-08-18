/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: light.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/light
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes)
 **/
import { type ID, type Pin, EsphomeComponent } from "@/lib/base.js";
import type { CorePositiveTimePeriodMilliseconds, CoreENTITY_BASE_SCHEMA, CoreMQTT_COMMAND_COMPONENT_SCHEMA } from "./esphome.js";

export abstract class Light extends EsphomeComponent {
    componentName: string = "light";
}

export interface LightADDRESSABLE_LIGHT_SCHEMA extends LightRGB_LIGHT_SCHEMA {
    color_correct?: any;
    effects?: any;
    id?: any;
    power_supply?: ID;
}

export interface LightBINARY_LIGHT_SCHEMA extends LightLIGHT_SCHEMA {
    effects?: any;
}

export type LightBRIGHTNESS_ONLY_LIGHT_SCHEMADefaultTransitionLength = CorePositiveTimePeriodMilliseconds;
export type LightBRIGHTNESS_ONLY_LIGHT_SCHEMAFlashTransitionLength = CorePositiveTimePeriodMilliseconds;

export interface LightBRIGHTNESS_ONLY_LIGHT_SCHEMA extends LightLIGHT_SCHEMA {
    default_transition_length?: LightBRIGHTNESS_ONLY_LIGHT_SCHEMADefaultTransitionLength;
    effects?: any;
    flash_transition_length?: LightBRIGHTNESS_ONLY_LIGHT_SCHEMAFlashTransitionLength;
    gamma_correct?: any;
}

export type LightLIGHT_SCHEMAInitialState = LightLIGHT_STATE_SCHEMA;
export type LightLIGHT_SCHEMARestoreMode = 'RESTORE_DEFAULT_OFF' | 'RESTORE_DEFAULT_ON' | 'ALWAYS_OFF' | 'ALWAYS_ON' | 'RESTORE_INVERTED_DEFAULT_OFF' | 'RESTORE_INVERTED_DEFAULT_ON' | 'RESTORE_AND_OFF' | 'RESTORE_AND_ON';

export interface LightLIGHT_SCHEMAWebServer {
    sorting_group_id?: ID;
    sorting_weight?: any;
    web_server_id?: ID;
}

export type LightLIGHT_SCHEMA = {
        id?: ID;
        initial_state?: LightLIGHT_SCHEMAInitialState;
        mqtt_id?: any;
        on_state?: object[];
        on_turn_off?: object[];
        on_turn_on?: object[];
        restore_mode?: LightLIGHT_SCHEMARestoreMode;
        web_server?: LightLIGHT_SCHEMAWebServer;
        name?: any;
        icon?: any;
        effects?: any;
        gamma_correct?: any;
        default_transition_length?: any;
        flash_transition_length?: any;
        color_correct?: any;
        power_supply?: any;
        internal?: any;
        disabled_by_default?: any;
        entity_category?: any;
        brightness?: any;
        red?: any;
        green?: any;
        blue?: any;
        white?: any;
        color_temperature?: any;
        cold_white?: any;
        warm_white?: any;
    } & CoreENTITY_BASE_SCHEMA & CoreMQTT_COMMAND_COMPONENT_SCHEMA;
export type LightLIGHT_STATE_SCHEMAColorMode = 'ON_OFF' | 'BRIGHTNESS' | 'WHITE' | 'COLOR_TEMPERATURE' | 'COLD_WARM_WHITE' | 'RGB' | 'RGB_WHITE' | 'RGB_COLOR_TEMPERATURE' | 'RGB_COLD_WARM_WHITE';

export interface LightLIGHT_STATE_SCHEMA {
    blue?: any;
    brightness?: any;
    cold_white?: any;
    color_brightness?: any;
    color_mode?: LightLIGHT_STATE_SCHEMAColorMode;
    color_temperature?: any;
    green?: any;
    red?: any;
    state?: boolean;
    warm_white?: any;
    white?: any;
}

export interface LightRGB_LIGHT_SCHEMA extends LightBRIGHTNESS_ONLY_LIGHT_SCHEMA {
    effects?: any;
}
