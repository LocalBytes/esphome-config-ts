/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: ms5611.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/ms5611
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes) 2023
 **/
import type { ID, Pin } from "../base.js";
import { BaseComponent } from "../base.js";
import type { SensorSENSOR_SCHEMA } from "./sensor.js";
import type { CoreCOMPONENT_SCHEMA } from "./esphome.js";

export class Ms5611Sensor extends BaseComponent<Ms5611SensorConfig> {
    componentName: string = "ms5611.sensor";
}

export interface Ms5611SensorConfig extends CoreCOMPONENT_SCHEMA {
    id?: ID;
    temperature: Ms5611SensorConfigTemperature;
    pressure: Ms5611SensorConfigPressure;
    update_interval?: any;
    i2c_id?: ID;
    address?: any;
}

export interface Ms5611SensorConfigTemperature extends SensorSENSOR_SCHEMA {
    unit_of_measurement?: any;
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
}

export interface Ms5611SensorConfigPressure extends SensorSENSOR_SCHEMA {
    unit_of_measurement?: any;
    icon?: any;
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
}
