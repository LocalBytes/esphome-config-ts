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
import type { SensorSENSORSCHEMA } from "./sensor.js";
import type { CoreCOMPONENTSCHEMA } from "./esphome.js";

export class Pm2005Sensor extends EsphomeComponent<Pm2005SensorConfig> {
    componentName: string = "pm2005.sensor";
}

export interface Pm2005SensorConfigPm100 extends SensorSENSORSCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    icon?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface Pm2005SensorConfigPm10 extends SensorSENSORSCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    icon?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface Pm2005SensorConfigPm25 extends SensorSENSORSCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    icon?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export type Pm2005SensorConfigType = 'PM2005' | 'PM2105';

export interface Pm2005SensorConfig extends CoreCOMPONENTSCHEMA {
    address?: any;
    i2c_id?: ID;
    id?: ID;
    pm_10_0?: Pm2005SensorConfigPm100;
    pm_1_0?: Pm2005SensorConfigPm10;
    pm_2_5?: Pm2005SensorConfigPm25;
    type?: Pm2005SensorConfigType;
    update_interval?: any;
}
