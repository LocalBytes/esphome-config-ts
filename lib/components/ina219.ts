/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: ina219.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/ina219
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes) 2023
 **/
import type { ID, Pin } from "../base.js";
import { BaseComponent } from "../base.js";
import type { SensorSENSOR_SCHEMA } from "./sensor.js";
import type { CoreCOMPONENT_SCHEMA } from "./esphome.js";

export class Ina219Sensor extends BaseComponent<Ina219SensorConfig> {
    componentName: string = "ina219.sensor";
}

export interface Ina219SensorConfig extends CoreCOMPONENT_SCHEMA {
    id?: ID;
    bus_voltage?: Ina219SensorConfigBusVoltage;
    shunt_voltage?: Ina219SensorConfigShuntVoltage;
    current?: Ina219SensorConfigCurrent;
    power?: Ina219SensorConfigPower;
    shunt_resistance?: any;
    max_voltage?: any;
    max_current?: any;
    update_interval?: any;
    i2c_id?: ID;
    address?: any;
}

export interface Ina219SensorConfigBusVoltage extends SensorSENSOR_SCHEMA {
    unit_of_measurement?: any;
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
}

export interface Ina219SensorConfigShuntVoltage extends SensorSENSOR_SCHEMA {
    unit_of_measurement?: any;
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
}

export interface Ina219SensorConfigCurrent extends SensorSENSOR_SCHEMA {
    unit_of_measurement?: any;
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
}

export interface Ina219SensorConfigPower extends SensorSENSOR_SCHEMA {
    unit_of_measurement?: any;
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
}
