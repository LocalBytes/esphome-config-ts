/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: cd74hc4067.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/cd74hc4067
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes)
 **/
import { type ID, type Pin, EsphomeComponent } from "@/lib/base.js";
import type { CorePositiveTimePeriodMilliseconds, CoreCOMPONENT_SCHEMA } from "./esphome.js";
import type { Sensor_SENSOR_SCHEMA } from "./sensor.js";

export class Cd74hc4067 extends EsphomeComponent<Cd74hc4067Config> {
    componentName: string = "cd74hc4067";
}

export type Cd74hc4067ConfigDelay = CorePositiveTimePeriodMilliseconds;

export interface Cd74hc4067Config extends CoreCOMPONENT_SCHEMA {
    delay?: Cd74hc4067ConfigDelay;
    id?: ID;
    pin_s0: Pin;
    pin_s1: Pin;
    pin_s2: Pin;
    pin_s3: Pin;
}

export class Cd74hc4067Sensor extends EsphomeComponent<Cd74hc4067SensorConfig> {
    componentName: string = "cd74hc4067.sensor";
}

export type Cd74hc4067SensorConfig = {
        accuracy_decimals?: any;
        cd74hc4067_id?: ID;
        device_class?: any;
        icon?: any;
        id?: any;
        number: number;
        sensor: ID;
        state_class?: any;
        unit_of_measurement?: any;
        update_interval?: any;
    } & Sensor_SENSOR_SCHEMA & CoreCOMPONENT_SCHEMA;
