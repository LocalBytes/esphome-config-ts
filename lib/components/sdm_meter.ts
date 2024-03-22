/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: sdm_meter.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/sdm_meter
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes) 2023
 **/
import type { ID, Pin } from "../base.js";
import { BaseComponent } from "../base.js";
import type { SensorSENSOR_SCHEMA } from "./sensor.js";
import type { CoreCOMPONENT_SCHEMA } from "./esphome.js";

export class SdmMeterSensor extends BaseComponent<SdmMeterSensorConfig> {
    componentName: string = "sdm_meter.sensor";
}

export interface SdmMeterSensorPHASE_SCHEMA {
    voltage?: SdmMeterSensorPHASE_SCHEMAVoltage;
    current?: SdmMeterSensorPHASE_SCHEMACurrent;
    active_power?: SdmMeterSensorPHASE_SCHEMAActivePower;
    apparent_power?: SdmMeterSensorPHASE_SCHEMAApparentPower;
    reactive_power?: SdmMeterSensorPHASE_SCHEMAReactivePower;
    power_factor?: SdmMeterSensorPHASE_SCHEMAPowerFactor;
    phase_angle?: SdmMeterSensorPHASE_SCHEMAPhaseAngle;
}

export interface SdmMeterSensorPHASE_SCHEMAVoltage extends SensorSENSOR_SCHEMA {
    unit_of_measurement?: any;
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
}

export interface SdmMeterSensorPHASE_SCHEMACurrent extends SensorSENSOR_SCHEMA {
    unit_of_measurement?: any;
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
}

export interface SdmMeterSensorPHASE_SCHEMAActivePower extends SensorSENSOR_SCHEMA {
    unit_of_measurement?: any;
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
}

export interface SdmMeterSensorPHASE_SCHEMAApparentPower extends SensorSENSOR_SCHEMA {
    unit_of_measurement?: any;
    accuracy_decimals?: any;
    state_class?: any;
}

export interface SdmMeterSensorPHASE_SCHEMAReactivePower extends SensorSENSOR_SCHEMA {
    unit_of_measurement?: any;
    accuracy_decimals?: any;
    state_class?: any;
}

export interface SdmMeterSensorPHASE_SCHEMAPowerFactor extends SensorSENSOR_SCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
}

export interface SdmMeterSensorPHASE_SCHEMAPhaseAngle extends SensorSENSOR_SCHEMA {
    unit_of_measurement?: any;
    icon?: any;
    accuracy_decimals?: any;
}

export interface SdmMeterSensorConfig extends CoreCOMPONENT_SCHEMA {
    id?: ID;
    phase_a?: SdmMeterSensorConfigPhaseA;
    phase_b?: SdmMeterSensorConfigPhaseB;
    phase_c?: SdmMeterSensorConfigPhaseC;
    frequency?: SdmMeterSensorConfigFrequency;
    total_power?: SdmMeterSensorConfigTotalPower;
    import_active_energy?: SdmMeterSensorConfigImportActiveEnergy;
    export_active_energy?: SdmMeterSensorConfigExportActiveEnergy;
    import_reactive_energy?: SdmMeterSensorConfigImportReactiveEnergy;
    export_reactive_energy?: SdmMeterSensorConfigExportReactiveEnergy;
    update_interval?: any;
    modbus_id?: ID;
    address?: any;
}

export interface SdmMeterSensorConfigPhaseA extends SdmMeterSensorPHASE_SCHEMA {
}

export interface SdmMeterSensorConfigPhaseB extends SdmMeterSensorPHASE_SCHEMA {
}

export interface SdmMeterSensorConfigPhaseC extends SdmMeterSensorPHASE_SCHEMA {
}

export interface SdmMeterSensorConfigFrequency extends SensorSENSOR_SCHEMA {
    unit_of_measurement?: any;
    icon?: any;
    accuracy_decimals?: any;
    state_class?: any;
}

export interface SdmMeterSensorConfigTotalPower extends SensorSENSOR_SCHEMA {
    unit_of_measurement?: any;
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
}

export interface SdmMeterSensorConfigImportActiveEnergy extends SensorSENSOR_SCHEMA {
    unit_of_measurement?: any;
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
}

export interface SdmMeterSensorConfigExportActiveEnergy extends SensorSENSOR_SCHEMA {
    unit_of_measurement?: any;
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
}

export interface SdmMeterSensorConfigImportReactiveEnergy extends SensorSENSOR_SCHEMA {
    unit_of_measurement?: any;
    accuracy_decimals?: any;
    state_class?: any;
}

export interface SdmMeterSensorConfigExportReactiveEnergy extends SensorSENSOR_SCHEMA {
    unit_of_measurement?: any;
    accuracy_decimals?: any;
    state_class?: any;
}
