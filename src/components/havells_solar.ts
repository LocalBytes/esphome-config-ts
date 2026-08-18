/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: havells_solar.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/havells_solar
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes)
 **/
import { type ID, type Pin, EsphomeComponent } from "@/lib/base.js";
import type { SensorSENSORSCHEMA } from "./sensor.js";
import type { CoreCOMPONENTSCHEMA } from "./esphome.js";

export class HavellsSolarSensor extends EsphomeComponent<HavellsSolarSensorConfig> {
    componentName: string = "havells_solar.sensor";
}

export interface HavellsSolarSensorConfigActivePower extends SensorSENSORSCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface HavellsSolarSensorConfigDciOfR extends SensorSENSORSCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface HavellsSolarSensorConfigDciOfS extends SensorSENSORSCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface HavellsSolarSensorConfigDciOfT extends SensorSENSORSCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface HavellsSolarSensorConfigEnergyProductionDay extends SensorSENSORSCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface HavellsSolarSensorConfigFrequency extends SensorSENSORSCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    icon?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface HavellsSolarSensorConfigGfciValue extends SensorSENSORSCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface HavellsSolarSensorConfigInsulationOfPvNToGround extends SensorSENSORSCHEMA {
    accuracy_decimals?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface HavellsSolarSensorConfigInverterBusVoltage extends SensorSENSORSCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface HavellsSolarSensorConfigInverterInnerTemp extends SensorSENSORSCHEMA {
    accuracy_decimals?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface HavellsSolarSensorConfigInverterModuleTemp extends SensorSENSORSCHEMA {
    accuracy_decimals?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export type HavellsSolarSensorConfigPhaseA = HavellsSolarSensorPHASESCHEMA;
export type HavellsSolarSensorConfigPhaseB = HavellsSolarSensorPHASESCHEMA;
export type HavellsSolarSensorConfigPhaseC = HavellsSolarSensorPHASESCHEMA;
export type HavellsSolarSensorConfigPv1 = HavellsSolarSensorPVSCHEMA;
export type HavellsSolarSensorConfigPv2 = HavellsSolarSensorPVSCHEMA;

export interface HavellsSolarSensorConfigReactivePower extends SensorSENSORSCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface HavellsSolarSensorConfigTodayGenerationTime extends SensorSENSORSCHEMA {
    accuracy_decimals?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface HavellsSolarSensorConfigTotalEnergyProduction extends SensorSENSORSCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface HavellsSolarSensorConfigTotalGenerationTime extends SensorSENSORSCHEMA {
    accuracy_decimals?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface HavellsSolarSensorConfig extends CoreCOMPONENTSCHEMA {
    active_power?: HavellsSolarSensorConfigActivePower;
    address?: any;
    dci_of_r?: HavellsSolarSensorConfigDciOfR;
    dci_of_s?: HavellsSolarSensorConfigDciOfS;
    dci_of_t?: HavellsSolarSensorConfigDciOfT;
    energy_production_day?: HavellsSolarSensorConfigEnergyProductionDay;
    frequency?: HavellsSolarSensorConfigFrequency;
    gfci_value?: HavellsSolarSensorConfigGfciValue;
    id?: ID;
    insulation_of_pv_n_to_ground?: HavellsSolarSensorConfigInsulationOfPvNToGround;
    inverter_bus_voltage?: HavellsSolarSensorConfigInverterBusVoltage;
    inverter_inner_temp?: HavellsSolarSensorConfigInverterInnerTemp;
    inverter_module_temp?: HavellsSolarSensorConfigInverterModuleTemp;
    modbus_id?: ID;
    phase_a?: HavellsSolarSensorConfigPhaseA;
    phase_b?: HavellsSolarSensorConfigPhaseB;
    phase_c?: HavellsSolarSensorConfigPhaseC;
    pv1?: HavellsSolarSensorConfigPv1;
    pv2?: HavellsSolarSensorConfigPv2;
    reactive_power?: HavellsSolarSensorConfigReactivePower;
    today_generation_time?: HavellsSolarSensorConfigTodayGenerationTime;
    total_energy_production?: HavellsSolarSensorConfigTotalEnergyProduction;
    total_generation_time?: HavellsSolarSensorConfigTotalGenerationTime;
    update_interval?: any;
}

export interface HavellsSolarSensorPHASESCHEMACurrent extends SensorSENSORSCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface HavellsSolarSensorPHASESCHEMAVoltage extends SensorSENSORSCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface HavellsSolarSensorPHASESCHEMA {
    current?: HavellsSolarSensorPHASESCHEMACurrent;
    voltage?: HavellsSolarSensorPHASESCHEMAVoltage;
}

export interface HavellsSolarSensorPVSCHEMAActivePower extends SensorSENSORSCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface HavellsSolarSensorPVSCHEMACurrent extends SensorSENSORSCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface HavellsSolarSensorPVSCHEMAInsulationOfPToGround extends SensorSENSORSCHEMA {
    accuracy_decimals?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface HavellsSolarSensorPVSCHEMAVoltage extends SensorSENSORSCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface HavellsSolarSensorPVSCHEMAVoltageSampledBySecondaryCpu extends SensorSENSORSCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface HavellsSolarSensorPVSCHEMA {
    active_power?: HavellsSolarSensorPVSCHEMAActivePower;
    current?: HavellsSolarSensorPVSCHEMACurrent;
    insulation_of_p_to_ground?: HavellsSolarSensorPVSCHEMAInsulationOfPToGround;
    voltage?: HavellsSolarSensorPVSCHEMAVoltage;
    voltage_sampled_by_secondary_cpu?: HavellsSolarSensorPVSCHEMAVoltageSampledBySecondaryCpu;
}
