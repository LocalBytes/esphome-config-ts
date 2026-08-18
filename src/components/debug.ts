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
import type { CoreCOMPONENTSCHEMA } from "./esphome.js";
import type { SensorSENSORSCHEMA } from "./sensor.js";
import type { TextSensorTEXTSENSORSCHEMA } from "./text_sensor.js";

export class Debug extends EsphomeComponent<DebugConfig> {
    componentName: string = "debug";
}

export interface DebugConfig extends CoreCOMPONENTSCHEMA {
    id?: ID;
    update_interval?: any;
}

export class DebugSensor extends EsphomeComponent<DebugSensorConfig> {
    componentName: string = "debug.sensor";
}

export interface DebugSensorConfigBlock extends SensorSENSORSCHEMA {
    accuracy_decimals?: any;
    entity_category?: any;
    icon?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface DebugSensorConfigCpuFrequency extends SensorSENSORSCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    entity_category?: any;
    icon?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface DebugSensorConfigFragmentation extends SensorSENSORSCHEMA {
    accuracy_decimals?: any;
    entity_category?: any;
    icon?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface DebugSensorConfigFree extends SensorSENSORSCHEMA {
    accuracy_decimals?: any;
    entity_category?: any;
    icon?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface DebugSensorConfigLoopTime extends SensorSENSORSCHEMA {
    accuracy_decimals?: any;
    entity_category?: any;
    icon?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface DebugSensorConfigMinFree extends SensorSENSORSCHEMA {
    accuracy_decimals?: any;
    entity_category?: any;
    icon?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface DebugSensorConfigPsram extends SensorSENSORSCHEMA {
    accuracy_decimals?: any;
    entity_category?: any;
    icon?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface DebugSensorConfig {
    block?: DebugSensorConfigBlock;
    cpu_frequency?: DebugSensorConfigCpuFrequency;
    debug_id?: ID;
    fragmentation?: DebugSensorConfigFragmentation;
    free?: DebugSensorConfigFree;
    loop_time?: DebugSensorConfigLoopTime;
    min_free?: DebugSensorConfigMinFree;
    psram?: DebugSensorConfigPsram;
}

export class DebugTextSensor extends EsphomeComponent<DebugTextSensorConfig> {
    componentName: string = "debug.text_sensor";
}

export interface DebugTextSensorConfigDevice extends TextSensorTEXTSENSORSCHEMA {
    entity_category?: any;
    icon?: any;
}

export interface DebugTextSensorConfigResetReason extends TextSensorTEXTSENSORSCHEMA {
    entity_category?: any;
    icon?: any;
}

export interface DebugTextSensorConfig {
    debug_id?: ID;
    device?: DebugTextSensorConfigDevice;
    reset_reason?: DebugTextSensorConfigResetReason;
}
