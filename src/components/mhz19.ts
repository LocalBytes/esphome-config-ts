/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: mhz19.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/mhz19
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes)
 **/
import { type ID, type Pin, EsphomeComponent } from "@/lib/base.js";
import type { SensorSENSORSCHEMA } from "./sensor.js";
import type { CorePositiveTimePeriodSeconds, CoreCOMPONENTSCHEMA } from "./esphome.js";

export abstract class Mhz19 extends EsphomeComponent {
    componentName: string = "mhz19";
}

export class Mhz19Sensor extends EsphomeComponent<Mhz19SensorConfig> {
    componentName: string = "mhz19.sensor";
}

export interface Mhz19SensorConfigCo2 extends SensorSENSORSCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    icon?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export type Mhz19SensorConfigDetectionRange = '2000' | '5000' | '10000';

export interface Mhz19SensorConfigTemperature extends SensorSENSORSCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export type Mhz19SensorConfigWarmupTime = CorePositiveTimePeriodSeconds;

export interface Mhz19SensorConfig extends CoreCOMPONENTSCHEMA {
    automatic_baseline_calibration?: boolean;
    co2?: Mhz19SensorConfigCo2;
    detection_range?: Mhz19SensorConfigDetectionRange;
    id?: ID;
    temperature?: Mhz19SensorConfigTemperature;
    uart_id?: ID;
    update_interval?: any;
    warmup_time?: Mhz19SensorConfigWarmupTime;
}

export interface Mhz19SensorNOARGSACTIONSCHEMA {
    id: ID;
}
