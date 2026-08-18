/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: uptime.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/uptime
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes)
 **/
import { type ID, type Pin, EsphomeComponent } from "@/lib/base.js";
import type { TextSensor_TEXT_SENSOR_SCHEMA } from "./text_sensor.js";
import type { CoreCOMPONENT_SCHEMA } from "./esphome.js";

export class UptimeSensor extends EsphomeComponent<UptimeSensorConfig> {
    componentName: string = "uptime.sensor";
}

export type UptimeSensorConfig = UptimeSensorConfigSeconds | UptimeSensorConfigTimestamp;

export interface UptimeSensorConfigSeconds {
    type: "seconds" | "SECONDS";
    accuracy_decimals?: any;
    device_class?: any;
    entity_category?: any;
    icon?: any;
    id?: any;
    state_class?: any;
    unit_of_measurement?: any;
    update_interval?: any;
}

export interface UptimeSensorConfigTimestamp {
    type: "timestamp" | "TIMESTAMP";
    accuracy_decimals?: any;
    device_class?: any;
    entity_category?: any;
    icon?: any;
    id?: any;
    time_id?: ID;
}

export class UptimeTextSensor extends EsphomeComponent<UptimeTextSensorConfig> {
    componentName: string = "uptime.text_sensor";
}

export interface UptimeTextSensorConfigFormat {
    days?: string;
    expand?: boolean;
    hours?: string;
    minutes?: string;
    seconds?: string;
    separator?: string;
}

export type UptimeTextSensorConfig = {
        entity_category?: any;
        format?: UptimeTextSensorConfigFormat;
        icon?: any;
        id?: any;
        update_interval?: any;
    } & TextSensor_TEXT_SENSOR_SCHEMA & CoreCOMPONENT_SCHEMA;
