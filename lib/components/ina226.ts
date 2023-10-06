/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: ina226.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/ina226
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes) 2023
 **/
import { ID, Pin, BaseComponent } from "../base.js";
import { SensorSENSOR_SCHEMA } from "./sensor.js";
import { CoreCOMPONENT_SCHEMA } from "./esphome.js";

export class Ina226Sensor extends BaseComponent<Ina226SensorConfig> {
    componentName: string = "ina226.sensor";
}

export interface Ina226SensorConfig extends CoreCOMPONENT_SCHEMA {
    id?: ID;
    bus_voltage?: Ina226SensorConfigBusVoltage;
    shunt_voltage?: Ina226SensorConfigShuntVoltage;
    current?: Ina226SensorConfigCurrent;
    power?: Ina226SensorConfigPower;
    shunt_resistance?: any;
    max_current?: any;
    update_interval?: any;
    i2c_id?: ID;
    address?: any;
}

export interface Ina226SensorConfigBusVoltage extends SensorSENSOR_SCHEMA {
    unit_of_measurement?: any;
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
}

export interface Ina226SensorConfigShuntVoltage extends SensorSENSOR_SCHEMA {
    unit_of_measurement?: any;
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
}

export interface Ina226SensorConfigCurrent extends SensorSENSOR_SCHEMA {
    unit_of_measurement?: any;
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
}

export interface Ina226SensorConfigPower extends SensorSENSOR_SCHEMA {
    unit_of_measurement?: any;
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
}
