/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: hc8.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/hc8
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes)
 **/
import { type ID, type Pin, EsphomeComponent } from "@/lib/base.js";
import type { Sensor_SENSOR_SCHEMA } from "./sensor.js";
import type { CorePositiveTimePeriodSeconds, CoreCOMPONENT_SCHEMA } from "./esphome.js";

export abstract class Hc8 extends EsphomeComponent {
    componentName: string = "hc8";
}

export class Hc8Sensor extends EsphomeComponent<Hc8SensorConfig> {
    componentName: string = "hc8.sensor";
}

export interface Hc8SensorConfigCo2 extends Sensor_SENSOR_SCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    icon?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export type Hc8SensorConfigWarmupTime = CorePositiveTimePeriodSeconds;

export interface Hc8SensorConfig extends CoreCOMPONENT_SCHEMA {
    co2?: Hc8SensorConfigCo2;
    id?: ID;
    uart_id?: ID;
    update_interval?: any;
    warmup_time?: Hc8SensorConfigWarmupTime;
}
