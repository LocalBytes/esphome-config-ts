/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: growatt_solar.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/growatt_solar
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes)
 **/
import { type ID, type Pin, EsphomeComponent } from "@/lib/base.js";
import type { SensorSENSOR_SCHEMA } from "./sensor.js";
import type { CoreCOMPONENT_SCHEMA } from "./esphome.js";

export class GrowattSolarSensor extends EsphomeComponent<GrowattSolarSensorConfig> {
    componentName: string = "growatt_solar.sensor";
}

export interface GrowattSolarSensorPHASE_SCHEMAVoltage extends SensorSENSOR_SCHEMA {
    unit_of_measurement?: any;
    accuracy_decimals?: any;
    device_class?: any;
}

export interface GrowattSolarSensorPHASE_SCHEMACurrent extends SensorSENSOR_SCHEMA {
    unit_of_measurement?: any;
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
}

export interface GrowattSolarSensorPHASE_SCHEMAActivePower extends SensorSENSOR_SCHEMA {
    unit_of_measurement?: any;
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
}

export interface GrowattSolarSensorPHASE_SCHEMA {
    voltage?: GrowattSolarSensorPHASE_SCHEMAVoltage;
    current?: GrowattSolarSensorPHASE_SCHEMACurrent;
    active_power?: GrowattSolarSensorPHASE_SCHEMAActivePower;
}

export interface GrowattSolarSensorPV_SCHEMAVoltage extends SensorSENSOR_SCHEMA {
    unit_of_measurement?: any;
    accuracy_decimals?: any;
    device_class?: any;
}

export interface GrowattSolarSensorPV_SCHEMACurrent extends SensorSENSOR_SCHEMA {
    unit_of_measurement?: any;
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
}

export interface GrowattSolarSensorPV_SCHEMAActivePower extends SensorSENSOR_SCHEMA {
    unit_of_measurement?: any;
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
}

export interface GrowattSolarSensorPV_SCHEMA {
    voltage?: GrowattSolarSensorPV_SCHEMAVoltage;
    current?: GrowattSolarSensorPV_SCHEMACurrent;
    active_power?: GrowattSolarSensorPV_SCHEMAActivePower;
}

export type GrowattSolarSensorConfigProtocolVersion = 'RTU' | 'RTU2';
export type GrowattSolarSensorConfigPhaseA = GrowattSolarSensorPHASE_SCHEMA;
export type GrowattSolarSensorConfigPhaseB = GrowattSolarSensorPHASE_SCHEMA;
export type GrowattSolarSensorConfigPhaseC = GrowattSolarSensorPHASE_SCHEMA;
export type GrowattSolarSensorConfigPv1 = GrowattSolarSensorPV_SCHEMA;
export type GrowattSolarSensorConfigPv2 = GrowattSolarSensorPV_SCHEMA;
export type GrowattSolarSensorConfigInverterStatus = SensorSENSOR_SCHEMA;

export interface GrowattSolarSensorConfigFrequency extends SensorSENSOR_SCHEMA {
    unit_of_measurement?: any;
    icon?: any;
    accuracy_decimals?: any;
    state_class?: any;
}

export interface GrowattSolarSensorConfigActivePower extends SensorSENSOR_SCHEMA {
    unit_of_measurement?: any;
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
}

export interface GrowattSolarSensorConfigPvActivePower extends SensorSENSOR_SCHEMA {
    unit_of_measurement?: any;
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
}

export interface GrowattSolarSensorConfigEnergyProductionDay extends SensorSENSOR_SCHEMA {
    unit_of_measurement?: any;
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
}

export interface GrowattSolarSensorConfigTotalEnergyProduction extends SensorSENSOR_SCHEMA {
    unit_of_measurement?: any;
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
}

export interface GrowattSolarSensorConfigInverterModuleTemp extends SensorSENSOR_SCHEMA {
    unit_of_measurement?: any;
    accuracy_decimals?: any;
    state_class?: any;
}

export interface GrowattSolarSensorConfig extends CoreCOMPONENT_SCHEMA {
    id?: ID;
    protocol_version?: GrowattSolarSensorConfigProtocolVersion;
    phase_a?: GrowattSolarSensorConfigPhaseA;
    phase_b?: GrowattSolarSensorConfigPhaseB;
    phase_c?: GrowattSolarSensorConfigPhaseC;
    pv1?: GrowattSolarSensorConfigPv1;
    pv2?: GrowattSolarSensorConfigPv2;
    inverter_status?: GrowattSolarSensorConfigInverterStatus;
    frequency?: GrowattSolarSensorConfigFrequency;
    active_power?: GrowattSolarSensorConfigActivePower;
    pv_active_power?: GrowattSolarSensorConfigPvActivePower;
    energy_production_day?: GrowattSolarSensorConfigEnergyProductionDay;
    total_energy_production?: GrowattSolarSensorConfigTotalEnergyProduction;
    inverter_module_temp?: GrowattSolarSensorConfigInverterModuleTemp;
    update_interval?: any;
    modbus_id?: ID;
    address?: any;
}
