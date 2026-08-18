/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: ld2412.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/ld2412
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes)
 **/
import { type ID, type Pin, EsphomeComponent } from "@/lib/base.js";
import type { CoreCOMPONENT_SCHEMA } from "./esphome.js";
import type { BinarySensor_BINARY_SENSOR_SCHEMA } from "./binary_sensor.js";
import type { Button_BUTTON_SCHEMA } from "./button.js";
import type { Number_NUMBER_SCHEMA } from "./number.js";
import type { Select_SELECT_SCHEMA } from "./select.js";
import type { Sensor_SENSOR_SCHEMA } from "./sensor.js";
import type { Switch_SWITCH_SCHEMA } from "./switch.js";
import type { TextSensor_TEXT_SENSOR_SCHEMA } from "./text_sensor.js";

export class Ld2412 extends EsphomeComponent<Ld2412Config> {
    componentName: string = "ld2412";
}

export interface Ld2412Config extends CoreCOMPONENT_SCHEMA {
    id?: ID;
    uart_id?: ID;
}

export class Ld2412BinarySensor extends EsphomeComponent<Ld2412BinarySensorConfig> {
    componentName: string = "ld2412.binary_sensor";
}

export interface Ld2412BinarySensorConfigDynamicBackgroundCorrectionStatus extends BinarySensor_BINARY_SENSOR_SCHEMA {
    device_class?: any;
    entity_category?: any;
    icon?: any;
}

export interface Ld2412BinarySensorConfigHasMovingTarget extends BinarySensor_BINARY_SENSOR_SCHEMA {
    device_class?: any;
    filters?: any;
    icon?: any;
}

export interface Ld2412BinarySensorConfigHasStillTarget extends BinarySensor_BINARY_SENSOR_SCHEMA {
    device_class?: any;
    filters?: any;
    icon?: any;
}

export interface Ld2412BinarySensorConfigHasTarget extends BinarySensor_BINARY_SENSOR_SCHEMA {
    device_class?: any;
    filters?: any;
    icon?: any;
}

export interface Ld2412BinarySensorConfig {
    dynamic_background_correction_status?: Ld2412BinarySensorConfigDynamicBackgroundCorrectionStatus;
    has_moving_target?: Ld2412BinarySensorConfigHasMovingTarget;
    has_still_target?: Ld2412BinarySensorConfigHasStillTarget;
    has_target?: Ld2412BinarySensorConfigHasTarget;
    id?: ID;
    ld2412_id?: ID;
}

export class Ld2412Button extends EsphomeComponent<Ld2412ButtonConfig> {
    componentName: string = "ld2412.button";
}

export interface Ld2412ButtonConfigFactoryReset extends Button_BUTTON_SCHEMA {
    device_class?: any;
    entity_category?: any;
    icon?: any;
    id?: ID;
}

export interface Ld2412ButtonConfigQueryParams extends Button_BUTTON_SCHEMA {
    entity_category?: any;
    icon?: any;
    id?: ID;
}

export interface Ld2412ButtonConfigRestart extends Button_BUTTON_SCHEMA {
    device_class?: any;
    entity_category?: any;
    icon?: any;
    id?: ID;
}

export interface Ld2412ButtonConfigStartDynamicBackgroundCorrection extends Button_BUTTON_SCHEMA {
    entity_category?: any;
    icon?: any;
    id?: ID;
}

export interface Ld2412ButtonConfig {
    factory_reset?: Ld2412ButtonConfigFactoryReset;
    id?: ID;
    ld2412_id?: ID;
    query_params?: Ld2412ButtonConfigQueryParams;
    restart?: Ld2412ButtonConfigRestart;
    start_dynamic_background_correction?: Ld2412ButtonConfigStartDynamicBackgroundCorrection;
}

export class Ld2412Number extends EsphomeComponent<Ld2412NumberConfig> {
    componentName: string = "ld2412.number";
}

export interface Ld2412NumberConfigGate_0MoveThreshold extends Number_NUMBER_SCHEMA {
    device_class?: any;
    entity_category?: any;
    icon?: any;
    id?: ID;
    unit_of_measurement?: any;
}

export interface Ld2412NumberConfigGate_0StillThreshold extends Number_NUMBER_SCHEMA {
    device_class?: any;
    entity_category?: any;
    icon?: any;
    id?: ID;
    unit_of_measurement?: any;
}

export interface Ld2412NumberConfigGate_0 {
    move_threshold: Ld2412NumberConfigGate_0MoveThreshold;
    still_threshold: Ld2412NumberConfigGate_0StillThreshold;
}

export interface Ld2412NumberConfigGate_1MoveThreshold extends Number_NUMBER_SCHEMA {
    device_class?: any;
    entity_category?: any;
    icon?: any;
    id?: ID;
    unit_of_measurement?: any;
}

export interface Ld2412NumberConfigGate_1StillThreshold extends Number_NUMBER_SCHEMA {
    device_class?: any;
    entity_category?: any;
    icon?: any;
    id?: ID;
    unit_of_measurement?: any;
}

export interface Ld2412NumberConfigGate_1 {
    move_threshold: Ld2412NumberConfigGate_1MoveThreshold;
    still_threshold: Ld2412NumberConfigGate_1StillThreshold;
}

export interface Ld2412NumberConfigGate_10MoveThreshold extends Number_NUMBER_SCHEMA {
    device_class?: any;
    entity_category?: any;
    icon?: any;
    id?: ID;
    unit_of_measurement?: any;
}

export interface Ld2412NumberConfigGate_10StillThreshold extends Number_NUMBER_SCHEMA {
    device_class?: any;
    entity_category?: any;
    icon?: any;
    id?: ID;
    unit_of_measurement?: any;
}

export interface Ld2412NumberConfigGate_10 {
    move_threshold: Ld2412NumberConfigGate_10MoveThreshold;
    still_threshold: Ld2412NumberConfigGate_10StillThreshold;
}

export interface Ld2412NumberConfigGate_11MoveThreshold extends Number_NUMBER_SCHEMA {
    device_class?: any;
    entity_category?: any;
    icon?: any;
    id?: ID;
    unit_of_measurement?: any;
}

export interface Ld2412NumberConfigGate_11StillThreshold extends Number_NUMBER_SCHEMA {
    device_class?: any;
    entity_category?: any;
    icon?: any;
    id?: ID;
    unit_of_measurement?: any;
}

export interface Ld2412NumberConfigGate_11 {
    move_threshold: Ld2412NumberConfigGate_11MoveThreshold;
    still_threshold: Ld2412NumberConfigGate_11StillThreshold;
}

export interface Ld2412NumberConfigGate_12MoveThreshold extends Number_NUMBER_SCHEMA {
    device_class?: any;
    entity_category?: any;
    icon?: any;
    id?: ID;
    unit_of_measurement?: any;
}

export interface Ld2412NumberConfigGate_12StillThreshold extends Number_NUMBER_SCHEMA {
    device_class?: any;
    entity_category?: any;
    icon?: any;
    id?: ID;
    unit_of_measurement?: any;
}

export interface Ld2412NumberConfigGate_12 {
    move_threshold: Ld2412NumberConfigGate_12MoveThreshold;
    still_threshold: Ld2412NumberConfigGate_12StillThreshold;
}

export interface Ld2412NumberConfigGate_13MoveThreshold extends Number_NUMBER_SCHEMA {
    device_class?: any;
    entity_category?: any;
    icon?: any;
    id?: ID;
    unit_of_measurement?: any;
}

export interface Ld2412NumberConfigGate_13StillThreshold extends Number_NUMBER_SCHEMA {
    device_class?: any;
    entity_category?: any;
    icon?: any;
    id?: ID;
    unit_of_measurement?: any;
}

export interface Ld2412NumberConfigGate_13 {
    move_threshold: Ld2412NumberConfigGate_13MoveThreshold;
    still_threshold: Ld2412NumberConfigGate_13StillThreshold;
}

export interface Ld2412NumberConfigGate_2MoveThreshold extends Number_NUMBER_SCHEMA {
    device_class?: any;
    entity_category?: any;
    icon?: any;
    id?: ID;
    unit_of_measurement?: any;
}

export interface Ld2412NumberConfigGate_2StillThreshold extends Number_NUMBER_SCHEMA {
    device_class?: any;
    entity_category?: any;
    icon?: any;
    id?: ID;
    unit_of_measurement?: any;
}

export interface Ld2412NumberConfigGate_2 {
    move_threshold: Ld2412NumberConfigGate_2MoveThreshold;
    still_threshold: Ld2412NumberConfigGate_2StillThreshold;
}

export interface Ld2412NumberConfigGate_3MoveThreshold extends Number_NUMBER_SCHEMA {
    device_class?: any;
    entity_category?: any;
    icon?: any;
    id?: ID;
    unit_of_measurement?: any;
}

export interface Ld2412NumberConfigGate_3StillThreshold extends Number_NUMBER_SCHEMA {
    device_class?: any;
    entity_category?: any;
    icon?: any;
    id?: ID;
    unit_of_measurement?: any;
}

export interface Ld2412NumberConfigGate_3 {
    move_threshold: Ld2412NumberConfigGate_3MoveThreshold;
    still_threshold: Ld2412NumberConfigGate_3StillThreshold;
}

export interface Ld2412NumberConfigGate_4MoveThreshold extends Number_NUMBER_SCHEMA {
    device_class?: any;
    entity_category?: any;
    icon?: any;
    id?: ID;
    unit_of_measurement?: any;
}

export interface Ld2412NumberConfigGate_4StillThreshold extends Number_NUMBER_SCHEMA {
    device_class?: any;
    entity_category?: any;
    icon?: any;
    id?: ID;
    unit_of_measurement?: any;
}

export interface Ld2412NumberConfigGate_4 {
    move_threshold: Ld2412NumberConfigGate_4MoveThreshold;
    still_threshold: Ld2412NumberConfigGate_4StillThreshold;
}

export interface Ld2412NumberConfigGate_5MoveThreshold extends Number_NUMBER_SCHEMA {
    device_class?: any;
    entity_category?: any;
    icon?: any;
    id?: ID;
    unit_of_measurement?: any;
}

export interface Ld2412NumberConfigGate_5StillThreshold extends Number_NUMBER_SCHEMA {
    device_class?: any;
    entity_category?: any;
    icon?: any;
    id?: ID;
    unit_of_measurement?: any;
}

export interface Ld2412NumberConfigGate_5 {
    move_threshold: Ld2412NumberConfigGate_5MoveThreshold;
    still_threshold: Ld2412NumberConfigGate_5StillThreshold;
}

export interface Ld2412NumberConfigGate_6MoveThreshold extends Number_NUMBER_SCHEMA {
    device_class?: any;
    entity_category?: any;
    icon?: any;
    id?: ID;
    unit_of_measurement?: any;
}

export interface Ld2412NumberConfigGate_6StillThreshold extends Number_NUMBER_SCHEMA {
    device_class?: any;
    entity_category?: any;
    icon?: any;
    id?: ID;
    unit_of_measurement?: any;
}

export interface Ld2412NumberConfigGate_6 {
    move_threshold: Ld2412NumberConfigGate_6MoveThreshold;
    still_threshold: Ld2412NumberConfigGate_6StillThreshold;
}

export interface Ld2412NumberConfigGate_7MoveThreshold extends Number_NUMBER_SCHEMA {
    device_class?: any;
    entity_category?: any;
    icon?: any;
    id?: ID;
    unit_of_measurement?: any;
}

export interface Ld2412NumberConfigGate_7StillThreshold extends Number_NUMBER_SCHEMA {
    device_class?: any;
    entity_category?: any;
    icon?: any;
    id?: ID;
    unit_of_measurement?: any;
}

export interface Ld2412NumberConfigGate_7 {
    move_threshold: Ld2412NumberConfigGate_7MoveThreshold;
    still_threshold: Ld2412NumberConfigGate_7StillThreshold;
}

export interface Ld2412NumberConfigGate_8MoveThreshold extends Number_NUMBER_SCHEMA {
    device_class?: any;
    entity_category?: any;
    icon?: any;
    id?: ID;
    unit_of_measurement?: any;
}

export interface Ld2412NumberConfigGate_8StillThreshold extends Number_NUMBER_SCHEMA {
    device_class?: any;
    entity_category?: any;
    icon?: any;
    id?: ID;
    unit_of_measurement?: any;
}

export interface Ld2412NumberConfigGate_8 {
    move_threshold: Ld2412NumberConfigGate_8MoveThreshold;
    still_threshold: Ld2412NumberConfigGate_8StillThreshold;
}

export interface Ld2412NumberConfigGate_9MoveThreshold extends Number_NUMBER_SCHEMA {
    device_class?: any;
    entity_category?: any;
    icon?: any;
    id?: ID;
    unit_of_measurement?: any;
}

export interface Ld2412NumberConfigGate_9StillThreshold extends Number_NUMBER_SCHEMA {
    device_class?: any;
    entity_category?: any;
    icon?: any;
    id?: ID;
    unit_of_measurement?: any;
}

export interface Ld2412NumberConfigGate_9 {
    move_threshold: Ld2412NumberConfigGate_9MoveThreshold;
    still_threshold: Ld2412NumberConfigGate_9StillThreshold;
}

export interface Ld2412NumberConfigLightThreshold extends Number_NUMBER_SCHEMA {
    device_class?: any;
    entity_category?: any;
    icon?: any;
    id?: ID;
}

export interface Ld2412NumberConfigMaxDistanceGate extends Number_NUMBER_SCHEMA {
    device_class?: any;
    entity_category?: any;
    icon?: any;
    id?: ID;
}

export interface Ld2412NumberConfigMinDistanceGate extends Number_NUMBER_SCHEMA {
    device_class?: any;
    entity_category?: any;
    icon?: any;
    id?: ID;
}

export interface Ld2412NumberConfigTimeout extends Number_NUMBER_SCHEMA {
    entity_category?: any;
    icon?: any;
    id?: ID;
    unit_of_measurement?: any;
}

export interface Ld2412NumberConfig {
    gate_0?: Ld2412NumberConfigGate_0;
    gate_1?: Ld2412NumberConfigGate_1;
    gate_10?: Ld2412NumberConfigGate_10;
    gate_11?: Ld2412NumberConfigGate_11;
    gate_12?: Ld2412NumberConfigGate_12;
    gate_13?: Ld2412NumberConfigGate_13;
    gate_2?: Ld2412NumberConfigGate_2;
    gate_3?: Ld2412NumberConfigGate_3;
    gate_4?: Ld2412NumberConfigGate_4;
    gate_5?: Ld2412NumberConfigGate_5;
    gate_6?: Ld2412NumberConfigGate_6;
    gate_7?: Ld2412NumberConfigGate_7;
    gate_8?: Ld2412NumberConfigGate_8;
    gate_9?: Ld2412NumberConfigGate_9;
    id?: ID;
    ld2412_id?: ID;
    light_threshold?: Ld2412NumberConfigLightThreshold;
    max_distance_gate?: Ld2412NumberConfigMaxDistanceGate;
    min_distance_gate?: Ld2412NumberConfigMinDistanceGate;
    timeout?: Ld2412NumberConfigTimeout;
}

export class Ld2412Select extends EsphomeComponent<Ld2412SelectConfig> {
    componentName: string = "ld2412.select";
}

export interface Ld2412SelectConfigBaudRate extends Select_SELECT_SCHEMA {
    entity_category?: any;
    icon?: any;
    id?: any;
}

export interface Ld2412SelectConfigDistanceResolution extends Select_SELECT_SCHEMA {
    entity_category?: any;
    icon?: any;
    id?: any;
}

export interface Ld2412SelectConfigLightFunction extends Select_SELECT_SCHEMA {
    entity_category?: any;
    icon?: any;
    id?: any;
}

export interface Ld2412SelectConfigOutPinLevel extends Select_SELECT_SCHEMA {
    entity_category?: any;
    icon?: any;
    id?: any;
}

export interface Ld2412SelectConfig {
    baud_rate?: Ld2412SelectConfigBaudRate;
    distance_resolution?: Ld2412SelectConfigDistanceResolution;
    id?: ID;
    ld2412_id?: ID;
    light_function?: Ld2412SelectConfigLightFunction;
    out_pin_level?: Ld2412SelectConfigOutPinLevel;
}

export class Ld2412Sensor extends EsphomeComponent<Ld2412SensorConfig> {
    componentName: string = "ld2412.sensor";
}

export interface Ld2412SensorConfigDetectionDistance extends Sensor_SENSOR_SCHEMA {
    device_class?: any;
    filters?: any;
    icon?: any;
    unit_of_measurement?: any;
}

export interface Ld2412SensorConfigGate_0MoveEnergy extends Sensor_SENSOR_SCHEMA {
    entity_category?: any;
    filters?: any;
    icon?: any;
    unit_of_measurement?: any;
}

export interface Ld2412SensorConfigGate_0StillEnergy extends Sensor_SENSOR_SCHEMA {
    entity_category?: any;
    filters?: any;
    icon?: any;
    unit_of_measurement?: any;
}

export interface Ld2412SensorConfigGate_0 {
    move_energy?: Ld2412SensorConfigGate_0MoveEnergy;
    still_energy?: Ld2412SensorConfigGate_0StillEnergy;
}

export interface Ld2412SensorConfigGate_1MoveEnergy extends Sensor_SENSOR_SCHEMA {
    entity_category?: any;
    filters?: any;
    icon?: any;
    unit_of_measurement?: any;
}

export interface Ld2412SensorConfigGate_1StillEnergy extends Sensor_SENSOR_SCHEMA {
    entity_category?: any;
    filters?: any;
    icon?: any;
    unit_of_measurement?: any;
}

export interface Ld2412SensorConfigGate_1 {
    move_energy?: Ld2412SensorConfigGate_1MoveEnergy;
    still_energy?: Ld2412SensorConfigGate_1StillEnergy;
}

export interface Ld2412SensorConfigGate_10MoveEnergy extends Sensor_SENSOR_SCHEMA {
    entity_category?: any;
    filters?: any;
    icon?: any;
    unit_of_measurement?: any;
}

export interface Ld2412SensorConfigGate_10StillEnergy extends Sensor_SENSOR_SCHEMA {
    entity_category?: any;
    filters?: any;
    icon?: any;
    unit_of_measurement?: any;
}

export interface Ld2412SensorConfigGate_10 {
    move_energy?: Ld2412SensorConfigGate_10MoveEnergy;
    still_energy?: Ld2412SensorConfigGate_10StillEnergy;
}

export interface Ld2412SensorConfigGate_11MoveEnergy extends Sensor_SENSOR_SCHEMA {
    entity_category?: any;
    filters?: any;
    icon?: any;
    unit_of_measurement?: any;
}

export interface Ld2412SensorConfigGate_11StillEnergy extends Sensor_SENSOR_SCHEMA {
    entity_category?: any;
    filters?: any;
    icon?: any;
    unit_of_measurement?: any;
}

export interface Ld2412SensorConfigGate_11 {
    move_energy?: Ld2412SensorConfigGate_11MoveEnergy;
    still_energy?: Ld2412SensorConfigGate_11StillEnergy;
}

export interface Ld2412SensorConfigGate_12MoveEnergy extends Sensor_SENSOR_SCHEMA {
    entity_category?: any;
    filters?: any;
    icon?: any;
    unit_of_measurement?: any;
}

export interface Ld2412SensorConfigGate_12StillEnergy extends Sensor_SENSOR_SCHEMA {
    entity_category?: any;
    filters?: any;
    icon?: any;
    unit_of_measurement?: any;
}

export interface Ld2412SensorConfigGate_12 {
    move_energy?: Ld2412SensorConfigGate_12MoveEnergy;
    still_energy?: Ld2412SensorConfigGate_12StillEnergy;
}

export interface Ld2412SensorConfigGate_13MoveEnergy extends Sensor_SENSOR_SCHEMA {
    entity_category?: any;
    filters?: any;
    icon?: any;
    unit_of_measurement?: any;
}

export interface Ld2412SensorConfigGate_13StillEnergy extends Sensor_SENSOR_SCHEMA {
    entity_category?: any;
    filters?: any;
    icon?: any;
    unit_of_measurement?: any;
}

export interface Ld2412SensorConfigGate_13 {
    move_energy?: Ld2412SensorConfigGate_13MoveEnergy;
    still_energy?: Ld2412SensorConfigGate_13StillEnergy;
}

export interface Ld2412SensorConfigGate_2MoveEnergy extends Sensor_SENSOR_SCHEMA {
    entity_category?: any;
    filters?: any;
    icon?: any;
    unit_of_measurement?: any;
}

export interface Ld2412SensorConfigGate_2StillEnergy extends Sensor_SENSOR_SCHEMA {
    entity_category?: any;
    filters?: any;
    icon?: any;
    unit_of_measurement?: any;
}

export interface Ld2412SensorConfigGate_2 {
    move_energy?: Ld2412SensorConfigGate_2MoveEnergy;
    still_energy?: Ld2412SensorConfigGate_2StillEnergy;
}

export interface Ld2412SensorConfigGate_3MoveEnergy extends Sensor_SENSOR_SCHEMA {
    entity_category?: any;
    filters?: any;
    icon?: any;
    unit_of_measurement?: any;
}

export interface Ld2412SensorConfigGate_3StillEnergy extends Sensor_SENSOR_SCHEMA {
    entity_category?: any;
    filters?: any;
    icon?: any;
    unit_of_measurement?: any;
}

export interface Ld2412SensorConfigGate_3 {
    move_energy?: Ld2412SensorConfigGate_3MoveEnergy;
    still_energy?: Ld2412SensorConfigGate_3StillEnergy;
}

export interface Ld2412SensorConfigGate_4MoveEnergy extends Sensor_SENSOR_SCHEMA {
    entity_category?: any;
    filters?: any;
    icon?: any;
    unit_of_measurement?: any;
}

export interface Ld2412SensorConfigGate_4StillEnergy extends Sensor_SENSOR_SCHEMA {
    entity_category?: any;
    filters?: any;
    icon?: any;
    unit_of_measurement?: any;
}

export interface Ld2412SensorConfigGate_4 {
    move_energy?: Ld2412SensorConfigGate_4MoveEnergy;
    still_energy?: Ld2412SensorConfigGate_4StillEnergy;
}

export interface Ld2412SensorConfigGate_5MoveEnergy extends Sensor_SENSOR_SCHEMA {
    entity_category?: any;
    filters?: any;
    icon?: any;
    unit_of_measurement?: any;
}

export interface Ld2412SensorConfigGate_5StillEnergy extends Sensor_SENSOR_SCHEMA {
    entity_category?: any;
    filters?: any;
    icon?: any;
    unit_of_measurement?: any;
}

export interface Ld2412SensorConfigGate_5 {
    move_energy?: Ld2412SensorConfigGate_5MoveEnergy;
    still_energy?: Ld2412SensorConfigGate_5StillEnergy;
}

export interface Ld2412SensorConfigGate_6MoveEnergy extends Sensor_SENSOR_SCHEMA {
    entity_category?: any;
    filters?: any;
    icon?: any;
    unit_of_measurement?: any;
}

export interface Ld2412SensorConfigGate_6StillEnergy extends Sensor_SENSOR_SCHEMA {
    entity_category?: any;
    filters?: any;
    icon?: any;
    unit_of_measurement?: any;
}

export interface Ld2412SensorConfigGate_6 {
    move_energy?: Ld2412SensorConfigGate_6MoveEnergy;
    still_energy?: Ld2412SensorConfigGate_6StillEnergy;
}

export interface Ld2412SensorConfigGate_7MoveEnergy extends Sensor_SENSOR_SCHEMA {
    entity_category?: any;
    filters?: any;
    icon?: any;
    unit_of_measurement?: any;
}

export interface Ld2412SensorConfigGate_7StillEnergy extends Sensor_SENSOR_SCHEMA {
    entity_category?: any;
    filters?: any;
    icon?: any;
    unit_of_measurement?: any;
}

export interface Ld2412SensorConfigGate_7 {
    move_energy?: Ld2412SensorConfigGate_7MoveEnergy;
    still_energy?: Ld2412SensorConfigGate_7StillEnergy;
}

export interface Ld2412SensorConfigGate_8MoveEnergy extends Sensor_SENSOR_SCHEMA {
    entity_category?: any;
    filters?: any;
    icon?: any;
    unit_of_measurement?: any;
}

export interface Ld2412SensorConfigGate_8StillEnergy extends Sensor_SENSOR_SCHEMA {
    entity_category?: any;
    filters?: any;
    icon?: any;
    unit_of_measurement?: any;
}

export interface Ld2412SensorConfigGate_8 {
    move_energy?: Ld2412SensorConfigGate_8MoveEnergy;
    still_energy?: Ld2412SensorConfigGate_8StillEnergy;
}

export interface Ld2412SensorConfigGate_9MoveEnergy extends Sensor_SENSOR_SCHEMA {
    entity_category?: any;
    filters?: any;
    icon?: any;
    unit_of_measurement?: any;
}

export interface Ld2412SensorConfigGate_9StillEnergy extends Sensor_SENSOR_SCHEMA {
    entity_category?: any;
    filters?: any;
    icon?: any;
    unit_of_measurement?: any;
}

export interface Ld2412SensorConfigGate_9 {
    move_energy?: Ld2412SensorConfigGate_9MoveEnergy;
    still_energy?: Ld2412SensorConfigGate_9StillEnergy;
}

export interface Ld2412SensorConfigLight extends Sensor_SENSOR_SCHEMA {
    device_class?: any;
    entity_category?: any;
    filters?: any;
    icon?: any;
    unit_of_measurement?: any;
}

export interface Ld2412SensorConfigMovingDistance extends Sensor_SENSOR_SCHEMA {
    device_class?: any;
    filters?: any;
    icon?: any;
    unit_of_measurement?: any;
}

export interface Ld2412SensorConfigMovingEnergy extends Sensor_SENSOR_SCHEMA {
    filters?: any;
    icon?: any;
    unit_of_measurement?: any;
}

export interface Ld2412SensorConfigStillDistance extends Sensor_SENSOR_SCHEMA {
    device_class?: any;
    filters?: any;
    icon?: any;
    unit_of_measurement?: any;
}

export interface Ld2412SensorConfigStillEnergy extends Sensor_SENSOR_SCHEMA {
    filters?: any;
    icon?: any;
    unit_of_measurement?: any;
}

export interface Ld2412SensorConfig {
    detection_distance?: Ld2412SensorConfigDetectionDistance;
    gate_0?: Ld2412SensorConfigGate_0;
    gate_1?: Ld2412SensorConfigGate_1;
    gate_10?: Ld2412SensorConfigGate_10;
    gate_11?: Ld2412SensorConfigGate_11;
    gate_12?: Ld2412SensorConfigGate_12;
    gate_13?: Ld2412SensorConfigGate_13;
    gate_2?: Ld2412SensorConfigGate_2;
    gate_3?: Ld2412SensorConfigGate_3;
    gate_4?: Ld2412SensorConfigGate_4;
    gate_5?: Ld2412SensorConfigGate_5;
    gate_6?: Ld2412SensorConfigGate_6;
    gate_7?: Ld2412SensorConfigGate_7;
    gate_8?: Ld2412SensorConfigGate_8;
    gate_9?: Ld2412SensorConfigGate_9;
    id?: ID;
    ld2412_id?: ID;
    light?: Ld2412SensorConfigLight;
    moving_distance?: Ld2412SensorConfigMovingDistance;
    moving_energy?: Ld2412SensorConfigMovingEnergy;
    still_distance?: Ld2412SensorConfigStillDistance;
    still_energy?: Ld2412SensorConfigStillEnergy;
}

export class Ld2412Switch extends EsphomeComponent<Ld2412SwitchConfig> {
    componentName: string = "ld2412.switch";
}

export interface Ld2412SwitchConfigBluetooth extends Switch_SWITCH_SCHEMA {
    device_class?: any;
    entity_category?: any;
    icon?: any;
    id?: ID;
}

export interface Ld2412SwitchConfigEngineeringMode extends Switch_SWITCH_SCHEMA {
    device_class?: any;
    entity_category?: any;
    icon?: any;
    id?: ID;
}

export interface Ld2412SwitchConfig {
    bluetooth?: Ld2412SwitchConfigBluetooth;
    engineering_mode?: Ld2412SwitchConfigEngineeringMode;
    id?: ID;
    ld2412_id?: ID;
}

export class Ld2412TextSensor extends EsphomeComponent<Ld2412TextSensorConfig> {
    componentName: string = "ld2412.text_sensor";
}

export interface Ld2412TextSensorConfigMacAddress extends TextSensor_TEXT_SENSOR_SCHEMA {
    entity_category?: any;
    icon?: any;
}

export interface Ld2412TextSensorConfigVersion extends TextSensor_TEXT_SENSOR_SCHEMA {
    entity_category?: any;
    icon?: any;
}

export interface Ld2412TextSensorConfig {
    id?: ID;
    ld2412_id?: ID;
    mac_address?: Ld2412TextSensorConfigMacAddress;
    version?: Ld2412TextSensorConfigVersion;
}
