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
import type { SensorSENSORSCHEMA } from "./sensor.js";
import type { CoreCOMPONENTSCHEMA } from "./esphome.js";

export class Pmsa003iSensor extends EsphomeComponent<Pmsa003iSensorConfig> {
    componentName: string = "pmsa003i.sensor";
}

export interface Pmsa003iSensorConfigPm100 extends SensorSENSORSCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    icon?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface Pmsa003iSensorConfigPm10 extends SensorSENSORSCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    icon?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface Pmsa003iSensorConfigPm25 extends SensorSENSORSCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    icon?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface Pmsa003iSensorConfigPmc03 extends SensorSENSORSCHEMA {
    accuracy_decimals?: any;
    icon?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface Pmsa003iSensorConfigPmc05 extends SensorSENSORSCHEMA {
    accuracy_decimals?: any;
    icon?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface Pmsa003iSensorConfigPmc100 extends SensorSENSORSCHEMA {
    accuracy_decimals?: any;
    icon?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface Pmsa003iSensorConfigPmc10 extends SensorSENSORSCHEMA {
    accuracy_decimals?: any;
    icon?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface Pmsa003iSensorConfigPmc25 extends SensorSENSORSCHEMA {
    accuracy_decimals?: any;
    icon?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface Pmsa003iSensorConfigPmc50 extends SensorSENSORSCHEMA {
    accuracy_decimals?: any;
    icon?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface Pmsa003iSensorConfig extends CoreCOMPONENTSCHEMA {
    address?: any;
    i2c_id?: ID;
    id?: ID;
    pm_10_0?: Pmsa003iSensorConfigPm100;
    pm_1_0?: Pmsa003iSensorConfigPm10;
    pm_2_5?: Pmsa003iSensorConfigPm25;
    pmc_0_3?: Pmsa003iSensorConfigPmc03;
    pmc_0_5?: Pmsa003iSensorConfigPmc05;
    pmc_10_0?: Pmsa003iSensorConfigPmc100;
    pmc_1_0?: Pmsa003iSensorConfigPmc10;
    pmc_2_5?: Pmsa003iSensorConfigPmc25;
    pmc_5_0?: Pmsa003iSensorConfigPmc50;
    standard_units?: boolean;
    update_interval?: any;
}
