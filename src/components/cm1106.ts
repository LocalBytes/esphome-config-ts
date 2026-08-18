/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: cm1106.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/cm1106
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes)
 **/
import { type ID, type Pin, EsphomeComponent } from "@/lib/base.js";
import type { Sensor_SENSOR_SCHEMA } from "./sensor.js";
import type { CoreCOMPONENT_SCHEMA } from "./esphome.js";

export abstract class Cm1106 extends EsphomeComponent {
    componentName: string = "cm1106";
}

export class Cm1106Sensor extends EsphomeComponent<Cm1106SensorConfig> {
    componentName: string = "cm1106.sensor";
}

export interface Cm1106SensorConfigCo2 extends Sensor_SENSOR_SCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    icon?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface Cm1106SensorConfig extends CoreCOMPONENT_SCHEMA {
    co2?: Cm1106SensorConfigCo2;
    id?: ID;
    uart_id?: ID;
    update_interval?: any;
}
