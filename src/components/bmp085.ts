/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: bmp085.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/bmp085
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes)
 **/
import { type ID, type Pin, BaseComponent } from "@/lib/base.js";
import type { SensorSENSOR_SCHEMA } from "./sensor.js";
import type { CoreCOMPONENT_SCHEMA } from "./esphome.js";

export class Bmp085Sensor extends BaseComponent<Bmp085SensorConfig> {
    componentName: string = "bmp085.sensor";
}

export interface Bmp085SensorConfigTemperature extends SensorSENSOR_SCHEMA {
    unit_of_measurement?: any;
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
}

export interface Bmp085SensorConfigPressure extends SensorSENSOR_SCHEMA {
    unit_of_measurement?: any;
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
}

export interface Bmp085SensorConfig extends CoreCOMPONENT_SCHEMA {
    id?: ID;
    temperature?: Bmp085SensorConfigTemperature;
    pressure?: Bmp085SensorConfigPressure;
    update_interval?: any;
    i2c_id?: ID;
    address?: any;
}
