/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: ezo_pmp.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/ezo_pmp
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes)
 **/
import { type ID, type Pin, EsphomeComponent } from "@/lib/base.js";
import type { CoreCOMPONENT_SCHEMA } from "./esphome.js";
import type { BinarySensor_BINARY_SENSOR_SCHEMA } from "./binary_sensor.js";
import type { Sensor_SENSOR_SCHEMA } from "./sensor.js";
import type { TextSensor_TEXT_SENSOR_SCHEMA } from "./text_sensor.js";

export class EzoPmp extends EsphomeComponent<EzoPmpConfig> {
    componentName: string = "ezo_pmp";
}

export interface EzoPmpConfig extends CoreCOMPONENT_SCHEMA {
    address?: any;
    i2c_id?: ID;
    id?: ID;
    update_interval?: any;
}

export interface EzoPmpEZO_PMP_NO_ARGS_ACTION_SCHEMA {
    id: ID;
}

export class EzoPmpBinarySensor extends EsphomeComponent<EzoPmpBinarySensorConfig> {
    componentName: string = "ezo_pmp.binary_sensor";
}

export interface EzoPmpBinarySensorConfigIsPaused extends BinarySensor_BINARY_SENSOR_SCHEMA {
    device_class?: any;
    entity_category?: any;
}

export interface EzoPmpBinarySensorConfigPumpState extends BinarySensor_BINARY_SENSOR_SCHEMA {
    device_class?: any;
    entity_category?: any;
}

export interface EzoPmpBinarySensorConfig {
    id?: ID;
    is_paused?: EzoPmpBinarySensorConfigIsPaused;
    pump_state?: EzoPmpBinarySensorConfigPumpState;
}

export class EzoPmpSensor extends EsphomeComponent<EzoPmpSensorConfig> {
    componentName: string = "ezo_pmp.sensor";
}

export interface EzoPmpSensorConfigAbsoluteTotalVolumeDosed extends Sensor_SENSOR_SCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    entity_category?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface EzoPmpSensorConfigCurrentVolumeDosed extends Sensor_SENSOR_SCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    entity_category?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface EzoPmpSensorConfigLastVolumeRequested extends Sensor_SENSOR_SCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    entity_category?: any;
    state_class?: any;
    unit_of_measurement?: any;
    id?: ID;
}

export interface EzoPmpSensorConfigMaxFlowRate extends Sensor_SENSOR_SCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    entity_category?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface EzoPmpSensorConfigPumpVoltage extends Sensor_SENSOR_SCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    entity_category?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface EzoPmpSensorConfigTotalVolumeDosed extends Sensor_SENSOR_SCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    entity_category?: any;
    state_class?: any;
    unit_of_measurement?: any;
    id?: ID;
}

export interface EzoPmpSensorConfig {
    absolute_total_volume_dosed?: EzoPmpSensorConfigAbsoluteTotalVolumeDosed;
    current_volume_dosed?: EzoPmpSensorConfigCurrentVolumeDosed;
    id?: ID;
    last_volume_requested?: EzoPmpSensorConfigLastVolumeRequested;
    max_flow_rate?: EzoPmpSensorConfigMaxFlowRate;
    pump_voltage?: EzoPmpSensorConfigPumpVoltage;
    total_volume_dosed?: EzoPmpSensorConfigTotalVolumeDosed;
}

export class EzoPmpTextSensor extends EsphomeComponent<EzoPmpTextSensorConfig> {
    componentName: string = "ezo_pmp.text_sensor";
}

export interface EzoPmpTextSensorConfigCalibrationStatus extends TextSensor_TEXT_SENSOR_SCHEMA {
    entity_category?: any;
}

export interface EzoPmpTextSensorConfigDosingMode extends TextSensor_TEXT_SENSOR_SCHEMA {
    entity_category?: any;
}

export interface EzoPmpTextSensorConfig {
    calibration_status?: EzoPmpTextSensorConfigCalibrationStatus;
    dosing_mode?: EzoPmpTextSensorConfigDosingMode;
    id?: ID;
}
