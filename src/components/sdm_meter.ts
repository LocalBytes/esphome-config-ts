/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: sdm_meter.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/sdm_meter
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes)
 **/
import { type ID, type Pin, EsphomeComponent } from "@/lib/base.js";
import type { Sensor_SENSOR_SCHEMA } from "./sensor.js";
import type { CoreCOMPONENT_SCHEMA } from "./esphome.js";

export class SdmMeterSensor extends EsphomeComponent<SdmMeterSensorConfig> {
    componentName: string = "sdm_meter.sensor";
}

export interface SdmMeterSensorConfigExportActiveEnergy extends Sensor_SENSOR_SCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface SdmMeterSensorConfigExportReactiveEnergy extends Sensor_SENSOR_SCHEMA {
    accuracy_decimals?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface SdmMeterSensorConfigFrequency extends Sensor_SENSOR_SCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    icon?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface SdmMeterSensorConfigImportActiveEnergy extends Sensor_SENSOR_SCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface SdmMeterSensorConfigImportReactiveEnergy extends Sensor_SENSOR_SCHEMA {
    accuracy_decimals?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export type SdmMeterSensorConfigPhaseA = SdmMeterSensorPHASE_SCHEMA;
export type SdmMeterSensorConfigPhaseB = SdmMeterSensorPHASE_SCHEMA;
export type SdmMeterSensorConfigPhaseC = SdmMeterSensorPHASE_SCHEMA;

export interface SdmMeterSensorConfigTotalPower extends Sensor_SENSOR_SCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface SdmMeterSensorConfig extends CoreCOMPONENT_SCHEMA {
    address?: any;
    export_active_energy?: SdmMeterSensorConfigExportActiveEnergy;
    export_reactive_energy?: SdmMeterSensorConfigExportReactiveEnergy;
    frequency?: SdmMeterSensorConfigFrequency;
    id?: ID;
    import_active_energy?: SdmMeterSensorConfigImportActiveEnergy;
    import_reactive_energy?: SdmMeterSensorConfigImportReactiveEnergy;
    modbus_id?: ID;
    phase_a?: SdmMeterSensorConfigPhaseA;
    phase_b?: SdmMeterSensorConfigPhaseB;
    phase_c?: SdmMeterSensorConfigPhaseC;
    total_power?: SdmMeterSensorConfigTotalPower;
    update_interval?: any;
}

export interface SdmMeterSensorPHASE_SCHEMAActivePower extends Sensor_SENSOR_SCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface SdmMeterSensorPHASE_SCHEMAApparentPower extends Sensor_SENSOR_SCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface SdmMeterSensorPHASE_SCHEMACurrent extends Sensor_SENSOR_SCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface SdmMeterSensorPHASE_SCHEMAPhaseAngle extends Sensor_SENSOR_SCHEMA {
    accuracy_decimals?: any;
    icon?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface SdmMeterSensorPHASE_SCHEMAPowerFactor extends Sensor_SENSOR_SCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
}

export interface SdmMeterSensorPHASE_SCHEMAReactivePower extends Sensor_SENSOR_SCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface SdmMeterSensorPHASE_SCHEMAVoltage extends Sensor_SENSOR_SCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface SdmMeterSensorPHASE_SCHEMA {
    active_power?: SdmMeterSensorPHASE_SCHEMAActivePower;
    apparent_power?: SdmMeterSensorPHASE_SCHEMAApparentPower;
    current?: SdmMeterSensorPHASE_SCHEMACurrent;
    phase_angle?: SdmMeterSensorPHASE_SCHEMAPhaseAngle;
    power_factor?: SdmMeterSensorPHASE_SCHEMAPowerFactor;
    reactive_power?: SdmMeterSensorPHASE_SCHEMAReactivePower;
    voltage?: SdmMeterSensorPHASE_SCHEMAVoltage;
}
