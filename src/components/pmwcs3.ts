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
import { type ID, type Pin, EsphomeComponent } from "@/lib/base.js";
import type { SensorSENSORSCHEMA } from "./sensor.js";
import type { CoreCOMPONENTSCHEMA } from "./esphome.js";

export abstract class Pmwcs3 extends EsphomeComponent {
    componentName: string = "pmwcs3";
}

export class Pmwcs3Sensor extends EsphomeComponent<Pmwcs3SensorConfig> {
    componentName: string = "pmwcs3.sensor";
}

export interface Pmwcs3SensorConfigE25 extends SensorSENSORSCHEMA {
    accuracy_decimals?: any;
    icon?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface Pmwcs3SensorConfigEc extends SensorSENSORSCHEMA {
    accuracy_decimals?: any;
    icon?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface Pmwcs3SensorConfigTemperature extends SensorSENSORSCHEMA {
    accuracy_decimals?: any;
    icon?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface Pmwcs3SensorConfigVwc extends SensorSENSORSCHEMA {
    accuracy_decimals?: any;
    icon?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface Pmwcs3SensorConfig extends CoreCOMPONENTSCHEMA {
    address?: any;
    e25?: Pmwcs3SensorConfigE25;
    ec?: Pmwcs3SensorConfigEc;
    i2c_id?: ID;
    id?: ID;
    temperature?: Pmwcs3SensorConfigTemperature;
    update_interval?: any;
    vwc?: Pmwcs3SensorConfigVwc;
}

export interface Pmwcs3SensorPMWCS3CALIBRATIONSCHEMA {
    id?: ID;
}
