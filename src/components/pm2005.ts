/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: pm2005.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/pm2005
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes)
 **/
import { type ID, type Pin, EsphomeComponent } from "@/lib/base.js";
import type { Sensor_SENSOR_SCHEMA } from "./sensor.js";
import type { CoreCOMPONENT_SCHEMA } from "./esphome.js";

export class Pm2005Sensor extends EsphomeComponent<Pm2005SensorConfig> {
    componentName: string = "pm2005.sensor";
}

export interface Pm2005SensorConfigPm_10_0 extends Sensor_SENSOR_SCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    icon?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface Pm2005SensorConfigPm_1_0 extends Sensor_SENSOR_SCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    icon?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface Pm2005SensorConfigPm_2_5 extends Sensor_SENSOR_SCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    icon?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export type Pm2005SensorConfigType = 'PM2005' | 'PM2105';

export interface Pm2005SensorConfig extends CoreCOMPONENT_SCHEMA {
    address?: any;
    i2c_id?: ID;
    id?: ID;
    pm_10_0?: Pm2005SensorConfigPm_10_0;
    pm_1_0?: Pm2005SensorConfigPm_1_0;
    pm_2_5?: Pm2005SensorConfigPm_2_5;
    type?: Pm2005SensorConfigType;
    update_interval?: any;
}
