/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: ade7953.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/ade7953
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes)
 **/
import { type ID, type Pin, BaseComponent } from "@/lib/base.js";
import type { SensorSENSOR_SCHEMA } from "./sensor.js";
import type { CoreCOMPONENT_SCHEMA } from "./esphome.js";

export class Ade7953Sensor extends BaseComponent<Ade7953SensorConfig> {
    componentName: string = "ade7953.sensor";
}

export interface Ade7953SensorConfigVoltage extends SensorSENSOR_SCHEMA {
    unit_of_measurement?: any;
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
}

export interface Ade7953SensorConfigCurrentA extends SensorSENSOR_SCHEMA {
    unit_of_measurement?: any;
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
}

export interface Ade7953SensorConfigCurrentB extends SensorSENSOR_SCHEMA {
    unit_of_measurement?: any;
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
}

export interface Ade7953SensorConfigActivePowerA extends SensorSENSOR_SCHEMA {
    unit_of_measurement?: any;
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
}

export interface Ade7953SensorConfigActivePowerB extends SensorSENSOR_SCHEMA {
    unit_of_measurement?: any;
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
}

export interface Ade7953SensorConfig extends CoreCOMPONENT_SCHEMA {
    id?: ID;
    irq_pin?: Pin;
    voltage?: Ade7953SensorConfigVoltage;
    current_a?: Ade7953SensorConfigCurrentA;
    current_b?: Ade7953SensorConfigCurrentB;
    active_power_a?: Ade7953SensorConfigActivePowerA;
    active_power_b?: Ade7953SensorConfigActivePowerB;
    update_interval?: any;
    i2c_id?: ID;
    address?: any;
}
