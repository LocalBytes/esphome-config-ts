/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: sgp4x.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/sgp4x
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes)
 **/
import { type ID, type Pin, EsphomeComponent } from "@/lib/base.js";
import type { CoreCOMPONENTSCHEMA } from "./esphome.js";

export class Sgp4xSensor extends EsphomeComponent<Sgp4xSensorConfig> {
    componentName: string = "sgp4x.sensor";
}

export interface Sgp4xSensorConfigCompensation {
    humidity_source: ID;
    temperature_source: ID;
}

export interface Sgp4xSensorConfigNoxAlgorithmTuning {
    gain_factor?: number;
    gating_max_duration_minutes?: number;
    index_offset?: number;
    learning_time_gain_hours?: number;
    learning_time_offset_hours?: number;
    std_initial?: number;
}

export interface Sgp4xSensorConfigNox {
    accuracy_decimals?: any;
    algorithm_tuning?: Sgp4xSensorConfigNoxAlgorithmTuning;
    icon?: any;
    state_class?: any;
}

export interface Sgp4xSensorConfigVocAlgorithmTuning {
    gain_factor?: number;
    gating_max_duration_minutes?: number;
    index_offset?: number;
    learning_time_gain_hours?: number;
    learning_time_offset_hours?: number;
    std_initial?: number;
}

export interface Sgp4xSensorConfigVoc {
    accuracy_decimals?: any;
    algorithm_tuning?: Sgp4xSensorConfigVocAlgorithmTuning;
    icon?: any;
    state_class?: any;
}

export interface Sgp4xSensorConfig extends CoreCOMPONENTSCHEMA {
    address?: any;
    compensation?: Sgp4xSensorConfigCompensation;
    i2c_id?: ID;
    id?: ID;
    nox?: Sgp4xSensorConfigNox;
    store_baseline?: boolean;
    update_interval?: any;
    voc?: Sgp4xSensorConfigVoc;
}
