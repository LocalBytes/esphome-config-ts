/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: motion.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/motion
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes)
 **/
import { type ID, type Pin, EsphomeComponent } from "@/lib/base.js";
import type { CoreCOMPONENT_SCHEMA } from "./esphome.js";

export abstract class Motion extends EsphomeComponent {
    componentName: string = "motion";
}

export interface MotionCALIBRATE_ACTION_SCHEMA {
    id?: ID;
    on_error?: object[];
    on_success?: object[];
    save?: boolean;
}

export interface MotionCLEAR_ACTION_SCHEMA {
    id?: ID;
    save?: boolean;
}

export interface MotionSENSOR_SCHEMA {
    motion_id?: ID;
}

export interface Motion_CONFIG_SCHEMAAxisMap {
    x: string;
    y: string;
    z: string;
}

export interface Motion_CONFIG_SCHEMA extends CoreCOMPONENT_SCHEMA {
    axis_map?: Motion_CONFIG_SCHEMAAxisMap;
    transform_matrix?: any;
    update_interval?: any;
}

export class MotionSensor extends EsphomeComponent<MotionSensorConfig> {
    componentName: string = "motion.sensor";
}

export type MotionSensorConfig = MotionSensorConfigAccelerationX | MotionSensorConfigAccelerationY | MotionSensorConfigAccelerationZ | MotionSensorConfigAngularRateX | MotionSensorConfigAngularRateY | MotionSensorConfigAngularRateZ | MotionSensorConfigGyroscopeX | MotionSensorConfigGyroscopeY | MotionSensorConfigGyroscopeZ | MotionSensorConfigPitch | MotionSensorConfigRoll;

export interface MotionSensorConfigAccelerationX {
    type: "acceleration_x" | "ACCELERATION_X";
    accuracy_decimals?: any;
    icon?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface MotionSensorConfigAccelerationY {
    type: "acceleration_y" | "ACCELERATION_Y";
    accuracy_decimals?: any;
    icon?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface MotionSensorConfigAccelerationZ {
    type: "acceleration_z" | "ACCELERATION_Z";
    accuracy_decimals?: any;
    icon?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface MotionSensorConfigAngularRateX {
    type: "angular_rate_x" | "ANGULAR_RATE_X";
    accuracy_decimals?: any;
    icon?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface MotionSensorConfigAngularRateY {
    type: "angular_rate_y" | "ANGULAR_RATE_Y";
    accuracy_decimals?: any;
    icon?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface MotionSensorConfigAngularRateZ {
    type: "angular_rate_z" | "ANGULAR_RATE_Z";
    accuracy_decimals?: any;
    icon?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface MotionSensorConfigGyroscopeX {
    type: "gyroscope_x" | "GYROSCOPE_X";
    accuracy_decimals?: any;
    icon?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface MotionSensorConfigGyroscopeY {
    type: "gyroscope_y" | "GYROSCOPE_Y";
    accuracy_decimals?: any;
    icon?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface MotionSensorConfigGyroscopeZ {
    type: "gyroscope_z" | "GYROSCOPE_Z";
    accuracy_decimals?: any;
    icon?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface MotionSensorConfigPitch {
    type: "pitch" | "PITCH";
    accuracy_decimals?: any;
    icon?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface MotionSensorConfigRoll {
    type: "roll" | "ROLL";
    accuracy_decimals?: any;
    icon?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export type MotionSensorSENSOR_SCHEMA = MotionSENSOR_SCHEMA;
