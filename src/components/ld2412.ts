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
import type { CoreCOMPONENTSCHEMA } from "./esphome.js";
import type { BinarySensorBINARYSENSORSCHEMA } from "./binary_sensor.js";
import type { ButtonBUTTONSCHEMA } from "./button.js";
import type { NumberNUMBERSCHEMA } from "./number.js";
import type { SelectSELECTSCHEMA } from "./select.js";
import type { SensorSENSORSCHEMA } from "./sensor.js";
import type { SwitchSWITCHSCHEMA } from "./switch.js";
import type { TextSensorTEXTSENSORSCHEMA } from "./text_sensor.js";

export class Ld2412 extends EsphomeComponent<Ld2412Config> {
    componentName: string = "ld2412";
}

export interface Ld2412Config extends CoreCOMPONENTSCHEMA {
    id?: ID;
    uart_id?: ID;
}

export class Ld2412BinarySensor extends EsphomeComponent<Ld2412BinarySensorConfig> {
    componentName: string = "ld2412.binary_sensor";
}

export interface Ld2412BinarySensorConfigDynamicBackgroundCorrectionStatus extends BinarySensorBINARYSENSORSCHEMA {
    device_class?: any;
    entity_category?: any;
    icon?: any;
}

export interface Ld2412BinarySensorConfigHasMovingTarget extends BinarySensorBINARYSENSORSCHEMA {
    device_class?: any;
    filters?: any;
    icon?: any;
}

export interface Ld2412BinarySensorConfigHasStillTarget extends BinarySensorBINARYSENSORSCHEMA {
    device_class?: any;
    filters?: any;
    icon?: any;
}

export interface Ld2412BinarySensorConfigHasTarget extends BinarySensorBINARYSENSORSCHEMA {
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

export interface Ld2412ButtonConfigFactoryReset extends ButtonBUTTONSCHEMA {
    device_class?: any;
    entity_category?: any;
    icon?: any;
    id?: ID;
}

export interface Ld2412ButtonConfigQueryParams extends ButtonBUTTONSCHEMA {
    entity_category?: any;
    icon?: any;
    id?: ID;
}

export interface Ld2412ButtonConfigRestart extends ButtonBUTTONSCHEMA {
    device_class?: any;
    entity_category?: any;
    icon?: any;
    id?: ID;
}

export interface Ld2412ButtonConfigStartDynamicBackgroundCorrection extends ButtonBUTTONSCHEMA {
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

export interface Ld2412NumberConfigGate0MoveThreshold extends NumberNUMBERSCHEMA {
    device_class?: any;
    entity_category?: any;
    icon?: any;
    id?: ID;
    unit_of_measurement?: any;
}

export interface Ld2412NumberConfigGate0StillThreshold extends NumberNUMBERSCHEMA {
    device_class?: any;
    entity_category?: any;
    icon?: any;
    id?: ID;
    unit_of_measurement?: any;
}

export interface Ld2412NumberConfigGate0 {
    move_threshold: Ld2412NumberConfigGate0MoveThreshold;
    still_threshold: Ld2412NumberConfigGate0StillThreshold;
}

export interface Ld2412NumberConfigGate1MoveThreshold extends NumberNUMBERSCHEMA {
    device_class?: any;
    entity_category?: any;
    icon?: any;
    id?: ID;
    unit_of_measurement?: any;
}

export interface Ld2412NumberConfigGate1StillThreshold extends NumberNUMBERSCHEMA {
    device_class?: any;
    entity_category?: any;
    icon?: any;
    id?: ID;
    unit_of_measurement?: any;
}

export interface Ld2412NumberConfigGate1 {
    move_threshold: Ld2412NumberConfigGate1MoveThreshold;
    still_threshold: Ld2412NumberConfigGate1StillThreshold;
}

export interface Ld2412NumberConfigGate10MoveThreshold extends NumberNUMBERSCHEMA {
    device_class?: any;
    entity_category?: any;
    icon?: any;
    id?: ID;
    unit_of_measurement?: any;
}

export interface Ld2412NumberConfigGate10StillThreshold extends NumberNUMBERSCHEMA {
    device_class?: any;
    entity_category?: any;
    icon?: any;
    id?: ID;
    unit_of_measurement?: any;
}

export interface Ld2412NumberConfigGate10 {
    move_threshold: Ld2412NumberConfigGate10MoveThreshold;
    still_threshold: Ld2412NumberConfigGate10StillThreshold;
}

export interface Ld2412NumberConfigGate11MoveThreshold extends NumberNUMBERSCHEMA {
    device_class?: any;
    entity_category?: any;
    icon?: any;
    id?: ID;
    unit_of_measurement?: any;
}

export interface Ld2412NumberConfigGate11StillThreshold extends NumberNUMBERSCHEMA {
    device_class?: any;
    entity_category?: any;
    icon?: any;
    id?: ID;
    unit_of_measurement?: any;
}

export interface Ld2412NumberConfigGate11 {
    move_threshold: Ld2412NumberConfigGate11MoveThreshold;
    still_threshold: Ld2412NumberConfigGate11StillThreshold;
}

export interface Ld2412NumberConfigGate12MoveThreshold extends NumberNUMBERSCHEMA {
    device_class?: any;
    entity_category?: any;
    icon?: any;
    id?: ID;
    unit_of_measurement?: any;
}

export interface Ld2412NumberConfigGate12StillThreshold extends NumberNUMBERSCHEMA {
    device_class?: any;
    entity_category?: any;
    icon?: any;
    id?: ID;
    unit_of_measurement?: any;
}

export interface Ld2412NumberConfigGate12 {
    move_threshold: Ld2412NumberConfigGate12MoveThreshold;
    still_threshold: Ld2412NumberConfigGate12StillThreshold;
}

export interface Ld2412NumberConfigGate13MoveThreshold extends NumberNUMBERSCHEMA {
    device_class?: any;
    entity_category?: any;
    icon?: any;
    id?: ID;
    unit_of_measurement?: any;
}

export interface Ld2412NumberConfigGate13StillThreshold extends NumberNUMBERSCHEMA {
    device_class?: any;
    entity_category?: any;
    icon?: any;
    id?: ID;
    unit_of_measurement?: any;
}

export interface Ld2412NumberConfigGate13 {
    move_threshold: Ld2412NumberConfigGate13MoveThreshold;
    still_threshold: Ld2412NumberConfigGate13StillThreshold;
}

export interface Ld2412NumberConfigGate2MoveThreshold extends NumberNUMBERSCHEMA {
    device_class?: any;
    entity_category?: any;
    icon?: any;
    id?: ID;
    unit_of_measurement?: any;
}

export interface Ld2412NumberConfigGate2StillThreshold extends NumberNUMBERSCHEMA {
    device_class?: any;
    entity_category?: any;
    icon?: any;
    id?: ID;
    unit_of_measurement?: any;
}

export interface Ld2412NumberConfigGate2 {
    move_threshold: Ld2412NumberConfigGate2MoveThreshold;
    still_threshold: Ld2412NumberConfigGate2StillThreshold;
}

export interface Ld2412NumberConfigGate3MoveThreshold extends NumberNUMBERSCHEMA {
    device_class?: any;
    entity_category?: any;
    icon?: any;
    id?: ID;
    unit_of_measurement?: any;
}

export interface Ld2412NumberConfigGate3StillThreshold extends NumberNUMBERSCHEMA {
    device_class?: any;
    entity_category?: any;
    icon?: any;
    id?: ID;
    unit_of_measurement?: any;
}

export interface Ld2412NumberConfigGate3 {
    move_threshold: Ld2412NumberConfigGate3MoveThreshold;
    still_threshold: Ld2412NumberConfigGate3StillThreshold;
}

export interface Ld2412NumberConfigGate4MoveThreshold extends NumberNUMBERSCHEMA {
    device_class?: any;
    entity_category?: any;
    icon?: any;
    id?: ID;
    unit_of_measurement?: any;
}

export interface Ld2412NumberConfigGate4StillThreshold extends NumberNUMBERSCHEMA {
    device_class?: any;
    entity_category?: any;
    icon?: any;
    id?: ID;
    unit_of_measurement?: any;
}

export interface Ld2412NumberConfigGate4 {
    move_threshold: Ld2412NumberConfigGate4MoveThreshold;
    still_threshold: Ld2412NumberConfigGate4StillThreshold;
}

export interface Ld2412NumberConfigGate5MoveThreshold extends NumberNUMBERSCHEMA {
    device_class?: any;
    entity_category?: any;
    icon?: any;
    id?: ID;
    unit_of_measurement?: any;
}

export interface Ld2412NumberConfigGate5StillThreshold extends NumberNUMBERSCHEMA {
    device_class?: any;
    entity_category?: any;
    icon?: any;
    id?: ID;
    unit_of_measurement?: any;
}

export interface Ld2412NumberConfigGate5 {
    move_threshold: Ld2412NumberConfigGate5MoveThreshold;
    still_threshold: Ld2412NumberConfigGate5StillThreshold;
}

export interface Ld2412NumberConfigGate6MoveThreshold extends NumberNUMBERSCHEMA {
    device_class?: any;
    entity_category?: any;
    icon?: any;
    id?: ID;
    unit_of_measurement?: any;
}

export interface Ld2412NumberConfigGate6StillThreshold extends NumberNUMBERSCHEMA {
    device_class?: any;
    entity_category?: any;
    icon?: any;
    id?: ID;
    unit_of_measurement?: any;
}

export interface Ld2412NumberConfigGate6 {
    move_threshold: Ld2412NumberConfigGate6MoveThreshold;
    still_threshold: Ld2412NumberConfigGate6StillThreshold;
}

export interface Ld2412NumberConfigGate7MoveThreshold extends NumberNUMBERSCHEMA {
    device_class?: any;
    entity_category?: any;
    icon?: any;
    id?: ID;
    unit_of_measurement?: any;
}

export interface Ld2412NumberConfigGate7StillThreshold extends NumberNUMBERSCHEMA {
    device_class?: any;
    entity_category?: any;
    icon?: any;
    id?: ID;
    unit_of_measurement?: any;
}

export interface Ld2412NumberConfigGate7 {
    move_threshold: Ld2412NumberConfigGate7MoveThreshold;
    still_threshold: Ld2412NumberConfigGate7StillThreshold;
}

export interface Ld2412NumberConfigGate8MoveThreshold extends NumberNUMBERSCHEMA {
    device_class?: any;
    entity_category?: any;
    icon?: any;
    id?: ID;
    unit_of_measurement?: any;
}

export interface Ld2412NumberConfigGate8StillThreshold extends NumberNUMBERSCHEMA {
    device_class?: any;
    entity_category?: any;
    icon?: any;
    id?: ID;
    unit_of_measurement?: any;
}

export interface Ld2412NumberConfigGate8 {
    move_threshold: Ld2412NumberConfigGate8MoveThreshold;
    still_threshold: Ld2412NumberConfigGate8StillThreshold;
}

export interface Ld2412NumberConfigGate9MoveThreshold extends NumberNUMBERSCHEMA {
    device_class?: any;
    entity_category?: any;
    icon?: any;
    id?: ID;
    unit_of_measurement?: any;
}

export interface Ld2412NumberConfigGate9StillThreshold extends NumberNUMBERSCHEMA {
    device_class?: any;
    entity_category?: any;
    icon?: any;
    id?: ID;
    unit_of_measurement?: any;
}

export interface Ld2412NumberConfigGate9 {
    move_threshold: Ld2412NumberConfigGate9MoveThreshold;
    still_threshold: Ld2412NumberConfigGate9StillThreshold;
}

export interface Ld2412NumberConfigLightThreshold extends NumberNUMBERSCHEMA {
    device_class?: any;
    entity_category?: any;
    icon?: any;
    id?: ID;
}

export interface Ld2412NumberConfigMaxDistanceGate extends NumberNUMBERSCHEMA {
    device_class?: any;
    entity_category?: any;
    icon?: any;
    id?: ID;
}

export interface Ld2412NumberConfigMinDistanceGate extends NumberNUMBERSCHEMA {
    device_class?: any;
    entity_category?: any;
    icon?: any;
    id?: ID;
}

export interface Ld2412NumberConfigTimeout extends NumberNUMBERSCHEMA {
    entity_category?: any;
    icon?: any;
    id?: ID;
    unit_of_measurement?: any;
}

export interface Ld2412NumberConfig {
    gate_0?: Ld2412NumberConfigGate0;
    gate_1?: Ld2412NumberConfigGate1;
    gate_10?: Ld2412NumberConfigGate10;
    gate_11?: Ld2412NumberConfigGate11;
    gate_12?: Ld2412NumberConfigGate12;
    gate_13?: Ld2412NumberConfigGate13;
    gate_2?: Ld2412NumberConfigGate2;
    gate_3?: Ld2412NumberConfigGate3;
    gate_4?: Ld2412NumberConfigGate4;
    gate_5?: Ld2412NumberConfigGate5;
    gate_6?: Ld2412NumberConfigGate6;
    gate_7?: Ld2412NumberConfigGate7;
    gate_8?: Ld2412NumberConfigGate8;
    gate_9?: Ld2412NumberConfigGate9;
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

export interface Ld2412SelectConfigBaudRate extends SelectSELECTSCHEMA {
    entity_category?: any;
    icon?: any;
    id?: any;
}

export interface Ld2412SelectConfigDistanceResolution extends SelectSELECTSCHEMA {
    entity_category?: any;
    icon?: any;
    id?: any;
}

export interface Ld2412SelectConfigLightFunction extends SelectSELECTSCHEMA {
    entity_category?: any;
    icon?: any;
    id?: any;
}

export interface Ld2412SelectConfigOutPinLevel extends SelectSELECTSCHEMA {
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

export interface Ld2412SensorConfigDetectionDistance extends SensorSENSORSCHEMA {
    device_class?: any;
    filters?: any;
    icon?: any;
    unit_of_measurement?: any;
}

export interface Ld2412SensorConfigGate0MoveEnergy extends SensorSENSORSCHEMA {
    entity_category?: any;
    filters?: any;
    icon?: any;
    unit_of_measurement?: any;
}

export interface Ld2412SensorConfigGate0StillEnergy extends SensorSENSORSCHEMA {
    entity_category?: any;
    filters?: any;
    icon?: any;
    unit_of_measurement?: any;
}

export interface Ld2412SensorConfigGate0 {
    move_energy?: Ld2412SensorConfigGate0MoveEnergy;
    still_energy?: Ld2412SensorConfigGate0StillEnergy;
}

export interface Ld2412SensorConfigGate1MoveEnergy extends SensorSENSORSCHEMA {
    entity_category?: any;
    filters?: any;
    icon?: any;
    unit_of_measurement?: any;
}

export interface Ld2412SensorConfigGate1StillEnergy extends SensorSENSORSCHEMA {
    entity_category?: any;
    filters?: any;
    icon?: any;
    unit_of_measurement?: any;
}

export interface Ld2412SensorConfigGate1 {
    move_energy?: Ld2412SensorConfigGate1MoveEnergy;
    still_energy?: Ld2412SensorConfigGate1StillEnergy;
}

export interface Ld2412SensorConfigGate10MoveEnergy extends SensorSENSORSCHEMA {
    entity_category?: any;
    filters?: any;
    icon?: any;
    unit_of_measurement?: any;
}

export interface Ld2412SensorConfigGate10StillEnergy extends SensorSENSORSCHEMA {
    entity_category?: any;
    filters?: any;
    icon?: any;
    unit_of_measurement?: any;
}

export interface Ld2412SensorConfigGate10 {
    move_energy?: Ld2412SensorConfigGate10MoveEnergy;
    still_energy?: Ld2412SensorConfigGate10StillEnergy;
}

export interface Ld2412SensorConfigGate11MoveEnergy extends SensorSENSORSCHEMA {
    entity_category?: any;
    filters?: any;
    icon?: any;
    unit_of_measurement?: any;
}

export interface Ld2412SensorConfigGate11StillEnergy extends SensorSENSORSCHEMA {
    entity_category?: any;
    filters?: any;
    icon?: any;
    unit_of_measurement?: any;
}

export interface Ld2412SensorConfigGate11 {
    move_energy?: Ld2412SensorConfigGate11MoveEnergy;
    still_energy?: Ld2412SensorConfigGate11StillEnergy;
}

export interface Ld2412SensorConfigGate12MoveEnergy extends SensorSENSORSCHEMA {
    entity_category?: any;
    filters?: any;
    icon?: any;
    unit_of_measurement?: any;
}

export interface Ld2412SensorConfigGate12StillEnergy extends SensorSENSORSCHEMA {
    entity_category?: any;
    filters?: any;
    icon?: any;
    unit_of_measurement?: any;
}

export interface Ld2412SensorConfigGate12 {
    move_energy?: Ld2412SensorConfigGate12MoveEnergy;
    still_energy?: Ld2412SensorConfigGate12StillEnergy;
}

export interface Ld2412SensorConfigGate13MoveEnergy extends SensorSENSORSCHEMA {
    entity_category?: any;
    filters?: any;
    icon?: any;
    unit_of_measurement?: any;
}

export interface Ld2412SensorConfigGate13StillEnergy extends SensorSENSORSCHEMA {
    entity_category?: any;
    filters?: any;
    icon?: any;
    unit_of_measurement?: any;
}

export interface Ld2412SensorConfigGate13 {
    move_energy?: Ld2412SensorConfigGate13MoveEnergy;
    still_energy?: Ld2412SensorConfigGate13StillEnergy;
}

export interface Ld2412SensorConfigGate2MoveEnergy extends SensorSENSORSCHEMA {
    entity_category?: any;
    filters?: any;
    icon?: any;
    unit_of_measurement?: any;
}

export interface Ld2412SensorConfigGate2StillEnergy extends SensorSENSORSCHEMA {
    entity_category?: any;
    filters?: any;
    icon?: any;
    unit_of_measurement?: any;
}

export interface Ld2412SensorConfigGate2 {
    move_energy?: Ld2412SensorConfigGate2MoveEnergy;
    still_energy?: Ld2412SensorConfigGate2StillEnergy;
}

export interface Ld2412SensorConfigGate3MoveEnergy extends SensorSENSORSCHEMA {
    entity_category?: any;
    filters?: any;
    icon?: any;
    unit_of_measurement?: any;
}

export interface Ld2412SensorConfigGate3StillEnergy extends SensorSENSORSCHEMA {
    entity_category?: any;
    filters?: any;
    icon?: any;
    unit_of_measurement?: any;
}

export interface Ld2412SensorConfigGate3 {
    move_energy?: Ld2412SensorConfigGate3MoveEnergy;
    still_energy?: Ld2412SensorConfigGate3StillEnergy;
}

export interface Ld2412SensorConfigGate4MoveEnergy extends SensorSENSORSCHEMA {
    entity_category?: any;
    filters?: any;
    icon?: any;
    unit_of_measurement?: any;
}

export interface Ld2412SensorConfigGate4StillEnergy extends SensorSENSORSCHEMA {
    entity_category?: any;
    filters?: any;
    icon?: any;
    unit_of_measurement?: any;
}

export interface Ld2412SensorConfigGate4 {
    move_energy?: Ld2412SensorConfigGate4MoveEnergy;
    still_energy?: Ld2412SensorConfigGate4StillEnergy;
}

export interface Ld2412SensorConfigGate5MoveEnergy extends SensorSENSORSCHEMA {
    entity_category?: any;
    filters?: any;
    icon?: any;
    unit_of_measurement?: any;
}

export interface Ld2412SensorConfigGate5StillEnergy extends SensorSENSORSCHEMA {
    entity_category?: any;
    filters?: any;
    icon?: any;
    unit_of_measurement?: any;
}

export interface Ld2412SensorConfigGate5 {
    move_energy?: Ld2412SensorConfigGate5MoveEnergy;
    still_energy?: Ld2412SensorConfigGate5StillEnergy;
}

export interface Ld2412SensorConfigGate6MoveEnergy extends SensorSENSORSCHEMA {
    entity_category?: any;
    filters?: any;
    icon?: any;
    unit_of_measurement?: any;
}

export interface Ld2412SensorConfigGate6StillEnergy extends SensorSENSORSCHEMA {
    entity_category?: any;
    filters?: any;
    icon?: any;
    unit_of_measurement?: any;
}

export interface Ld2412SensorConfigGate6 {
    move_energy?: Ld2412SensorConfigGate6MoveEnergy;
    still_energy?: Ld2412SensorConfigGate6StillEnergy;
}

export interface Ld2412SensorConfigGate7MoveEnergy extends SensorSENSORSCHEMA {
    entity_category?: any;
    filters?: any;
    icon?: any;
    unit_of_measurement?: any;
}

export interface Ld2412SensorConfigGate7StillEnergy extends SensorSENSORSCHEMA {
    entity_category?: any;
    filters?: any;
    icon?: any;
    unit_of_measurement?: any;
}

export interface Ld2412SensorConfigGate7 {
    move_energy?: Ld2412SensorConfigGate7MoveEnergy;
    still_energy?: Ld2412SensorConfigGate7StillEnergy;
}

export interface Ld2412SensorConfigGate8MoveEnergy extends SensorSENSORSCHEMA {
    entity_category?: any;
    filters?: any;
    icon?: any;
    unit_of_measurement?: any;
}

export interface Ld2412SensorConfigGate8StillEnergy extends SensorSENSORSCHEMA {
    entity_category?: any;
    filters?: any;
    icon?: any;
    unit_of_measurement?: any;
}

export interface Ld2412SensorConfigGate8 {
    move_energy?: Ld2412SensorConfigGate8MoveEnergy;
    still_energy?: Ld2412SensorConfigGate8StillEnergy;
}

export interface Ld2412SensorConfigGate9MoveEnergy extends SensorSENSORSCHEMA {
    entity_category?: any;
    filters?: any;
    icon?: any;
    unit_of_measurement?: any;
}

export interface Ld2412SensorConfigGate9StillEnergy extends SensorSENSORSCHEMA {
    entity_category?: any;
    filters?: any;
    icon?: any;
    unit_of_measurement?: any;
}

export interface Ld2412SensorConfigGate9 {
    move_energy?: Ld2412SensorConfigGate9MoveEnergy;
    still_energy?: Ld2412SensorConfigGate9StillEnergy;
}

export interface Ld2412SensorConfigLight extends SensorSENSORSCHEMA {
    device_class?: any;
    entity_category?: any;
    filters?: any;
    icon?: any;
    unit_of_measurement?: any;
}

export interface Ld2412SensorConfigMovingDistance extends SensorSENSORSCHEMA {
    device_class?: any;
    filters?: any;
    icon?: any;
    unit_of_measurement?: any;
}

export interface Ld2412SensorConfigMovingEnergy extends SensorSENSORSCHEMA {
    filters?: any;
    icon?: any;
    unit_of_measurement?: any;
}

export interface Ld2412SensorConfigStillDistance extends SensorSENSORSCHEMA {
    device_class?: any;
    filters?: any;
    icon?: any;
    unit_of_measurement?: any;
}

export interface Ld2412SensorConfigStillEnergy extends SensorSENSORSCHEMA {
    filters?: any;
    icon?: any;
    unit_of_measurement?: any;
}

export interface Ld2412SensorConfig {
    detection_distance?: Ld2412SensorConfigDetectionDistance;
    gate_0?: Ld2412SensorConfigGate0;
    gate_1?: Ld2412SensorConfigGate1;
    gate_10?: Ld2412SensorConfigGate10;
    gate_11?: Ld2412SensorConfigGate11;
    gate_12?: Ld2412SensorConfigGate12;
    gate_13?: Ld2412SensorConfigGate13;
    gate_2?: Ld2412SensorConfigGate2;
    gate_3?: Ld2412SensorConfigGate3;
    gate_4?: Ld2412SensorConfigGate4;
    gate_5?: Ld2412SensorConfigGate5;
    gate_6?: Ld2412SensorConfigGate6;
    gate_7?: Ld2412SensorConfigGate7;
    gate_8?: Ld2412SensorConfigGate8;
    gate_9?: Ld2412SensorConfigGate9;
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

export interface Ld2412SwitchConfigBluetooth extends SwitchSWITCHSCHEMA {
    device_class?: any;
    entity_category?: any;
    icon?: any;
    id?: ID;
}

export interface Ld2412SwitchConfigEngineeringMode extends SwitchSWITCHSCHEMA {
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

export interface Ld2412TextSensorConfigMacAddress extends TextSensorTEXTSENSORSCHEMA {
    entity_category?: any;
    icon?: any;
}

export interface Ld2412TextSensorConfigVersion extends TextSensorTEXTSENSORSCHEMA {
    entity_category?: any;
    icon?: any;
}

export interface Ld2412TextSensorConfig {
    id?: ID;
    ld2412_id?: ID;
    mac_address?: Ld2412TextSensorConfigMacAddress;
    version?: Ld2412TextSensorConfigVersion;
}
