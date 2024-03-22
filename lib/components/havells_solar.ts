/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: havells_solar.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/havells_solar
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes) 2023
 **/
import type { ID, Pin } from "../base.js";
import { BaseComponent } from "../base.js";
import type { SensorSENSOR_SCHEMA } from "./sensor.js";
import type { CoreCOMPONENT_SCHEMA } from "./esphome.js";

export class HavellsSolarSensor extends BaseComponent<HavellsSolarSensorConfig> {
    componentName: string = "havells_solar.sensor";
}

export interface HavellsSolarSensorPHASE_SCHEMA {
    voltage?: HavellsSolarSensorPHASE_SCHEMAVoltage;
    current?: HavellsSolarSensorPHASE_SCHEMACurrent;
}

export interface HavellsSolarSensorPHASE_SCHEMAVoltage extends SensorSENSOR_SCHEMA {
    unit_of_measurement?: any;
    accuracy_decimals?: any;
    device_class?: any;
}

export interface HavellsSolarSensorPHASE_SCHEMACurrent extends SensorSENSOR_SCHEMA {
    unit_of_measurement?: any;
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
}

export interface HavellsSolarSensorPV_SCHEMA {
    voltage?: HavellsSolarSensorPV_SCHEMAVoltage;
    current?: HavellsSolarSensorPV_SCHEMACurrent;
    active_power?: HavellsSolarSensorPV_SCHEMAActivePower;
    voltage_sampled_by_secondary_cpu?: HavellsSolarSensorPV_SCHEMAVoltageSampledBySecondaryCpu;
    insulation_of_p_to_ground?: HavellsSolarSensorPV_SCHEMAInsulationOfPToGround;
}

export interface HavellsSolarSensorPV_SCHEMAVoltage extends SensorSENSOR_SCHEMA {
    unit_of_measurement?: any;
    accuracy_decimals?: any;
    device_class?: any;
}

export interface HavellsSolarSensorPV_SCHEMACurrent extends SensorSENSOR_SCHEMA {
    unit_of_measurement?: any;
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
}

export interface HavellsSolarSensorPV_SCHEMAActivePower extends SensorSENSOR_SCHEMA {
    unit_of_measurement?: any;
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
}

export interface HavellsSolarSensorPV_SCHEMAVoltageSampledBySecondaryCpu extends SensorSENSOR_SCHEMA {
    unit_of_measurement?: any;
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
}

export interface HavellsSolarSensorPV_SCHEMAInsulationOfPToGround extends SensorSENSOR_SCHEMA {
    unit_of_measurement?: any;
    accuracy_decimals?: any;
    state_class?: any;
}

export interface HavellsSolarSensorConfig extends CoreCOMPONENT_SCHEMA {
    id?: ID;
    phase_a?: HavellsSolarSensorConfigPhaseA;
    phase_b?: HavellsSolarSensorConfigPhaseB;
    phase_c?: HavellsSolarSensorConfigPhaseC;
    pv1?: HavellsSolarSensorConfigPv1;
    pv2?: HavellsSolarSensorConfigPv2;
    frequency?: HavellsSolarSensorConfigFrequency;
    active_power?: HavellsSolarSensorConfigActivePower;
    reactive_power?: HavellsSolarSensorConfigReactivePower;
    energy_production_day?: HavellsSolarSensorConfigEnergyProductionDay;
    total_energy_production?: HavellsSolarSensorConfigTotalEnergyProduction;
    total_generation_time?: HavellsSolarSensorConfigTotalGenerationTime;
    today_generation_time?: HavellsSolarSensorConfigTodayGenerationTime;
    inverter_module_temp?: HavellsSolarSensorConfigInverterModuleTemp;
    inverter_inner_temp?: HavellsSolarSensorConfigInverterInnerTemp;
    inverter_bus_voltage?: HavellsSolarSensorConfigInverterBusVoltage;
    insulation_of_pv_n_to_ground?: HavellsSolarSensorConfigInsulationOfPvNToGround;
    gfci_value?: HavellsSolarSensorConfigGfciValue;
    dci_of_r?: HavellsSolarSensorConfigDciOfR;
    dci_of_s?: HavellsSolarSensorConfigDciOfS;
    dci_of_t?: HavellsSolarSensorConfigDciOfT;
    update_interval?: any;
    modbus_id?: ID;
    address?: any;
}

export interface HavellsSolarSensorConfigPhaseA extends HavellsSolarSensorPHASE_SCHEMA {
}

export interface HavellsSolarSensorConfigPhaseB extends HavellsSolarSensorPHASE_SCHEMA {
}

export interface HavellsSolarSensorConfigPhaseC extends HavellsSolarSensorPHASE_SCHEMA {
}

export interface HavellsSolarSensorConfigPv1 extends HavellsSolarSensorPV_SCHEMA {
}

export interface HavellsSolarSensorConfigPv2 extends HavellsSolarSensorPV_SCHEMA {
}

export interface HavellsSolarSensorConfigFrequency extends SensorSENSOR_SCHEMA {
    unit_of_measurement?: any;
    icon?: any;
    accuracy_decimals?: any;
    state_class?: any;
}

export interface HavellsSolarSensorConfigActivePower extends SensorSENSOR_SCHEMA {
    unit_of_measurement?: any;
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
}

export interface HavellsSolarSensorConfigReactivePower extends SensorSENSOR_SCHEMA {
    unit_of_measurement?: any;
    accuracy_decimals?: any;
    state_class?: any;
}

export interface HavellsSolarSensorConfigEnergyProductionDay extends SensorSENSOR_SCHEMA {
    unit_of_measurement?: any;
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
}

export interface HavellsSolarSensorConfigTotalEnergyProduction extends SensorSENSOR_SCHEMA {
    unit_of_measurement?: any;
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
}

export interface HavellsSolarSensorConfigTotalGenerationTime extends SensorSENSOR_SCHEMA {
    unit_of_measurement?: any;
    accuracy_decimals?: any;
    state_class?: any;
}

export interface HavellsSolarSensorConfigTodayGenerationTime extends SensorSENSOR_SCHEMA {
    unit_of_measurement?: any;
    accuracy_decimals?: any;
    state_class?: any;
}

export interface HavellsSolarSensorConfigInverterModuleTemp extends SensorSENSOR_SCHEMA {
    unit_of_measurement?: any;
    accuracy_decimals?: any;
    state_class?: any;
}

export interface HavellsSolarSensorConfigInverterInnerTemp extends SensorSENSOR_SCHEMA {
    unit_of_measurement?: any;
    accuracy_decimals?: any;
    state_class?: any;
}

export interface HavellsSolarSensorConfigInverterBusVoltage extends SensorSENSOR_SCHEMA {
    unit_of_measurement?: any;
    accuracy_decimals?: any;
    state_class?: any;
}

export interface HavellsSolarSensorConfigInsulationOfPvNToGround extends SensorSENSOR_SCHEMA {
    unit_of_measurement?: any;
    accuracy_decimals?: any;
    state_class?: any;
}

export interface HavellsSolarSensorConfigGfciValue extends SensorSENSOR_SCHEMA {
    unit_of_measurement?: any;
    accuracy_decimals?: any;
    state_class?: any;
}

export interface HavellsSolarSensorConfigDciOfR extends SensorSENSOR_SCHEMA {
    unit_of_measurement?: any;
    accuracy_decimals?: any;
    state_class?: any;
}

export interface HavellsSolarSensorConfigDciOfS extends SensorSENSOR_SCHEMA {
    unit_of_measurement?: any;
    accuracy_decimals?: any;
    state_class?: any;
}

export interface HavellsSolarSensorConfigDciOfT extends SensorSENSOR_SCHEMA {
    unit_of_measurement?: any;
    accuracy_decimals?: any;
    state_class?: any;
}
