/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: pid.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/pid
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes) 2023
 **/
import type { ID, Pin } from "../base.js";
import { BaseComponent } from "../base.js";
import type { SensorSENSOR_SCHEMA } from "./sensor.js";
import type { CoreCOMPONENT_SCHEMA } from "./esphome.js";
import type { ClimateCLIMATE_SCHEMA } from "./climate.js";

export class PidSensor extends BaseComponent<PidSensorConfig> {
    componentName: string = "pid.sensor";
}

export interface PidSensorConfig extends SensorSENSOR_SCHEMA, CoreCOMPONENT_SCHEMA {
    id?: any;
    unit_of_measurement?: any;
    icon?: any;
    accuracy_decimals?: any;
    state_class?: any;
    climate_id?: ID;
    type: PidSensorConfigType;
}

export type PidSensorConfigType = 'RESULT' | 'ERROR' | 'PROPORTIONAL' | 'INTEGRAL' | 'DERIVATIVE' | 'HEAT' | 'COOL' | 'KP' | 'KI' | 'KD';

export class PidClimate extends BaseComponent<PidClimateConfig> {
    componentName: string = "pid.climate";
}

export interface PidClimateConfig extends ClimateCLIMATE_SCHEMA {
    id?: any;
    sensor: ID;
    default_target_temperature: string;
    cool_output?: ID;
    heat_output?: ID;
    deadband_parameters?: PidClimateConfigDeadbandParameters;
    control_parameters: PidClimateConfigControlParameters;
}

export interface PidClimateConfigDeadbandParameters {
    threshold_high: string;
    threshold_low: string;
    kp_multiplier?: any;
    ki_multiplier?: any;
    kd_multiplier?: any;
    deadband_output_averaging_samples?: number;
}

export interface PidClimateConfigControlParameters {
    kp: string;
    ki?: any;
    kd?: any;
    starting_integral_term?: any;
    min_integral?: any;
    max_integral?: any;
    derivative_averaging_samples?: number;
    output_averaging_samples?: number;
}
