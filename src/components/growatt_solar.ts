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
import type { Sensor_SENSOR_SCHEMA } from "./sensor.js";
import type { CoreCOMPONENT_SCHEMA } from "./esphome.js";

export class GrowattSolarSensor extends EsphomeComponent<GrowattSolarSensorConfig> {
    componentName: string = "growatt_solar.sensor";
}

export interface GrowattSolarSensorConfigActivePower extends Sensor_SENSOR_SCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface GrowattSolarSensorConfigEnergyProductionDay extends Sensor_SENSOR_SCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface GrowattSolarSensorConfigFrequency extends Sensor_SENSOR_SCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    icon?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface GrowattSolarSensorConfigInverterModuleTemp extends Sensor_SENSOR_SCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export type GrowattSolarSensorConfigInverterStatus = Sensor_SENSOR_SCHEMA;
export type GrowattSolarSensorConfigPhaseA = GrowattSolarSensorPHASE_SCHEMA;
export type GrowattSolarSensorConfigPhaseB = GrowattSolarSensorPHASE_SCHEMA;
export type GrowattSolarSensorConfigPhaseC = GrowattSolarSensorPHASE_SCHEMA;
export type GrowattSolarSensorConfigProtocolVersion = 'RTU' | 'RTU2';
export type GrowattSolarSensorConfigPv1 = GrowattSolarSensorPV_SCHEMA;
export type GrowattSolarSensorConfigPv2 = GrowattSolarSensorPV_SCHEMA;

export interface GrowattSolarSensorConfigPvActivePower extends Sensor_SENSOR_SCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface GrowattSolarSensorConfigTotalEnergyProduction extends Sensor_SENSOR_SCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface GrowattSolarSensorConfig extends CoreCOMPONENT_SCHEMA {
    active_power?: GrowattSolarSensorConfigActivePower;
    address?: any;
    energy_production_day?: GrowattSolarSensorConfigEnergyProductionDay;
    frequency?: GrowattSolarSensorConfigFrequency;
    id?: ID;
    inverter_module_temp?: GrowattSolarSensorConfigInverterModuleTemp;
    inverter_status?: GrowattSolarSensorConfigInverterStatus;
    modbus_id?: ID;
    phase_a?: GrowattSolarSensorConfigPhaseA;
    phase_b?: GrowattSolarSensorConfigPhaseB;
    phase_c?: GrowattSolarSensorConfigPhaseC;
    protocol_version?: GrowattSolarSensorConfigProtocolVersion;
    pv1?: GrowattSolarSensorConfigPv1;
    pv2?: GrowattSolarSensorConfigPv2;
    pv_active_power?: GrowattSolarSensorConfigPvActivePower;
    total_energy_production?: GrowattSolarSensorConfigTotalEnergyProduction;
    update_interval?: any;
}

export interface GrowattSolarSensorPHASE_SCHEMAActivePower extends Sensor_SENSOR_SCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface GrowattSolarSensorPHASE_SCHEMACurrent extends Sensor_SENSOR_SCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface GrowattSolarSensorPHASE_SCHEMAVoltage extends Sensor_SENSOR_SCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface GrowattSolarSensorPHASE_SCHEMA {
    active_power?: GrowattSolarSensorPHASE_SCHEMAActivePower;
    current?: GrowattSolarSensorPHASE_SCHEMACurrent;
    voltage?: GrowattSolarSensorPHASE_SCHEMAVoltage;
}

export interface GrowattSolarSensorPV_SCHEMAActivePower extends Sensor_SENSOR_SCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface GrowattSolarSensorPV_SCHEMACurrent extends Sensor_SENSOR_SCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface GrowattSolarSensorPV_SCHEMAVoltage extends Sensor_SENSOR_SCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface GrowattSolarSensorPV_SCHEMA {
    active_power?: GrowattSolarSensorPV_SCHEMAActivePower;
    current?: GrowattSolarSensorPV_SCHEMACurrent;
    voltage?: GrowattSolarSensorPV_SCHEMAVoltage;
}
