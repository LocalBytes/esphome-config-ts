/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: kalman_combinator.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/kalman_combinator
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes) 2023
 **/
import { ID, Pin, BaseComponent } from "../base.js";
import { SensorSENSOR_SCHEMA } from "./sensor.js";
import { CoreCOMPONENT_SCHEMA } from "./esphome.js";

export class KalmanCombinatorSensor extends BaseComponent<KalmanCombinatorSensorConfig> {
    componentName: string = "kalman_combinator.sensor";
}

export interface KalmanCombinatorSensorConfig extends SensorSENSOR_SCHEMA, CoreCOMPONENT_SCHEMA {
    id?: any;
    process_std_dev: string;
    sources: KalmanCombinatorSensorConfigSources[];
    std_dev?: KalmanCombinatorSensorConfigStdDev;
}

export interface KalmanCombinatorSensorConfigSources {
    source: ID;
    error: string;
}

export interface KalmanCombinatorSensorConfigStdDev extends SensorSENSOR_SCHEMA {
}
