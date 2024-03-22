/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: ina3221.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/ina3221
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes) 2023
 **/
import type { ID, Pin } from "../base.js";
import { BaseComponent } from "../base.js";
import type { SensorSENSOR_SCHEMA } from "./sensor.js";
import type { CoreCOMPONENT_SCHEMA } from "./esphome.js";

export class Ina3221Sensor extends BaseComponent<Ina3221SensorConfig> {
    componentName: string = "ina3221.sensor";
}

export interface Ina3221SensorINA3221_CHANNEL_SCHEMA {
    bus_voltage?: Ina3221SensorINA3221_CHANNEL_SCHEMABusVoltage;
    shunt_voltage?: Ina3221SensorINA3221_CHANNEL_SCHEMAShuntVoltage;
    current?: Ina3221SensorINA3221_CHANNEL_SCHEMACurrent;
    power?: Ina3221SensorINA3221_CHANNEL_SCHEMAPower;
    shunt_resistance?: any;
}

export interface Ina3221SensorINA3221_CHANNEL_SCHEMABusVoltage extends SensorSENSOR_SCHEMA {
    unit_of_measurement?: any;
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
}

export interface Ina3221SensorINA3221_CHANNEL_SCHEMAShuntVoltage extends SensorSENSOR_SCHEMA {
    unit_of_measurement?: any;
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
}

export interface Ina3221SensorINA3221_CHANNEL_SCHEMACurrent extends SensorSENSOR_SCHEMA {
    unit_of_measurement?: any;
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
}

export interface Ina3221SensorINA3221_CHANNEL_SCHEMAPower extends SensorSENSOR_SCHEMA {
    unit_of_measurement?: any;
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
}

export interface Ina3221SensorConfig extends CoreCOMPONENT_SCHEMA {
    id?: ID;
    channel_1?: Ina3221SensorConfigChannel_1;
    channel_2?: Ina3221SensorConfigChannel_2;
    channel_3?: Ina3221SensorConfigChannel_3;
    update_interval?: any;
    i2c_id?: ID;
    address?: any;
}

export interface Ina3221SensorConfigChannel_1 extends Ina3221SensorINA3221_CHANNEL_SCHEMA {
}

export interface Ina3221SensorConfigChannel_2 extends Ina3221SensorINA3221_CHANNEL_SCHEMA {
}

export interface Ina3221SensorConfigChannel_3 extends Ina3221SensorINA3221_CHANNEL_SCHEMA {
}
