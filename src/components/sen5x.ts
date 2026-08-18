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
import type { SensorSENSORSCHEMA } from "./sensor.js";
import type { CoreCOMPONENTSCHEMA } from "./esphome.js";

export abstract class Sen5x extends EsphomeComponent {
    componentName: string = "sen5x";
}

export class Sen5xSensor extends EsphomeComponent<Sen5xSensorConfig> {
    componentName: string = "sen5x.sensor";
}

export type Sen5xSensorConfigAccelerationMode = 'low' | 'medium' | 'high';

export interface Sen5xSensorConfigHumidity extends SensorSENSORSCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    icon?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface Sen5xSensorConfigNoxAlgorithmTuning {
    gain_factor?: number;
    gating_max_duration_minutes?: number;
    index_offset?: number;
    learning_time_gain_hours?: number;
    learning_time_offset_hours?: number;
    std_initial?: number;
}

export interface Sen5xSensorConfigNox extends SensorSENSORSCHEMA {
    accuracy_decimals?: any;
    algorithm_tuning?: Sen5xSensorConfigNoxAlgorithmTuning;
    icon?: any;
    state_class?: any;
}

export interface Sen5xSensorConfigPm100 extends SensorSENSORSCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    icon?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface Sen5xSensorConfigPm10 extends SensorSENSORSCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    icon?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface Sen5xSensorConfigPm25 extends SensorSENSORSCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    icon?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface Sen5xSensorConfigPm40 extends SensorSENSORSCHEMA {
    accuracy_decimals?: any;
    icon?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface Sen5xSensorConfigTemperature extends SensorSENSORSCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    icon?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface Sen5xSensorConfigTemperatureCompensation {
    normalized_offset_slope?: any;
    offset?: any;
    time_constant?: number;
}

export interface Sen5xSensorConfigVocAlgorithmTuning {
    gain_factor?: number;
    gating_max_duration_minutes?: number;
    index_offset?: number;
    learning_time_gain_hours?: number;
    learning_time_offset_hours?: number;
    std_initial?: number;
}

export interface Sen5xSensorConfigVoc extends SensorSENSORSCHEMA {
    accuracy_decimals?: any;
    algorithm_tuning?: Sen5xSensorConfigVocAlgorithmTuning;
    icon?: any;
    state_class?: any;
}

export interface Sen5xSensorConfig extends CoreCOMPONENTSCHEMA {
    acceleration_mode?: Sen5xSensorConfigAccelerationMode;
    address?: any;
    auto_cleaning_interval?: any;
    humidity?: Sen5xSensorConfigHumidity;
    i2c_id?: ID;
    id?: ID;
    nox?: Sen5xSensorConfigNox;
    pm_10_0?: Sen5xSensorConfigPm100;
    pm_1_0?: Sen5xSensorConfigPm10;
    pm_2_5?: Sen5xSensorConfigPm25;
    pm_4_0?: Sen5xSensorConfigPm40;
    store_baseline?: boolean;
    temperature?: Sen5xSensorConfigTemperature;
    temperature_compensation?: Sen5xSensorConfigTemperatureCompensation;
    update_interval?: any;
    voc?: Sen5xSensorConfigVoc;
}
