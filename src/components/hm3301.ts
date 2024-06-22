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
import type { SensorSENSOR_SCHEMA } from "./sensor.js";
import type { CoreCOMPONENT_SCHEMA } from "./esphome.js";

export class Hm3301Sensor extends EsphomeComponent<Hm3301SensorConfig> {
    componentName: string = "hm3301.sensor";
}

export interface Hm3301SensorConfigPm_1_0 extends SensorSENSOR_SCHEMA {
    unit_of_measurement?: any;
    icon?: any;
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
}

export interface Hm3301SensorConfigPm_2_5 extends SensorSENSOR_SCHEMA {
    unit_of_measurement?: any;
    icon?: any;
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
}

export interface Hm3301SensorConfigPm_10_0 extends SensorSENSOR_SCHEMA {
    unit_of_measurement?: any;
    icon?: any;
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
}

export type Hm3301SensorConfigAqiCalculationType = 'CAQI' | 'AQI';

export interface Hm3301SensorConfigAqi extends SensorSENSOR_SCHEMA {
    unit_of_measurement?: any;
    icon?: any;
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
    calculation_type: Hm3301SensorConfigAqiCalculationType;
}

export interface Hm3301SensorConfig extends CoreCOMPONENT_SCHEMA {
    id?: ID;
    pm_1_0?: Hm3301SensorConfigPm_1_0;
    pm_2_5?: Hm3301SensorConfigPm_2_5;
    pm_10_0?: Hm3301SensorConfigPm_10_0;
    aqi?: Hm3301SensorConfigAqi;
    update_interval?: any;
    i2c_id?: ID;
    address?: any;
}
