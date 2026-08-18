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
import type { SensorSENSORSCHEMA } from "./sensor.js";
import type { CoreCOMPONENTSCHEMA } from "./esphome.js";

export class GrowattSolarSensor extends EsphomeComponent<GrowattSolarSensorConfig> {
    componentName: string = "growatt_solar.sensor";
}

export interface GrowattSolarSensorConfigActivePower extends SensorSENSORSCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface GrowattSolarSensorConfigEnergyProductionDay extends SensorSENSORSCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface GrowattSolarSensorConfigFrequency extends SensorSENSORSCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    icon?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface GrowattSolarSensorConfigInverterModuleTemp extends SensorSENSORSCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export type GrowattSolarSensorConfigInverterStatus = SensorSENSORSCHEMA;
export type GrowattSolarSensorConfigPhaseA = GrowattSolarSensorPHASESCHEMA;
export type GrowattSolarSensorConfigPhaseB = GrowattSolarSensorPHASESCHEMA;
export type GrowattSolarSensorConfigPhaseC = GrowattSolarSensorPHASESCHEMA;
export type GrowattSolarSensorConfigProtocolVersion = 'RTU' | 'RTU2';
export type GrowattSolarSensorConfigPv1 = GrowattSolarSensorPVSCHEMA;
export type GrowattSolarSensorConfigPv2 = GrowattSolarSensorPVSCHEMA;

export interface GrowattSolarSensorConfigPvActivePower extends SensorSENSORSCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface GrowattSolarSensorConfigTotalEnergyProduction extends SensorSENSORSCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface GrowattSolarSensorConfig extends CoreCOMPONENTSCHEMA {
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

export interface GrowattSolarSensorPHASESCHEMAActivePower extends SensorSENSORSCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface GrowattSolarSensorPHASESCHEMACurrent extends SensorSENSORSCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface GrowattSolarSensorPHASESCHEMAVoltage extends SensorSENSORSCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface GrowattSolarSensorPHASESCHEMA {
    active_power?: GrowattSolarSensorPHASESCHEMAActivePower;
    current?: GrowattSolarSensorPHASESCHEMACurrent;
    voltage?: GrowattSolarSensorPHASESCHEMAVoltage;
}

export interface GrowattSolarSensorPVSCHEMAActivePower extends SensorSENSORSCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface GrowattSolarSensorPVSCHEMACurrent extends SensorSENSORSCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface GrowattSolarSensorPVSCHEMAVoltage extends SensorSENSORSCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface GrowattSolarSensorPVSCHEMA {
    active_power?: GrowattSolarSensorPVSCHEMAActivePower;
    current?: GrowattSolarSensorPVSCHEMACurrent;
    voltage?: GrowattSolarSensorPVSCHEMAVoltage;
}
