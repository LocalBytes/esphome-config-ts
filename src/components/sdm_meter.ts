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
import type { SensorSENSORSCHEMA } from "./sensor.js";
import type { CoreCOMPONENTSCHEMA } from "./esphome.js";

export class SdmMeterSensor extends EsphomeComponent<SdmMeterSensorConfig> {
    componentName: string = "sdm_meter.sensor";
}

export interface SdmMeterSensorConfigExportActiveEnergy extends SensorSENSORSCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface SdmMeterSensorConfigExportReactiveEnergy extends SensorSENSORSCHEMA {
    accuracy_decimals?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface SdmMeterSensorConfigFrequency extends SensorSENSORSCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    icon?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface SdmMeterSensorConfigImportActiveEnergy extends SensorSENSORSCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface SdmMeterSensorConfigImportReactiveEnergy extends SensorSENSORSCHEMA {
    accuracy_decimals?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export type SdmMeterSensorConfigPhaseA = SdmMeterSensorPHASESCHEMA;
export type SdmMeterSensorConfigPhaseB = SdmMeterSensorPHASESCHEMA;
export type SdmMeterSensorConfigPhaseC = SdmMeterSensorPHASESCHEMA;

export interface SdmMeterSensorConfigTotalPower extends SensorSENSORSCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface SdmMeterSensorConfig extends CoreCOMPONENTSCHEMA {
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

export interface SdmMeterSensorPHASESCHEMAActivePower extends SensorSENSORSCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface SdmMeterSensorPHASESCHEMAApparentPower extends SensorSENSORSCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface SdmMeterSensorPHASESCHEMACurrent extends SensorSENSORSCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface SdmMeterSensorPHASESCHEMAPhaseAngle extends SensorSENSORSCHEMA {
    accuracy_decimals?: any;
    icon?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface SdmMeterSensorPHASESCHEMAPowerFactor extends SensorSENSORSCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
}

export interface SdmMeterSensorPHASESCHEMAReactivePower extends SensorSENSORSCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface SdmMeterSensorPHASESCHEMAVoltage extends SensorSENSORSCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface SdmMeterSensorPHASESCHEMA {
    active_power?: SdmMeterSensorPHASESCHEMAActivePower;
    apparent_power?: SdmMeterSensorPHASESCHEMAApparentPower;
    current?: SdmMeterSensorPHASESCHEMACurrent;
    phase_angle?: SdmMeterSensorPHASESCHEMAPhaseAngle;
    power_factor?: SdmMeterSensorPHASESCHEMAPowerFactor;
    reactive_power?: SdmMeterSensorPHASESCHEMAReactivePower;
    voltage?: SdmMeterSensorPHASESCHEMAVoltage;
}
