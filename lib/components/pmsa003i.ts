/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: pmsa003i.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/pmsa003i
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes) 2023
 **/
import { ID, Pin, BaseComponent } from "../base.js";
import { SensorSENSOR_SCHEMA } from "./sensor.js";
import { CoreCOMPONENT_SCHEMA } from "./esphome.js";

export class Pmsa003iSensor extends BaseComponent<Pmsa003iSensorConfig> {
    componentName: string = "pmsa003i.sensor";
}

export interface Pmsa003iSensorConfig extends CoreCOMPONENT_SCHEMA {
    id?: ID;
    standard_units?: boolean;
    pm_1_0?: Pmsa003iSensorConfigPm_1_0;
    pm_2_5?: Pmsa003iSensorConfigPm_2_5;
    pm_10_0?: Pmsa003iSensorConfigPm_10_0;
    pmc_0_3?: Pmsa003iSensorConfigPmc_0_3;
    pmc_0_5?: Pmsa003iSensorConfigPmc_0_5;
    pmc_1_0?: Pmsa003iSensorConfigPmc_1_0;
    pmc_2_5?: Pmsa003iSensorConfigPmc_2_5;
    pmc_5_0?: Pmsa003iSensorConfigPmc_5_0;
    pmc_10_0?: Pmsa003iSensorConfigPmc_10_0;
    update_interval?: any;
    i2c_id?: ID;
    address?: any;
}

export interface Pmsa003iSensorConfigPm_1_0 extends SensorSENSOR_SCHEMA {
    unit_of_measurement?: any;
    icon?: any;
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
}

export interface Pmsa003iSensorConfigPm_2_5 extends SensorSENSOR_SCHEMA {
    unit_of_measurement?: any;
    icon?: any;
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
}

export interface Pmsa003iSensorConfigPm_10_0 extends SensorSENSOR_SCHEMA {
    unit_of_measurement?: any;
    icon?: any;
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
}

export interface Pmsa003iSensorConfigPmc_0_3 extends SensorSENSOR_SCHEMA {
    unit_of_measurement?: any;
    icon?: any;
    accuracy_decimals?: any;
    state_class?: any;
}

export interface Pmsa003iSensorConfigPmc_0_5 extends SensorSENSOR_SCHEMA {
    unit_of_measurement?: any;
    icon?: any;
    accuracy_decimals?: any;
    state_class?: any;
}

export interface Pmsa003iSensorConfigPmc_1_0 extends SensorSENSOR_SCHEMA {
    unit_of_measurement?: any;
    icon?: any;
    accuracy_decimals?: any;
    state_class?: any;
}

export interface Pmsa003iSensorConfigPmc_2_5 extends SensorSENSOR_SCHEMA {
    unit_of_measurement?: any;
    icon?: any;
    accuracy_decimals?: any;
    state_class?: any;
}

export interface Pmsa003iSensorConfigPmc_5_0 extends SensorSENSOR_SCHEMA {
    unit_of_measurement?: any;
    icon?: any;
    accuracy_decimals?: any;
    state_class?: any;
}

export interface Pmsa003iSensorConfigPmc_10_0 extends SensorSENSOR_SCHEMA {
    unit_of_measurement?: any;
    icon?: any;
    accuracy_decimals?: any;
    state_class?: any;
}
