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
import type { CoreCOMPONENTSCHEMA } from "./esphome.js";
import type { SensorSENSORSCHEMA } from "./sensor.js";

export class Ina3221Sensor extends EsphomeComponent<Ina3221SensorConfig> {
    componentName: string = "ina3221.sensor";
}

export type Ina3221SensorConfigChannel1 = Ina3221SensorINA3221CHANNELSCHEMA;
export type Ina3221SensorConfigChannel2 = Ina3221SensorINA3221CHANNELSCHEMA;
export type Ina3221SensorConfigChannel3 = Ina3221SensorINA3221CHANNELSCHEMA;

export interface Ina3221SensorConfig extends CoreCOMPONENTSCHEMA {
    address?: any;
    channel_1?: Ina3221SensorConfigChannel1;
    channel_2?: Ina3221SensorConfigChannel2;
    channel_3?: Ina3221SensorConfigChannel3;
    i2c_id?: ID;
    id?: ID;
    update_interval?: any;
}

export interface Ina3221SensorINA3221CHANNELSCHEMABusVoltage extends SensorSENSORSCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface Ina3221SensorINA3221CHANNELSCHEMACurrent extends SensorSENSORSCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface Ina3221SensorINA3221CHANNELSCHEMAPower extends SensorSENSORSCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface Ina3221SensorINA3221CHANNELSCHEMAShuntVoltage extends SensorSENSORSCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface Ina3221SensorINA3221CHANNELSCHEMA {
    bus_voltage?: Ina3221SensorINA3221CHANNELSCHEMABusVoltage;
    current?: Ina3221SensorINA3221CHANNELSCHEMACurrent;
    power?: Ina3221SensorINA3221CHANNELSCHEMAPower;
    shunt_resistance?: any;
    shunt_voltage?: Ina3221SensorINA3221CHANNELSCHEMAShuntVoltage;
}
