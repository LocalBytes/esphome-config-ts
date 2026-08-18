/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: sps30.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/sps30
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes)
 **/
import { type ID, type Pin, EsphomeComponent } from "@/lib/base.js";
import type { Sensor_SENSOR_SCHEMA } from "./sensor.js";
import type { CoreCOMPONENT_SCHEMA } from "./esphome.js";

export abstract class Sps30 extends EsphomeComponent {
    componentName: string = "sps30";
}

export class Sps30Sensor extends EsphomeComponent<Sps30SensorConfig> {
    componentName: string = "sps30.sensor";
}

export interface Sps30SensorConfigPm_10_0 extends Sensor_SENSOR_SCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    icon?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface Sps30SensorConfigPm_1_0 extends Sensor_SENSOR_SCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    icon?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface Sps30SensorConfigPm_2_5 extends Sensor_SENSOR_SCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    icon?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface Sps30SensorConfigPm_4_0 extends Sensor_SENSOR_SCHEMA {
    accuracy_decimals?: any;
    icon?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface Sps30SensorConfigPmSize extends Sensor_SENSOR_SCHEMA {
    accuracy_decimals?: any;
    icon?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface Sps30SensorConfigPmc_0_5 extends Sensor_SENSOR_SCHEMA {
    accuracy_decimals?: any;
    icon?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface Sps30SensorConfigPmc_10_0 extends Sensor_SENSOR_SCHEMA {
    accuracy_decimals?: any;
    icon?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface Sps30SensorConfigPmc_1_0 extends Sensor_SENSOR_SCHEMA {
    accuracy_decimals?: any;
    icon?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface Sps30SensorConfigPmc_2_5 extends Sensor_SENSOR_SCHEMA {
    accuracy_decimals?: any;
    icon?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface Sps30SensorConfigPmc_4_0 extends Sensor_SENSOR_SCHEMA {
    accuracy_decimals?: any;
    icon?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface Sps30SensorConfig extends CoreCOMPONENT_SCHEMA {
    address?: any;
    auto_cleaning_interval?: any;
    i2c_id?: ID;
    id?: ID;
    idle_interval?: any;
    pm_10_0?: Sps30SensorConfigPm_10_0;
    pm_1_0?: Sps30SensorConfigPm_1_0;
    pm_2_5?: Sps30SensorConfigPm_2_5;
    pm_4_0?: Sps30SensorConfigPm_4_0;
    pm_size?: Sps30SensorConfigPmSize;
    pmc_0_5?: Sps30SensorConfigPmc_0_5;
    pmc_10_0?: Sps30SensorConfigPmc_10_0;
    pmc_1_0?: Sps30SensorConfigPmc_1_0;
    pmc_2_5?: Sps30SensorConfigPmc_2_5;
    pmc_4_0?: Sps30SensorConfigPmc_4_0;
    update_interval?: any;
}

export interface Sps30SensorSPS30_ACTION_SCHEMA {
    id: ID;
}
