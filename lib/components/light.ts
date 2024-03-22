/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: light.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/light
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes) 2023
 **/
import type { ID, Pin } from "../base.js";
import { BaseComponent } from "../base.js";
import type { CoreENTITY_BASE_SCHEMA, CoreMQTT_COMMAND_COMPONENT_SCHEMA, CorePositiveTimePeriodMilliseconds } from "./esphome.js";

export abstract class Light extends BaseComponent {
    componentName: string = "light";
}

export interface LightLIGHT_SCHEMA extends CoreENTITY_BASE_SCHEMA, CoreMQTT_COMMAND_COMPONENT_SCHEMA {
    id?: ID;
    mqtt_id?: any;
    restore_mode?: LightLIGHT_SCHEMARestoreMode;
    on_turn_on?: object[];
    on_turn_off?: object[];
    on_state?: object[];
}

export type LightLIGHT_SCHEMARestoreMode = 'RESTORE_DEFAULT_OFF' | 'RESTORE_DEFAULT_ON' | 'ALWAYS_OFF' | 'ALWAYS_ON' | 'RESTORE_INVERTED_DEFAULT_OFF' | 'RESTORE_INVERTED_DEFAULT_ON' | 'RESTORE_AND_OFF' | 'RESTORE_AND_ON';

export interface LightBINARY_LIGHT_SCHEMA extends LightLIGHT_SCHEMA {
    effects?: any;
}

export interface LightBRIGHTNESS_ONLY_LIGHT_SCHEMA extends LightLIGHT_SCHEMA {
    gamma_correct?: any;
    default_transition_length?: LightBRIGHTNESS_ONLY_LIGHT_SCHEMADefaultTransitionLength;
    flash_transition_length?: LightBRIGHTNESS_ONLY_LIGHT_SCHEMAFlashTransitionLength;
    effects?: any;
}

export interface LightBRIGHTNESS_ONLY_LIGHT_SCHEMADefaultTransitionLength extends CorePositiveTimePeriodMilliseconds {
}

export interface LightBRIGHTNESS_ONLY_LIGHT_SCHEMAFlashTransitionLength extends CorePositiveTimePeriodMilliseconds {
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
