/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 *
 * Schema: max9611.json
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/max9611
 *
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes)
 **/
import { type ID, type Pin, EsphomeComponent } from "@/lib/base.js";
import type { SensorSENSOR_SCHEMA } from "./sensor.js";
import type { CoreCOMPONENT_SCHEMA } from "./esphome.js";

export class Max9611Sensor extends EsphomeComponent<Max9611SensorConfig> {
    componentName: string = "max9611.sensor";
}

export type Max9611SensorConfigGain = '8X' | '4X' | '1X';

export interface Max9611SensorConfigVoltage extends SensorSENSOR_SCHEMA {
    unit_of_measurement?: any;
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
}

export interface Max9611SensorConfigCurrent extends SensorSENSOR_SCHEMA {
    unit_of_measurement?: any;
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
}

export interface Max9611SensorConfigPower extends SensorSENSOR_SCHEMA {
    unit_of_measurement?: any;
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
}

export interface Max9611SensorConfigTemperature extends SensorSENSOR_SCHEMA {
    unit_of_measurement?: any;
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
}

export interface Max9611SensorConfig extends CoreCOMPONENT_SCHEMA {
    id?: ID;
    shunt_resistance: string;
    gain: Max9611SensorConfigGain;
    voltage?: Max9611SensorConfigVoltage;
    current?: Max9611SensorConfigCurrent;
    power?: Max9611SensorConfigPower;
    temperature?: Max9611SensorConfigTemperature;
    update_interval?: any;
    i2c_id?: ID;
    address?: any;
}
