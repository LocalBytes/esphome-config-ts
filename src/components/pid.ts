/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: pid.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/pid
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes)
 **/
import { type ID, type Pin, EsphomeComponent } from "@/lib/base.js";
import type { Climate_CLIMATE_SCHEMA } from "./climate.js";
import type { Sensor_SENSOR_SCHEMA } from "./sensor.js";
import type { CoreCOMPONENT_SCHEMA } from "./esphome.js";

export class PidClimate extends EsphomeComponent<PidClimateConfig> {
    componentName: string = "pid.climate";
}

export interface PidClimateConfigControlParameters {
    derivative_averaging_samples?: number;
    kd?: any;
    ki?: any;
    kp: string;
    max_integral?: any;
    min_integral?: any;
    output_averaging_samples?: number;
    starting_integral_term?: any;
}

export interface PidClimateConfigDeadbandParameters {
    deadband_output_averaging_samples?: number;
    kd_multiplier?: any;
    ki_multiplier?: any;
    kp_multiplier?: any;
    threshold_high: string;
    threshold_low: string;
}

export interface PidClimateConfig extends Climate_CLIMATE_SCHEMA {
    control_parameters: PidClimateConfigControlParameters;
    cool_output?: ID;
    deadband_parameters?: PidClimateConfigDeadbandParameters;
    default_target_temperature: string;
    heat_output?: ID;
    humidity_sensor?: ID;
    id?: ID;
    sensor: ID;
}

export class PidSensor extends EsphomeComponent<PidSensorConfig> {
    componentName: string = "pid.sensor";
}

export type PidSensorConfigType = 'RESULT' | 'ERROR' | 'PROPORTIONAL' | 'INTEGRAL' | 'DERIVATIVE' | 'HEAT' | 'COOL' | 'KP' | 'KI' | 'KD';
export type PidSensorConfig = {
        accuracy_decimals?: any;
        climate_id?: ID;
        icon?: any;
        id?: any;
        state_class?: any;
        type: PidSensorConfigType;
        unit_of_measurement?: any;
    } & Sensor_SENSOR_SCHEMA & CoreCOMPONENT_SCHEMA;
