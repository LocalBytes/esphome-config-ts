/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: hdc1080.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/hdc1080
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes)
 **/
import { type ID, type Pin, EsphomeComponent } from "@/lib/base.js";
import type { SensorSENSOR_SCHEMA } from "./sensor.js";
import type { CoreCOMPONENT_SCHEMA } from "./esphome.js";

export class Hdc1080Sensor extends EsphomeComponent<Hdc1080SensorConfig> {
    componentName: string = "hdc1080.sensor";
}

export interface Hdc1080SensorConfigTemperature extends SensorSENSOR_SCHEMA {
    unit_of_measurement?: any;
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
}

export interface Hdc1080SensorConfigHumidity extends SensorSENSOR_SCHEMA {
    unit_of_measurement?: any;
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
}

export interface Hdc1080SensorConfig extends CoreCOMPONENT_SCHEMA {
    id?: ID;
    temperature?: Hdc1080SensorConfigTemperature;
    humidity?: Hdc1080SensorConfigHumidity;
    update_interval?: any;
    i2c_id?: ID;
    address?: any;
}
