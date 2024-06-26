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
import type { SensorSENSOR_SCHEMA } from "./sensor.js";
import type { CoreCOMPONENT_SCHEMA } from "./esphome.js";

export class Sgp4xSensor extends EsphomeComponent<Sgp4xSensorConfig> {
    componentName: string = "sgp4x.sensor";
}

export interface Sgp4xSensorGAS_SENSORAlgorithmTuning {
    index_offset?: number;
    learning_time_offset_hours?: number;
    learning_time_gain_hours?: number;
    gating_max_duration_minutes?: number;
    std_initial?: number;
    gain_factor?: number;
}

export interface Sgp4xSensorGAS_SENSOR {
    algorithm_tuning?: Sgp4xSensorGAS_SENSORAlgorithmTuning;
}

export type Sgp4xSensorConfigVoc = {
        icon?: any;
        accuracy_decimals?: any;
        device_class?: any;
        state_class?: any;
    } & SensorSENSOR_SCHEMA & Sgp4xSensorGAS_SENSOR;
export type Sgp4xSensorConfigNox = {
        icon?: any;
        accuracy_decimals?: any;
        device_class?: any;
        state_class?: any;
    } & SensorSENSOR_SCHEMA & Sgp4xSensorGAS_SENSOR;

export interface Sgp4xSensorConfigCompensation {
    humidity_source: ID;
    temperature_source: ID;
}

export interface Sgp4xSensorConfig extends CoreCOMPONENT_SCHEMA {
    id?: ID;
    voc?: Sgp4xSensorConfigVoc;
    nox?: Sgp4xSensorConfigNox;
    store_baseline?: boolean;
    voc_baseline?: any;
    compensation?: Sgp4xSensorConfigCompensation;
    update_interval?: any;
    i2c_id?: ID;
    address?: any;
}
