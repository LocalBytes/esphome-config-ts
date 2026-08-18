/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: statsd.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/statsd
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes)
 **/
import { type ID, type Pin, EsphomeComponent } from "@/lib/base.js";
import type { CoreCOMPONENT_SCHEMA } from "./esphome.js";

export class Statsd extends EsphomeComponent<StatsdConfig> {
    componentName: string = "statsd";
}

export interface StatsdConfigBinarySensors {
    id: ID;
    name: string;
}

export interface StatsdConfigSensors {
    id: ID;
    name: string;
}

export interface StatsdConfig extends CoreCOMPONENT_SCHEMA {
    binary_sensors?: StatsdConfigBinarySensors[];
    host: string;
    id?: ID;
    port?: number;
    prefix?: string;
    sensors?: StatsdConfigSensors[];
    update_interval?: any;
}
