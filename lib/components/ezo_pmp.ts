/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: ezo_pmp.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/ezo_pmp
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes) 2023
 **/
import { ID, Pin, BaseComponent } from "../base.js";
import { CoreCOMPONENT_SCHEMA } from "./esphome.js";
import { SensorSENSOR_SCHEMA } from "./sensor.js";
import { BinarySensorBINARY_SENSOR_SCHEMA } from "./binary_sensor.js";
import { TextSensorTEXT_SENSOR_SCHEMA } from "./text_sensor.js";

export class EzoPmp extends BaseComponent<EzoPmpConfig> {
    componentName: string = "ezo_pmp";
}

export interface EzoPmpConfig extends CoreCOMPONENT_SCHEMA {
    id?: ID;
    update_interval?: any;
    i2c_id?: ID;
    address?: any;
}

export interface EzoPmpEZO_PMP_NO_ARGS_ACTION_SCHEMA {
    id: ID;
}

export class EzoPmpSensor extends BaseComponent<EzoPmpSensorConfig> {
    componentName: string = "ezo_pmp.sensor";
}

export interface EzoPmpSensorConfig {
    id?: ID;
    current_volume_dosed?: EzoPmpSensorConfigCurrentVolumeDosed;
    last_volume_requested?: EzoPmpSensorConfigLastVolumeRequested;
    max_flow_rate?: EzoPmpSensorConfigMaxFlowRate;
    total_volume_dosed?: EzoPmpSensorConfigTotalVolumeDosed;
    absolute_total_volume_dosed?: EzoPmpSensorConfigAbsoluteTotalVolumeDosed;
    pump_voltage?: EzoPmpSensorConfigPumpVoltage;
}

export interface EzoPmpSensorConfigCurrentVolumeDosed extends SensorSENSOR_SCHEMA {
    unit_of_measurement?: any;
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
    entity_category?: any;
}

export interface EzoPmpSensorConfigLastVolumeRequested extends SensorSENSOR_SCHEMA {
    unit_of_measurement?: any;
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
    entity_category?: any;
}

export interface EzoPmpSensorConfigMaxFlowRate extends SensorSENSOR_SCHEMA {
    unit_of_measurement?: any;
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
    entity_category?: any;
}

export interface EzoPmpSensorConfigTotalVolumeDosed extends SensorSENSOR_SCHEMA {
    unit_of_measurement?: any;
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
    entity_category?: any;
}

export interface EzoPmpSensorConfigAbsoluteTotalVolumeDosed extends SensorSENSOR_SCHEMA {
    unit_of_measurement?: any;
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
    entity_category?: any;
}

export interface EzoPmpSensorConfigPumpVoltage extends SensorSENSOR_SCHEMA {
    unit_of_measurement?: any;
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
    entity_category?: any;
}

export class EzoPmpBinarySensor extends BaseComponent<EzoPmpBinarySensorConfig> {
    componentName: string = "ezo_pmp.binary_sensor";
}

export interface EzoPmpBinarySensorConfig {
    id?: ID;
    pump_state?: EzoPmpBinarySensorConfigPumpState;
    is_paused?: EzoPmpBinarySensorConfigIsPaused;
}

export interface EzoPmpBinarySensorConfigPumpState extends BinarySensorBINARY_SENSOR_SCHEMA {
    entity_category?: any;
    device_class?: any;
}

export interface EzoPmpBinarySensorConfigIsPaused extends BinarySensorBINARY_SENSOR_SCHEMA {
    entity_category?: any;
    device_class?: any;
}

export class EzoPmpTextSensor extends BaseComponent<EzoPmpTextSensorConfig> {
    componentName: string = "ezo_pmp.text_sensor";
}

export interface EzoPmpTextSensorConfig {
    id?: ID;
    dosing_mode?: EzoPmpTextSensorConfigDosingMode;
    calibration_status?: EzoPmpTextSensorConfigCalibrationStatus;
}

export interface EzoPmpTextSensorConfigDosingMode extends TextSensorTEXT_SENSOR_SCHEMA {
    entity_category?: any;
}

export interface EzoPmpTextSensorConfigCalibrationStatus extends TextSensorTEXT_SENSOR_SCHEMA {
    entity_category?: any;
}
