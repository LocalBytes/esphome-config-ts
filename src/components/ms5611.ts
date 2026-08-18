/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: ms5611.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/ms5611
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes)
 **/
import { type ID, type Pin, EsphomeComponent } from "@/lib/base.js";
import type { SensorSENSORSCHEMA } from "./sensor.js";
import type { CoreCOMPONENTSCHEMA } from "./esphome.js";

export class Ms5611Sensor extends EsphomeComponent<Ms5611SensorConfig> {
    componentName: string = "ms5611.sensor";
}

export interface Ms5611SensorConfigPressure extends SensorSENSORSCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    icon?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface Ms5611SensorConfigTemperature extends SensorSENSORSCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface Ms5611SensorConfig extends CoreCOMPONENTSCHEMA {
    address?: any;
    i2c_id?: ID;
    id?: ID;
    pressure?: Ms5611SensorConfigPressure;
    temperature?: Ms5611SensorConfigTemperature;
    update_interval?: any;
}
