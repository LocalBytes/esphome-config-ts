/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: cd74hc4067.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/cd74hc4067
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes) 2023
 **/
import { ID, Pin, BaseComponent } from "../base.js";
import { CorePositiveTimePeriodMilliseconds, CoreCOMPONENT_SCHEMA } from "./esphome.js";
import { SensorSENSOR_SCHEMA } from "./sensor.js";

export class Cd74hc4067 extends BaseComponent<Cd74hc4067Config> {
    componentName: string = "cd74hc4067";
}

export interface Cd74hc4067Config extends CoreCOMPONENT_SCHEMA {
    id?: ID;
    pin_s0: Pin;
    pin_s1: Pin;
    pin_s2: Pin;
    pin_s3: Pin;
    delay?: Cd74hc4067ConfigDelay;
}

export interface Cd74hc4067ConfigDelay extends CorePositiveTimePeriodMilliseconds {
}

export class Cd74hc4067Sensor extends BaseComponent<Cd74hc4067SensorConfig> {
    componentName: string = "cd74hc4067.sensor";
}

export interface Cd74hc4067SensorConfig extends SensorSENSOR_SCHEMA, CoreCOMPONENT_SCHEMA {
    id?: any;
    unit_of_measurement?: any;
    icon?: any;
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
    cd74hc4067_id?: ID;
    number: number;
    sensor: ID;
    update_interval?: any;
}
