/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: gcja5.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/gcja5
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes) 2023
 **/
import type { ID, Pin } from "../base.js";
import { BaseComponent } from "../base.js";
import type { SensorSENSOR_SCHEMA } from "./sensor.js";

export class Gcja5Sensor extends BaseComponent<Gcja5SensorConfig> {
    componentName: string = "gcja5.sensor";
}

export interface Gcja5SensorConfig {
    id?: ID;
    pm_1_0?: Gcja5SensorConfigPm_1_0;
    pm_2_5?: Gcja5SensorConfigPm_2_5;
    pm_10_0?: Gcja5SensorConfigPm_10_0;
    pmc_0_3?: Gcja5SensorConfigPmc_0_3;
    pmc_0_5?: Gcja5SensorConfigPmc_0_5;
    pmc_1_0?: Gcja5SensorConfigPmc_1_0;
    pmc_2_5?: Gcja5SensorConfigPmc_2_5;
    pmc_5_0?: Gcja5SensorConfigPmc_5_0;
    pmc_10_0?: Gcja5SensorConfigPmc_10_0;
    uart_id?: ID;
}

export interface Gcja5SensorConfigPm_1_0 extends SensorSENSOR_SCHEMA {
    unit_of_measurement?: any;
    icon?: any;
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
}

export interface Gcja5SensorConfigPm_2_5 extends SensorSENSOR_SCHEMA {
    unit_of_measurement?: any;
    icon?: any;
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
}

export interface Gcja5SensorConfigPm_10_0 extends SensorSENSOR_SCHEMA {
    unit_of_measurement?: any;
    icon?: any;
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
}

export interface Gcja5SensorConfigPmc_0_3 extends SensorSENSOR_SCHEMA {
    unit_of_measurement?: any;
    icon?: any;
    accuracy_decimals?: any;
    state_class?: any;
}

export interface Gcja5SensorConfigPmc_0_5 extends SensorSENSOR_SCHEMA {
    unit_of_measurement?: any;
    icon?: any;
    accuracy_decimals?: any;
    state_class?: any;
}

export interface Gcja5SensorConfigPmc_1_0 extends SensorSENSOR_SCHEMA {
    unit_of_measurement?: any;
    icon?: any;
    accuracy_decimals?: any;
    state_class?: any;
}

export interface Gcja5SensorConfigPmc_2_5 extends SensorSENSOR_SCHEMA {
    unit_of_measurement?: any;
    icon?: any;
    accuracy_decimals?: any;
    state_class?: any;
}

export interface Gcja5SensorConfigPmc_5_0 extends SensorSENSOR_SCHEMA {
    unit_of_measurement?: any;
    icon?: any;
    accuracy_decimals?: any;
    state_class?: any;
}

export interface Gcja5SensorConfigPmc_10_0 extends SensorSENSOR_SCHEMA {
    unit_of_measurement?: any;
    icon?: any;
    accuracy_decimals?: any;
    state_class?: any;
}
