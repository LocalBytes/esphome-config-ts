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

export interface ClimateVISUAL_TEMPERATURE_STEP_SCHEMA {
    target_temperature: string;
    current_temperature: string;
}

export type ClimateCLIMATE_SCHEMAVisualTemperatureStep = ClimateVISUAL_TEMPERATURE_STEP_SCHEMA;

export interface ClimateCLIMATE_SCHEMAVisual {
    min_temperature?: any;
    max_temperature?: any;
    temperature_step?: ClimateCLIMATE_SCHEMAVisualTemperatureStep;
}

export type ClimateCLIMATE_SCHEMA = {
        id?: ID;
        mqtt_id?: any;
        visual?: ClimateCLIMATE_SCHEMAVisual;
        action_state_topic?: any;
        away_command_topic?: any;
        away_state_topic?: any;
        current_temperature_state_topic?: any;
        fan_mode_command_topic?: any;
        fan_mode_state_topic?: any;
        mode_command_topic?: any;
        mode_state_topic?: any;
        preset_command_topic?: any;
        preset_state_topic?: any;
        swing_mode_command_topic?: any;
        swing_mode_state_topic?: any;
        target_temperature_command_topic?: any;
        target_temperature_state_topic?: any;
        target_temperature_high_command_topic?: any;
        target_temperature_high_state_topic?: any;
        target_temperature_low_command_topic?: any;
        target_temperature_low_state_topic?: any;
        on_control?: object[];
        on_state?: object[];
    } & CoreENTITY_BASE_SCHEMA & CoreMQTT_COMMAND_COMPONENT_SCHEMA;
export type ClimateCLIMATE_CONTROL_ACTION_SCHEMAMode = 'OFF' | 'HEAT_COOL' | 'COOL' | 'HEAT' | 'DRY' | 'FAN_ONLY' | 'AUTO';
export type ClimateCLIMATE_CONTROL_ACTION_SCHEMAFanMode = 'ON' | 'OFF' | 'AUTO' | 'LOW' | 'MEDIUM' | 'HIGH' | 'MIDDLE' | 'FOCUS' | 'DIFFUSE' | 'QUIET';
export type ClimateCLIMATE_CONTROL_ACTION_SCHEMAPreset = 'NONE' | 'ECO' | 'AWAY' | 'BOOST' | 'COMFORT' | 'HOME' | 'SLEEP' | 'ACTIVITY';
export type ClimateCLIMATE_CONTROL_ACTION_SCHEMASwingMode = 'OFF' | 'BOTH' | 'VERTICAL' | 'HORIZONTAL';

export interface ClimateCLIMATE_CONTROL_ACTION_SCHEMA {
    id: ID;
    mode?: ClimateCLIMATE_CONTROL_ACTION_SCHEMAMode;
    target_temperature?: any;
    target_temperature_low?: any;
    target_temperature_high?: any;
    fan_mode?: ClimateCLIMATE_CONTROL_ACTION_SCHEMAFanMode;
    custom_fan_mode?: string;
    preset?: ClimateCLIMATE_CONTROL_ACTION_SCHEMAPreset;
    custom_preset?: string;
    swing_mode?: ClimateCLIMATE_CONTROL_ACTION_SCHEMASwingMode;
}
