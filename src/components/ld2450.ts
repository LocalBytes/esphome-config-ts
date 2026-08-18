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
import type { CoreCOMPONENTSCHEMA } from "./esphome.js";
import type { BinarySensorBINARYSENSORSCHEMA } from "./binary_sensor.js";
import type { ButtonBUTTONSCHEMA } from "./button.js";
import type { NumberNUMBERSCHEMA } from "./number.js";
import type { SelectSELECTSCHEMA } from "./select.js";
import type { SensorSENSORSCHEMA } from "./sensor.js";
import type { SwitchSWITCHSCHEMA } from "./switch.js";
import type { TextSensorTEXTSENSORSCHEMA } from "./text_sensor.js";

export class Ld2450 extends EsphomeComponent<Ld2450Config> {
    componentName: string = "ld2450";
}

export interface Ld2450Config extends CoreCOMPONENTSCHEMA {
    id?: ID;
    on_data?: object[];
    uart_id?: ID;
}

export class Ld2450BinarySensor extends EsphomeComponent<Ld2450BinarySensorConfig> {
    componentName: string = "ld2450.binary_sensor";
}

export interface Ld2450BinarySensorConfigHasMovingTarget extends BinarySensorBINARYSENSORSCHEMA {
    device_class?: any;
    filters?: any;
    icon?: any;
}

export interface Ld2450BinarySensorConfigHasStillTarget extends BinarySensorBINARYSENSORSCHEMA {
    device_class?: any;
    filters?: any;
    icon?: any;
}

export interface Ld2450BinarySensorConfigHasTarget extends BinarySensorBINARYSENSORSCHEMA {
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

export interface Ld2450ButtonConfigFactoryReset extends ButtonBUTTONSCHEMA {
    device_class?: any;
    entity_category?: any;
    icon?: any;
    id?: ID;
}

export interface Ld2450ButtonConfigRestart extends ButtonBUTTONSCHEMA {
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

export interface Ld2450NumberConfigPresenceTimeout extends NumberNUMBERSCHEMA {
    entity_category?: any;
    icon?: any;
    id?: ID;
    unit_of_measurement?: any;
}

export interface Ld2450NumberConfigZone1X1 extends NumberNUMBERSCHEMA {
    device_class?: any;
    entity_category?: any;
    icon?: any;
    id?: ID;
    unit_of_measurement?: any;
}

export interface Ld2450NumberConfigZone1X2 extends NumberNUMBERSCHEMA {
    device_class?: any;
    entity_category?: any;
    icon?: any;
    id?: ID;
    unit_of_measurement?: any;
}

export interface Ld2450NumberConfigZone1Y1 extends NumberNUMBERSCHEMA {
    device_class?: any;
    entity_category?: any;
    icon?: any;
    id?: ID;
    unit_of_measurement?: any;
}

export interface Ld2450NumberConfigZone1Y2 extends NumberNUMBERSCHEMA {
    device_class?: any;
    entity_category?: any;
    icon?: any;
    id?: ID;
    unit_of_measurement?: any;
}

export interface Ld2450NumberConfigZone1 {
    x1: Ld2450NumberConfigZone1X1;
    x2: Ld2450NumberConfigZone1X2;
    y1: Ld2450NumberConfigZone1Y1;
    y2: Ld2450NumberConfigZone1Y2;
}

export interface Ld2450NumberConfigZone2X1 extends NumberNUMBERSCHEMA {
    device_class?: any;
    entity_category?: any;
    icon?: any;
    id?: ID;
    unit_of_measurement?: any;
}

export interface Ld2450NumberConfigZone2X2 extends NumberNUMBERSCHEMA {
    device_class?: any;
    entity_category?: any;
    icon?: any;
    id?: ID;
    unit_of_measurement?: any;
}

export interface Ld2450NumberConfigZone2Y1 extends NumberNUMBERSCHEMA {
    device_class?: any;
    entity_category?: any;
    icon?: any;
    id?: ID;
    unit_of_measurement?: any;
}

export interface Ld2450NumberConfigZone2Y2 extends NumberNUMBERSCHEMA {
    device_class?: any;
    entity_category?: any;
    icon?: any;
    id?: ID;
    unit_of_measurement?: any;
}

export interface Ld2450NumberConfigZone2 {
    x1: Ld2450NumberConfigZone2X1;
    x2: Ld2450NumberConfigZone2X2;
    y1: Ld2450NumberConfigZone2Y1;
    y2: Ld2450NumberConfigZone2Y2;
}

export interface Ld2450NumberConfigZone3X1 extends NumberNUMBERSCHEMA {
    device_class?: any;
    entity_category?: any;
    icon?: any;
    id?: ID;
    unit_of_measurement?: any;
}

export interface Ld2450NumberConfigZone3X2 extends NumberNUMBERSCHEMA {
    device_class?: any;
    entity_category?: any;
    icon?: any;
    id?: ID;
    unit_of_measurement?: any;
}

export interface Ld2450NumberConfigZone3Y1 extends NumberNUMBERSCHEMA {
    device_class?: any;
    entity_category?: any;
    icon?: any;
    id?: ID;
    unit_of_measurement?: any;
}

export interface Ld2450NumberConfigZone3Y2 extends NumberNUMBERSCHEMA {
    device_class?: any;
    entity_category?: any;
    icon?: any;
    id?: ID;
    unit_of_measurement?: any;
}

export interface Ld2450NumberConfigZone3 {
    x1: Ld2450NumberConfigZone3X1;
    x2: Ld2450NumberConfigZone3X2;
    y1: Ld2450NumberConfigZone3Y1;
    y2: Ld2450NumberConfigZone3Y2;
}

export interface Ld2450NumberConfig {
    id?: ID;
    ld2450_id?: ID;
    presence_timeout: Ld2450NumberConfigPresenceTimeout;
    zone_1?: Ld2450NumberConfigZone1;
    zone_2?: Ld2450NumberConfigZone2;
    zone_3?: Ld2450NumberConfigZone3;
}

export class Ld2450Select extends EsphomeComponent<Ld2450SelectConfig> {
    componentName: string = "ld2450.select";
}

export interface Ld2450SelectConfigBaudRate extends SelectSELECTSCHEMA {
    entity_category?: any;
    icon?: any;
    id?: any;
}

export interface Ld2450SelectConfigZoneType extends SelectSELECTSCHEMA {
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

export interface Ld2450SensorConfigMovingTargetCount extends SensorSENSORSCHEMA {
    accuracy_decimals?: any;
    filters?: any;
    icon?: any;
}

export interface Ld2450SensorConfigStillTargetCount extends SensorSENSORSCHEMA {
    accuracy_decimals?: any;
    filters?: any;
    icon?: any;
}

export interface Ld2450SensorConfigTarget1Angle extends SensorSENSORSCHEMA {
    accuracy_decimals?: any;
    filters?: any;
    icon?: any;
    unit_of_measurement?: any;
}

export interface Ld2450SensorConfigTarget1Distance extends SensorSENSORSCHEMA {
    device_class?: any;
    filters?: any;
    icon?: any;
    unit_of_measurement?: any;
}

export interface Ld2450SensorConfigTarget1Resolution extends SensorSENSORSCHEMA {
    device_class?: any;
    filters?: any;
    icon?: any;
    unit_of_measurement?: any;
}

export interface Ld2450SensorConfigTarget1Speed extends SensorSENSORSCHEMA {
    device_class?: any;
    filters?: any;
    icon?: any;
    unit_of_measurement?: any;
}

export interface Ld2450SensorConfigTarget1X extends SensorSENSORSCHEMA {
    device_class?: any;
    filters?: any;
    icon?: any;
    unit_of_measurement?: any;
}

export interface Ld2450SensorConfigTarget1Y extends SensorSENSORSCHEMA {
    device_class?: any;
    filters?: any;
    icon?: any;
    unit_of_measurement?: any;
}

export interface Ld2450SensorConfigTarget1 {
    angle?: Ld2450SensorConfigTarget1Angle;
    distance?: Ld2450SensorConfigTarget1Distance;
    resolution?: Ld2450SensorConfigTarget1Resolution;
    speed?: Ld2450SensorConfigTarget1Speed;
    x?: Ld2450SensorConfigTarget1X;
    y?: Ld2450SensorConfigTarget1Y;
}

export interface Ld2450SensorConfigTarget2Angle extends SensorSENSORSCHEMA {
    accuracy_decimals?: any;
    filters?: any;
    icon?: any;
    unit_of_measurement?: any;
}

export interface Ld2450SensorConfigTarget2Distance extends SensorSENSORSCHEMA {
    device_class?: any;
    filters?: any;
    icon?: any;
    unit_of_measurement?: any;
}

export interface Ld2450SensorConfigTarget2Resolution extends SensorSENSORSCHEMA {
    device_class?: any;
    filters?: any;
    icon?: any;
    unit_of_measurement?: any;
}

export interface Ld2450SensorConfigTarget2Speed extends SensorSENSORSCHEMA {
    device_class?: any;
    filters?: any;
    icon?: any;
    unit_of_measurement?: any;
}

export interface Ld2450SensorConfigTarget2X extends SensorSENSORSCHEMA {
    device_class?: any;
    filters?: any;
    icon?: any;
    unit_of_measurement?: any;
}

export interface Ld2450SensorConfigTarget2Y extends SensorSENSORSCHEMA {
    device_class?: any;
    filters?: any;
    icon?: any;
    unit_of_measurement?: any;
}

export interface Ld2450SensorConfigTarget2 {
    angle?: Ld2450SensorConfigTarget2Angle;
    distance?: Ld2450SensorConfigTarget2Distance;
    resolution?: Ld2450SensorConfigTarget2Resolution;
    speed?: Ld2450SensorConfigTarget2Speed;
    x?: Ld2450SensorConfigTarget2X;
    y?: Ld2450SensorConfigTarget2Y;
}

export interface Ld2450SensorConfigTarget3Angle extends SensorSENSORSCHEMA {
    accuracy_decimals?: any;
    filters?: any;
    icon?: any;
    unit_of_measurement?: any;
}

export interface Ld2450SensorConfigTarget3Distance extends SensorSENSORSCHEMA {
    device_class?: any;
    filters?: any;
    icon?: any;
    unit_of_measurement?: any;
}

export interface Ld2450SensorConfigTarget3Resolution extends SensorSENSORSCHEMA {
    device_class?: any;
    filters?: any;
    icon?: any;
    unit_of_measurement?: any;
}

export interface Ld2450SensorConfigTarget3Speed extends SensorSENSORSCHEMA {
    device_class?: any;
    filters?: any;
    icon?: any;
    unit_of_measurement?: any;
}

export interface Ld2450SensorConfigTarget3X extends SensorSENSORSCHEMA {
    device_class?: any;
    filters?: any;
    icon?: any;
    unit_of_measurement?: any;
}

export interface Ld2450SensorConfigTarget3Y extends SensorSENSORSCHEMA {
    device_class?: any;
    filters?: any;
    icon?: any;
    unit_of_measurement?: any;
}

export interface Ld2450SensorConfigTarget3 {
    angle?: Ld2450SensorConfigTarget3Angle;
    distance?: Ld2450SensorConfigTarget3Distance;
    resolution?: Ld2450SensorConfigTarget3Resolution;
    speed?: Ld2450SensorConfigTarget3Speed;
    x?: Ld2450SensorConfigTarget3X;
    y?: Ld2450SensorConfigTarget3Y;
}

export interface Ld2450SensorConfigTargetCount extends SensorSENSORSCHEMA {
    accuracy_decimals?: any;
    filters?: any;
    icon?: any;
}

export interface Ld2450SensorConfigZone1MovingTargetCount extends SensorSENSORSCHEMA {
    accuracy_decimals?: any;
    filters?: any;
    icon?: any;
}

export interface Ld2450SensorConfigZone1StillTargetCount extends SensorSENSORSCHEMA {
    accuracy_decimals?: any;
    filters?: any;
    icon?: any;
}

export interface Ld2450SensorConfigZone1TargetCount extends SensorSENSORSCHEMA {
    accuracy_decimals?: any;
    filters?: any;
    icon?: any;
}

export interface Ld2450SensorConfigZone1 {
    moving_target_count?: Ld2450SensorConfigZone1MovingTargetCount;
    still_target_count?: Ld2450SensorConfigZone1StillTargetCount;
    target_count?: Ld2450SensorConfigZone1TargetCount;
}

export interface Ld2450SensorConfigZone2MovingTargetCount extends SensorSENSORSCHEMA {
    accuracy_decimals?: any;
    filters?: any;
    icon?: any;
}

export interface Ld2450SensorConfigZone2StillTargetCount extends SensorSENSORSCHEMA {
    accuracy_decimals?: any;
    filters?: any;
    icon?: any;
}

export interface Ld2450SensorConfigZone2TargetCount extends SensorSENSORSCHEMA {
    accuracy_decimals?: any;
    filters?: any;
    icon?: any;
}

export interface Ld2450SensorConfigZone2 {
    moving_target_count?: Ld2450SensorConfigZone2MovingTargetCount;
    still_target_count?: Ld2450SensorConfigZone2StillTargetCount;
    target_count?: Ld2450SensorConfigZone2TargetCount;
}

export interface Ld2450SensorConfigZone3MovingTargetCount extends SensorSENSORSCHEMA {
    accuracy_decimals?: any;
    filters?: any;
    icon?: any;
}

export interface Ld2450SensorConfigZone3StillTargetCount extends SensorSENSORSCHEMA {
    accuracy_decimals?: any;
    filters?: any;
    icon?: any;
}

export interface Ld2450SensorConfigZone3TargetCount extends SensorSENSORSCHEMA {
    accuracy_decimals?: any;
    filters?: any;
    icon?: any;
}

export interface Ld2450SensorConfigZone3 {
    moving_target_count?: Ld2450SensorConfigZone3MovingTargetCount;
    still_target_count?: Ld2450SensorConfigZone3StillTargetCount;
    target_count?: Ld2450SensorConfigZone3TargetCount;
}

export interface Ld2450SensorConfig {
    id?: ID;
    ld2450_id?: ID;
    moving_target_count?: Ld2450SensorConfigMovingTargetCount;
    still_target_count?: Ld2450SensorConfigStillTargetCount;
    target_1?: Ld2450SensorConfigTarget1;
    target_2?: Ld2450SensorConfigTarget2;
    target_3?: Ld2450SensorConfigTarget3;
    target_count?: Ld2450SensorConfigTargetCount;
    zone_1?: Ld2450SensorConfigZone1;
    zone_2?: Ld2450SensorConfigZone2;
    zone_3?: Ld2450SensorConfigZone3;
}

export class Ld2450Switch extends EsphomeComponent<Ld2450SwitchConfig> {
    componentName: string = "ld2450.switch";
}

export interface Ld2450SwitchConfigBluetooth extends SwitchSWITCHSCHEMA {
    device_class?: any;
    entity_category?: any;
    icon?: any;
    id?: ID;
}

export interface Ld2450SwitchConfigMultiTarget extends SwitchSWITCHSCHEMA {
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

export interface Ld2450TextSensorConfigMacAddress extends TextSensorTEXTSENSORSCHEMA {
    entity_category?: any;
    icon?: any;
}

export interface Ld2450TextSensorConfigTarget1Direction extends TextSensorTEXTSENSORSCHEMA {
    entity_category?: any;
    icon?: any;
}

export interface Ld2450TextSensorConfigTarget1 {
    direction?: Ld2450TextSensorConfigTarget1Direction;
}

export interface Ld2450TextSensorConfigTarget2Direction extends TextSensorTEXTSENSORSCHEMA {
    entity_category?: any;
    icon?: any;
}

export interface Ld2450TextSensorConfigTarget2 {
    direction?: Ld2450TextSensorConfigTarget2Direction;
}

export interface Ld2450TextSensorConfigTarget3Direction extends TextSensorTEXTSENSORSCHEMA {
    entity_category?: any;
    icon?: any;
}

export interface Ld2450TextSensorConfigTarget3 {
    direction?: Ld2450TextSensorConfigTarget3Direction;
}

export interface Ld2450TextSensorConfigVersion extends TextSensorTEXTSENSORSCHEMA {
    entity_category?: any;
    icon?: any;
}

export interface Ld2450TextSensorConfig {
    id?: ID;
    ld2450_id?: ID;
    mac_address?: Ld2450TextSensorConfigMacAddress;
    target_1?: Ld2450TextSensorConfigTarget1;
    target_2?: Ld2450TextSensorConfigTarget2;
    target_3?: Ld2450TextSensorConfigTarget3;
    version?: Ld2450TextSensorConfigVersion;
}
