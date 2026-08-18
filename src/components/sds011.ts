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
import type { Sensor_SENSOR_SCHEMA } from "./sensor.js";
import type { CorePositiveTimePeriodMinutes, CoreCOMPONENT_SCHEMA } from "./esphome.js";

export class Sds011Sensor extends EsphomeComponent<Sds011SensorConfig> {
    componentName: string = "sds011.sensor";
}

export interface Sds011SensorConfigPm_10_0 extends Sensor_SENSOR_SCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    icon?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface Sds011SensorConfigPm_2_5 extends Sensor_SENSOR_SCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    icon?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export type Sds011SensorConfigUpdateInterval = CorePositiveTimePeriodMinutes;

export interface Sds011SensorConfig extends CoreCOMPONENT_SCHEMA {
    id?: ID;
    pm_10_0?: Sds011SensorConfigPm_10_0;
    pm_2_5?: Sds011SensorConfigPm_2_5;
    rx_only?: boolean;
    uart_id?: ID;
    update_interval?: Sds011SensorConfigUpdateInterval;
}
