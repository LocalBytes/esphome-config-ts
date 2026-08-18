/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: midea.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/midea
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes)
 **/
import { type ID, type Pin, EsphomeComponent } from "@/lib/base.js";
import type { Sensor_SENSOR_SCHEMA } from "./sensor.js";
import type { CoreTimePeriod, CoreCOMPONENT_SCHEMA } from "./esphome.js";
import type { Climate_CLIMATE_SCHEMA } from "./climate.js";

export class MideaClimate extends EsphomeComponent<MideaClimateConfig> {
    componentName: string = "midea.climate";
}

export type MideaClimateConfigCustomFanModes = 'SILENT' | 'TURBO';
export type MideaClimateConfigCustomPresets = 'FREEZE_PROTECTION';

export interface MideaClimateConfigHumiditySetpoint extends Sensor_SENSOR_SCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    icon?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface MideaClimateConfigOutdoorTemperature extends Sensor_SENSOR_SCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    icon?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export type MideaClimateConfigPeriod = CoreTimePeriod;

export interface MideaClimateConfigPowerUsage extends Sensor_SENSOR_SCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    icon?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export type MideaClimateConfigSupportedModes = 'HEAT_COOL' | 'COOL' | 'HEAT' | 'DRY' | 'FAN_ONLY';
export type MideaClimateConfigSupportedPresets = 'ECO' | 'BOOST' | 'SLEEP';
export type MideaClimateConfigSupportedSwingModes = 'BOTH' | 'VERTICAL' | 'HORIZONTAL';
export type MideaClimateConfigTimeout = CoreTimePeriod;
export type MideaClimateConfig = {
        autoconf?: boolean;
        beeper?: boolean;
        custom_fan_modes?: MideaClimateConfigCustomFanModes[];
        custom_presets?: MideaClimateConfigCustomPresets[];
        humidity_setpoint?: MideaClimateConfigHumiditySetpoint;
        id?: ID;
        num_attempts?: number;
        outdoor_temperature?: MideaClimateConfigOutdoorTemperature;
        period?: MideaClimateConfigPeriod;
        power_usage?: MideaClimateConfigPowerUsage;
        supported_modes?: MideaClimateConfigSupportedModes[];
        supported_presets?: MideaClimateConfigSupportedPresets[];
        supported_swing_modes?: MideaClimateConfigSupportedSwingModes[];
        timeout?: MideaClimateConfigTimeout;
        transmitter_id?: ID;
        uart_id?: ID;
    } & Climate_CLIMATE_SCHEMA & CoreCOMPONENT_SCHEMA;

export interface MideaClimateMIDEA_ACTION_BASE_SCHEMA {
    id?: ID;
}
