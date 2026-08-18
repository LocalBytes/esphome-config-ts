/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: ina260.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/ina260
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes)
 **/
import { type ID, type Pin, EsphomeComponent } from "@/lib/base.js";
import type { Sensor_SENSOR_SCHEMA } from "./sensor.js";
import type { CoreCOMPONENT_SCHEMA } from "./esphome.js";

export class Ina260Sensor extends EsphomeComponent<Ina260SensorConfig> {
    componentName: string = "ina260.sensor";
}

export interface Ina260SensorConfigBusVoltage extends Sensor_SENSOR_SCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface Ina260SensorConfigCurrent extends Sensor_SENSOR_SCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface Ina260SensorConfigPower extends Sensor_SENSOR_SCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface Ina260SensorConfig extends CoreCOMPONENT_SCHEMA {
    address?: any;
    bus_voltage?: Ina260SensorConfigBusVoltage;
    current?: Ina260SensorConfigCurrent;
    i2c_id?: ID;
    id?: ID;
    power?: Ina260SensorConfigPower;
    update_interval?: any;
}
