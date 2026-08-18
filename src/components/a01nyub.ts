/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: a01nyub.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/a01nyub
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes)
 **/
import { type ID, type Pin, EsphomeComponent } from "@/lib/base.js";
import type { Sensor_SENSOR_SCHEMA } from "./sensor.js";

export class A01nyubSensor extends EsphomeComponent<A01nyubSensorConfig> {
    componentName: string = "a01nyub.sensor";
}

export interface A01nyubSensorConfig extends Sensor_SENSOR_SCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    icon?: any;
    id?: any;
    state_class?: any;
    uart_id?: ID;
    unit_of_measurement?: any;
}
