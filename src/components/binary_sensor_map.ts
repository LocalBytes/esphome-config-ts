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

export type BinarySensorMapSensorConfig = BinarySensorMapSensorConfigBayesian | BinarySensorMapSensorConfigGroup | BinarySensorMapSensorConfigSum;

export interface BinarySensorMapSensorConfigBayesianObservations {
    binary_sensor: ID;
    prob_given_false: string;
    prob_given_true: string;
}

export interface BinarySensorMapSensorConfigBayesian {
    type: "bayesian" | "BAYESIAN";
    accuracy_decimals?: any;
    id?: any;
    observations: BinarySensorMapSensorConfigBayesianObservations[];
    prior?: any;
}

export type BinarySensorMapSensorConfigGroupChannels = BinarySensorMapSensorEntryOneParameter;

export interface BinarySensorMapSensorConfigGroup {
    type: "group" | "GROUP";
    accuracy_decimals?: any;
    channels: BinarySensorMapSensorConfigGroupChannels[];
    icon?: any;
    id?: any;
}

export type BinarySensorMapSensorConfigSumChannels = BinarySensorMapSensorEntryOneParameter;

export interface BinarySensorMapSensorConfigSum {
    type: "sum" | "SUM";
    accuracy_decimals?: any;
    channels: BinarySensorMapSensorConfigSumChannels[];
    icon?: any;
    id?: any;
}

export interface BinarySensorMapSensorEntryOneParameter {
    binary_sensor: ID;
    value: string;
}
