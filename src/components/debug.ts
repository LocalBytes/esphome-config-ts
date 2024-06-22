/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: debug.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/debug
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes)
 **/
import { type ID, type Pin, EsphomeComponent } from "@/lib/base.js";
import type { CoreCOMPONENT_SCHEMA } from "./esphome.js";
import type { SensorSENSOR_SCHEMA } from "./sensor.js";
import type { TextSensorTEXT_SENSOR_SCHEMA } from "./text_sensor.js";

export class Debug extends EsphomeComponent<DebugConfig> {
    componentName: string = "debug";
}

export interface DebugConfig extends CoreCOMPONENT_SCHEMA {
    id?: ID;
    update_interval?: any;
}

export class DebugSensor extends EsphomeComponent<DebugSensorConfig> {
    componentName: string = "debug.sensor";
}

export interface DebugSensorConfigFree extends SensorSENSOR_SCHEMA {
    unit_of_measurement?: any;
    icon?: any;
    accuracy_decimals?: any;
    entity_category?: any;
}

export interface DebugSensorConfigBlock extends SensorSENSOR_SCHEMA {
    unit_of_measurement?: any;
    icon?: any;
    accuracy_decimals?: any;
    entity_category?: any;
}

export interface DebugSensorConfigFragmentation extends SensorSENSOR_SCHEMA {
    unit_of_measurement?: any;
    icon?: any;
    accuracy_decimals?: any;
    entity_category?: any;
}

export interface DebugSensorConfigLoopTime extends SensorSENSOR_SCHEMA {
    unit_of_measurement?: any;
    icon?: any;
    accuracy_decimals?: any;
    entity_category?: any;
}

export interface DebugSensorConfigPsram extends SensorSENSOR_SCHEMA {
    unit_of_measurement?: any;
    icon?: any;
    accuracy_decimals?: any;
    entity_category?: any;
}

export interface DebugSensorConfig {
    debug_id?: ID;
    free?: DebugSensorConfigFree;
    block?: DebugSensorConfigBlock;
    fragmentation?: DebugSensorConfigFragmentation;
    loop_time?: DebugSensorConfigLoopTime;
    psram?: DebugSensorConfigPsram;
}

export class DebugTextSensor extends EsphomeComponent<DebugTextSensorConfig> {
    componentName: string = "debug.text_sensor";
}

export interface DebugTextSensorConfigDevice extends TextSensorTEXT_SENSOR_SCHEMA {
    icon?: any;
    entity_category?: any;
}

export interface DebugTextSensorConfigResetReason extends TextSensorTEXT_SENSOR_SCHEMA {
    icon?: any;
    entity_category?: any;
}

export interface DebugTextSensorConfig {
    debug_id?: ID;
    device?: DebugTextSensorConfigDevice;
    reset_reason?: DebugTextSensorConfigResetReason;
}
