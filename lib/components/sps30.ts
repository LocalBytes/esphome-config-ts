/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: sps30.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/sps30
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes) 2023
 **/
import type { ID, Pin } from "../base.js";
import { BaseComponent } from "../base.js";
import type { SensorSENSOR_SCHEMA } from "./sensor.js";
import type { CoreCOMPONENT_SCHEMA } from "./esphome.js";

export class Sps30Sensor extends BaseComponent<Sps30SensorConfig> {
    componentName: string = "sps30.sensor";
}

export interface Sps30SensorConfig extends CoreCOMPONENT_SCHEMA {
    id?: ID;
    pm_1_0?: Sps30SensorConfigPm_1_0;
    pm_2_5?: Sps30SensorConfigPm_2_5;
    pm_4_0?: Sps30SensorConfigPm_4_0;
    pm_10_0?: Sps30SensorConfigPm_10_0;
    pmc_0_5?: Sps30SensorConfigPmc_0_5;
    pmc_1_0?: Sps30SensorConfigPmc_1_0;
    pmc_2_5?: Sps30SensorConfigPmc_2_5;
    pmc_4_0?: Sps30SensorConfigPmc_4_0;
    pmc_10_0?: Sps30SensorConfigPmc_10_0;
    pm_size?: Sps30SensorConfigPmSize;
    auto_cleaning_interval?: any;
    update_interval?: any;
    i2c_id?: ID;
    address?: any;
}

export interface Sps30SensorConfigPm_1_0 extends SensorSENSOR_SCHEMA {
    unit_of_measurement?: any;
    icon?: any;
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
}

export interface Sps30SensorConfigPm_2_5 extends SensorSENSOR_SCHEMA {
    unit_of_measurement?: any;
    icon?: any;
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
}

export interface Sps30SensorConfigPm_4_0 extends SensorSENSOR_SCHEMA {
    unit_of_measurement?: any;
    icon?: any;
    accuracy_decimals?: any;
    state_class?: any;
}

export interface Sps30SensorConfigPm_10_0 extends SensorSENSOR_SCHEMA {
    unit_of_measurement?: any;
    icon?: any;
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
}

export interface Sps30SensorConfigPmc_0_5 extends SensorSENSOR_SCHEMA {
    unit_of_measurement?: any;
    icon?: any;
    accuracy_decimals?: any;
    state_class?: any;
}

export interface Sps30SensorConfigPmc_1_0 extends SensorSENSOR_SCHEMA {
    unit_of_measurement?: any;
    icon?: any;
    accuracy_decimals?: any;
    state_class?: any;
}

export interface Sps30SensorConfigPmc_2_5 extends SensorSENSOR_SCHEMA {
    unit_of_measurement?: any;
    icon?: any;
    accuracy_decimals?: any;
    state_class?: any;
}

export interface Sps30SensorConfigPmc_4_0 extends SensorSENSOR_SCHEMA {
    unit_of_measurement?: any;
    icon?: any;
    accuracy_decimals?: any;
    state_class?: any;
}

export interface Sps30SensorConfigPmc_10_0 extends SensorSENSOR_SCHEMA {
    unit_of_measurement?: any;
    icon?: any;
    accuracy_decimals?: any;
    state_class?: any;
}

export interface Sps30SensorConfigPmSize extends SensorSENSOR_SCHEMA {
    unit_of_measurement?: any;
    icon?: any;
    accuracy_decimals?: any;
    state_class?: any;
}

export abstract class Sps30 extends BaseComponent {
    componentName: string = "sps30";
}
