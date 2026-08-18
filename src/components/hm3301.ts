/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: hm3301.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/hm3301
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes)
 **/
import { type ID, type Pin, EsphomeComponent } from "@/lib/base.js";
import type { Sensor_SENSOR_SCHEMA } from "./sensor.js";
import type { CoreCOMPONENT_SCHEMA } from "./esphome.js";

export class Hm3301Sensor extends EsphomeComponent<Hm3301SensorConfig> {
    componentName: string = "hm3301.sensor";
}

export type Hm3301SensorConfigAqiCalculationType = 'CAQI' | 'AQI';

export interface Hm3301SensorConfigAqi extends Sensor_SENSOR_SCHEMA {
    accuracy_decimals?: any;
    calculation_type: Hm3301SensorConfigAqiCalculationType;
    device_class?: any;
    icon?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface Hm3301SensorConfigPm_10_0 extends Sensor_SENSOR_SCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    icon?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface Hm3301SensorConfigPm_1_0 extends Sensor_SENSOR_SCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    icon?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface Hm3301SensorConfigPm_2_5 extends Sensor_SENSOR_SCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    icon?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface Hm3301SensorConfig extends CoreCOMPONENT_SCHEMA {
    address?: any;
    aqi?: Hm3301SensorConfigAqi;
    i2c_id?: ID;
    id?: ID;
    pm_10_0?: Hm3301SensorConfigPm_10_0;
    pm_1_0?: Hm3301SensorConfigPm_1_0;
    pm_2_5?: Hm3301SensorConfigPm_2_5;
    update_interval?: any;
}
