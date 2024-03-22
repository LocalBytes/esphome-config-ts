/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: fingerprint_grow.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/fingerprint_grow
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes) 2023
 **/
import type { ID, Pin } from "../base.js";
import { BaseComponent } from "../base.js";
import type { CoreCOMPONENT_SCHEMA } from "./esphome.js";
import type { SensorSENSOR_SCHEMA } from "./sensor.js";
import type { BinarySensorBINARY_SENSOR_SCHEMA } from "./binary_sensor.js";

export class FingerprintGrow extends BaseComponent<FingerprintGrowConfig> {
    componentName: string = "fingerprint_grow";
}

export interface FingerprintGrowConfig extends CoreCOMPONENT_SCHEMA {
    id?: ID;
    sensing_pin?: Pin;
    password?: number;
    new_password?: number;
    on_finger_scan_matched?: object[];
    on_finger_scan_unmatched?: object[];
    on_enrollment_scan?: object[];
    on_enrollment_done?: object[];
    on_enrollment_failed?: object[];
    update_interval?: any;
    uart_id?: ID;
}

export class FingerprintGrowSensor extends BaseComponent<FingerprintGrowSensorConfig> {
    componentName: string = "fingerprint_grow.sensor";
}

export interface FingerprintGrowSensorConfig {
    fingerprint_grow_id?: ID;
    fingerprint_count?: FingerprintGrowSensorConfigFingerprintCount;
    status?: FingerprintGrowSensorConfigStatus;
    capacity?: FingerprintGrowSensorConfigCapacity;
    security_level?: FingerprintGrowSensorConfigSecurityLevel;
    last_finger_id?: FingerprintGrowSensorConfigLastFingerId;
    last_confidence?: FingerprintGrowSensorConfigLastConfidence;
}

export interface FingerprintGrowSensorConfigFingerprintCount extends SensorSENSOR_SCHEMA {
    icon?: any;
    accuracy_decimals?: any;
    entity_category?: any;
}

export interface FingerprintGrowSensorConfigStatus extends SensorSENSOR_SCHEMA {
    accuracy_decimals?: any;
    entity_category?: any;
}

export interface FingerprintGrowSensorConfigCapacity extends SensorSENSOR_SCHEMA {
    icon?: any;
    accuracy_decimals?: any;
    entity_category?: any;
}

export interface FingerprintGrowSensorConfigSecurityLevel extends SensorSENSOR_SCHEMA {
    icon?: any;
    accuracy_decimals?: any;
    entity_category?: any;
}

export interface FingerprintGrowSensorConfigLastFingerId extends SensorSENSOR_SCHEMA {
    icon?: any;
    accuracy_decimals?: any;
    entity_category?: any;
}

export interface FingerprintGrowSensorConfigLastConfidence extends SensorSENSOR_SCHEMA {
    icon?: any;
    accuracy_decimals?: any;
    entity_category?: any;
}

export class FingerprintGrowBinarySensor extends BaseComponent<FingerprintGrowBinarySensorConfig> {
    componentName: string = "fingerprint_grow.binary_sensor";
}

export interface FingerprintGrowBinarySensorConfig extends BinarySensorBINARY_SENSOR_SCHEMA {
    fingerprint_grow_id?: ID;
    icon?: any;
}
