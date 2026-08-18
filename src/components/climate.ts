/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: climate.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/climate
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes)
 **/
import { type ID, type Pin, EsphomeComponent } from "@/lib/base.js";
import type { CoreENTITY_BASE_SCHEMA, CoreMQTT_COMMAND_COMPONENT_SCHEMA } from "./esphome.js";

export abstract class Climate extends EsphomeComponent {
    componentName: string = "climate";
}

export type ClimateCLIMATE_CONTROL_ACTION_SCHEMAFanMode = 'ON' | 'OFF' | 'AUTO' | 'LOW' | 'MEDIUM' | 'HIGH' | 'MIDDLE' | 'FOCUS' | 'DIFFUSE' | 'QUIET';
export type ClimateCLIMATE_CONTROL_ACTION_SCHEMAMode = 'OFF' | 'HEAT_COOL' | 'COOL' | 'HEAT' | 'DRY' | 'FAN_ONLY' | 'AUTO';
export type ClimateCLIMATE_CONTROL_ACTION_SCHEMAPreset = 'NONE' | 'ECO' | 'AWAY' | 'BOOST' | 'COMFORT' | 'HOME' | 'SLEEP' | 'ACTIVITY';
export type ClimateCLIMATE_CONTROL_ACTION_SCHEMASwingMode = 'OFF' | 'BOTH' | 'VERTICAL' | 'HORIZONTAL';

export interface ClimateCLIMATE_CONTROL_ACTION_SCHEMA {
    custom_fan_mode?: string;
    custom_preset?: string;
    fan_mode?: ClimateCLIMATE_CONTROL_ACTION_SCHEMAFanMode;
    id: ID;
    mode?: ClimateCLIMATE_CONTROL_ACTION_SCHEMAMode;
    preset?: ClimateCLIMATE_CONTROL_ACTION_SCHEMAPreset;
    swing_mode?: ClimateCLIMATE_CONTROL_ACTION_SCHEMASwingMode;
    target_humidity?: any;
    target_temperature?: any;
    target_temperature_high?: any;
    target_temperature_low?: any;
}

export interface ClimateVISUAL_TEMPERATURE_STEP_SCHEMA {
    current_temperature: string;
    target_temperature: string;
}

export interface Climate_CLIMATE_SCHEMAVisual {
    max_humidity?: any;
    max_temperature?: any;
    min_humidity?: any;
    min_temperature?: any;
    temperature_step?: any;
}

export interface Climate_CLIMATE_SCHEMAWebServer {
    sorting_group_id?: ID;
    sorting_weight?: any;
    web_server_id?: ID;
}

export type Climate_CLIMATE_SCHEMA = {
        action_state_topic?: any;
        away_command_topic?: any;
        away_state_topic?: any;
        current_humidity_state_topic?: any;
        current_temperature_state_topic?: any;
        fan_mode_command_topic?: any;
        fan_mode_state_topic?: any;
        mode_command_topic?: any;
        mode_state_topic?: any;
        mqtt_id?: any;
        on_control?: object[];
        on_state?: object[];
        preset_command_topic?: any;
        preset_state_topic?: any;
        swing_mode_command_topic?: any;
        swing_mode_state_topic?: any;
        target_humidity_command_topic?: any;
        target_humidity_state_topic?: any;
        target_temperature_command_topic?: any;
        target_temperature_high_command_topic?: any;
        target_temperature_high_state_topic?: any;
        target_temperature_low_command_topic?: any;
        target_temperature_low_state_topic?: any;
        target_temperature_state_topic?: any;
        visual?: Climate_CLIMATE_SCHEMAVisual;
        web_server?: Climate_CLIMATE_SCHEMAWebServer;
        id?: any;
        name?: any;
        icon?: any;
        internal?: any;
        disabled_by_default?: any;
        entity_category?: any;
    } & CoreENTITY_BASE_SCHEMA & CoreMQTT_COMMAND_COMPONENT_SCHEMA;
