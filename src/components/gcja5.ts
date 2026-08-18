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
import type { SensorSENSORSCHEMA } from "./sensor.js";
import type { CoreCOMPONENTSCHEMA } from "./esphome.js";

export class Gcja5Sensor extends EsphomeComponent<Gcja5SensorConfig> {
    componentName: string = "gcja5.sensor";
}

export interface Gcja5SensorConfigPm100 extends SensorSENSORSCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    icon?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface Gcja5SensorConfigPm10 extends SensorSENSORSCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    icon?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface Gcja5SensorConfigPm25 extends SensorSENSORSCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    icon?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface Gcja5SensorConfigPmc03 extends SensorSENSORSCHEMA {
    accuracy_decimals?: any;
    icon?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface Gcja5SensorConfigPmc05 extends SensorSENSORSCHEMA {
    accuracy_decimals?: any;
    icon?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface Gcja5SensorConfigPmc100 extends SensorSENSORSCHEMA {
    accuracy_decimals?: any;
    icon?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface Gcja5SensorConfigPmc10 extends SensorSENSORSCHEMA {
    accuracy_decimals?: any;
    icon?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface Gcja5SensorConfigPmc25 extends SensorSENSORSCHEMA {
    accuracy_decimals?: any;
    icon?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface Gcja5SensorConfigPmc50 extends SensorSENSORSCHEMA {
    accuracy_decimals?: any;
    icon?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface Gcja5SensorConfig extends CoreCOMPONENTSCHEMA {
    id?: ID;
    pm_10_0?: Gcja5SensorConfigPm100;
    pm_1_0?: Gcja5SensorConfigPm10;
    pm_2_5?: Gcja5SensorConfigPm25;
    pmc_0_3?: Gcja5SensorConfigPmc03;
    pmc_0_5?: Gcja5SensorConfigPmc05;
    pmc_10_0?: Gcja5SensorConfigPmc100;
    pmc_1_0?: Gcja5SensorConfigPmc10;
    pmc_2_5?: Gcja5SensorConfigPmc25;
    pmc_5_0?: Gcja5SensorConfigPmc50;
    uart_id?: ID;
}
