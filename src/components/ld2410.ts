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
import { type ID, type Pin, EsphomeComponent } from "@/lib/base.js";
import type { CoreCOMPONENTSCHEMA } from "./esphome.js";
import type { BinarySensorBINARYSENSORSCHEMA } from "./binary_sensor.js";
import type { ButtonBUTTONSCHEMA } from "./button.js";
import type { NumberNUMBERSCHEMA } from "./number.js";
import type { SelectSELECTSCHEMA } from "./select.js";
import type { SensorSENSORSCHEMA } from "./sensor.js";
import type { SwitchSWITCHSCHEMA } from "./switch.js";
import type { TextSensorTEXTSENSORSCHEMA } from "./text_sensor.js";

export class Ld2410 extends EsphomeComponent<Ld2410Config> {
    componentName: string = "ld2410";
}

export interface Ld2410Config extends CoreCOMPONENTSCHEMA {
    id?: ID;
    uart_id?: ID;
}

export class Ld2410BinarySensor extends EsphomeComponent<Ld2410BinarySensorConfig> {
    componentName: string = "ld2410.binary_sensor";
}

export interface Ld2410BinarySensorConfigHasMovingTarget extends BinarySensorBINARYSENSORSCHEMA {
    device_class?: any;
    filters?: any;
    icon?: any;
}

export interface Ld2410BinarySensorConfigHasStillTarget extends BinarySensorBINARYSENSORSCHEMA {
    device_class?: any;
    filters?: any;
    icon?: any;
}

export interface Ld2410BinarySensorConfigHasTarget extends BinarySensorBINARYSENSORSCHEMA {
    device_class?: any;
    filters?: any;
    icon?: any;
}

export interface Ld2410BinarySensorConfigOutPinPresenceStatus extends BinarySensorBINARYSENSORSCHEMA {
    device_class?: any;
    entity_category?: any;
    filters?: any;
    icon?: any;
}

export interface Ld2410BinarySensorConfig {
    has_moving_target?: Ld2410BinarySensorConfigHasMovingTarget;
    has_still_target?: Ld2410BinarySensorConfigHasStillTarget;
    has_target?: Ld2410BinarySensorConfigHasTarget;
    id?: ID;
    ld2410_id?: ID;
    out_pin_presence_status?: Ld2410BinarySensorConfigOutPinPresenceStatus;
}

export class Ld2410Button extends EsphomeComponent<Ld2410ButtonConfig> {
    componentName: string = "ld2410.button";
}

export interface Ld2410ButtonConfigFactoryReset extends ButtonBUTTONSCHEMA {
    device_class?: any;
    entity_category?: any;
    icon?: any;
    id?: ID;
}

export interface Ld2410ButtonConfigQueryParams extends ButtonBUTTONSCHEMA {
    entity_category?: any;
    icon?: any;
    id?: ID;
}

export interface Ld2410ButtonConfigRestart extends ButtonBUTTONSCHEMA {
    device_class?: any;
    entity_category?: any;
    icon?: any;
    id?: ID;
}

export interface Ld2410ButtonConfig {
    factory_reset?: Ld2410ButtonConfigFactoryReset;
    id?: ID;
    ld2410_id?: ID;
    query_params?: Ld2410ButtonConfigQueryParams;
    restart?: Ld2410ButtonConfigRestart;
}

export class Ld2410Number extends EsphomeComponent<Ld2410NumberConfig> {
    componentName: string = "ld2410.number";
}

export interface Ld2410NumberConfigG0MoveThreshold extends NumberNUMBERSCHEMA {
    device_class?: any;
    entity_category?: any;
    icon?: any;
    id?: ID;
    unit_of_measurement?: any;
}

export interface Ld2410NumberConfigG0StillThreshold extends NumberNUMBERSCHEMA {
    device_class?: any;
    entity_category?: any;
    icon?: any;
    id?: ID;
    unit_of_measurement?: any;
}

export interface Ld2410NumberConfigG0 {
    move_threshold: Ld2410NumberConfigG0MoveThreshold;
    still_threshold: Ld2410NumberConfigG0StillThreshold;
}

export interface Ld2410NumberConfigG1MoveThreshold extends NumberNUMBERSCHEMA {
    device_class?: any;
    entity_category?: any;
    icon?: any;
    id?: ID;
    unit_of_measurement?: any;
}

export interface Ld2410NumberConfigG1StillThreshold extends NumberNUMBERSCHEMA {
    device_class?: any;
    entity_category?: any;
    icon?: any;
    id?: ID;
    unit_of_measurement?: any;
}

export interface Ld2410NumberConfigG1 {
    move_threshold: Ld2410NumberConfigG1MoveThreshold;
    still_threshold: Ld2410NumberConfigG1StillThreshold;
}

export interface Ld2410NumberConfigG2MoveThreshold extends NumberNUMBERSCHEMA {
    device_class?: any;
    entity_category?: any;
    icon?: any;
    id?: ID;
    unit_of_measurement?: any;
}

export interface Ld2410NumberConfigG2StillThreshold extends NumberNUMBERSCHEMA {
    device_class?: any;
    entity_category?: any;
    icon?: any;
    id?: ID;
    unit_of_measurement?: any;
}

export interface Ld2410NumberConfigG2 {
    move_threshold: Ld2410NumberConfigG2MoveThreshold;
    still_threshold: Ld2410NumberConfigG2StillThreshold;
}

export interface Ld2410NumberConfigG3MoveThreshold extends NumberNUMBERSCHEMA {
    device_class?: any;
    entity_category?: any;
    icon?: any;
    id?: ID;
    unit_of_measurement?: any;
}

export interface Ld2410NumberConfigG3StillThreshold extends NumberNUMBERSCHEMA {
    device_class?: any;
    entity_category?: any;
    icon?: any;
    id?: ID;
    unit_of_measurement?: any;
}

export interface Ld2410NumberConfigG3 {
    move_threshold: Ld2410NumberConfigG3MoveThreshold;
    still_threshold: Ld2410NumberConfigG3StillThreshold;
}

export interface Ld2410NumberConfigG4MoveThreshold extends NumberNUMBERSCHEMA {
    device_class?: any;
    entity_category?: any;
    icon?: any;
    id?: ID;
    unit_of_measurement?: any;
}

export interface Ld2410NumberConfigG4StillThreshold extends NumberNUMBERSCHEMA {
    device_class?: any;
    entity_category?: any;
    icon?: any;
    id?: ID;
    unit_of_measurement?: any;
}

export interface Ld2410NumberConfigG4 {
    move_threshold: Ld2410NumberConfigG4MoveThreshold;
    still_threshold: Ld2410NumberConfigG4StillThreshold;
}

export interface Ld2410NumberConfigG5MoveThreshold extends NumberNUMBERSCHEMA {
    device_class?: any;
    entity_category?: any;
    icon?: any;
    id?: ID;
    unit_of_measurement?: any;
}

export interface Ld2410NumberConfigG5StillThreshold extends NumberNUMBERSCHEMA {
    device_class?: any;
    entity_category?: any;
    icon?: any;
    id?: ID;
    unit_of_measurement?: any;
}

export interface Ld2410NumberConfigG5 {
    move_threshold: Ld2410NumberConfigG5MoveThreshold;
    still_threshold: Ld2410NumberConfigG5StillThreshold;
}

export interface Ld2410NumberConfigG6MoveThreshold extends NumberNUMBERSCHEMA {
    device_class?: any;
    entity_category?: any;
    icon?: any;
    id?: ID;
    unit_of_measurement?: any;
}

export interface Ld2410NumberConfigG6StillThreshold extends NumberNUMBERSCHEMA {
    device_class?: any;
    entity_category?: any;
    icon?: any;
    id?: ID;
    unit_of_measurement?: any;
}

export interface Ld2410NumberConfigG6 {
    move_threshold: Ld2410NumberConfigG6MoveThreshold;
    still_threshold: Ld2410NumberConfigG6StillThreshold;
}

export interface Ld2410NumberConfigG7MoveThreshold extends NumberNUMBERSCHEMA {
    device_class?: any;
    entity_category?: any;
    icon?: any;
    id?: ID;
    unit_of_measurement?: any;
}

export interface Ld2410NumberConfigG7StillThreshold extends NumberNUMBERSCHEMA {
    device_class?: any;
    entity_category?: any;
    icon?: any;
    id?: ID;
    unit_of_measurement?: any;
}

export interface Ld2410NumberConfigG7 {
    move_threshold: Ld2410NumberConfigG7MoveThreshold;
    still_threshold: Ld2410NumberConfigG7StillThreshold;
}

export interface Ld2410NumberConfigG8MoveThreshold extends NumberNUMBERSCHEMA {
    device_class?: any;
    entity_category?: any;
    icon?: any;
    id?: ID;
    unit_of_measurement?: any;
}

export interface Ld2410NumberConfigG8StillThreshold extends NumberNUMBERSCHEMA {
    device_class?: any;
    entity_category?: any;
    icon?: any;
    id?: ID;
    unit_of_measurement?: any;
}

export interface Ld2410NumberConfigG8 {
    move_threshold: Ld2410NumberConfigG8MoveThreshold;
    still_threshold: Ld2410NumberConfigG8StillThreshold;
}

export interface Ld2410NumberConfigLightThreshold extends NumberNUMBERSCHEMA {
    device_class?: any;
    entity_category?: any;
    icon?: any;
    id?: ID;
}

export interface Ld2410NumberConfigMaxMoveDistanceGate extends NumberNUMBERSCHEMA {
    device_class?: any;
    entity_category?: any;
    icon?: any;
    id?: ID;
}

export interface Ld2410NumberConfigMaxStillDistanceGate extends NumberNUMBERSCHEMA {
    device_class?: any;
    entity_category?: any;
    icon?: any;
    id?: ID;
}

export interface Ld2410NumberConfigTimeout extends NumberNUMBERSCHEMA {
    entity_category?: any;
    icon?: any;
    id?: ID;
    unit_of_measurement?: any;
}

export interface Ld2410NumberConfig {
    g0?: Ld2410NumberConfigG0;
    g1?: Ld2410NumberConfigG1;
    g2?: Ld2410NumberConfigG2;
    g3?: Ld2410NumberConfigG3;
    g4?: Ld2410NumberConfigG4;
    g5?: Ld2410NumberConfigG5;
    g6?: Ld2410NumberConfigG6;
    g7?: Ld2410NumberConfigG7;
    g8?: Ld2410NumberConfigG8;
    id?: ID;
    ld2410_id?: ID;
    light_threshold?: Ld2410NumberConfigLightThreshold;
    max_move_distance_gate?: Ld2410NumberConfigMaxMoveDistanceGate;
    max_still_distance_gate?: Ld2410NumberConfigMaxStillDistanceGate;
    timeout?: Ld2410NumberConfigTimeout;
}

export class Ld2410Select extends EsphomeComponent<Ld2410SelectConfig> {
    componentName: string = "ld2410.select";
}

export interface Ld2410SelectConfigBaudRate extends SelectSELECTSCHEMA {
    entity_category?: any;
    icon?: any;
    id?: any;
}

export interface Ld2410SelectConfigDistanceResolution extends SelectSELECTSCHEMA {
    entity_category?: any;
    icon?: any;
    id?: any;
}

export interface Ld2410SelectConfigLightFunction extends SelectSELECTSCHEMA {
    entity_category?: any;
    icon?: any;
    id?: any;
}

export interface Ld2410SelectConfigOutPinLevel extends SelectSELECTSCHEMA {
    entity_category?: any;
    icon?: any;
    id?: any;
}

export interface Ld2410SelectConfig {
    baud_rate?: Ld2410SelectConfigBaudRate;
    distance_resolution?: Ld2410SelectConfigDistanceResolution;
    id?: ID;
    ld2410_id?: ID;
    light_function?: Ld2410SelectConfigLightFunction;
    out_pin_level?: Ld2410SelectConfigOutPinLevel;
}

export class Ld2410Sensor extends EsphomeComponent<Ld2410SensorConfig> {
    componentName: string = "ld2410.sensor";
}

export interface Ld2410SensorConfigDetectionDistance extends SensorSENSORSCHEMA {
    device_class?: any;
    filters?: any;
    icon?: any;
    unit_of_measurement?: any;
}

export interface Ld2410SensorConfigG0MoveEnergy extends SensorSENSORSCHEMA {
    entity_category?: any;
    filters?: any;
    icon?: any;
    unit_of_measurement?: any;
}

export interface Ld2410SensorConfigG0StillEnergy extends SensorSENSORSCHEMA {
    entity_category?: any;
    filters?: any;
    icon?: any;
    unit_of_measurement?: any;
}

export interface Ld2410SensorConfigG0 {
    move_energy?: Ld2410SensorConfigG0MoveEnergy;
    still_energy?: Ld2410SensorConfigG0StillEnergy;
}

export interface Ld2410SensorConfigG1MoveEnergy extends SensorSENSORSCHEMA {
    entity_category?: any;
    filters?: any;
    icon?: any;
    unit_of_measurement?: any;
}

export interface Ld2410SensorConfigG1StillEnergy extends SensorSENSORSCHEMA {
    entity_category?: any;
    filters?: any;
    icon?: any;
    unit_of_measurement?: any;
}

export interface Ld2410SensorConfigG1 {
    move_energy?: Ld2410SensorConfigG1MoveEnergy;
    still_energy?: Ld2410SensorConfigG1StillEnergy;
}

export interface Ld2410SensorConfigG2MoveEnergy extends SensorSENSORSCHEMA {
    entity_category?: any;
    filters?: any;
    icon?: any;
    unit_of_measurement?: any;
}

export interface Ld2410SensorConfigG2StillEnergy extends SensorSENSORSCHEMA {
    entity_category?: any;
    filters?: any;
    icon?: any;
    unit_of_measurement?: any;
}

export interface Ld2410SensorConfigG2 {
    move_energy?: Ld2410SensorConfigG2MoveEnergy;
    still_energy?: Ld2410SensorConfigG2StillEnergy;
}

export interface Ld2410SensorConfigG3MoveEnergy extends SensorSENSORSCHEMA {
    entity_category?: any;
    filters?: any;
    icon?: any;
    unit_of_measurement?: any;
}

export interface Ld2410SensorConfigG3StillEnergy extends SensorSENSORSCHEMA {
    entity_category?: any;
    filters?: any;
    icon?: any;
    unit_of_measurement?: any;
}

export interface Ld2410SensorConfigG3 {
    move_energy?: Ld2410SensorConfigG3MoveEnergy;
    still_energy?: Ld2410SensorConfigG3StillEnergy;
}

export interface Ld2410SensorConfigG4MoveEnergy extends SensorSENSORSCHEMA {
    entity_category?: any;
    filters?: any;
    icon?: any;
    unit_of_measurement?: any;
}

export interface Ld2410SensorConfigG4StillEnergy extends SensorSENSORSCHEMA {
    entity_category?: any;
    filters?: any;
    icon?: any;
    unit_of_measurement?: any;
}

export interface Ld2410SensorConfigG4 {
    move_energy?: Ld2410SensorConfigG4MoveEnergy;
    still_energy?: Ld2410SensorConfigG4StillEnergy;
}

export interface Ld2410SensorConfigG5MoveEnergy extends SensorSENSORSCHEMA {
    entity_category?: any;
    filters?: any;
    icon?: any;
    unit_of_measurement?: any;
}

export interface Ld2410SensorConfigG5StillEnergy extends SensorSENSORSCHEMA {
    entity_category?: any;
    filters?: any;
    icon?: any;
    unit_of_measurement?: any;
}

export interface Ld2410SensorConfigG5 {
    move_energy?: Ld2410SensorConfigG5MoveEnergy;
    still_energy?: Ld2410SensorConfigG5StillEnergy;
}

export interface Ld2410SensorConfigG6MoveEnergy extends SensorSENSORSCHEMA {
    entity_category?: any;
    filters?: any;
    icon?: any;
    unit_of_measurement?: any;
}

export interface Ld2410SensorConfigG6StillEnergy extends SensorSENSORSCHEMA {
    entity_category?: any;
    filters?: any;
    icon?: any;
    unit_of_measurement?: any;
}

export interface Ld2410SensorConfigG6 {
    move_energy?: Ld2410SensorConfigG6MoveEnergy;
    still_energy?: Ld2410SensorConfigG6StillEnergy;
}

export interface Ld2410SensorConfigG7MoveEnergy extends SensorSENSORSCHEMA {
    entity_category?: any;
    filters?: any;
    icon?: any;
    unit_of_measurement?: any;
}

export interface Ld2410SensorConfigG7StillEnergy extends SensorSENSORSCHEMA {
    entity_category?: any;
    filters?: any;
    icon?: any;
    unit_of_measurement?: any;
}

export interface Ld2410SensorConfigG7 {
    move_energy?: Ld2410SensorConfigG7MoveEnergy;
    still_energy?: Ld2410SensorConfigG7StillEnergy;
}

export interface Ld2410SensorConfigG8MoveEnergy extends SensorSENSORSCHEMA {
    entity_category?: any;
    filters?: any;
    icon?: any;
    unit_of_measurement?: any;
}

export interface Ld2410SensorConfigG8StillEnergy extends SensorSENSORSCHEMA {
    entity_category?: any;
    filters?: any;
    icon?: any;
    unit_of_measurement?: any;
}

export interface Ld2410SensorConfigG8 {
    move_energy?: Ld2410SensorConfigG8MoveEnergy;
    still_energy?: Ld2410SensorConfigG8StillEnergy;
}

export interface Ld2410SensorConfigLight extends SensorSENSORSCHEMA {
    device_class?: any;
    entity_category?: any;
    filters?: any;
    icon?: any;
}

export interface Ld2410SensorConfigMovingDistance extends SensorSENSORSCHEMA {
    device_class?: any;
    filters?: any;
    icon?: any;
    unit_of_measurement?: any;
}

export interface Ld2410SensorConfigMovingEnergy extends SensorSENSORSCHEMA {
    filters?: any;
    icon?: any;
    unit_of_measurement?: any;
}

export interface Ld2410SensorConfigStillDistance extends SensorSENSORSCHEMA {
    device_class?: any;
    filters?: any;
    icon?: any;
    unit_of_measurement?: any;
}

export interface Ld2410SensorConfigStillEnergy extends SensorSENSORSCHEMA {
    filters?: any;
    icon?: any;
    unit_of_measurement?: any;
}

export interface Ld2410SensorConfig {
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
    id?: ID;
    ld2410_id?: ID;
    light?: Ld2410SensorConfigLight;
    moving_distance?: Ld2410SensorConfigMovingDistance;
    moving_energy?: Ld2410SensorConfigMovingEnergy;
    still_distance?: Ld2410SensorConfigStillDistance;
    still_energy?: Ld2410SensorConfigStillEnergy;
}

export class Ld2410Switch extends EsphomeComponent<Ld2410SwitchConfig> {
    componentName: string = "ld2410.switch";
}

export interface Ld2410SwitchConfigBluetooth extends SwitchSWITCHSCHEMA {
    device_class?: any;
    entity_category?: any;
    icon?: any;
    id?: ID;
}

export interface Ld2410SwitchConfigEngineeringMode extends SwitchSWITCHSCHEMA {
    device_class?: any;
    entity_category?: any;
    icon?: any;
    id?: ID;
}

export interface Ld2410SwitchConfig {
    bluetooth?: Ld2410SwitchConfigBluetooth;
    engineering_mode?: Ld2410SwitchConfigEngineeringMode;
    id?: ID;
    ld2410_id?: ID;
}

export class Ld2410TextSensor extends EsphomeComponent<Ld2410TextSensorConfig> {
    componentName: string = "ld2410.text_sensor";
}

export interface Ld2410TextSensorConfigMacAddress extends TextSensorTEXTSENSORSCHEMA {
    entity_category?: any;
    icon?: any;
}

export interface Ld2410TextSensorConfigVersion extends TextSensorTEXTSENSORSCHEMA {
    entity_category?: any;
    icon?: any;
}

export interface Ld2410TextSensorConfig {
    id?: ID;
    ld2410_id?: ID;
    mac_address?: Ld2410TextSensorConfigMacAddress;
    version?: Ld2410TextSensorConfigVersion;
}
