/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: cse7766.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/cse7766
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes)
 **/
import { type ID, type Pin, EsphomeComponent } from "@/lib/base.js";
import type { Sensor_SENSOR_SCHEMA } from "./sensor.js";
import type { CoreCOMPONENT_SCHEMA } from "./esphome.js";

export class Cse7766Sensor extends EsphomeComponent<Cse7766SensorConfig> {
    componentName: string = "cse7766.sensor";
}

export interface Cse7766SensorConfigApparentPower extends Sensor_SENSOR_SCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface Cse7766SensorConfigCurrent extends Sensor_SENSOR_SCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface Cse7766SensorConfigEnergy extends Sensor_SENSOR_SCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface Cse7766SensorConfigPower extends Sensor_SENSOR_SCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface Cse7766SensorConfigPowerFactor extends Sensor_SENSOR_SCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
}

export interface Cse7766SensorConfigReactivePower extends Sensor_SENSOR_SCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface Cse7766SensorConfigVoltage extends Sensor_SENSOR_SCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface Cse7766SensorConfig extends CoreCOMPONENT_SCHEMA {
    apparent_power?: Cse7766SensorConfigApparentPower;
    current?: Cse7766SensorConfigCurrent;
    energy?: Cse7766SensorConfigEnergy;
    id?: ID;
    power?: Cse7766SensorConfigPower;
    power_factor?: Cse7766SensorConfigPowerFactor;
    reactive_power?: Cse7766SensorConfigReactivePower;
    uart_id?: ID;
    voltage?: Cse7766SensorConfigVoltage;
}
