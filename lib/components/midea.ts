/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: midea.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/midea
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes) 2023
 **/
import { ID, Pin, BaseComponent } from "../base.js";
import { CoreTimePeriodDict, CoreCOMPONENT_SCHEMA } from "./esphome.js";
import { SensorSENSOR_SCHEMA } from "./sensor.js";
import { ClimateCLIMATE_SCHEMA } from "./climate.js";

export class MideaClimate extends BaseComponent<MideaClimateConfig> {
    componentName: string = "midea.climate";
}

export interface MideaClimateMIDEA_ACTION_BASE_SCHEMA {
    id?: ID;
}

export interface MideaClimateConfig extends ClimateCLIMATE_SCHEMA, CoreCOMPONENT_SCHEMA {
    id?: any;
    period?: MideaClimateConfigPeriod;
    timeout?: MideaClimateConfigTimeout;
    num_attempts?: number;
    transmitter_id?: ID;
    beeper?: boolean;
    autoconf?: boolean;
    supported_modes?: MideaClimateConfigSupportedModes[];
    supported_swing_modes?: MideaClimateConfigSupportedSwingModes[];
    supported_presets?: MideaClimateConfigSupportedPresets[];
    custom_presets?: MideaClimateConfigCustomPresets[];
    custom_fan_modes?: MideaClimateConfigCustomFanModes[];
    outdoor_temperature?: MideaClimateConfigOutdoorTemperature;
    power_usage?: MideaClimateConfigPowerUsage;
    humidity_setpoint?: MideaClimateConfigHumiditySetpoint;
    uart_id?: ID;
}

export interface MideaClimateConfigPeriod extends CoreTimePeriodDict {
}

export interface MideaClimateConfigTimeout extends CoreTimePeriodDict {
}

export type MideaClimateConfigSupportedModes = 'HEAT_COOL' | 'COOL' | 'HEAT' | 'DRY' | 'FAN_ONLY';
export type MideaClimateConfigSupportedSwingModes = 'BOTH' | 'VERTICAL' | 'HORIZONTAL';
export type MideaClimateConfigSupportedPresets = 'ECO' | 'BOOST' | 'SLEEP';
export type MideaClimateConfigCustomPresets = 'FREEZE_PROTECTION';
export type MideaClimateConfigCustomFanModes = 'SILENT' | 'TURBO';

export interface MideaClimateConfigOutdoorTemperature extends SensorSENSOR_SCHEMA {
    unit_of_measurement?: any;
    icon?: any;
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
}

export interface MideaClimateConfigPowerUsage extends SensorSENSOR_SCHEMA {
    unit_of_measurement?: any;
    icon?: any;
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
}

export interface MideaClimateConfigHumiditySetpoint extends SensorSENSOR_SCHEMA {
    unit_of_measurement?: any;
    icon?: any;
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
}
