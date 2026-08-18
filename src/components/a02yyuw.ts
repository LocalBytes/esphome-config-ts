/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: a02yyuw.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/a02yyuw
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes)
 **/
import { type ID, type Pin, EsphomeComponent } from "@/lib/base.js";
import type { Sensor_SENSOR_SCHEMA } from "./sensor.js";

export class A02yyuwSensor extends EsphomeComponent<A02yyuwSensorConfig> {
    componentName: string = "a02yyuw.sensor";
}

export interface A02yyuwSensorConfig extends Sensor_SENSOR_SCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    icon?: any;
    id?: any;
    state_class?: any;
    uart_id?: ID;
    unit_of_measurement?: any;
}
