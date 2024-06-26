/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: sen5x.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/sen5x
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes)
 **/
import { type ID, type Pin, EsphomeComponent } from "@/lib/base.js";
import type { SensorSENSOR_SCHEMA } from "./sensor.js";
import type { CoreCOMPONENT_SCHEMA } from "./esphome.js";

export class Sen5xSensor extends EsphomeComponent<Sen5xSensorConfig> {
    componentName: string = "sen5x.sensor";
}

export interface Sen5xSensorGAS_SENSORAlgorithmTuning {
    index_offset?: number;
    learning_time_offset_hours?: number;
    learning_time_gain_hours?: number;
    gating_max_duration_minutes?: number;
    std_initial?: number;
    gain_factor?: number;
}

export interface Sen5xSensorGAS_SENSOR {
    algorithm_tuning?: Sen5xSensorGAS_SENSORAlgorithmTuning;
}

export interface Sen5xSensorConfigPm_1_0 extends SensorSENSOR_SCHEMA {
    unit_of_measurement?: any;
    icon?: any;
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
}

export interface Sen5xSensorConfigPm_2_5 extends SensorSENSOR_SCHEMA {
    unit_of_measurement?: any;
    icon?: any;
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
}

export interface Sen5xSensorConfigPm_4_0 extends SensorSENSOR_SCHEMA {
    unit_of_measurement?: any;
    icon?: any;
    accuracy_decimals?: any;
    state_class?: any;
}

export interface Sen5xSensorConfigPm_10_0 extends SensorSENSOR_SCHEMA {
    unit_of_measurement?: any;
    icon?: any;
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
}

export type Sen5xSensorConfigVoc = {
        icon?: any;
        accuracy_decimals?: any;
        device_class?: any;
        state_class?: any;
    } & SensorSENSOR_SCHEMA & Sen5xSensorGAS_SENSOR;
export type Sen5xSensorConfigNox = {
        icon?: any;
        accuracy_decimals?: any;
        device_class?: any;
        state_class?: any;
    } & SensorSENSOR_SCHEMA & Sen5xSensorGAS_SENSOR;

export interface Sen5xSensorConfigTemperature extends SensorSENSOR_SCHEMA {
    unit_of_measurement?: any;
    icon?: any;
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
}

export interface Sen5xSensorConfigHumidity extends SensorSENSOR_SCHEMA {
    unit_of_measurement?: any;
    icon?: any;
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
}

export interface Sen5xSensorConfigTemperatureCompensation {
    offset?: any;
    normalized_offset_slope?: any;
    time_constant?: number;
}

export type Sen5xSensorConfigAccelerationMode = 'low' | 'medium' | 'high';

export interface Sen5xSensorConfig extends CoreCOMPONENT_SCHEMA {
    id?: ID;
    pm_1_0?: Sen5xSensorConfigPm_1_0;
    pm_2_5?: Sen5xSensorConfigPm_2_5;
    pm_4_0?: Sen5xSensorConfigPm_4_0;
    pm_10_0?: Sen5xSensorConfigPm_10_0;
    auto_cleaning_interval?: any;
    voc?: Sen5xSensorConfigVoc;
    nox?: Sen5xSensorConfigNox;
    store_baseline?: boolean;
    voc_baseline?: any;
    temperature?: Sen5xSensorConfigTemperature;
    humidity?: Sen5xSensorConfigHumidity;
    temperature_compensation?: Sen5xSensorConfigTemperatureCompensation;
    acceleration_mode?: Sen5xSensorConfigAccelerationMode;
    update_interval?: any;
    i2c_id?: ID;
    address?: any;
}

export abstract class Sen5x extends EsphomeComponent {
    componentName: string = "sen5x";
}
