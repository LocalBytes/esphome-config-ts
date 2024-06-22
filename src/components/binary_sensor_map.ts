/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 *
 * Schema: binary_sensor_map.json
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/binary_sensor_map
 *
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes)
 **/
import { type ID, type Pin, EsphomeComponent } from "@/lib/base.js";

export class BinarySensorMapSensor extends EsphomeComponent<BinarySensorMapSensorConfig> {
    componentName: string = "binary_sensor_map.sensor";
}

export interface BinarySensorMapSensorEntryOneParameter {
    binary_sensor: ID;
    value: string;
}

export type BinarySensorMapSensorConfig = BinarySensorMapSensorConfigGroup | BinarySensorMapSensorConfigSum | BinarySensorMapSensorConfigBayesian;
export type BinarySensorMapSensorConfigGroupChannels = BinarySensorMapSensorEntryOneParameter;

export interface BinarySensorMapSensorConfigGroup {
    type: "group" | "GROUP";
    id?: any;
    icon?: any;
    accuracy_decimals?: any;
    channels: BinarySensorMapSensorConfigGroupChannels[];
}

export type BinarySensorMapSensorConfigSumChannels = BinarySensorMapSensorEntryOneParameter;

export interface BinarySensorMapSensorConfigSum {
    type: "sum" | "SUM";
    id?: any;
    icon?: any;
    accuracy_decimals?: any;
    channels: BinarySensorMapSensorConfigSumChannels[];
}

export interface BinarySensorMapSensorConfigBayesianObservations {
    binary_sensor: ID;
    prob_given_true: string;
    prob_given_false: string;
}

export interface BinarySensorMapSensorConfigBayesian {
    type: "bayesian" | "BAYESIAN";
    id?: any;
    accuracy_decimals?: any;
    prior: string;
    observations: BinarySensorMapSensorConfigBayesianObservations[];
}
