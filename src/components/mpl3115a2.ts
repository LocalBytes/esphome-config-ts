/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: mpl3115a2.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/mpl3115a2
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes)
 **/
import { type ID, type Pin, EsphomeComponent } from "@/lib/base.js";
import type { Sensor_SENSOR_SCHEMA } from "./sensor.js";
import type { CoreCOMPONENT_SCHEMA } from "./esphome.js";

export class Mpl3115a2Sensor extends EsphomeComponent<Mpl3115a2SensorConfig> {
    componentName: string = "mpl3115a2.sensor";
}

export interface Mpl3115a2SensorConfigAltitude extends Sensor_SENSOR_SCHEMA {
    accuracy_decimals?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface Mpl3115a2SensorConfigPressure extends Sensor_SENSOR_SCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface Mpl3115a2SensorConfigTemperature extends Sensor_SENSOR_SCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface Mpl3115a2SensorConfig extends CoreCOMPONENT_SCHEMA {
    address?: any;
    altitude?: Mpl3115a2SensorConfigAltitude;
    i2c_id?: ID;
    id?: ID;
    pressure?: Mpl3115a2SensorConfigPressure;
    temperature?: Mpl3115a2SensorConfigTemperature;
    update_interval?: any;
}
