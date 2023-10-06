/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: ina260.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/ina260
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes) 2023
 **/
import { ID, Pin, BaseComponent } from "../base.js";
import { SensorSENSOR_SCHEMA } from "./sensor.js";
import { CoreCOMPONENT_SCHEMA } from "./esphome.js";

export class Ina260Sensor extends BaseComponent<Ina260SensorConfig> {
    componentName: string = "ina260.sensor";
}

export interface Ina260SensorConfig extends CoreCOMPONENT_SCHEMA {
    id?: ID;
    bus_voltage?: Ina260SensorConfigBusVoltage;
    current?: Ina260SensorConfigCurrent;
    power?: Ina260SensorConfigPower;
    update_interval?: any;
    i2c_id?: ID;
    address?: any;
}

export interface Ina260SensorConfigBusVoltage extends SensorSENSOR_SCHEMA {
    unit_of_measurement?: any;
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
}

export interface Ina260SensorConfigCurrent extends SensorSENSOR_SCHEMA {
    unit_of_measurement?: any;
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
}

export interface Ina260SensorConfigPower extends SensorSENSOR_SCHEMA {
    unit_of_measurement?: any;
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
}
