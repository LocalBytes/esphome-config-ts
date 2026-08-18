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
import type { CorePositiveTimePeriodMilliseconds, CoreENTITYBASESCHEMA, CoreMQTTCOMMANDCOMPONENTSCHEMA } from "./esphome.js";

export abstract class Light extends EsphomeComponent {
    componentName: string = "light";
}

export interface LightADDRESSABLELIGHTSCHEMA extends LightRGBLIGHTSCHEMA {
    color_correct?: any;
    effects?: any;
    id?: any;
    power_supply?: ID;
}

export interface LightBINARYLIGHTSCHEMA extends LightLIGHTSCHEMA {
    effects?: any;
}

export type LightBRIGHTNESSONLYLIGHTSCHEMADefaultTransitionLength = CorePositiveTimePeriodMilliseconds;
export type LightBRIGHTNESSONLYLIGHTSCHEMAFlashTransitionLength = CorePositiveTimePeriodMilliseconds;

export interface LightBRIGHTNESSONLYLIGHTSCHEMA extends LightLIGHTSCHEMA {
    default_transition_length?: LightBRIGHTNESSONLYLIGHTSCHEMADefaultTransitionLength;
    effects?: any;
    flash_transition_length?: LightBRIGHTNESSONLYLIGHTSCHEMAFlashTransitionLength;
    gamma_correct?: any;
}

export type LightLIGHTSCHEMAInitialState = LightLIGHTSTATESCHEMA;
export type LightLIGHTSCHEMARestoreMode = 'RESTORE_DEFAULT_OFF' | 'RESTORE_DEFAULT_ON' | 'ALWAYS_OFF' | 'ALWAYS_ON' | 'RESTORE_INVERTED_DEFAULT_OFF' | 'RESTORE_INVERTED_DEFAULT_ON' | 'RESTORE_AND_OFF' | 'RESTORE_AND_ON';

export interface LightLIGHTSCHEMAWebServer {
    sorting_group_id?: ID;
    sorting_weight?: any;
    web_server_id?: ID;
}

export type LightLIGHTSCHEMA = {
        id?: ID;
        initial_state?: LightLIGHTSCHEMAInitialState;
        mqtt_id?: any;
        on_state?: object[];
        on_turn_off?: object[];
        on_turn_on?: object[];
        restore_mode?: LightLIGHTSCHEMARestoreMode;
        web_server?: LightLIGHTSCHEMAWebServer;
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
    } & CoreENTITYBASESCHEMA & CoreMQTTCOMMANDCOMPONENTSCHEMA;
export type LightLIGHTSTATESCHEMAColorMode = 'ON_OFF' | 'BRIGHTNESS' | 'WHITE' | 'COLOR_TEMPERATURE' | 'COLD_WARM_WHITE' | 'RGB' | 'RGB_WHITE' | 'RGB_COLOR_TEMPERATURE' | 'RGB_COLD_WARM_WHITE';

export interface LightLIGHTSTATESCHEMA {
    blue?: any;
    brightness?: any;
    cold_white?: any;
    color_brightness?: any;
    color_mode?: LightLIGHTSTATESCHEMAColorMode;
    color_temperature?: any;
    green?: any;
    red?: any;
    state?: boolean;
    warm_white?: any;
    white?: any;
}

export interface LightRGBLIGHTSCHEMA extends LightBRIGHTNESSONLYLIGHTSCHEMA {
    effects?: any;
}
