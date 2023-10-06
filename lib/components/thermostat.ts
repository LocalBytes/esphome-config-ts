/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: thermostat.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/thermostat
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes) 2023
 **/
import { ID, Pin, BaseComponent } from "../base.js";
import { CorePositiveTimePeriodSeconds, CoreCOMPONENT_SCHEMA } from "./esphome.js";
import { ClimateCLIMATE_SCHEMA } from "./climate.js";

export class ThermostatClimate extends BaseComponent<ThermostatClimateConfig> {
    componentName: string = "thermostat.climate";
}

export interface ThermostatClimateConfig extends ClimateCLIMATE_SCHEMA, CoreCOMPONENT_SCHEMA {
    id?: any;
    sensor: ID;
    idle_action: object[];
    cool_action?: object[];
    supplemental_cooling_action?: object[];
    dry_action?: object[];
    fan_only_action?: object[];
    heat_action?: object[];
    supplemental_heating_action?: object[];
    auto_mode?: object[];
    cool_mode?: object[];
    dry_mode?: object[];
    fan_only_mode?: object[];
    heat_mode?: object[];
    off_mode?: object[];
    fan_mode_on_action?: object[];
    fan_mode_off_action?: object[];
    fan_mode_auto_action?: object[];
    fan_mode_low_action?: object[];
    fan_mode_medium_action?: object[];
    fan_mode_high_action?: object[];
    fan_mode_middle_action?: object[];
    fan_mode_focus_action?: object[];
    fan_mode_diffuse_action?: object[];
    fan_mode_quiet_action?: object[];
    swing_both_action?: object[];
    swing_horizontal_action?: object[];
    swing_off_action?: object[];
    swing_vertical_action?: object[];
    target_temperature_change_action?: object[];
    default_mode?: any;
    default_preset?: string;
    default_target_temperature_high?: any;
    default_target_temperature_low?: any;
    set_point_minimum_differential?: any;
    cool_deadband?: any;
    cool_overrun?: any;
    heat_deadband?: any;
    heat_overrun?: any;
    max_cooling_run_time?: ThermostatClimateConfigMaxCoolingRunTime;
    max_heating_run_time?: ThermostatClimateConfigMaxHeatingRunTime;
    min_cooling_off_time?: ThermostatClimateConfigMinCoolingOffTime;
    min_cooling_run_time?: ThermostatClimateConfigMinCoolingRunTime;
    min_fan_mode_switching_time?: ThermostatClimateConfigMinFanModeSwitchingTime;
    min_fanning_off_time?: ThermostatClimateConfigMinFanningOffTime;
    min_fanning_run_time?: ThermostatClimateConfigMinFanningRunTime;
    min_heating_off_time?: ThermostatClimateConfigMinHeatingOffTime;
    min_heating_run_time?: ThermostatClimateConfigMinHeatingRunTime;
    min_idle_time: ThermostatClimateConfigMinIdleTime;
    supplemental_cooling_delta?: any;
    supplemental_heating_delta?: any;
    fan_only_action_uses_fan_mode_timer?: boolean;
    fan_only_cooling?: boolean;
    fan_with_cooling?: boolean;
    fan_with_heating?: boolean;
    startup_delay?: boolean;
    away_config?: ThermostatClimateConfigAwayConfig;
    preset?: ThermostatClimateConfigPreset[];
    on_boot_restore_from?: ThermostatClimateConfigOnBootRestoreFrom;
    preset_change?: object[];
}

export interface ThermostatClimateConfigMaxCoolingRunTime extends CorePositiveTimePeriodSeconds {
}

export interface ThermostatClimateConfigMaxHeatingRunTime extends CorePositiveTimePeriodSeconds {
}

export interface ThermostatClimateConfigMinCoolingOffTime extends CorePositiveTimePeriodSeconds {
}

export interface ThermostatClimateConfigMinCoolingRunTime extends CorePositiveTimePeriodSeconds {
}

export interface ThermostatClimateConfigMinFanModeSwitchingTime extends CorePositiveTimePeriodSeconds {
}

export interface ThermostatClimateConfigMinFanningOffTime extends CorePositiveTimePeriodSeconds {
}

export interface ThermostatClimateConfigMinFanningRunTime extends CorePositiveTimePeriodSeconds {
}

export interface ThermostatClimateConfigMinHeatingOffTime extends CorePositiveTimePeriodSeconds {
}

export interface ThermostatClimateConfigMinHeatingRunTime extends CorePositiveTimePeriodSeconds {
}

export interface ThermostatClimateConfigMinIdleTime extends CorePositiveTimePeriodSeconds {
}

export interface ThermostatClimateConfigAwayConfig {
    default_target_temperature_high?: any;
    default_target_temperature_low?: any;
}

export interface ThermostatClimateConfigPreset {
    id?: ID;
    name: string;
    mode?: ThermostatClimateConfigPresetMode;
    default_target_temperature_high?: any;
    default_target_temperature_low?: any;
    fan_mode?: ThermostatClimateConfigPresetFanMode;
    swing_mode?: ThermostatClimateConfigPresetSwingMode;
}

export type ThermostatClimateConfigPresetMode = 'OFF' | 'HEAT_COOL' | 'COOL' | 'HEAT' | 'DRY' | 'FAN_ONLY' | 'AUTO';
export type ThermostatClimateConfigPresetFanMode = 'ON' | 'OFF' | 'AUTO' | 'LOW' | 'MEDIUM' | 'HIGH' | 'MIDDLE' | 'FOCUS' | 'DIFFUSE' | 'QUIET';
export type ThermostatClimateConfigPresetSwingMode = 'OFF' | 'BOTH' | 'VERTICAL' | 'HORIZONTAL';
export type ThermostatClimateConfigOnBootRestoreFrom = 'MEMORY' | 'DEFAULT_PRESET';
