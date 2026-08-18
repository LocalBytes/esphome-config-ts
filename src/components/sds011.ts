/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: sds011.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/sds011
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes)
 **/
import { type ID, type Pin, EsphomeComponent } from "@/lib/base.js";
import type { SensorSENSORSCHEMA } from "./sensor.js";
import type { CorePositiveTimePeriodMinutes, CoreCOMPONENTSCHEMA } from "./esphome.js";

export class Sds011Sensor extends EsphomeComponent<Sds011SensorConfig> {
    componentName: string = "sds011.sensor";
}

export interface Sds011SensorConfigPm100 extends SensorSENSORSCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    icon?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface Sds011SensorConfigPm25 extends SensorSENSORSCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    icon?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export type Sds011SensorConfigUpdateInterval = CorePositiveTimePeriodMinutes;

export interface Sds011SensorConfig extends CoreCOMPONENTSCHEMA {
    id?: ID;
    pm_10_0?: Sds011SensorConfigPm100;
    pm_2_5?: Sds011SensorConfigPm25;
    rx_only?: boolean;
    uart_id?: ID;
    update_interval?: Sds011SensorConfigUpdateInterval;
}
