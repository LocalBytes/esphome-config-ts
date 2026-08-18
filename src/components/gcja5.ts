/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: gcja5.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/gcja5
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes)
 **/
import { type ID, type Pin, EsphomeComponent } from "@/lib/base.js";
import type { Sensor_SENSOR_SCHEMA } from "./sensor.js";
import type { CoreCOMPONENT_SCHEMA } from "./esphome.js";

export class Gcja5Sensor extends EsphomeComponent<Gcja5SensorConfig> {
    componentName: string = "gcja5.sensor";
}

export interface Gcja5SensorConfigPm_10_0 extends Sensor_SENSOR_SCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    icon?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface Gcja5SensorConfigPm_1_0 extends Sensor_SENSOR_SCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    icon?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface Gcja5SensorConfigPm_2_5 extends Sensor_SENSOR_SCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    icon?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface Gcja5SensorConfigPmc_0_3 extends Sensor_SENSOR_SCHEMA {
    accuracy_decimals?: any;
    icon?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface Gcja5SensorConfigPmc_0_5 extends Sensor_SENSOR_SCHEMA {
    accuracy_decimals?: any;
    icon?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface Gcja5SensorConfigPmc_10_0 extends Sensor_SENSOR_SCHEMA {
    accuracy_decimals?: any;
    icon?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface Gcja5SensorConfigPmc_1_0 extends Sensor_SENSOR_SCHEMA {
    accuracy_decimals?: any;
    icon?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface Gcja5SensorConfigPmc_2_5 extends Sensor_SENSOR_SCHEMA {
    accuracy_decimals?: any;
    icon?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface Gcja5SensorConfigPmc_5_0 extends Sensor_SENSOR_SCHEMA {
    accuracy_decimals?: any;
    icon?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface Gcja5SensorConfig extends CoreCOMPONENT_SCHEMA {
    id?: ID;
    pm_10_0?: Gcja5SensorConfigPm_10_0;
    pm_1_0?: Gcja5SensorConfigPm_1_0;
    pm_2_5?: Gcja5SensorConfigPm_2_5;
    pmc_0_3?: Gcja5SensorConfigPmc_0_3;
    pmc_0_5?: Gcja5SensorConfigPmc_0_5;
    pmc_10_0?: Gcja5SensorConfigPmc_10_0;
    pmc_1_0?: Gcja5SensorConfigPmc_1_0;
    pmc_2_5?: Gcja5SensorConfigPmc_2_5;
    pmc_5_0?: Gcja5SensorConfigPmc_5_0;
    uart_id?: ID;
}
