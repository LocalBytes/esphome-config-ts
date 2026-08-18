/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: ld2420.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/ld2420
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
import type { TextSensor_TEXT_SENSOR_SCHEMA } from "./text_sensor.js";

export class Ld2420 extends EsphomeComponent<Ld2420Config> {
    componentName: string = "ld2420";
}

export interface Ld2420Config extends CoreCOMPONENT_SCHEMA {
    id?: ID;
    uart_id?: ID;
}

export class Ld2420BinarySensor extends EsphomeComponent<Ld2420BinarySensorConfig> {
    componentName: string = "ld2420.binary_sensor";
}

export interface Ld2420BinarySensorConfigHasTarget extends BinarySensor_BINARY_SENSOR_SCHEMA {
    device_class?: any;
}

export interface Ld2420BinarySensorConfig extends CoreCOMPONENT_SCHEMA {
    has_target?: Ld2420BinarySensorConfigHasTarget;
    id?: ID;
    ld2420_id?: ID;
}

export class Ld2420Button extends EsphomeComponent<Ld2420ButtonConfig> {
    componentName: string = "ld2420.button";
}

export interface Ld2420ButtonConfigApplyConfig extends Button_BUTTON_SCHEMA {
    device_class?: any;
    entity_category?: any;
    icon?: any;
    id?: ID;
}

export interface Ld2420ButtonConfigFactoryReset extends Button_BUTTON_SCHEMA {
    entity_category?: any;
    icon?: any;
    id?: ID;
}

export interface Ld2420ButtonConfigRestartModule extends Button_BUTTON_SCHEMA {
    entity_category?: any;
    icon?: any;
    id?: ID;
}

export interface Ld2420ButtonConfigRevertConfig extends Button_BUTTON_SCHEMA {
    device_class?: any;
    entity_category?: any;
    icon?: any;
    id?: ID;
}

export interface Ld2420ButtonConfig {
    apply_config: Ld2420ButtonConfigApplyConfig;
    factory_reset?: Ld2420ButtonConfigFactoryReset;
    ld2420_id?: ID;
    restart_module?: Ld2420ButtonConfigRestartModule;
    revert_config?: Ld2420ButtonConfigRevertConfig;
}

export class Ld2420Number extends EsphomeComponent<Ld2420NumberConfig> {
    componentName: string = "ld2420.number";
}

export interface Ld2420NumberConfigGate_0MoveThreshold extends Number_NUMBER_SCHEMA {
    entity_category?: any;
    icon?: any;
    id?: ID;
}

export interface Ld2420NumberConfigGate_0StillThreshold extends Number_NUMBER_SCHEMA {
    entity_category?: any;
    icon?: any;
    id?: ID;
}

export interface Ld2420NumberConfigGate_0 {
    move_threshold: Ld2420NumberConfigGate_0MoveThreshold;
    still_threshold: Ld2420NumberConfigGate_0StillThreshold;
}

export interface Ld2420NumberConfigGate_1MoveThreshold extends Number_NUMBER_SCHEMA {
    entity_category?: any;
    icon?: any;
    id?: ID;
}

export interface Ld2420NumberConfigGate_1StillThreshold extends Number_NUMBER_SCHEMA {
    entity_category?: any;
    icon?: any;
    id?: ID;
}

export interface Ld2420NumberConfigGate_1 {
    move_threshold: Ld2420NumberConfigGate_1MoveThreshold;
    still_threshold: Ld2420NumberConfigGate_1StillThreshold;
}

export interface Ld2420NumberConfigGate_10MoveThreshold extends Number_NUMBER_SCHEMA {
    entity_category?: any;
    icon?: any;
    id?: ID;
}

export interface Ld2420NumberConfigGate_10StillThreshold extends Number_NUMBER_SCHEMA {
    entity_category?: any;
    icon?: any;
    id?: ID;
}

export interface Ld2420NumberConfigGate_10 {
    move_threshold: Ld2420NumberConfigGate_10MoveThreshold;
    still_threshold: Ld2420NumberConfigGate_10StillThreshold;
}

export interface Ld2420NumberConfigGate_11MoveThreshold extends Number_NUMBER_SCHEMA {
    entity_category?: any;
    icon?: any;
    id?: ID;
}

export interface Ld2420NumberConfigGate_11StillThreshold extends Number_NUMBER_SCHEMA {
    entity_category?: any;
    icon?: any;
    id?: ID;
}

export interface Ld2420NumberConfigGate_11 {
    move_threshold: Ld2420NumberConfigGate_11MoveThreshold;
    still_threshold: Ld2420NumberConfigGate_11StillThreshold;
}

export interface Ld2420NumberConfigGate_12MoveThreshold extends Number_NUMBER_SCHEMA {
    entity_category?: any;
    icon?: any;
    id?: ID;
}

export interface Ld2420NumberConfigGate_12StillThreshold extends Number_NUMBER_SCHEMA {
    entity_category?: any;
    icon?: any;
    id?: ID;
}

export interface Ld2420NumberConfigGate_12 {
    move_threshold: Ld2420NumberConfigGate_12MoveThreshold;
    still_threshold: Ld2420NumberConfigGate_12StillThreshold;
}

export interface Ld2420NumberConfigGate_13MoveThreshold extends Number_NUMBER_SCHEMA {
    entity_category?: any;
    icon?: any;
    id?: ID;
}

export interface Ld2420NumberConfigGate_13StillThreshold extends Number_NUMBER_SCHEMA {
    entity_category?: any;
    icon?: any;
    id?: ID;
}

export interface Ld2420NumberConfigGate_13 {
    move_threshold: Ld2420NumberConfigGate_13MoveThreshold;
    still_threshold: Ld2420NumberConfigGate_13StillThreshold;
}

export interface Ld2420NumberConfigGate_14MoveThreshold extends Number_NUMBER_SCHEMA {
    entity_category?: any;
    icon?: any;
    id?: ID;
}

export interface Ld2420NumberConfigGate_14StillThreshold extends Number_NUMBER_SCHEMA {
    entity_category?: any;
    icon?: any;
    id?: ID;
}

export interface Ld2420NumberConfigGate_14 {
    move_threshold: Ld2420NumberConfigGate_14MoveThreshold;
    still_threshold: Ld2420NumberConfigGate_14StillThreshold;
}

export interface Ld2420NumberConfigGate_15MoveThreshold extends Number_NUMBER_SCHEMA {
    entity_category?: any;
    icon?: any;
    id?: ID;
}

export interface Ld2420NumberConfigGate_15StillThreshold extends Number_NUMBER_SCHEMA {
    entity_category?: any;
    icon?: any;
    id?: ID;
}

export interface Ld2420NumberConfigGate_15 {
    move_threshold: Ld2420NumberConfigGate_15MoveThreshold;
    still_threshold: Ld2420NumberConfigGate_15StillThreshold;
}

export interface Ld2420NumberConfigGate_2MoveThreshold extends Number_NUMBER_SCHEMA {
    entity_category?: any;
    icon?: any;
    id?: ID;
}

export interface Ld2420NumberConfigGate_2StillThreshold extends Number_NUMBER_SCHEMA {
    entity_category?: any;
    icon?: any;
    id?: ID;
}

export interface Ld2420NumberConfigGate_2 {
    move_threshold: Ld2420NumberConfigGate_2MoveThreshold;
    still_threshold: Ld2420NumberConfigGate_2StillThreshold;
}

export interface Ld2420NumberConfigGate_3MoveThreshold extends Number_NUMBER_SCHEMA {
    entity_category?: any;
    icon?: any;
    id?: ID;
}

export interface Ld2420NumberConfigGate_3StillThreshold extends Number_NUMBER_SCHEMA {
    entity_category?: any;
    icon?: any;
    id?: ID;
}

export interface Ld2420NumberConfigGate_3 {
    move_threshold: Ld2420NumberConfigGate_3MoveThreshold;
    still_threshold: Ld2420NumberConfigGate_3StillThreshold;
}

export interface Ld2420NumberConfigGate_4MoveThreshold extends Number_NUMBER_SCHEMA {
    entity_category?: any;
    icon?: any;
    id?: ID;
}

export interface Ld2420NumberConfigGate_4StillThreshold extends Number_NUMBER_SCHEMA {
    entity_category?: any;
    icon?: any;
    id?: ID;
}

export interface Ld2420NumberConfigGate_4 {
    move_threshold: Ld2420NumberConfigGate_4MoveThreshold;
    still_threshold: Ld2420NumberConfigGate_4StillThreshold;
}

export interface Ld2420NumberConfigGate_5MoveThreshold extends Number_NUMBER_SCHEMA {
    entity_category?: any;
    icon?: any;
    id?: ID;
}

export interface Ld2420NumberConfigGate_5StillThreshold extends Number_NUMBER_SCHEMA {
    entity_category?: any;
    icon?: any;
    id?: ID;
}

export interface Ld2420NumberConfigGate_5 {
    move_threshold: Ld2420NumberConfigGate_5MoveThreshold;
    still_threshold: Ld2420NumberConfigGate_5StillThreshold;
}

export interface Ld2420NumberConfigGate_6MoveThreshold extends Number_NUMBER_SCHEMA {
    entity_category?: any;
    icon?: any;
    id?: ID;
}

export interface Ld2420NumberConfigGate_6StillThreshold extends Number_NUMBER_SCHEMA {
    entity_category?: any;
    icon?: any;
    id?: ID;
}

export interface Ld2420NumberConfigGate_6 {
    move_threshold: Ld2420NumberConfigGate_6MoveThreshold;
    still_threshold: Ld2420NumberConfigGate_6StillThreshold;
}

export interface Ld2420NumberConfigGate_7MoveThreshold extends Number_NUMBER_SCHEMA {
    entity_category?: any;
    icon?: any;
    id?: ID;
}

export interface Ld2420NumberConfigGate_7StillThreshold extends Number_NUMBER_SCHEMA {
    entity_category?: any;
    icon?: any;
    id?: ID;
}

export interface Ld2420NumberConfigGate_7 {
    move_threshold: Ld2420NumberConfigGate_7MoveThreshold;
    still_threshold: Ld2420NumberConfigGate_7StillThreshold;
}

export interface Ld2420NumberConfigGate_8MoveThreshold extends Number_NUMBER_SCHEMA {
    entity_category?: any;
    icon?: any;
    id?: ID;
}

export interface Ld2420NumberConfigGate_8StillThreshold extends Number_NUMBER_SCHEMA {
    entity_category?: any;
    icon?: any;
    id?: ID;
}

export interface Ld2420NumberConfigGate_8 {
    move_threshold: Ld2420NumberConfigGate_8MoveThreshold;
    still_threshold: Ld2420NumberConfigGate_8StillThreshold;
}

export interface Ld2420NumberConfigGate_9MoveThreshold extends Number_NUMBER_SCHEMA {
    entity_category?: any;
    icon?: any;
    id?: ID;
}

export interface Ld2420NumberConfigGate_9StillThreshold extends Number_NUMBER_SCHEMA {
    entity_category?: any;
    icon?: any;
    id?: ID;
}

export interface Ld2420NumberConfigGate_9 {
    move_threshold: Ld2420NumberConfigGate_9MoveThreshold;
    still_threshold: Ld2420NumberConfigGate_9StillThreshold;
}

export interface Ld2420NumberConfigGateMoveSensitivity extends Number_NUMBER_SCHEMA {
    device_class?: any;
    entity_category?: any;
    icon?: any;
    id?: ID;
}

export interface Ld2420NumberConfigGateSelect extends Number_NUMBER_SCHEMA {
    device_class?: any;
    entity_category?: any;
    icon?: any;
    id?: ID;
}

export interface Ld2420NumberConfigGateStillSensitivity extends Number_NUMBER_SCHEMA {
    device_class?: any;
    entity_category?: any;
    icon?: any;
    id?: ID;
}

export interface Ld2420NumberConfigMaxGateDistance extends Number_NUMBER_SCHEMA {
    device_class?: any;
    entity_category?: any;
    icon?: any;
    id?: ID;
}

export interface Ld2420NumberConfigMinGateDistance extends Number_NUMBER_SCHEMA {
    device_class?: any;
    entity_category?: any;
    icon?: any;
    id?: ID;
}

export interface Ld2420NumberConfigMoveThreshold extends Number_NUMBER_SCHEMA {
    entity_category?: any;
    icon?: any;
    id?: ID;
}

export interface Ld2420NumberConfigPresenceTimeout extends Number_NUMBER_SCHEMA {
    entity_category?: any;
    icon?: any;
    id?: ID;
    unit_of_measurement?: any;
}

export interface Ld2420NumberConfigStillThreshold extends Number_NUMBER_SCHEMA {
    entity_category?: any;
    icon?: any;
    id?: ID;
}

export interface Ld2420NumberConfig {
    gate_0?: Ld2420NumberConfigGate_0;
    gate_1?: Ld2420NumberConfigGate_1;
    gate_10?: Ld2420NumberConfigGate_10;
    gate_11?: Ld2420NumberConfigGate_11;
    gate_12?: Ld2420NumberConfigGate_12;
    gate_13?: Ld2420NumberConfigGate_13;
    gate_14?: Ld2420NumberConfigGate_14;
    gate_15?: Ld2420NumberConfigGate_15;
    gate_2?: Ld2420NumberConfigGate_2;
    gate_3?: Ld2420NumberConfigGate_3;
    gate_4?: Ld2420NumberConfigGate_4;
    gate_5?: Ld2420NumberConfigGate_5;
    gate_6?: Ld2420NumberConfigGate_6;
    gate_7?: Ld2420NumberConfigGate_7;
    gate_8?: Ld2420NumberConfigGate_8;
    gate_9?: Ld2420NumberConfigGate_9;
    gate_move_sensitivity?: Ld2420NumberConfigGateMoveSensitivity;
    gate_select?: Ld2420NumberConfigGateSelect;
    gate_still_sensitivity?: Ld2420NumberConfigGateStillSensitivity;
    ld2420_id?: ID;
    max_gate_distance?: Ld2420NumberConfigMaxGateDistance;
    min_gate_distance?: Ld2420NumberConfigMinGateDistance;
    move_threshold?: Ld2420NumberConfigMoveThreshold;
    presence_timeout?: Ld2420NumberConfigPresenceTimeout;
    still_threshold?: Ld2420NumberConfigStillThreshold;
}

export class Ld2420Select extends EsphomeComponent<Ld2420SelectConfig> {
    componentName: string = "ld2420.select";
}

export interface Ld2420SelectConfigOperatingMode extends Select_SELECT_SCHEMA {
    entity_category?: any;
    id?: any;
}

export interface Ld2420SelectConfig {
    ld2420_id?: ID;
    operating_mode: Ld2420SelectConfigOperatingMode;
}

export class Ld2420Sensor extends EsphomeComponent<Ld2420SensorConfig> {
    componentName: string = "ld2420.sensor";
}

export interface Ld2420SensorConfigMovingDistance extends Sensor_SENSOR_SCHEMA {
    device_class?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface Ld2420SensorConfig extends CoreCOMPONENT_SCHEMA {
    id?: ID;
    ld2420_id?: ID;
    moving_distance?: Ld2420SensorConfigMovingDistance;
}

export class Ld2420TextSensor extends EsphomeComponent<Ld2420TextSensorConfig> {
    componentName: string = "ld2420.text_sensor";
}

export interface Ld2420TextSensorConfigFwVersion extends TextSensor_TEXT_SENSOR_SCHEMA {
    entity_category?: any;
    icon?: any;
}

export interface Ld2420TextSensorConfig extends CoreCOMPONENT_SCHEMA {
    fw_version?: Ld2420TextSensorConfigFwVersion;
    id?: ID;
    ld2420_id?: ID;
}
