/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: emontx.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/emontx
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes)
 **/
import { type ID, type Pin, EsphomeComponent } from "@/lib/base.js";
import type { CoreCOMPONENT_SCHEMA } from "./esphome.js";
import type { Sensor_SENSOR_SCHEMA } from "./sensor.js";

export class Emontx extends EsphomeComponent<EmontxConfig> {
    componentName: string = "emontx";
}

export interface EmontxConfig extends CoreCOMPONENT_SCHEMA {
    id?: ID;
    on_data?: object[];
    on_json?: object[];
    uart_id?: ID;
}

export class EmontxSensor extends EsphomeComponent<EmontxSensorConfig> {
    componentName: string = "emontx.sensor";
}

export interface EmontxSensorConfig extends Sensor_SENSOR_SCHEMA {
    accuracy_decimals?: any;
    emontx_id?: ID;
    id?: any;
    state_class?: any;
    tag_name: string;
}
