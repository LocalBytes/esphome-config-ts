/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: seeed_mr24hpc1.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/seeed_mr24hpc1
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

export class SeeedMr24hpc1 extends EsphomeComponent<SeeedMr24hpc1Config> {
    componentName: string = "seeed_mr24hpc1";
}

export interface SeeedMr24hpc1Config extends CoreCOMPONENT_SCHEMA {
    id?: ID;
    uart_id?: ID;
}

export class SeeedMr24hpc1BinarySensor extends EsphomeComponent<SeeedMr24hpc1BinarySensorConfig> {
    componentName: string = "seeed_mr24hpc1.binary_sensor";
}

export interface SeeedMr24hpc1BinarySensorConfigHasTarget extends BinarySensor_BINARY_SENSOR_SCHEMA {
    device_class?: any;
    icon?: any;
}

export interface SeeedMr24hpc1BinarySensorConfig {
    has_target?: SeeedMr24hpc1BinarySensorConfigHasTarget;
    mr24hpc1_id?: ID;
}

export class SeeedMr24hpc1Button extends EsphomeComponent<SeeedMr24hpc1ButtonConfig> {
    componentName: string = "seeed_mr24hpc1.button";
}

export interface SeeedMr24hpc1ButtonConfigCustomSetEnd extends Button_BUTTON_SCHEMA {
    entity_category?: any;
    icon?: any;
    id?: ID;
}

export interface SeeedMr24hpc1ButtonConfigRestart extends Button_BUTTON_SCHEMA {
    device_class?: any;
    entity_category?: any;
    icon?: any;
    id?: ID;
}

export interface SeeedMr24hpc1ButtonConfig {
    custom_set_end?: SeeedMr24hpc1ButtonConfigCustomSetEnd;
    mr24hpc1_id?: ID;
    restart?: SeeedMr24hpc1ButtonConfigRestart;
}

export class SeeedMr24hpc1Number extends EsphomeComponent<SeeedMr24hpc1NumberConfig> {
    componentName: string = "seeed_mr24hpc1.number";
}

export interface SeeedMr24hpc1NumberConfigCustomMode extends Number_NUMBER_SCHEMA {
    entity_category?: any;
    icon?: any;
    id?: ID;
}

export interface SeeedMr24hpc1NumberConfigCustomUnmanTime extends Number_NUMBER_SCHEMA {
    entity_category?: any;
    icon?: any;
    id?: ID;
    unit_of_measurement?: any;
}

export interface SeeedMr24hpc1NumberConfigExistenceThreshold extends Number_NUMBER_SCHEMA {
    entity_category?: any;
    id?: ID;
}

export interface SeeedMr24hpc1NumberConfigMotionThreshold extends Number_NUMBER_SCHEMA {
    entity_category?: any;
    id?: ID;
}

export interface SeeedMr24hpc1NumberConfigMotionToRest extends Number_NUMBER_SCHEMA {
    entity_category?: any;
    icon?: any;
    id?: ID;
    unit_of_measurement?: any;
}

export interface SeeedMr24hpc1NumberConfigMotionTrigger extends Number_NUMBER_SCHEMA {
    entity_category?: any;
    icon?: any;
    id?: ID;
    unit_of_measurement?: any;
}

export interface SeeedMr24hpc1NumberConfigSensitivity extends Number_NUMBER_SCHEMA {
    entity_category?: any;
    icon?: any;
    id?: ID;
}

export interface SeeedMr24hpc1NumberConfig {
    custom_mode?: SeeedMr24hpc1NumberConfigCustomMode;
    custom_unman_time?: SeeedMr24hpc1NumberConfigCustomUnmanTime;
    existence_threshold?: SeeedMr24hpc1NumberConfigExistenceThreshold;
    motion_threshold?: SeeedMr24hpc1NumberConfigMotionThreshold;
    motion_to_rest?: SeeedMr24hpc1NumberConfigMotionToRest;
    motion_trigger?: SeeedMr24hpc1NumberConfigMotionTrigger;
    mr24hpc1_id?: ID;
    sensitivity?: SeeedMr24hpc1NumberConfigSensitivity;
}

export class SeeedMr24hpc1Select extends EsphomeComponent<SeeedMr24hpc1SelectConfig> {
    componentName: string = "seeed_mr24hpc1.select";
}

export interface SeeedMr24hpc1SelectConfigExistenceBoundary extends Select_SELECT_SCHEMA {
    entity_category?: any;
    id?: any;
}

export interface SeeedMr24hpc1SelectConfigMotionBoundary extends Select_SELECT_SCHEMA {
    entity_category?: any;
    id?: any;
}

export interface SeeedMr24hpc1SelectConfigSceneMode extends Select_SELECT_SCHEMA {
    entity_category?: any;
    icon?: any;
    id?: any;
}

export interface SeeedMr24hpc1SelectConfigUnmanTime extends Select_SELECT_SCHEMA {
    entity_category?: any;
    icon?: any;
    id?: any;
}

export interface SeeedMr24hpc1SelectConfig {
    existence_boundary?: SeeedMr24hpc1SelectConfigExistenceBoundary;
    motion_boundary?: SeeedMr24hpc1SelectConfigMotionBoundary;
    mr24hpc1_id?: ID;
    scene_mode?: SeeedMr24hpc1SelectConfigSceneMode;
    unman_time?: SeeedMr24hpc1SelectConfigUnmanTime;
}

export class SeeedMr24hpc1Sensor extends EsphomeComponent<SeeedMr24hpc1SensorConfig> {
    componentName: string = "seeed_mr24hpc1.sensor";
}

export interface SeeedMr24hpc1SensorConfigCustomModeNum extends Sensor_SENSOR_SCHEMA {
    icon?: any;
}

export interface SeeedMr24hpc1SensorConfigCustomMotionDistance extends Sensor_SENSOR_SCHEMA {
    accuracy_decimals?: any;
    icon?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface SeeedMr24hpc1SensorConfigCustomMotionSpeed extends Sensor_SENSOR_SCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    icon?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface SeeedMr24hpc1SensorConfigCustomPresenceOfDetection extends Sensor_SENSOR_SCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    icon?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface SeeedMr24hpc1SensorConfigCustomSpatialMotionValue extends Sensor_SENSOR_SCHEMA {
    device_class?: any;
    icon?: any;
}

export interface SeeedMr24hpc1SensorConfigCustomSpatialStaticValue extends Sensor_SENSOR_SCHEMA {
    device_class?: any;
    icon?: any;
}

export interface SeeedMr24hpc1SensorConfigMovementSigns extends Sensor_SENSOR_SCHEMA {
    icon?: any;
}

export interface SeeedMr24hpc1SensorConfig {
    custom_mode_num?: SeeedMr24hpc1SensorConfigCustomModeNum;
    custom_motion_distance?: SeeedMr24hpc1SensorConfigCustomMotionDistance;
    custom_motion_speed?: SeeedMr24hpc1SensorConfigCustomMotionSpeed;
    custom_presence_of_detection?: SeeedMr24hpc1SensorConfigCustomPresenceOfDetection;
    custom_spatial_motion_value?: SeeedMr24hpc1SensorConfigCustomSpatialMotionValue;
    custom_spatial_static_value?: SeeedMr24hpc1SensorConfigCustomSpatialStaticValue;
    movement_signs?: SeeedMr24hpc1SensorConfigMovementSigns;
    mr24hpc1_id?: ID;
}

export class SeeedMr24hpc1Switch extends EsphomeComponent<SeeedMr24hpc1SwitchConfig> {
    componentName: string = "seeed_mr24hpc1.switch";
}

export interface SeeedMr24hpc1SwitchConfigUnderlyingOpenFunction extends Switch_SWITCH_SCHEMA {
    device_class?: any;
    entity_category?: any;
    icon?: any;
    id?: ID;
}

export interface SeeedMr24hpc1SwitchConfig {
    mr24hpc1_id?: ID;
    underlying_open_function?: SeeedMr24hpc1SwitchConfigUnderlyingOpenFunction;
}

export class SeeedMr24hpc1TextSensor extends EsphomeComponent<SeeedMr24hpc1TextSensorConfig> {
    componentName: string = "seeed_mr24hpc1.text_sensor";
}

export interface SeeedMr24hpc1TextSensorConfigCustomModeEnd extends TextSensor_TEXT_SENSOR_SCHEMA {
    entity_category?: any;
    icon?: any;
}

export interface SeeedMr24hpc1TextSensorConfigHardwareModel extends TextSensor_TEXT_SENSOR_SCHEMA {
    entity_category?: any;
    icon?: any;
}

export interface SeeedMr24hpc1TextSensorConfigHardwareVersion extends TextSensor_TEXT_SENSOR_SCHEMA {
    entity_category?: any;
    icon?: any;
}

export interface SeeedMr24hpc1TextSensorConfigHeartBeat extends TextSensor_TEXT_SENSOR_SCHEMA {
    entity_category?: any;
    icon?: any;
}

export interface SeeedMr24hpc1TextSensorConfigKeepAway extends TextSensor_TEXT_SENSOR_SCHEMA {
    entity_category?: any;
    icon?: any;
}

export interface SeeedMr24hpc1TextSensorConfigMotionStatus extends TextSensor_TEXT_SENSOR_SCHEMA {
    entity_category?: any;
    icon?: any;
}

export interface SeeedMr24hpc1TextSensorConfigProductId extends TextSensor_TEXT_SENSOR_SCHEMA {
    entity_category?: any;
    icon?: any;
}

export interface SeeedMr24hpc1TextSensorConfigProductModel extends TextSensor_TEXT_SENSOR_SCHEMA {
    entity_category?: any;
    icon?: any;
}

export interface SeeedMr24hpc1TextSensorConfig {
    custom_mode_end?: SeeedMr24hpc1TextSensorConfigCustomModeEnd;
    hardware_model?: SeeedMr24hpc1TextSensorConfigHardwareModel;
    hardware_version?: SeeedMr24hpc1TextSensorConfigHardwareVersion;
    heart_beat?: SeeedMr24hpc1TextSensorConfigHeartBeat;
    keep_away?: SeeedMr24hpc1TextSensorConfigKeepAway;
    motion_status?: SeeedMr24hpc1TextSensorConfigMotionStatus;
    mr24hpc1_id?: ID;
    product_id?: SeeedMr24hpc1TextSensorConfigProductId;
    product_model?: SeeedMr24hpc1TextSensorConfigProductModel;
}
