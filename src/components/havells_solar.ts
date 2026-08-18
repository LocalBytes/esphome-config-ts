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
import type { Sensor_SENSOR_SCHEMA } from "./sensor.js";
import type { CoreCOMPONENT_SCHEMA } from "./esphome.js";

export class HavellsSolarSensor extends EsphomeComponent<HavellsSolarSensorConfig> {
    componentName: string = "havells_solar.sensor";
}

export interface HavellsSolarSensorConfigActivePower extends Sensor_SENSOR_SCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface HavellsSolarSensorConfigDciOfR extends Sensor_SENSOR_SCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface HavellsSolarSensorConfigDciOfS extends Sensor_SENSOR_SCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface HavellsSolarSensorConfigDciOfT extends Sensor_SENSOR_SCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface HavellsSolarSensorConfigEnergyProductionDay extends Sensor_SENSOR_SCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface HavellsSolarSensorConfigFrequency extends Sensor_SENSOR_SCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    icon?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface HavellsSolarSensorConfigGfciValue extends Sensor_SENSOR_SCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface HavellsSolarSensorConfigInsulationOfPvNToGround extends Sensor_SENSOR_SCHEMA {
    accuracy_decimals?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface HavellsSolarSensorConfigInverterBusVoltage extends Sensor_SENSOR_SCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface HavellsSolarSensorConfigInverterInnerTemp extends Sensor_SENSOR_SCHEMA {
    accuracy_decimals?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface HavellsSolarSensorConfigInverterModuleTemp extends Sensor_SENSOR_SCHEMA {
    accuracy_decimals?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export type HavellsSolarSensorConfigPhaseA = HavellsSolarSensorPHASE_SCHEMA;
export type HavellsSolarSensorConfigPhaseB = HavellsSolarSensorPHASE_SCHEMA;
export type HavellsSolarSensorConfigPhaseC = HavellsSolarSensorPHASE_SCHEMA;
export type HavellsSolarSensorConfigPv1 = HavellsSolarSensorPV_SCHEMA;
export type HavellsSolarSensorConfigPv2 = HavellsSolarSensorPV_SCHEMA;

export interface HavellsSolarSensorConfigReactivePower extends Sensor_SENSOR_SCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface HavellsSolarSensorConfigTodayGenerationTime extends Sensor_SENSOR_SCHEMA {
    accuracy_decimals?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface HavellsSolarSensorConfigTotalEnergyProduction extends Sensor_SENSOR_SCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface HavellsSolarSensorConfigTotalGenerationTime extends Sensor_SENSOR_SCHEMA {
    accuracy_decimals?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface HavellsSolarSensorConfig extends CoreCOMPONENT_SCHEMA {
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

export interface HavellsSolarSensorPHASE_SCHEMACurrent extends Sensor_SENSOR_SCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface HavellsSolarSensorPHASE_SCHEMAVoltage extends Sensor_SENSOR_SCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface HavellsSolarSensorPHASE_SCHEMA {
    current?: HavellsSolarSensorPHASE_SCHEMACurrent;
    voltage?: HavellsSolarSensorPHASE_SCHEMAVoltage;
}

export interface HavellsSolarSensorPV_SCHEMAActivePower extends Sensor_SENSOR_SCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface HavellsSolarSensorPV_SCHEMACurrent extends Sensor_SENSOR_SCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface HavellsSolarSensorPV_SCHEMAInsulationOfPToGround extends Sensor_SENSOR_SCHEMA {
    accuracy_decimals?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface HavellsSolarSensorPV_SCHEMAVoltage extends Sensor_SENSOR_SCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface HavellsSolarSensorPV_SCHEMAVoltageSampledBySecondaryCpu extends Sensor_SENSOR_SCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface HavellsSolarSensorPV_SCHEMA {
    active_power?: HavellsSolarSensorPV_SCHEMAActivePower;
    current?: HavellsSolarSensorPV_SCHEMACurrent;
    insulation_of_p_to_ground?: HavellsSolarSensorPV_SCHEMAInsulationOfPToGround;
    voltage?: HavellsSolarSensorPV_SCHEMAVoltage;
    voltage_sampled_by_secondary_cpu?: HavellsSolarSensorPV_SCHEMAVoltageSampledBySecondaryCpu;
}
