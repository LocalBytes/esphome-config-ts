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
import type { Sensor_SENSOR_SCHEMA } from "./sensor.js";
import type { CoreCOMPONENT_SCHEMA } from "./esphome.js";

export class Atm90e26Sensor extends EsphomeComponent<Atm90e26SensorConfig> {
    componentName: string = "atm90e26.sensor";
}

export interface Atm90e26SensorConfigCurrent extends Sensor_SENSOR_SCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface Atm90e26SensorConfigForwardActiveEnergy extends Sensor_SENSOR_SCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface Atm90e26SensorConfigFrequency extends Sensor_SENSOR_SCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    icon?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export type Atm90e26SensorConfigGainPga = '1X' | '4X' | '8X' | '16X' | '24X';
export type Atm90e26SensorConfigLineFrequency = '50HZ' | '60HZ';

export interface Atm90e26SensorConfigPower extends Sensor_SENSOR_SCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface Atm90e26SensorConfigPowerFactor extends Sensor_SENSOR_SCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
}

export interface Atm90e26SensorConfigReactivePower extends Sensor_SENSOR_SCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    icon?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface Atm90e26SensorConfigReverseActiveEnergy extends Sensor_SENSOR_SCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export type Atm90e26SensorConfigSpiMode = '0' | '1' | '2' | '3' | 'MODE0' | 'MODE1' | 'MODE2' | 'MODE3';

export interface Atm90e26SensorConfigVoltage extends Sensor_SENSOR_SCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface Atm90e26SensorConfig extends CoreCOMPONENT_SCHEMA {
    cs_pin: Pin;
    current?: Atm90e26SensorConfigCurrent;
    data_rate?: any;
    forward_active_energy?: Atm90e26SensorConfigForwardActiveEnergy;
    frequency?: Atm90e26SensorConfigFrequency;
    gain_ct?: number;
    gain_metering?: number;
    gain_pga?: Atm90e26SensorConfigGainPga;
    gain_voltage?: number;
    id?: ID;
    line_frequency: Atm90e26SensorConfigLineFrequency;
    meter_constant: string;
    pl_const?: number;
    power?: Atm90e26SensorConfigPower;
    power_factor?: Atm90e26SensorConfigPowerFactor;
    reactive_power?: Atm90e26SensorConfigReactivePower;
    release_device?: boolean;
    reverse_active_energy?: Atm90e26SensorConfigReverseActiveEnergy;
    spi_id?: ID;
    spi_mode?: Atm90e26SensorConfigSpiMode;
    update_interval?: any;
    voltage?: Atm90e26SensorConfigVoltage;
}
