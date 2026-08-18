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
import type { SensorSENSORSCHEMA } from "./sensor.js";
import type { CoreCOMPONENTSCHEMA } from "./esphome.js";

export class Max9611Sensor extends EsphomeComponent<Max9611SensorConfig> {
    componentName: string = "max9611.sensor";
}

export interface Max9611SensorConfigCurrent extends SensorSENSORSCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export type Max9611SensorConfigGain = '8X' | '4X' | '1X';

export interface Max9611SensorConfigPower extends SensorSENSORSCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface Max9611SensorConfigTemperature extends SensorSENSORSCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface Max9611SensorConfigVoltage extends SensorSENSORSCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface Max9611SensorConfig extends CoreCOMPONENTSCHEMA {
    address?: any;
    current?: Max9611SensorConfigCurrent;
    gain: Max9611SensorConfigGain;
    i2c_id?: ID;
    id?: ID;
    power?: Max9611SensorConfigPower;
    shunt_resistance: string;
    temperature?: Max9611SensorConfigTemperature;
    update_interval?: any;
    voltage?: Max9611SensorConfigVoltage;
}
