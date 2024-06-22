/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 *
 * Schema: atm90e26.json
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/atm90e26
 *
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes)
 **/
import { type ID, type Pin, EsphomeComponent } from "@/lib/base.js";
import type { SensorSENSOR_SCHEMA } from "./sensor.js";
import type { CoreCOMPONENT_SCHEMA } from "./esphome.js";

export class Atm90e26Sensor extends EsphomeComponent<Atm90e26SensorConfig> {
    componentName: string = "atm90e26.sensor";
}

export interface Atm90e26SensorConfigVoltage extends SensorSENSOR_SCHEMA {
    unit_of_measurement?: any;
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
}

export interface Atm90e26SensorConfigCurrent extends SensorSENSOR_SCHEMA {
    unit_of_measurement?: any;
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
}

export interface Atm90e26SensorConfigPower extends SensorSENSOR_SCHEMA {
    unit_of_measurement?: any;
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
}

export interface Atm90e26SensorConfigReactivePower extends SensorSENSOR_SCHEMA {
    unit_of_measurement?: any;
    icon?: any;
    accuracy_decimals?: any;
    state_class?: any;
}

export interface Atm90e26SensorConfigPowerFactor extends SensorSENSOR_SCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
}

export interface Atm90e26SensorConfigForwardActiveEnergy extends SensorSENSOR_SCHEMA {
    unit_of_measurement?: any;
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
}

export interface Atm90e26SensorConfigReverseActiveEnergy extends SensorSENSOR_SCHEMA {
    unit_of_measurement?: any;
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
}

export interface Atm90e26SensorConfigFrequency extends SensorSENSOR_SCHEMA {
    unit_of_measurement?: any;
    icon?: any;
    accuracy_decimals?: any;
    state_class?: any;
}

export type Atm90e26SensorConfigLineFrequency = '50HZ' | '60HZ';
export type Atm90e26SensorConfigGainPga = '1X' | '4X' | '8X' | '16X' | '24X';

export interface Atm90e26SensorConfig extends CoreCOMPONENT_SCHEMA {
    id?: ID;
    voltage?: Atm90e26SensorConfigVoltage;
    current?: Atm90e26SensorConfigCurrent;
    power?: Atm90e26SensorConfigPower;
    reactive_power?: Atm90e26SensorConfigReactivePower;
    power_factor?: Atm90e26SensorConfigPowerFactor;
    forward_active_energy?: Atm90e26SensorConfigForwardActiveEnergy;
    reverse_active_energy?: Atm90e26SensorConfigReverseActiveEnergy;
    frequency?: Atm90e26SensorConfigFrequency;
    line_frequency: Atm90e26SensorConfigLineFrequency;
    meter_constant: string;
    pl_const?: number;
    gain_metering?: number;
    gain_voltage?: number;
    gain_ct?: number;
    gain_pga?: Atm90e26SensorConfigGainPga;
    update_interval?: any;
    spi_id?: ID;
    cs_pin: Pin;
}
