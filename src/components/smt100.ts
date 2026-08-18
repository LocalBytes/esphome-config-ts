/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: smt100.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/smt100
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes)
 **/
import { type ID, type Pin, EsphomeComponent } from "@/lib/base.js";
import type { Sensor_SENSOR_SCHEMA } from "./sensor.js";
import type { CoreCOMPONENT_SCHEMA } from "./esphome.js";

export class Smt100Sensor extends EsphomeComponent<Smt100SensorConfig> {
    componentName: string = "smt100.sensor";
}

export interface Smt100SensorConfigCounts extends Sensor_SENSOR_SCHEMA {
    accuracy_decimals?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface Smt100SensorConfigMoisture extends Sensor_SENSOR_SCHEMA {
    accuracy_decimals?: any;
    icon?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface Smt100SensorConfigPermittivity extends Sensor_SENSOR_SCHEMA {
    accuracy_decimals?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface Smt100SensorConfigTemperature extends Sensor_SENSOR_SCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface Smt100SensorConfigVoltage extends Sensor_SENSOR_SCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface Smt100SensorConfig extends CoreCOMPONENT_SCHEMA {
    counts?: Smt100SensorConfigCounts;
    id?: ID;
    moisture?: Smt100SensorConfigMoisture;
    permittivity?: Smt100SensorConfigPermittivity;
    temperature?: Smt100SensorConfigTemperature;
    uart_id?: ID;
    update_interval?: any;
    voltage?: Smt100SensorConfigVoltage;
}
