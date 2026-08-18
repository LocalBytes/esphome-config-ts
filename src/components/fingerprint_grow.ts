/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: fingerprint_grow.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/fingerprint_grow
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes)
 **/
import { type ID, type Pin, EsphomeComponent } from "@/lib/base.js";
import type { CorePositiveTimePeriodMilliseconds, CoreCOMPONENTSCHEMA } from "./esphome.js";
import type { BinarySensorBINARYSENSORSCHEMA } from "./binary_sensor.js";
import type { SensorSENSORSCHEMA } from "./sensor.js";

export class FingerprintGrow extends EsphomeComponent<FingerprintGrowConfig> {
    componentName: string = "fingerprint_grow";
}

export type FingerprintGrowConfigIdlePeriodToSleep = CorePositiveTimePeriodMilliseconds;

export interface FingerprintGrowConfig extends CoreCOMPONENTSCHEMA {
    id?: ID;
    idle_period_to_sleep?: FingerprintGrowConfigIdlePeriodToSleep;
    new_password?: number;
    on_enrollment_done?: object[];
    on_enrollment_failed?: object[];
    on_enrollment_scan?: object[];
    on_finger_scan_invalid?: object[];
    on_finger_scan_matched?: object[];
    on_finger_scan_misplaced?: object[];
    on_finger_scan_start?: object[];
    on_finger_scan_unmatched?: object[];
    password?: number;
    sensing_pin?: Pin;
    sensor_power_pin?: Pin;
    uart_id?: ID;
    update_interval?: any;
}

export class FingerprintGrowBinarySensor extends EsphomeComponent<FingerprintGrowBinarySensorConfig> {
    componentName: string = "fingerprint_grow.binary_sensor";
}

export interface FingerprintGrowBinarySensorConfig extends BinarySensorBINARYSENSORSCHEMA {
    fingerprint_grow_id?: ID;
    icon?: any;
}

export class FingerprintGrowSensor extends EsphomeComponent<FingerprintGrowSensorConfig> {
    componentName: string = "fingerprint_grow.sensor";
}

export interface FingerprintGrowSensorConfigCapacity extends SensorSENSORSCHEMA {
    accuracy_decimals?: any;
    entity_category?: any;
    icon?: any;
}

export interface FingerprintGrowSensorConfigFingerprintCount extends SensorSENSORSCHEMA {
    accuracy_decimals?: any;
    entity_category?: any;
    icon?: any;
}

export interface FingerprintGrowSensorConfigLastConfidence extends SensorSENSORSCHEMA {
    accuracy_decimals?: any;
    entity_category?: any;
    icon?: any;
}

export interface FingerprintGrowSensorConfigLastFingerId extends SensorSENSORSCHEMA {
    accuracy_decimals?: any;
    entity_category?: any;
    icon?: any;
}

export interface FingerprintGrowSensorConfigSecurityLevel extends SensorSENSORSCHEMA {
    accuracy_decimals?: any;
    entity_category?: any;
    icon?: any;
}

export interface FingerprintGrowSensorConfigStatus extends SensorSENSORSCHEMA {
    accuracy_decimals?: any;
    entity_category?: any;
}

export interface FingerprintGrowSensorConfig {
    capacity?: FingerprintGrowSensorConfigCapacity;
    fingerprint_count?: FingerprintGrowSensorConfigFingerprintCount;
    fingerprint_grow_id?: ID;
    last_confidence?: FingerprintGrowSensorConfigLastConfidence;
    last_finger_id?: FingerprintGrowSensorConfigLastFingerId;
    security_level?: FingerprintGrowSensorConfigSecurityLevel;
    status?: FingerprintGrowSensorConfigStatus;
}
