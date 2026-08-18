/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: ina3221.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/ina3221
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes)
 **/
import { type ID, type Pin, EsphomeComponent } from "@/lib/base.js";
import type { CoreCOMPONENT_SCHEMA } from "./esphome.js";
import type { Sensor_SENSOR_SCHEMA } from "./sensor.js";

export class Ina3221Sensor extends EsphomeComponent<Ina3221SensorConfig> {
    componentName: string = "ina3221.sensor";
}

export type Ina3221SensorConfigChannel_1 = Ina3221SensorINA3221_CHANNEL_SCHEMA;
export type Ina3221SensorConfigChannel_2 = Ina3221SensorINA3221_CHANNEL_SCHEMA;
export type Ina3221SensorConfigChannel_3 = Ina3221SensorINA3221_CHANNEL_SCHEMA;

export interface Ina3221SensorConfig extends CoreCOMPONENT_SCHEMA {
    address?: any;
    channel_1?: Ina3221SensorConfigChannel_1;
    channel_2?: Ina3221SensorConfigChannel_2;
    channel_3?: Ina3221SensorConfigChannel_3;
    i2c_id?: ID;
    id?: ID;
    update_interval?: any;
}

export interface Ina3221SensorINA3221_CHANNEL_SCHEMABusVoltage extends Sensor_SENSOR_SCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface Ina3221SensorINA3221_CHANNEL_SCHEMACurrent extends Sensor_SENSOR_SCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface Ina3221SensorINA3221_CHANNEL_SCHEMAPower extends Sensor_SENSOR_SCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface Ina3221SensorINA3221_CHANNEL_SCHEMAShuntVoltage extends Sensor_SENSOR_SCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface Ina3221SensorINA3221_CHANNEL_SCHEMA {
    bus_voltage?: Ina3221SensorINA3221_CHANNEL_SCHEMABusVoltage;
    current?: Ina3221SensorINA3221_CHANNEL_SCHEMACurrent;
    power?: Ina3221SensorINA3221_CHANNEL_SCHEMAPower;
    shunt_resistance?: any;
    shunt_voltage?: Ina3221SensorINA3221_CHANNEL_SCHEMAShuntVoltage;
}
