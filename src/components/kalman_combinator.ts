/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: kalman_combinator.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/kalman_combinator
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes)
 **/
import { type ID, type Pin, EsphomeComponent } from "@/lib/base.js";
import type { SensorSENSOR_SCHEMA } from "./sensor.js";
import type { CoreCOMPONENT_SCHEMA } from "./esphome.js";

export class KalmanCombinatorSensor extends EsphomeComponent<KalmanCombinatorSensorConfig> {
    componentName: string = "kalman_combinator.sensor";
}

export interface KalmanCombinatorSensorConfigSources {
    source: ID;
    error: string;
}

export type KalmanCombinatorSensorConfigStdDev = SensorSENSOR_SCHEMA;
export type KalmanCombinatorSensorConfig = {
        id?: any;
        process_std_dev: string;
        sources: KalmanCombinatorSensorConfigSources[];
        std_dev?: KalmanCombinatorSensorConfigStdDev;
    } & SensorSENSOR_SCHEMA & CoreCOMPONENT_SCHEMA;
