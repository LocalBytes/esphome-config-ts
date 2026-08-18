/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: pmsa003i.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/pmsa003i
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes)
 **/
import { type ID, type Pin, EsphomeComponent } from "@/lib/base.js";
import type { Sensor_SENSOR_SCHEMA } from "./sensor.js";
import type { CoreCOMPONENT_SCHEMA } from "./esphome.js";

export class Pmsa003iSensor extends EsphomeComponent<Pmsa003iSensorConfig> {
    componentName: string = "pmsa003i.sensor";
}

export interface Pmsa003iSensorConfigPm_10_0 extends Sensor_SENSOR_SCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    icon?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface Pmsa003iSensorConfigPm_1_0 extends Sensor_SENSOR_SCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    icon?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface Pmsa003iSensorConfigPm_2_5 extends Sensor_SENSOR_SCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    icon?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface Pmsa003iSensorConfigPmc_0_3 extends Sensor_SENSOR_SCHEMA {
    accuracy_decimals?: any;
    icon?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface Pmsa003iSensorConfigPmc_0_5 extends Sensor_SENSOR_SCHEMA {
    accuracy_decimals?: any;
    icon?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface Pmsa003iSensorConfigPmc_10_0 extends Sensor_SENSOR_SCHEMA {
    accuracy_decimals?: any;
    icon?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface Pmsa003iSensorConfigPmc_1_0 extends Sensor_SENSOR_SCHEMA {
    accuracy_decimals?: any;
    icon?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface Pmsa003iSensorConfigPmc_2_5 extends Sensor_SENSOR_SCHEMA {
    accuracy_decimals?: any;
    icon?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface Pmsa003iSensorConfigPmc_5_0 extends Sensor_SENSOR_SCHEMA {
    accuracy_decimals?: any;
    icon?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface Pmsa003iSensorConfig extends CoreCOMPONENT_SCHEMA {
    address?: any;
    i2c_id?: ID;
    id?: ID;
    pm_10_0?: Pmsa003iSensorConfigPm_10_0;
    pm_1_0?: Pmsa003iSensorConfigPm_1_0;
    pm_2_5?: Pmsa003iSensorConfigPm_2_5;
    pmc_0_3?: Pmsa003iSensorConfigPmc_0_3;
    pmc_0_5?: Pmsa003iSensorConfigPmc_0_5;
    pmc_10_0?: Pmsa003iSensorConfigPmc_10_0;
    pmc_1_0?: Pmsa003iSensorConfigPmc_1_0;
    pmc_2_5?: Pmsa003iSensorConfigPmc_2_5;
    pmc_5_0?: Pmsa003iSensorConfigPmc_5_0;
    standard_units?: boolean;
    update_interval?: any;
}
