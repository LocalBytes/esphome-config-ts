/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: ld2410.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/ld2410
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes)
 **/
import { type ID, type Pin, BaseComponent } from "@/lib/base.js";
import type { CorePositiveTimePeriodMilliseconds, CoreCOMPONENT_SCHEMA } from "./esphome.js";
import type { SensorSENSOR_SCHEMA } from "./sensor.js";
import type { BinarySensorBINARY_SENSOR_SCHEMA } from "./binary_sensor.js";
import type { ButtonBUTTON_SCHEMA } from "./button.js";
import type { NumberNUMBER_SCHEMA } from "./number.js";
import type { SelectSELECT_SCHEMA } from "./select.js";
import type { Switch_SWITCH_SCHEMA } from "./switch.js";
import type { TextSensorTEXT_SENSOR_SCHEMA } from "./text_sensor.js";

export class Ld2410 extends BaseComponent<Ld2410Config> {
    componentName: string = "ld2410";
}

export type Ld2410ConfigThrottle = CorePositiveTimePeriodMilliseconds;

export interface Ld2410Config extends CoreCOMPONENT_SCHEMA {
    id?: ID;
    throttle?: Ld2410ConfigThrottle;
    uart_id?: ID;
}

export class Ld2410Sensor extends BaseComponent<Ld2410SensorConfig> {
    componentName: string = "ld2410.sensor";
}

export interface Ld2410SensorConfigMovingDistance extends SensorSENSOR_SCHEMA {
    unit_of_measurement?: any;
    icon?: any;
    device_class?: any;
}

export interface Ld2410SensorConfigStillDistance extends SensorSENSOR_SCHEMA {
    unit_of_measurement?: any;
    icon?: any;
    device_class?: any;
}

export interface Ld2410SensorConfigMovingEnergy extends SensorSENSOR_SCHEMA {
    unit_of_measurement?: any;
    icon?: any;
}

export interface Ld2410SensorConfigStillEnergy extends SensorSENSOR_SCHEMA {
    unit_of_measurement?: any;
    icon?: any;
}

export interface Ld2410SensorConfigLight extends SensorSENSOR_SCHEMA {
    icon?: any;
    device_class?: any;
    entity_category?: any;
}

export interface Ld2410SensorConfigDetectionDistance extends SensorSENSOR_SCHEMA {
    unit_of_measurement?: any;
    icon?: any;
    device_class?: any;
}

export interface Ld2410SensorConfigG0MoveEnergy extends SensorSENSOR_SCHEMA {
    unit_of_measurement?: any;
    icon?: any;
    entity_category?: any;
}

export interface Ld2410SensorConfigG0StillEnergy extends SensorSENSOR_SCHEMA {
    unit_of_measurement?: any;
    icon?: any;
    entity_category?: any;
}

export interface Ld2410SensorConfigG0 {
    move_energy?: Ld2410SensorConfigG0MoveEnergy;
    still_energy?: Ld2410SensorConfigG0StillEnergy;
}

export interface Ld2410SensorConfigG1MoveEnergy extends SensorSENSOR_SCHEMA {
    unit_of_measurement?: any;
    icon?: any;
    entity_category?: any;
}

export interface Ld2410SensorConfigG1StillEnergy extends SensorSENSOR_SCHEMA {
    unit_of_measurement?: any;
    icon?: any;
    entity_category?: any;
}

export interface Ld2410SensorConfigG1 {
    move_energy?: Ld2410SensorConfigG1MoveEnergy;
    still_energy?: Ld2410SensorConfigG1StillEnergy;
}

export interface Ld2410SensorConfigG2MoveEnergy extends SensorSENSOR_SCHEMA {
    unit_of_measurement?: any;
    icon?: any;
    entity_category?: any;
}

export interface Ld2410SensorConfigG2StillEnergy extends SensorSENSOR_SCHEMA {
    unit_of_measurement?: any;
    icon?: any;
    entity_category?: any;
}

export interface Ld2410SensorConfigG2 {
    move_energy?: Ld2410SensorConfigG2MoveEnergy;
    still_energy?: Ld2410SensorConfigG2StillEnergy;
}

export interface Ld2410SensorConfigG3MoveEnergy extends SensorSENSOR_SCHEMA {
    unit_of_measurement?: any;
    icon?: any;
    entity_category?: any;
}

export interface Ld2410SensorConfigG3StillEnergy extends SensorSENSOR_SCHEMA {
    unit_of_measurement?: any;
    icon?: any;
    entity_category?: any;
}

export interface Ld2410SensorConfigG3 {
    move_energy?: Ld2410SensorConfigG3MoveEnergy;
    still_energy?: Ld2410SensorConfigG3StillEnergy;
}

export interface Ld2410SensorConfigG4MoveEnergy extends SensorSENSOR_SCHEMA {
    unit_of_measurement?: any;
    icon?: any;
    entity_category?: any;
}

export interface Ld2410SensorConfigG4StillEnergy extends SensorSENSOR_SCHEMA {
    unit_of_measurement?: any;
    icon?: any;
    entity_category?: any;
}

export interface Ld2410SensorConfigG4 {
    move_energy?: Ld2410SensorConfigG4MoveEnergy;
    still_energy?: Ld2410SensorConfigG4StillEnergy;
}

export interface Ld2410SensorConfigG5MoveEnergy extends SensorSENSOR_SCHEMA {
    unit_of_measurement?: any;
    icon?: any;
    entity_category?: any;
}

export interface Ld2410SensorConfigG5StillEnergy extends SensorSENSOR_SCHEMA {
    unit_of_measurement?: any;
    icon?: any;
    entity_category?: any;
}

export interface Ld2410SensorConfigG5 {
    move_energy?: Ld2410SensorConfigG5MoveEnergy;
    still_energy?: Ld2410SensorConfigG5StillEnergy;
}

export interface Ld2410SensorConfigG6MoveEnergy extends SensorSENSOR_SCHEMA {
    unit_of_measurement?: any;
    icon?: any;
    entity_category?: any;
}

export interface Ld2410SensorConfigG6StillEnergy extends SensorSENSOR_SCHEMA {
    unit_of_measurement?: any;
    icon?: any;
    entity_category?: any;
}

export interface Ld2410SensorConfigG6 {
    move_energy?: Ld2410SensorConfigG6MoveEnergy;
    still_energy?: Ld2410SensorConfigG6StillEnergy;
}

export interface Ld2410SensorConfigG7MoveEnergy extends SensorSENSOR_SCHEMA {
    unit_of_measurement?: any;
    icon?: any;
    entity_category?: any;
}

export interface Ld2410SensorConfigG7StillEnergy extends SensorSENSOR_SCHEMA {
    unit_of_measurement?: any;
    icon?: any;
    entity_category?: any;
}

export interface Ld2410SensorConfigG7 {
    move_energy?: Ld2410SensorConfigG7MoveEnergy;
    still_energy?: Ld2410SensorConfigG7StillEnergy;
}

export interface Ld2410SensorConfigG8MoveEnergy extends SensorSENSOR_SCHEMA {
    unit_of_measurement?: any;
    icon?: any;
    entity_category?: any;
}

export interface Ld2410SensorConfigG8StillEnergy extends SensorSENSOR_SCHEMA {
    unit_of_measurement?: any;
    icon?: any;
    entity_category?: any;
}

export interface Ld2410SensorConfigG8 {
    move_energy?: Ld2410SensorConfigG8MoveEnergy;
    still_energy?: Ld2410SensorConfigG8StillEnergy;
}

export interface Ld2410SensorConfig {
    ld2410_id?: ID;
    moving_distance?: Ld2410SensorConfigMovingDistance;
    still_distance?: Ld2410SensorConfigStillDistance;
    moving_energy?: Ld2410SensorConfigMovingEnergy;
    still_energy?: Ld2410SensorConfigStillEnergy;
    light?: Ld2410SensorConfigLight;
    detection_distance?: Ld2410SensorConfigDetectionDistance;
    g0?: Ld2410SensorConfigG0;
    g1?: Ld2410SensorConfigG1;
    g2?: Ld2410SensorConfigG2;
    g3?: Ld2410SensorConfigG3;
    g4?: Ld2410SensorConfigG4;
    g5?: Ld2410SensorConfigG5;
    g6?: Ld2410SensorConfigG6;
    g7?: Ld2410SensorConfigG7;
    g8?: Ld2410SensorConfigG8;
}

export class Ld2410BinarySensor extends BaseComponent<Ld2410BinarySensorConfig> {
    componentName: string = "ld2410.binary_sensor";
}

export interface Ld2410BinarySensorConfigHasTarget extends BinarySensorBINARY_SENSOR_SCHEMA {
    icon?: any;
    device_class?: any;
}

export interface Ld2410BinarySensorConfigHasMovingTarget extends BinarySensorBINARY_SENSOR_SCHEMA {
    icon?: any;
    device_class?: any;
}

export interface Ld2410BinarySensorConfigHasStillTarget extends BinarySensorBINARY_SENSOR_SCHEMA {
    icon?: any;
    device_class?: any;
}

export interface Ld2410BinarySensorConfigOutPinPresenceStatus extends BinarySensorBINARY_SENSOR_SCHEMA {
    icon?: any;
    entity_category?: any;
    device_class?: any;
}

export interface Ld2410BinarySensorConfig {
    ld2410_id?: ID;
    has_target?: Ld2410BinarySensorConfigHasTarget;
    has_moving_target?: Ld2410BinarySensorConfigHasMovingTarget;
    has_still_target?: Ld2410BinarySensorConfigHasStillTarget;
    out_pin_presence_status?: Ld2410BinarySensorConfigOutPinPresenceStatus;
}

export class Ld2410Button extends BaseComponent<Ld2410ButtonConfig> {
    componentName: string = "ld2410.button";
}

export interface Ld2410ButtonConfigFactoryReset extends ButtonBUTTON_SCHEMA {
    id?: ID;
    icon?: any;
    entity_category?: any;
    device_class?: any;
}

export interface Ld2410ButtonConfigRestart extends ButtonBUTTON_SCHEMA {
    id?: ID;
    icon?: any;
    entity_category?: any;
    device_class?: any;
}

export interface Ld2410ButtonConfigQueryParams extends ButtonBUTTON_SCHEMA {
    id?: ID;
    icon?: any;
    entity_category?: any;
}

export interface Ld2410ButtonConfig {
    ld2410_id?: ID;
    factory_reset?: Ld2410ButtonConfigFactoryReset;
    restart?: Ld2410ButtonConfigRestart;
    query_params?: Ld2410ButtonConfigQueryParams;
}

export class Ld2410Number extends BaseComponent<Ld2410NumberConfig> {
    componentName: string = "ld2410.number";
}

export interface Ld2410NumberConfigTimeout extends NumberNUMBER_SCHEMA {
    id?: ID;
    icon?: any;
    entity_category?: any;
    unit_of_measurement?: any;
}

export interface Ld2410NumberConfigMaxMoveDistanceGate extends NumberNUMBER_SCHEMA {
    id?: ID;
    icon?: any;
    entity_category?: any;
    device_class?: any;
}

export interface Ld2410NumberConfigMaxStillDistanceGate extends NumberNUMBER_SCHEMA {
    id?: ID;
    icon?: any;
    entity_category?: any;
    device_class?: any;
}

export interface Ld2410NumberConfigLightThreshold extends NumberNUMBER_SCHEMA {
    id?: ID;
    icon?: any;
    entity_category?: any;
    device_class?: any;
}

export interface Ld2410NumberConfigG0MoveThreshold extends NumberNUMBER_SCHEMA {
    id?: ID;
    icon?: any;
    entity_category?: any;
    device_class?: any;
    unit_of_measurement?: any;
}

export interface Ld2410NumberConfigG0StillThreshold extends NumberNUMBER_SCHEMA {
    id?: ID;
    icon?: any;
    entity_category?: any;
    device_class?: any;
    unit_of_measurement?: any;
}

export interface Ld2410NumberConfigG0 {
    move_threshold: Ld2410NumberConfigG0MoveThreshold;
    still_threshold: Ld2410NumberConfigG0StillThreshold;
}

export interface Ld2410NumberConfigG1MoveThreshold extends NumberNUMBER_SCHEMA {
    id?: ID;
    icon?: any;
    entity_category?: any;
    device_class?: any;
    unit_of_measurement?: any;
}

export interface Ld2410NumberConfigG1StillThreshold extends NumberNUMBER_SCHEMA {
    id?: ID;
    icon?: any;
    entity_category?: any;
    device_class?: any;
    unit_of_measurement?: any;
}

export interface Ld2410NumberConfigG1 {
    move_threshold: Ld2410NumberConfigG1MoveThreshold;
    still_threshold: Ld2410NumberConfigG1StillThreshold;
}

export interface Ld2410NumberConfigG2MoveThreshold extends NumberNUMBER_SCHEMA {
    id?: ID;
    icon?: any;
    entity_category?: any;
    device_class?: any;
    unit_of_measurement?: any;
}

export interface Ld2410NumberConfigG2StillThreshold extends NumberNUMBER_SCHEMA {
    id?: ID;
    icon?: any;
    entity_category?: any;
    device_class?: any;
    unit_of_measurement?: any;
}

export interface Ld2410NumberConfigG2 {
    move_threshold: Ld2410NumberConfigG2MoveThreshold;
    still_threshold: Ld2410NumberConfigG2StillThreshold;
}

export interface Ld2410NumberConfigG3MoveThreshold extends NumberNUMBER_SCHEMA {
    id?: ID;
    icon?: any;
    entity_category?: any;
    device_class?: any;
    unit_of_measurement?: any;
}

export interface Ld2410NumberConfigG3StillThreshold extends NumberNUMBER_SCHEMA {
    id?: ID;
    icon?: any;
    entity_category?: any;
    device_class?: any;
    unit_of_measurement?: any;
}

export interface Ld2410NumberConfigG3 {
    move_threshold: Ld2410NumberConfigG3MoveThreshold;
    still_threshold: Ld2410NumberConfigG3StillThreshold;
}

export interface Ld2410NumberConfigG4MoveThreshold extends NumberNUMBER_SCHEMA {
    id?: ID;
    icon?: any;
    entity_category?: any;
    device_class?: any;
    unit_of_measurement?: any;
}

export interface Ld2410NumberConfigG4StillThreshold extends NumberNUMBER_SCHEMA {
    id?: ID;
    icon?: any;
    entity_category?: any;
    device_class?: any;
    unit_of_measurement?: any;
}

export interface Ld2410NumberConfigG4 {
    move_threshold: Ld2410NumberConfigG4MoveThreshold;
    still_threshold: Ld2410NumberConfigG4StillThreshold;
}

export interface Ld2410NumberConfigG5MoveThreshold extends NumberNUMBER_SCHEMA {
    id?: ID;
    icon?: any;
    entity_category?: any;
    device_class?: any;
    unit_of_measurement?: any;
}

export interface Ld2410NumberConfigG5StillThreshold extends NumberNUMBER_SCHEMA {
    id?: ID;
    icon?: any;
    entity_category?: any;
    device_class?: any;
    unit_of_measurement?: any;
}

export interface Ld2410NumberConfigG5 {
    move_threshold: Ld2410NumberConfigG5MoveThreshold;
    still_threshold: Ld2410NumberConfigG5StillThreshold;
}

export interface Ld2410NumberConfigG6MoveThreshold extends NumberNUMBER_SCHEMA {
    id?: ID;
    icon?: any;
    entity_category?: any;
    device_class?: any;
    unit_of_measurement?: any;
}

export interface Ld2410NumberConfigG6StillThreshold extends NumberNUMBER_SCHEMA {
    id?: ID;
    icon?: any;
    entity_category?: any;
    device_class?: any;
    unit_of_measurement?: any;
}

export interface Ld2410NumberConfigG6 {
    move_threshold: Ld2410NumberConfigG6MoveThreshold;
    still_threshold: Ld2410NumberConfigG6StillThreshold;
}

export interface Ld2410NumberConfigG7MoveThreshold extends NumberNUMBER_SCHEMA {
    id?: ID;
    icon?: any;
    entity_category?: any;
    device_class?: any;
    unit_of_measurement?: any;
}

export interface Ld2410NumberConfigG7StillThreshold extends NumberNUMBER_SCHEMA {
    id?: ID;
    icon?: any;
    entity_category?: any;
    device_class?: any;
    unit_of_measurement?: any;
}

export interface Ld2410NumberConfigG7 {
    move_threshold: Ld2410NumberConfigG7MoveThreshold;
    still_threshold: Ld2410NumberConfigG7StillThreshold;
}

export interface Ld2410NumberConfigG8MoveThreshold extends NumberNUMBER_SCHEMA {
    id?: ID;
    icon?: any;
    entity_category?: any;
    device_class?: any;
    unit_of_measurement?: any;
}

export interface Ld2410NumberConfigG8StillThreshold extends NumberNUMBER_SCHEMA {
    id?: ID;
    icon?: any;
    entity_category?: any;
    device_class?: any;
    unit_of_measurement?: any;
}

export interface Ld2410NumberConfigG8 {
    move_threshold: Ld2410NumberConfigG8MoveThreshold;
    still_threshold: Ld2410NumberConfigG8StillThreshold;
}

export interface Ld2410NumberConfig {
    ld2410_id?: ID;
    timeout?: Ld2410NumberConfigTimeout;
    max_move_distance_gate?: Ld2410NumberConfigMaxMoveDistanceGate;
    max_still_distance_gate?: Ld2410NumberConfigMaxStillDistanceGate;
    light_threshold?: Ld2410NumberConfigLightThreshold;
    g0?: Ld2410NumberConfigG0;
    g1?: Ld2410NumberConfigG1;
    g2?: Ld2410NumberConfigG2;
    g3?: Ld2410NumberConfigG3;
    g4?: Ld2410NumberConfigG4;
    g5?: Ld2410NumberConfigG5;
    g6?: Ld2410NumberConfigG6;
    g7?: Ld2410NumberConfigG7;
    g8?: Ld2410NumberConfigG8;
}

export class Ld2410Select extends BaseComponent<Ld2410SelectConfig> {
    componentName: string = "ld2410.select";
}

export interface Ld2410SelectConfigDistanceResolution extends SelectSELECT_SCHEMA {
    id?: any;
    entity_category?: any;
    icon?: any;
}

export interface Ld2410SelectConfigLightFunction extends SelectSELECT_SCHEMA {
    id?: any;
    entity_category?: any;
    icon?: any;
}

export interface Ld2410SelectConfigOutPinLevel extends SelectSELECT_SCHEMA {
    id?: any;
    entity_category?: any;
    icon?: any;
}

export interface Ld2410SelectConfigBaudRate extends SelectSELECT_SCHEMA {
    id?: any;
    entity_category?: any;
    icon?: any;
}

export interface Ld2410SelectConfig {
    ld2410_id?: ID;
    distance_resolution?: Ld2410SelectConfigDistanceResolution;
    light_function?: Ld2410SelectConfigLightFunction;
    out_pin_level?: Ld2410SelectConfigOutPinLevel;
    baud_rate?: Ld2410SelectConfigBaudRate;
}

export class Ld2410Switch extends BaseComponent<Ld2410SwitchConfig> {
    componentName: string = "ld2410.switch";
}

export type Ld2410SwitchConfigEngineeringModeRestoreMode = 'RESTORE_DEFAULT_OFF' | 'RESTORE_DEFAULT_ON' | 'ALWAYS_OFF' | 'ALWAYS_ON' | 'RESTORE_INVERTED_DEFAULT_OFF' | 'RESTORE_INVERTED_DEFAULT_ON' | 'DISABLED';

export interface Ld2410SwitchConfigEngineeringMode extends Switch_SWITCH_SCHEMA {
    restore_mode?: Ld2410SwitchConfigEngineeringModeRestoreMode;
    id?: ID;
    entity_category?: any;
    device_class?: any;
    icon?: any;
}

export type Ld2410SwitchConfigBluetoothRestoreMode = 'RESTORE_DEFAULT_OFF' | 'RESTORE_DEFAULT_ON' | 'ALWAYS_OFF' | 'ALWAYS_ON' | 'RESTORE_INVERTED_DEFAULT_OFF' | 'RESTORE_INVERTED_DEFAULT_ON' | 'DISABLED';

export interface Ld2410SwitchConfigBluetooth extends Switch_SWITCH_SCHEMA {
    restore_mode?: Ld2410SwitchConfigBluetoothRestoreMode;
    id?: ID;
    entity_category?: any;
    device_class?: any;
    icon?: any;
}

export interface Ld2410SwitchConfig {
    ld2410_id?: ID;
    engineering_mode?: Ld2410SwitchConfigEngineeringMode;
    bluetooth?: Ld2410SwitchConfigBluetooth;
}

export class Ld2410TextSensor extends BaseComponent<Ld2410TextSensorConfig> {
    componentName: string = "ld2410.text_sensor";
}

export interface Ld2410TextSensorConfigVersion extends TextSensorTEXT_SENSOR_SCHEMA {
    icon?: any;
    entity_category?: any;
}

export interface Ld2410TextSensorConfigMacAddress extends TextSensorTEXT_SENSOR_SCHEMA {
    icon?: any;
    entity_category?: any;
}

export interface Ld2410TextSensorConfig {
    ld2410_id?: ID;
    version?: Ld2410TextSensorConfigVersion;
    mac_address?: Ld2410TextSensorConfigMacAddress;
}
