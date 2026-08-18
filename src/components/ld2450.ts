/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: ld2450.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/ld2450
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

export class Ld2450 extends EsphomeComponent<Ld2450Config> {
    componentName: string = "ld2450";
}

export interface Ld2450Config extends CoreCOMPONENT_SCHEMA {
    id?: ID;
    on_data?: object[];
    uart_id?: ID;
}

export class Ld2450BinarySensor extends EsphomeComponent<Ld2450BinarySensorConfig> {
    componentName: string = "ld2450.binary_sensor";
}

export interface Ld2450BinarySensorConfigHasMovingTarget extends BinarySensor_BINARY_SENSOR_SCHEMA {
    device_class?: any;
    filters?: any;
    icon?: any;
}

export interface Ld2450BinarySensorConfigHasStillTarget extends BinarySensor_BINARY_SENSOR_SCHEMA {
    device_class?: any;
    filters?: any;
    icon?: any;
}

export interface Ld2450BinarySensorConfigHasTarget extends BinarySensor_BINARY_SENSOR_SCHEMA {
    device_class?: any;
    filters?: any;
    icon?: any;
}

export interface Ld2450BinarySensorConfig {
    has_moving_target?: Ld2450BinarySensorConfigHasMovingTarget;
    has_still_target?: Ld2450BinarySensorConfigHasStillTarget;
    has_target?: Ld2450BinarySensorConfigHasTarget;
    id?: ID;
    ld2450_id?: ID;
}

export class Ld2450Button extends EsphomeComponent<Ld2450ButtonConfig> {
    componentName: string = "ld2450.button";
}

export interface Ld2450ButtonConfigFactoryReset extends Button_BUTTON_SCHEMA {
    device_class?: any;
    entity_category?: any;
    icon?: any;
    id?: ID;
}

export interface Ld2450ButtonConfigRestart extends Button_BUTTON_SCHEMA {
    device_class?: any;
    entity_category?: any;
    icon?: any;
    id?: ID;
}

export interface Ld2450ButtonConfig {
    factory_reset?: Ld2450ButtonConfigFactoryReset;
    id?: ID;
    ld2450_id?: ID;
    restart?: Ld2450ButtonConfigRestart;
}

export class Ld2450Number extends EsphomeComponent<Ld2450NumberConfig> {
    componentName: string = "ld2450.number";
}

export interface Ld2450NumberConfigPresenceTimeout extends Number_NUMBER_SCHEMA {
    entity_category?: any;
    icon?: any;
    id?: ID;
    unit_of_measurement?: any;
}

export interface Ld2450NumberConfigZone_1X1 extends Number_NUMBER_SCHEMA {
    device_class?: any;
    entity_category?: any;
    icon?: any;
    id?: ID;
    unit_of_measurement?: any;
}

export interface Ld2450NumberConfigZone_1X2 extends Number_NUMBER_SCHEMA {
    device_class?: any;
    entity_category?: any;
    icon?: any;
    id?: ID;
    unit_of_measurement?: any;
}

export interface Ld2450NumberConfigZone_1Y1 extends Number_NUMBER_SCHEMA {
    device_class?: any;
    entity_category?: any;
    icon?: any;
    id?: ID;
    unit_of_measurement?: any;
}

export interface Ld2450NumberConfigZone_1Y2 extends Number_NUMBER_SCHEMA {
    device_class?: any;
    entity_category?: any;
    icon?: any;
    id?: ID;
    unit_of_measurement?: any;
}

export interface Ld2450NumberConfigZone_1 {
    x1: Ld2450NumberConfigZone_1X1;
    x2: Ld2450NumberConfigZone_1X2;
    y1: Ld2450NumberConfigZone_1Y1;
    y2: Ld2450NumberConfigZone_1Y2;
}

export interface Ld2450NumberConfigZone_2X1 extends Number_NUMBER_SCHEMA {
    device_class?: any;
    entity_category?: any;
    icon?: any;
    id?: ID;
    unit_of_measurement?: any;
}

export interface Ld2450NumberConfigZone_2X2 extends Number_NUMBER_SCHEMA {
    device_class?: any;
    entity_category?: any;
    icon?: any;
    id?: ID;
    unit_of_measurement?: any;
}

export interface Ld2450NumberConfigZone_2Y1 extends Number_NUMBER_SCHEMA {
    device_class?: any;
    entity_category?: any;
    icon?: any;
    id?: ID;
    unit_of_measurement?: any;
}

export interface Ld2450NumberConfigZone_2Y2 extends Number_NUMBER_SCHEMA {
    device_class?: any;
    entity_category?: any;
    icon?: any;
    id?: ID;
    unit_of_measurement?: any;
}

export interface Ld2450NumberConfigZone_2 {
    x1: Ld2450NumberConfigZone_2X1;
    x2: Ld2450NumberConfigZone_2X2;
    y1: Ld2450NumberConfigZone_2Y1;
    y2: Ld2450NumberConfigZone_2Y2;
}

export interface Ld2450NumberConfigZone_3X1 extends Number_NUMBER_SCHEMA {
    device_class?: any;
    entity_category?: any;
    icon?: any;
    id?: ID;
    unit_of_measurement?: any;
}

export interface Ld2450NumberConfigZone_3X2 extends Number_NUMBER_SCHEMA {
    device_class?: any;
    entity_category?: any;
    icon?: any;
    id?: ID;
    unit_of_measurement?: any;
}

export interface Ld2450NumberConfigZone_3Y1 extends Number_NUMBER_SCHEMA {
    device_class?: any;
    entity_category?: any;
    icon?: any;
    id?: ID;
    unit_of_measurement?: any;
}

export interface Ld2450NumberConfigZone_3Y2 extends Number_NUMBER_SCHEMA {
    device_class?: any;
    entity_category?: any;
    icon?: any;
    id?: ID;
    unit_of_measurement?: any;
}

export interface Ld2450NumberConfigZone_3 {
    x1: Ld2450NumberConfigZone_3X1;
    x2: Ld2450NumberConfigZone_3X2;
    y1: Ld2450NumberConfigZone_3Y1;
    y2: Ld2450NumberConfigZone_3Y2;
}

export interface Ld2450NumberConfig {
    id?: ID;
    ld2450_id?: ID;
    presence_timeout: Ld2450NumberConfigPresenceTimeout;
    zone_1?: Ld2450NumberConfigZone_1;
    zone_2?: Ld2450NumberConfigZone_2;
    zone_3?: Ld2450NumberConfigZone_3;
}

export class Ld2450Select extends EsphomeComponent<Ld2450SelectConfig> {
    componentName: string = "ld2450.select";
}

export interface Ld2450SelectConfigBaudRate extends Select_SELECT_SCHEMA {
    entity_category?: any;
    icon?: any;
    id?: any;
}

export interface Ld2450SelectConfigZoneType extends Select_SELECT_SCHEMA {
    entity_category?: any;
    icon?: any;
    id?: any;
}

export interface Ld2450SelectConfig {
    baud_rate?: Ld2450SelectConfigBaudRate;
    id?: ID;
    ld2450_id?: ID;
    zone_type?: Ld2450SelectConfigZoneType;
}

export class Ld2450Sensor extends EsphomeComponent<Ld2450SensorConfig> {
    componentName: string = "ld2450.sensor";
}

export interface Ld2450SensorConfigMovingTargetCount extends Sensor_SENSOR_SCHEMA {
    accuracy_decimals?: any;
    filters?: any;
    icon?: any;
}

export interface Ld2450SensorConfigStillTargetCount extends Sensor_SENSOR_SCHEMA {
    accuracy_decimals?: any;
    filters?: any;
    icon?: any;
}

export interface Ld2450SensorConfigTarget_1Angle extends Sensor_SENSOR_SCHEMA {
    accuracy_decimals?: any;
    filters?: any;
    icon?: any;
    unit_of_measurement?: any;
}

export interface Ld2450SensorConfigTarget_1Distance extends Sensor_SENSOR_SCHEMA {
    device_class?: any;
    filters?: any;
    icon?: any;
    unit_of_measurement?: any;
}

export interface Ld2450SensorConfigTarget_1Resolution extends Sensor_SENSOR_SCHEMA {
    device_class?: any;
    filters?: any;
    icon?: any;
    unit_of_measurement?: any;
}

export interface Ld2450SensorConfigTarget_1Speed extends Sensor_SENSOR_SCHEMA {
    device_class?: any;
    filters?: any;
    icon?: any;
    unit_of_measurement?: any;
}

export interface Ld2450SensorConfigTarget_1X extends Sensor_SENSOR_SCHEMA {
    device_class?: any;
    filters?: any;
    icon?: any;
    unit_of_measurement?: any;
}

export interface Ld2450SensorConfigTarget_1Y extends Sensor_SENSOR_SCHEMA {
    device_class?: any;
    filters?: any;
    icon?: any;
    unit_of_measurement?: any;
}

export interface Ld2450SensorConfigTarget_1 {
    angle?: Ld2450SensorConfigTarget_1Angle;
    distance?: Ld2450SensorConfigTarget_1Distance;
    resolution?: Ld2450SensorConfigTarget_1Resolution;
    speed?: Ld2450SensorConfigTarget_1Speed;
    x?: Ld2450SensorConfigTarget_1X;
    y?: Ld2450SensorConfigTarget_1Y;
}

export interface Ld2450SensorConfigTarget_2Angle extends Sensor_SENSOR_SCHEMA {
    accuracy_decimals?: any;
    filters?: any;
    icon?: any;
    unit_of_measurement?: any;
}

export interface Ld2450SensorConfigTarget_2Distance extends Sensor_SENSOR_SCHEMA {
    device_class?: any;
    filters?: any;
    icon?: any;
    unit_of_measurement?: any;
}

export interface Ld2450SensorConfigTarget_2Resolution extends Sensor_SENSOR_SCHEMA {
    device_class?: any;
    filters?: any;
    icon?: any;
    unit_of_measurement?: any;
}

export interface Ld2450SensorConfigTarget_2Speed extends Sensor_SENSOR_SCHEMA {
    device_class?: any;
    filters?: any;
    icon?: any;
    unit_of_measurement?: any;
}

export interface Ld2450SensorConfigTarget_2X extends Sensor_SENSOR_SCHEMA {
    device_class?: any;
    filters?: any;
    icon?: any;
    unit_of_measurement?: any;
}

export interface Ld2450SensorConfigTarget_2Y extends Sensor_SENSOR_SCHEMA {
    device_class?: any;
    filters?: any;
    icon?: any;
    unit_of_measurement?: any;
}

export interface Ld2450SensorConfigTarget_2 {
    angle?: Ld2450SensorConfigTarget_2Angle;
    distance?: Ld2450SensorConfigTarget_2Distance;
    resolution?: Ld2450SensorConfigTarget_2Resolution;
    speed?: Ld2450SensorConfigTarget_2Speed;
    x?: Ld2450SensorConfigTarget_2X;
    y?: Ld2450SensorConfigTarget_2Y;
}

export interface Ld2450SensorConfigTarget_3Angle extends Sensor_SENSOR_SCHEMA {
    accuracy_decimals?: any;
    filters?: any;
    icon?: any;
    unit_of_measurement?: any;
}

export interface Ld2450SensorConfigTarget_3Distance extends Sensor_SENSOR_SCHEMA {
    device_class?: any;
    filters?: any;
    icon?: any;
    unit_of_measurement?: any;
}

export interface Ld2450SensorConfigTarget_3Resolution extends Sensor_SENSOR_SCHEMA {
    device_class?: any;
    filters?: any;
    icon?: any;
    unit_of_measurement?: any;
}

export interface Ld2450SensorConfigTarget_3Speed extends Sensor_SENSOR_SCHEMA {
    device_class?: any;
    filters?: any;
    icon?: any;
    unit_of_measurement?: any;
}

export interface Ld2450SensorConfigTarget_3X extends Sensor_SENSOR_SCHEMA {
    device_class?: any;
    filters?: any;
    icon?: any;
    unit_of_measurement?: any;
}

export interface Ld2450SensorConfigTarget_3Y extends Sensor_SENSOR_SCHEMA {
    device_class?: any;
    filters?: any;
    icon?: any;
    unit_of_measurement?: any;
}

export interface Ld2450SensorConfigTarget_3 {
    angle?: Ld2450SensorConfigTarget_3Angle;
    distance?: Ld2450SensorConfigTarget_3Distance;
    resolution?: Ld2450SensorConfigTarget_3Resolution;
    speed?: Ld2450SensorConfigTarget_3Speed;
    x?: Ld2450SensorConfigTarget_3X;
    y?: Ld2450SensorConfigTarget_3Y;
}

export interface Ld2450SensorConfigTargetCount extends Sensor_SENSOR_SCHEMA {
    accuracy_decimals?: any;
    filters?: any;
    icon?: any;
}

export interface Ld2450SensorConfigZone_1MovingTargetCount extends Sensor_SENSOR_SCHEMA {
    accuracy_decimals?: any;
    filters?: any;
    icon?: any;
}

export interface Ld2450SensorConfigZone_1StillTargetCount extends Sensor_SENSOR_SCHEMA {
    accuracy_decimals?: any;
    filters?: any;
    icon?: any;
}

export interface Ld2450SensorConfigZone_1TargetCount extends Sensor_SENSOR_SCHEMA {
    accuracy_decimals?: any;
    filters?: any;
    icon?: any;
}

export interface Ld2450SensorConfigZone_1 {
    moving_target_count?: Ld2450SensorConfigZone_1MovingTargetCount;
    still_target_count?: Ld2450SensorConfigZone_1StillTargetCount;
    target_count?: Ld2450SensorConfigZone_1TargetCount;
}

export interface Ld2450SensorConfigZone_2MovingTargetCount extends Sensor_SENSOR_SCHEMA {
    accuracy_decimals?: any;
    filters?: any;
    icon?: any;
}

export interface Ld2450SensorConfigZone_2StillTargetCount extends Sensor_SENSOR_SCHEMA {
    accuracy_decimals?: any;
    filters?: any;
    icon?: any;
}

export interface Ld2450SensorConfigZone_2TargetCount extends Sensor_SENSOR_SCHEMA {
    accuracy_decimals?: any;
    filters?: any;
    icon?: any;
}

export interface Ld2450SensorConfigZone_2 {
    moving_target_count?: Ld2450SensorConfigZone_2MovingTargetCount;
    still_target_count?: Ld2450SensorConfigZone_2StillTargetCount;
    target_count?: Ld2450SensorConfigZone_2TargetCount;
}

export interface Ld2450SensorConfigZone_3MovingTargetCount extends Sensor_SENSOR_SCHEMA {
    accuracy_decimals?: any;
    filters?: any;
    icon?: any;
}

export interface Ld2450SensorConfigZone_3StillTargetCount extends Sensor_SENSOR_SCHEMA {
    accuracy_decimals?: any;
    filters?: any;
    icon?: any;
}

export interface Ld2450SensorConfigZone_3TargetCount extends Sensor_SENSOR_SCHEMA {
    accuracy_decimals?: any;
    filters?: any;
    icon?: any;
}

export interface Ld2450SensorConfigZone_3 {
    moving_target_count?: Ld2450SensorConfigZone_3MovingTargetCount;
    still_target_count?: Ld2450SensorConfigZone_3StillTargetCount;
    target_count?: Ld2450SensorConfigZone_3TargetCount;
}

export interface Ld2450SensorConfig {
    id?: ID;
    ld2450_id?: ID;
    moving_target_count?: Ld2450SensorConfigMovingTargetCount;
    still_target_count?: Ld2450SensorConfigStillTargetCount;
    target_1?: Ld2450SensorConfigTarget_1;
    target_2?: Ld2450SensorConfigTarget_2;
    target_3?: Ld2450SensorConfigTarget_3;
    target_count?: Ld2450SensorConfigTargetCount;
    zone_1?: Ld2450SensorConfigZone_1;
    zone_2?: Ld2450SensorConfigZone_2;
    zone_3?: Ld2450SensorConfigZone_3;
}

export class Ld2450Switch extends EsphomeComponent<Ld2450SwitchConfig> {
    componentName: string = "ld2450.switch";
}

export interface Ld2450SwitchConfigBluetooth extends Switch_SWITCH_SCHEMA {
    device_class?: any;
    entity_category?: any;
    icon?: any;
    id?: ID;
}

export interface Ld2450SwitchConfigMultiTarget extends Switch_SWITCH_SCHEMA {
    device_class?: any;
    entity_category?: any;
    icon?: any;
    id?: ID;
}

export interface Ld2450SwitchConfig {
    bluetooth?: Ld2450SwitchConfigBluetooth;
    id?: ID;
    ld2450_id?: ID;
    multi_target?: Ld2450SwitchConfigMultiTarget;
}

export class Ld2450TextSensor extends EsphomeComponent<Ld2450TextSensorConfig> {
    componentName: string = "ld2450.text_sensor";
}

export interface Ld2450TextSensorConfigMacAddress extends TextSensor_TEXT_SENSOR_SCHEMA {
    entity_category?: any;
    icon?: any;
}

export interface Ld2450TextSensorConfigTarget_1Direction extends TextSensor_TEXT_SENSOR_SCHEMA {
    entity_category?: any;
    icon?: any;
}

export interface Ld2450TextSensorConfigTarget_1 {
    direction?: Ld2450TextSensorConfigTarget_1Direction;
}

export interface Ld2450TextSensorConfigTarget_2Direction extends TextSensor_TEXT_SENSOR_SCHEMA {
    entity_category?: any;
    icon?: any;
}

export interface Ld2450TextSensorConfigTarget_2 {
    direction?: Ld2450TextSensorConfigTarget_2Direction;
}

export interface Ld2450TextSensorConfigTarget_3Direction extends TextSensor_TEXT_SENSOR_SCHEMA {
    entity_category?: any;
    icon?: any;
}

export interface Ld2450TextSensorConfigTarget_3 {
    direction?: Ld2450TextSensorConfigTarget_3Direction;
}

export interface Ld2450TextSensorConfigVersion extends TextSensor_TEXT_SENSOR_SCHEMA {
    entity_category?: any;
    icon?: any;
}

export interface Ld2450TextSensorConfig {
    id?: ID;
    ld2450_id?: ID;
    mac_address?: Ld2450TextSensorConfigMacAddress;
    target_1?: Ld2450TextSensorConfigTarget_1;
    target_2?: Ld2450TextSensorConfigTarget_2;
    target_3?: Ld2450TextSensorConfigTarget_3;
    version?: Ld2450TextSensorConfigVersion;
}
