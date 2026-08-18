/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: thermostat.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/thermostat
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes)
 **/
import { type ID, type Pin, EsphomeComponent } from "@/lib/base.js";
import type { CorePositiveTimePeriodSeconds, CoreCOMPONENTSCHEMA } from "./esphome.js";
import type { ClimateCLIMATESCHEMA } from "./climate.js";

export class ThermostatClimate extends EsphomeComponent<ThermostatClimateConfig> {
    componentName: string = "thermostat.climate";
}

export interface ThermostatClimateConfigAwayConfig {
    default_target_temperature_high?: any;
    default_target_temperature_low?: any;
}

export type ThermostatClimateConfigMaxCoolingRunTime = CorePositiveTimePeriodSeconds;
export type ThermostatClimateConfigMaxHeatingRunTime = CorePositiveTimePeriodSeconds;
export type ThermostatClimateConfigMinCoolingOffTime = CorePositiveTimePeriodSeconds;
export type ThermostatClimateConfigMinCoolingRunTime = CorePositiveTimePeriodSeconds;
export type ThermostatClimateConfigMinFanModeSwitchingTime = CorePositiveTimePeriodSeconds;
export type ThermostatClimateConfigMinFanningOffTime = CorePositiveTimePeriodSeconds;
export type ThermostatClimateConfigMinFanningRunTime = CorePositiveTimePeriodSeconds;
export type ThermostatClimateConfigMinHeatingOffTime = CorePositiveTimePeriodSeconds;
export type ThermostatClimateConfigMinHeatingRunTime = CorePositiveTimePeriodSeconds;
export type ThermostatClimateConfigMinIdleTime = CorePositiveTimePeriodSeconds;
export type ThermostatClimateConfigOnBootRestoreFrom = 'MEMORY' | 'DEFAULT_PRESET';
export type ThermostatClimateConfigPresetFanMode = 'ON' | 'OFF' | 'AUTO' | 'LOW' | 'MEDIUM' | 'HIGH' | 'MIDDLE' | 'FOCUS' | 'DIFFUSE' | 'QUIET';
export type ThermostatClimateConfigPresetMode = 'OFF' | 'HEAT_COOL' | 'COOL' | 'HEAT' | 'DRY' | 'FAN_ONLY' | 'AUTO';
export type ThermostatClimateConfigPresetSwingMode = 'OFF' | 'BOTH' | 'VERTICAL' | 'HORIZONTAL';

export interface ThermostatClimateConfigPreset {
    default_target_temperature_high?: any;
    default_target_temperature_low?: any;
    fan_mode?: ThermostatClimateConfigPresetFanMode;
    id?: ID;
    mode?: ThermostatClimateConfigPresetMode;
    name: string;
    swing_mode?: ThermostatClimateConfigPresetSwingMode;
}

export type ThermostatClimateConfig = {
        auto_mode?: object[];
        away_config?: ThermostatClimateConfigAwayConfig;
        cool_action?: object[];
        cool_deadband?: any;
        cool_mode?: object[];
        cool_overrun?: any;
        default_mode?: any;
        default_preset?: string;
        default_target_temperature_high?: any;
        default_target_temperature_low?: any;
        dry_action?: object[];
        dry_mode?: object[];
        fan_mode_auto_action?: object[];
        fan_mode_diffuse_action?: object[];
        fan_mode_focus_action?: object[];
        fan_mode_high_action?: object[];
        fan_mode_low_action?: object[];
        fan_mode_medium_action?: object[];
        fan_mode_middle_action?: object[];
        fan_mode_off_action?: object[];
        fan_mode_on_action?: object[];
        fan_mode_quiet_action?: object[];
        fan_only_action?: object[];
        fan_only_action_uses_fan_mode_timer?: boolean;
        fan_only_cooling?: boolean;
        fan_only_mode?: object[];
        fan_with_cooling?: boolean;
        fan_with_heating?: boolean;
        heat_action?: object[];
        heat_cool_mode?: any;
        heat_deadband?: any;
        heat_mode?: object[];
        heat_overrun?: any;
        humidity_control_dehumidify_action?: object[];
        humidity_control_humidify_action?: object[];
        humidity_control_off_action?: object[];
        humidity_hysteresis?: any;
        humidity_sensor?: ID;
        id?: ID;
        idle_action: object[];
        max_cooling_run_time: ThermostatClimateConfigMaxCoolingRunTime;
        max_heating_run_time: ThermostatClimateConfigMaxHeatingRunTime;
        min_cooling_off_time: ThermostatClimateConfigMinCoolingOffTime;
        min_cooling_run_time: ThermostatClimateConfigMinCoolingRunTime;
        min_fan_mode_switching_time: ThermostatClimateConfigMinFanModeSwitchingTime;
        min_fanning_off_time: ThermostatClimateConfigMinFanningOffTime;
        min_fanning_run_time: ThermostatClimateConfigMinFanningRunTime;
        min_heating_off_time: ThermostatClimateConfigMinHeatingOffTime;
        min_heating_run_time: ThermostatClimateConfigMinHeatingRunTime;
        min_idle_time: ThermostatClimateConfigMinIdleTime;
        off_mode?: object[];
        on_boot_restore_from?: ThermostatClimateConfigOnBootRestoreFrom;
        preset?: ThermostatClimateConfigPreset[];
        preset_change?: object[];
        sensor: ID;
        set_point_minimum_differential?: any;
        startup_delay?: boolean;
        supplemental_cooling_action?: object[];
        supplemental_cooling_delta?: any;
        supplemental_heating_action?: object[];
        supplemental_heating_delta?: any;
        swing_both_action?: object[];
        swing_horizontal_action?: object[];
        swing_off_action?: object[];
        swing_vertical_action?: object[];
        target_humidity_change_action?: object[];
        target_temperature_change_action?: object[];
    } & ClimateCLIMATESCHEMA & CoreCOMPONENTSCHEMA;
