/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: combination.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/combination
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes)
 **/
import { type ID, type Pin, EsphomeComponent } from "@/lib/base.js";
import type { Sensor_SENSOR_SCHEMA } from "./sensor.js";

export class CombinationSensor extends EsphomeComponent<CombinationSensorConfig> {
    componentName: string = "combination.sensor";
}

export type CombinationSensorConfig = CombinationSensorConfigKalman | CombinationSensorConfigLinear | CombinationSensorConfigMax | CombinationSensorConfigMean | CombinationSensorConfigMedian | CombinationSensorConfigMin | CombinationSensorConfigMostRecentlyUpdated | CombinationSensorConfigRange | CombinationSensorConfigSum;

export interface CombinationSensorConfigKalmanSources {
    error: string;
    source: ID;
}

export type CombinationSensorConfigKalmanStdDev = Sensor_SENSOR_SCHEMA;

export interface CombinationSensorConfigKalman {
    type: "kalman" | "KALMAN";
    id?: any;
    process_std_dev: string;
    sources: CombinationSensorConfigKalmanSources[];
    std_dev?: CombinationSensorConfigKalmanStdDev;
}

export interface CombinationSensorConfigLinearSources {
    coeffecient?: any;
    coefficient?: any;
    source: ID;
}

export interface CombinationSensorConfigLinear {
    type: "linear" | "LINEAR";
    id?: any;
    sources: CombinationSensorConfigLinearSources[];
}

export type CombinationSensorConfigMaxSources = CombinationSensorSENSOR_ONLY_SOURCE_SCHEMA;

export interface CombinationSensorConfigMax {
    type: "max" | "MAX";
    id?: any;
    sources: CombinationSensorConfigMaxSources[];
}

export type CombinationSensorConfigMeanSources = CombinationSensorSENSOR_ONLY_SOURCE_SCHEMA;

export interface CombinationSensorConfigMean {
    type: "mean" | "MEAN";
    id?: any;
    sources: CombinationSensorConfigMeanSources[];
}

export type CombinationSensorConfigMedianSources = CombinationSensorSENSOR_ONLY_SOURCE_SCHEMA;

export interface CombinationSensorConfigMedian {
    type: "median" | "MEDIAN";
    id?: any;
    sources: CombinationSensorConfigMedianSources[];
}

export type CombinationSensorConfigMinSources = CombinationSensorSENSOR_ONLY_SOURCE_SCHEMA;

export interface CombinationSensorConfigMin {
    type: "min" | "MIN";
    id?: any;
    sources: CombinationSensorConfigMinSources[];
}

export type CombinationSensorConfigMostRecentlyUpdatedSources = CombinationSensorSENSOR_ONLY_SOURCE_SCHEMA;

export interface CombinationSensorConfigMostRecentlyUpdated {
    type: "most_recently_updated" | "MOST_RECENTLY_UPDATED";
    id?: any;
    sources: CombinationSensorConfigMostRecentlyUpdatedSources[];
}

export type CombinationSensorConfigRangeSources = CombinationSensorSENSOR_ONLY_SOURCE_SCHEMA;

export interface CombinationSensorConfigRange {
    type: "range" | "RANGE";
    id?: any;
    sources: CombinationSensorConfigRangeSources[];
}

export type CombinationSensorConfigSumSources = CombinationSensorSENSOR_ONLY_SOURCE_SCHEMA;

export interface CombinationSensorConfigSum {
    type: "sum" | "SUM";
    id?: any;
    sources: CombinationSensorConfigSumSources[];
}

export interface CombinationSensorSENSOR_ONLY_SOURCE_SCHEMA {
    source: ID;
}
