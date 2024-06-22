/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: ee895.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/ee895
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes)
 **/
import { type ID, type Pin, EsphomeComponent } from "@/lib/base.js";
import type { SensorSENSOR_SCHEMA } from "./sensor.js";
import type { CoreCOMPONENT_SCHEMA } from "./esphome.js";

export class Ee895Sensor extends EsphomeComponent<Ee895SensorConfig> {
    componentName: string = "ee895.sensor";
}

export interface Ee895SensorConfigTemperature extends SensorSENSOR_SCHEMA {
    unit_of_measurement?: any;
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
}

export interface Ee895SensorConfigCo2 extends SensorSENSOR_SCHEMA {
    unit_of_measurement?: any;
    icon?: any;
    accuracy_decimals?: any;
    state_class?: any;
}

export interface Ee895SensorConfigPressure extends SensorSENSOR_SCHEMA {
    unit_of_measurement?: any;
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
}

export interface Ee895SensorConfig extends CoreCOMPONENT_SCHEMA {
    id?: ID;
    temperature: Ee895SensorConfigTemperature;
    co2: Ee895SensorConfigCo2;
    pressure: Ee895SensorConfigPressure;
    update_interval?: any;
    i2c_id?: ID;
    address?: any;
}
