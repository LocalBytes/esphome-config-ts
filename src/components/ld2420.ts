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
import type { CoreCOMPONENTSCHEMA } from "./esphome.js";
import type { BinarySensorBINARYSENSORSCHEMA } from "./binary_sensor.js";
import type { ButtonBUTTONSCHEMA } from "./button.js";
import type { NumberNUMBERSCHEMA } from "./number.js";
import type { SelectSELECTSCHEMA } from "./select.js";
import type { SensorSENSORSCHEMA } from "./sensor.js";
import type { TextSensorTEXTSENSORSCHEMA } from "./text_sensor.js";

export class Ld2420 extends EsphomeComponent<Ld2420Config> {
    componentName: string = "ld2420";
}

export interface Ld2420Config extends CoreCOMPONENTSCHEMA {
    id?: ID;
    uart_id?: ID;
}

export class Ld2420BinarySensor extends EsphomeComponent<Ld2420BinarySensorConfig> {
    componentName: string = "ld2420.binary_sensor";
}

export interface Ld2420BinarySensorConfigHasTarget extends BinarySensorBINARYSENSORSCHEMA {
    device_class?: any;
}

export interface Ld2420BinarySensorConfig extends CoreCOMPONENTSCHEMA {
    has_target?: Ld2420BinarySensorConfigHasTarget;
    id?: ID;
    ld2420_id?: ID;
}

export class Ld2420Button extends EsphomeComponent<Ld2420ButtonConfig> {
    componentName: string = "ld2420.button";
}

export interface Ld2420ButtonConfigApplyConfig extends ButtonBUTTONSCHEMA {
    device_class?: any;
    entity_category?: any;
    icon?: any;
    id?: ID;
}

export interface Ld2420ButtonConfigFactoryReset extends ButtonBUTTONSCHEMA {
    entity_category?: any;
    icon?: any;
    id?: ID;
}

export interface Ld2420ButtonConfigRestartModule extends ButtonBUTTONSCHEMA {
    entity_category?: any;
    icon?: any;
    id?: ID;
}

export interface Ld2420ButtonConfigRevertConfig extends ButtonBUTTONSCHEMA {
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

export interface Ld2420NumberConfigGate0MoveThreshold extends NumberNUMBERSCHEMA {
    entity_category?: any;
    icon?: any;
    id?: ID;
}

export interface Ld2420NumberConfigGate0StillThreshold extends NumberNUMBERSCHEMA {
    entity_category?: any;
    icon?: any;
    id?: ID;
}

export interface Ld2420NumberConfigGate0 {
    move_threshold: Ld2420NumberConfigGate0MoveThreshold;
    still_threshold: Ld2420NumberConfigGate0StillThreshold;
}

export interface Ld2420NumberConfigGate1MoveThreshold extends NumberNUMBERSCHEMA {
    entity_category?: any;
    icon?: any;
    id?: ID;
}

export interface Ld2420NumberConfigGate1StillThreshold extends NumberNUMBERSCHEMA {
    entity_category?: any;
    icon?: any;
    id?: ID;
}

export interface Ld2420NumberConfigGate1 {
    move_threshold: Ld2420NumberConfigGate1MoveThreshold;
    still_threshold: Ld2420NumberConfigGate1StillThreshold;
}

export interface Ld2420NumberConfigGate10MoveThreshold extends NumberNUMBERSCHEMA {
    entity_category?: any;
    icon?: any;
    id?: ID;
}

export interface Ld2420NumberConfigGate10StillThreshold extends NumberNUMBERSCHEMA {
    entity_category?: any;
    icon?: any;
    id?: ID;
}

export interface Ld2420NumberConfigGate10 {
    move_threshold: Ld2420NumberConfigGate10MoveThreshold;
    still_threshold: Ld2420NumberConfigGate10StillThreshold;
}

export interface Ld2420NumberConfigGate11MoveThreshold extends NumberNUMBERSCHEMA {
    entity_category?: any;
    icon?: any;
    id?: ID;
}

export interface Ld2420NumberConfigGate11StillThreshold extends NumberNUMBERSCHEMA {
    entity_category?: any;
    icon?: any;
    id?: ID;
}

export interface Ld2420NumberConfigGate11 {
    move_threshold: Ld2420NumberConfigGate11MoveThreshold;
    still_threshold: Ld2420NumberConfigGate11StillThreshold;
}

export interface Ld2420NumberConfigGate12MoveThreshold extends NumberNUMBERSCHEMA {
    entity_category?: any;
    icon?: any;
    id?: ID;
}

export interface Ld2420NumberConfigGate12StillThreshold extends NumberNUMBERSCHEMA {
    entity_category?: any;
    icon?: any;
    id?: ID;
}

export interface Ld2420NumberConfigGate12 {
    move_threshold: Ld2420NumberConfigGate12MoveThreshold;
    still_threshold: Ld2420NumberConfigGate12StillThreshold;
}

export interface Ld2420NumberConfigGate13MoveThreshold extends NumberNUMBERSCHEMA {
    entity_category?: any;
    icon?: any;
    id?: ID;
}

export interface Ld2420NumberConfigGate13StillThreshold extends NumberNUMBERSCHEMA {
    entity_category?: any;
    icon?: any;
    id?: ID;
}

export interface Ld2420NumberConfigGate13 {
    move_threshold: Ld2420NumberConfigGate13MoveThreshold;
    still_threshold: Ld2420NumberConfigGate13StillThreshold;
}

export interface Ld2420NumberConfigGate14MoveThreshold extends NumberNUMBERSCHEMA {
    entity_category?: any;
    icon?: any;
    id?: ID;
}

export interface Ld2420NumberConfigGate14StillThreshold extends NumberNUMBERSCHEMA {
    entity_category?: any;
    icon?: any;
    id?: ID;
}

export interface Ld2420NumberConfigGate14 {
    move_threshold: Ld2420NumberConfigGate14MoveThreshold;
    still_threshold: Ld2420NumberConfigGate14StillThreshold;
}

export interface Ld2420NumberConfigGate15MoveThreshold extends NumberNUMBERSCHEMA {
    entity_category?: any;
    icon?: any;
    id?: ID;
}

export interface Ld2420NumberConfigGate15StillThreshold extends NumberNUMBERSCHEMA {
    entity_category?: any;
    icon?: any;
    id?: ID;
}

export interface Ld2420NumberConfigGate15 {
    move_threshold: Ld2420NumberConfigGate15MoveThreshold;
    still_threshold: Ld2420NumberConfigGate15StillThreshold;
}

export interface Ld2420NumberConfigGate2MoveThreshold extends NumberNUMBERSCHEMA {
    entity_category?: any;
    icon?: any;
    id?: ID;
}

export interface Ld2420NumberConfigGate2StillThreshold extends NumberNUMBERSCHEMA {
    entity_category?: any;
    icon?: any;
    id?: ID;
}

export interface Ld2420NumberConfigGate2 {
    move_threshold: Ld2420NumberConfigGate2MoveThreshold;
    still_threshold: Ld2420NumberConfigGate2StillThreshold;
}

export interface Ld2420NumberConfigGate3MoveThreshold extends NumberNUMBERSCHEMA {
    entity_category?: any;
    icon?: any;
    id?: ID;
}

export interface Ld2420NumberConfigGate3StillThreshold extends NumberNUMBERSCHEMA {
    entity_category?: any;
    icon?: any;
    id?: ID;
}

export interface Ld2420NumberConfigGate3 {
    move_threshold: Ld2420NumberConfigGate3MoveThreshold;
    still_threshold: Ld2420NumberConfigGate3StillThreshold;
}

export interface Ld2420NumberConfigGate4MoveThreshold extends NumberNUMBERSCHEMA {
    entity_category?: any;
    icon?: any;
    id?: ID;
}

export interface Ld2420NumberConfigGate4StillThreshold extends NumberNUMBERSCHEMA {
    entity_category?: any;
    icon?: any;
    id?: ID;
}

export interface Ld2420NumberConfigGate4 {
    move_threshold: Ld2420NumberConfigGate4MoveThreshold;
    still_threshold: Ld2420NumberConfigGate4StillThreshold;
}

export interface Ld2420NumberConfigGate5MoveThreshold extends NumberNUMBERSCHEMA {
    entity_category?: any;
    icon?: any;
    id?: ID;
}

export interface Ld2420NumberConfigGate5StillThreshold extends NumberNUMBERSCHEMA {
    entity_category?: any;
    icon?: any;
    id?: ID;
}

export interface Ld2420NumberConfigGate5 {
    move_threshold: Ld2420NumberConfigGate5MoveThreshold;
    still_threshold: Ld2420NumberConfigGate5StillThreshold;
}

export interface Ld2420NumberConfigGate6MoveThreshold extends NumberNUMBERSCHEMA {
    entity_category?: any;
    icon?: any;
    id?: ID;
}

export interface Ld2420NumberConfigGate6StillThreshold extends NumberNUMBERSCHEMA {
    entity_category?: any;
    icon?: any;
    id?: ID;
}

export interface Ld2420NumberConfigGate6 {
    move_threshold: Ld2420NumberConfigGate6MoveThreshold;
    still_threshold: Ld2420NumberConfigGate6StillThreshold;
}

export interface Ld2420NumberConfigGate7MoveThreshold extends NumberNUMBERSCHEMA {
    entity_category?: any;
    icon?: any;
    id?: ID;
}

export interface Ld2420NumberConfigGate7StillThreshold extends NumberNUMBERSCHEMA {
    entity_category?: any;
    icon?: any;
    id?: ID;
}

export interface Ld2420NumberConfigGate7 {
    move_threshold: Ld2420NumberConfigGate7MoveThreshold;
    still_threshold: Ld2420NumberConfigGate7StillThreshold;
}

export interface Ld2420NumberConfigGate8MoveThreshold extends NumberNUMBERSCHEMA {
    entity_category?: any;
    icon?: any;
    id?: ID;
}

export interface Ld2420NumberConfigGate8StillThreshold extends NumberNUMBERSCHEMA {
    entity_category?: any;
    icon?: any;
    id?: ID;
}

export interface Ld2420NumberConfigGate8 {
    move_threshold: Ld2420NumberConfigGate8MoveThreshold;
    still_threshold: Ld2420NumberConfigGate8StillThreshold;
}

export interface Ld2420NumberConfigGate9MoveThreshold extends NumberNUMBERSCHEMA {
    entity_category?: any;
    icon?: any;
    id?: ID;
}

export interface Ld2420NumberConfigGate9StillThreshold extends NumberNUMBERSCHEMA {
    entity_category?: any;
    icon?: any;
    id?: ID;
}

export interface Ld2420NumberConfigGate9 {
    move_threshold: Ld2420NumberConfigGate9MoveThreshold;
    still_threshold: Ld2420NumberConfigGate9StillThreshold;
}

export interface Ld2420NumberConfigGateMoveSensitivity extends NumberNUMBERSCHEMA {
    device_class?: any;
    entity_category?: any;
    icon?: any;
    id?: ID;
}

export interface Ld2420NumberConfigGateSelect extends NumberNUMBERSCHEMA {
    device_class?: any;
    entity_category?: any;
    icon?: any;
    id?: ID;
}

export interface Ld2420NumberConfigGateStillSensitivity extends NumberNUMBERSCHEMA {
    device_class?: any;
    entity_category?: any;
    icon?: any;
    id?: ID;
}

export interface Ld2420NumberConfigMaxGateDistance extends NumberNUMBERSCHEMA {
    device_class?: any;
    entity_category?: any;
    icon?: any;
    id?: ID;
}

export interface Ld2420NumberConfigMinGateDistance extends NumberNUMBERSCHEMA {
    device_class?: any;
    entity_category?: any;
    icon?: any;
    id?: ID;
}

export interface Ld2420NumberConfigMoveThreshold extends NumberNUMBERSCHEMA {
    entity_category?: any;
    icon?: any;
    id?: ID;
}

export interface Ld2420NumberConfigPresenceTimeout extends NumberNUMBERSCHEMA {
    entity_category?: any;
    icon?: any;
    id?: ID;
    unit_of_measurement?: any;
}

export interface Ld2420NumberConfigStillThreshold extends NumberNUMBERSCHEMA {
    entity_category?: any;
    icon?: any;
    id?: ID;
}

export interface Ld2420NumberConfig {
    gate_0?: Ld2420NumberConfigGate0;
    gate_1?: Ld2420NumberConfigGate1;
    gate_10?: Ld2420NumberConfigGate10;
    gate_11?: Ld2420NumberConfigGate11;
    gate_12?: Ld2420NumberConfigGate12;
    gate_13?: Ld2420NumberConfigGate13;
    gate_14?: Ld2420NumberConfigGate14;
    gate_15?: Ld2420NumberConfigGate15;
    gate_2?: Ld2420NumberConfigGate2;
    gate_3?: Ld2420NumberConfigGate3;
    gate_4?: Ld2420NumberConfigGate4;
    gate_5?: Ld2420NumberConfigGate5;
    gate_6?: Ld2420NumberConfigGate6;
    gate_7?: Ld2420NumberConfigGate7;
    gate_8?: Ld2420NumberConfigGate8;
    gate_9?: Ld2420NumberConfigGate9;
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

export interface Ld2420SelectConfigOperatingMode extends SelectSELECTSCHEMA {
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

export interface Ld2420SensorConfigMovingDistance extends SensorSENSORSCHEMA {
    device_class?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface Ld2420SensorConfig extends CoreCOMPONENTSCHEMA {
    id?: ID;
    ld2420_id?: ID;
    moving_distance?: Ld2420SensorConfigMovingDistance;
}

export class Ld2420TextSensor extends EsphomeComponent<Ld2420TextSensorConfig> {
    componentName: string = "ld2420.text_sensor";
}

export interface Ld2420TextSensorConfigFwVersion extends TextSensorTEXTSENSORSCHEMA {
    entity_category?: any;
    icon?: any;
}

export interface Ld2420TextSensorConfig extends CoreCOMPONENTSCHEMA {
    fw_version?: Ld2420TextSensorConfigFwVersion;
    id?: ID;
    ld2420_id?: ID;
}
