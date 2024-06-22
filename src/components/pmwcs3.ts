/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: pmwcs3.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/pmwcs3
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes)
 **/
import { type ID, type Pin, BaseComponent } from "@/lib/base.js";
import type { SensorSENSOR_SCHEMA } from "./sensor.js";
import type { CoreCOMPONENT_SCHEMA } from "./esphome.js";

export class Pmwcs3Sensor extends BaseComponent<Pmwcs3SensorConfig> {
    componentName: string = "pmwcs3.sensor";
}

export interface Pmwcs3SensorConfigE25 extends SensorSENSOR_SCHEMA {
    unit_of_measurement?: any;
    icon?: any;
    accuracy_decimals?: any;
    state_class?: any;
}

export interface Pmwcs3SensorConfigEc extends SensorSENSOR_SCHEMA {
    unit_of_measurement?: any;
    icon?: any;
    accuracy_decimals?: any;
    state_class?: any;
}

export interface Pmwcs3SensorConfigTemperature extends SensorSENSOR_SCHEMA {
    unit_of_measurement?: any;
    icon?: any;
    accuracy_decimals?: any;
    state_class?: any;
}

export interface Pmwcs3SensorConfigVwc extends SensorSENSOR_SCHEMA {
    unit_of_measurement?: any;
    icon?: any;
    accuracy_decimals?: any;
    state_class?: any;
}

export interface Pmwcs3SensorConfig extends CoreCOMPONENT_SCHEMA {
    id?: ID;
    e25?: Pmwcs3SensorConfigE25;
    ec?: Pmwcs3SensorConfigEc;
    temperature?: Pmwcs3SensorConfigTemperature;
    vwc?: Pmwcs3SensorConfigVwc;
    update_interval?: any;
    i2c_id?: ID;
    address?: any;
}

export interface Pmwcs3SensorPMWCS3_CALIBRATION_SCHEMA {
    id?: ID;
}

export abstract class Pmwcs3 extends BaseComponent {
    componentName: string = "pmwcs3";
}
