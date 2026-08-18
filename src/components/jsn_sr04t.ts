/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: jsn_sr04t.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/jsn_sr04t
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes)
 **/
import { type ID, type Pin, EsphomeComponent } from "@/lib/base.js";
import type { Sensor_SENSOR_SCHEMA } from "./sensor.js";
import type { CoreCOMPONENT_SCHEMA } from "./esphome.js";

export class JsnSr04tSensor extends EsphomeComponent<JsnSr04tSensorConfig> {
    componentName: string = "jsn_sr04t.sensor";
}

export type JsnSr04tSensorConfigModel = 'jsn_sr04t' | 'aj_sr04m';
export type JsnSr04tSensorConfig = {
        accuracy_decimals?: any;
        icon?: any;
        id?: any;
        model?: JsnSr04tSensorConfigModel;
        state_class?: any;
        uart_id?: ID;
        unit_of_measurement?: any;
        update_interval?: any;
    } & Sensor_SENSOR_SCHEMA & CoreCOMPONENT_SCHEMA;
