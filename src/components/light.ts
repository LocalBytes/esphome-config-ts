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
import type { CoreENTITY_BASE_SCHEMA, CoreMQTT_COMMAND_COMPONENT_SCHEMA, CorePositiveTimePeriodMilliseconds } from "./esphome.js";

export abstract class Light extends EsphomeComponent {
    componentName: string = "light";
}

export type LightLIGHT_SCHEMARestoreMode = 'RESTORE_DEFAULT_OFF' | 'RESTORE_DEFAULT_ON' | 'ALWAYS_OFF' | 'ALWAYS_ON' | 'RESTORE_INVERTED_DEFAULT_OFF' | 'RESTORE_INVERTED_DEFAULT_ON' | 'RESTORE_AND_OFF' | 'RESTORE_AND_ON';
export type LightLIGHT_SCHEMA = {
        id?: ID;
        mqtt_id?: any;
        restore_mode?: LightLIGHT_SCHEMARestoreMode;
        on_turn_on?: object[];
        on_turn_off?: object[];
        on_state?: object[];
        effects?: any;
        gamma_correct?: any;
        default_transition_length?: any;
        flash_transition_length?: any;
        color_correct?: any;
        power_supply?: any;
    } & CoreENTITY_BASE_SCHEMA & CoreMQTT_COMMAND_COMPONENT_SCHEMA;

export interface LightBINARY_LIGHT_SCHEMA extends LightLIGHT_SCHEMA {
    effects?: any;
    gamma_correct?: any;
    default_transition_length?: any;
    flash_transition_length?: any;
    color_correct?: any;
    power_supply?: any;
}

export type LightBRIGHTNESS_ONLY_LIGHT_SCHEMADefaultTransitionLength = CorePositiveTimePeriodMilliseconds;
export type LightBRIGHTNESS_ONLY_LIGHT_SCHEMAFlashTransitionLength = CorePositiveTimePeriodMilliseconds;

export interface LightBRIGHTNESS_ONLY_LIGHT_SCHEMA extends LightLIGHT_SCHEMA {
    gamma_correct?: any;
    default_transition_length?: LightBRIGHTNESS_ONLY_LIGHT_SCHEMADefaultTransitionLength;
    flash_transition_length?: LightBRIGHTNESS_ONLY_LIGHT_SCHEMAFlashTransitionLength;
    effects?: any;
    color_correct?: any;
    power_supply?: any;
}

export interface LightRGB_LIGHT_SCHEMA extends LightBRIGHTNESS_ONLY_LIGHT_SCHEMA {
    effects?: any;
}

export interface LightADDRESSABLE_LIGHT_SCHEMA extends LightRGB_LIGHT_SCHEMA {
    id?: any;
    effects?: any;
    color_correct?: any;
    power_supply?: ID;
}
