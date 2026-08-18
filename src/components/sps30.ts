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
import type { SensorSENSORSCHEMA } from "./sensor.js";
import type { CoreCOMPONENTSCHEMA } from "./esphome.js";

export abstract class Sps30 extends EsphomeComponent {
    componentName: string = "sps30";
}

export class Sps30Sensor extends EsphomeComponent<Sps30SensorConfig> {
    componentName: string = "sps30.sensor";
}

export interface Sps30SensorConfigPm100 extends SensorSENSORSCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    icon?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface Sps30SensorConfigPm10 extends SensorSENSORSCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    icon?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface Sps30SensorConfigPm25 extends SensorSENSORSCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    icon?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface Sps30SensorConfigPm40 extends SensorSENSORSCHEMA {
    accuracy_decimals?: any;
    icon?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface Sps30SensorConfigPmSize extends SensorSENSORSCHEMA {
    accuracy_decimals?: any;
    icon?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface Sps30SensorConfigPmc05 extends SensorSENSORSCHEMA {
    accuracy_decimals?: any;
    icon?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface Sps30SensorConfigPmc100 extends SensorSENSORSCHEMA {
    accuracy_decimals?: any;
    icon?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface Sps30SensorConfigPmc10 extends SensorSENSORSCHEMA {
    accuracy_decimals?: any;
    icon?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface Sps30SensorConfigPmc25 extends SensorSENSORSCHEMA {
    accuracy_decimals?: any;
    icon?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface Sps30SensorConfigPmc40 extends SensorSENSORSCHEMA {
    accuracy_decimals?: any;
    icon?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface Sps30SensorConfig extends CoreCOMPONENTSCHEMA {
    address?: any;
    auto_cleaning_interval?: any;
    i2c_id?: ID;
    id?: ID;
    idle_interval?: any;
    pm_10_0?: Sps30SensorConfigPm100;
    pm_1_0?: Sps30SensorConfigPm10;
    pm_2_5?: Sps30SensorConfigPm25;
    pm_4_0?: Sps30SensorConfigPm40;
    pm_size?: Sps30SensorConfigPmSize;
    pmc_0_5?: Sps30SensorConfigPmc05;
    pmc_10_0?: Sps30SensorConfigPmc100;
    pmc_1_0?: Sps30SensorConfigPmc10;
    pmc_2_5?: Sps30SensorConfigPmc25;
    pmc_4_0?: Sps30SensorConfigPmc40;
    update_interval?: any;
}

export interface Sps30SensorSPS30ACTIONSCHEMA {
    id: ID;
}
