/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 *
 * Schema: gps.json
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/gps
 *
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes)
 **/
import { type ID, type Pin, EsphomeComponent } from "@/lib/base.js";
import type { SensorSENSOR_SCHEMA } from "./sensor.js";
import type { CoreCOMPONENT_SCHEMA } from "./esphome.js";
import type { TimeTIME_SCHEMA } from "./time.js";

export class Gps extends EsphomeComponent<GpsConfig> {
    componentName: string = "gps";
}

export interface GpsConfigLatitude extends SensorSENSOR_SCHEMA {
    unit_of_measurement?: any;
    accuracy_decimals?: any;
}

export interface GpsConfigLongitude extends SensorSENSOR_SCHEMA {
    unit_of_measurement?: any;
    accuracy_decimals?: any;
}

export interface GpsConfigSpeed extends SensorSENSOR_SCHEMA {
    unit_of_measurement?: any;
    accuracy_decimals?: any;
}

export interface GpsConfigCourse extends SensorSENSOR_SCHEMA {
    unit_of_measurement?: any;
    accuracy_decimals?: any;
}

export interface GpsConfigAltitude extends SensorSENSOR_SCHEMA {
    unit_of_measurement?: any;
    accuracy_decimals?: any;
}

export interface GpsConfigSatellites extends SensorSENSOR_SCHEMA {
    accuracy_decimals?: any;
    state_class?: any;
}

export interface GpsConfig extends CoreCOMPONENT_SCHEMA {
    id?: ID;
    latitude?: GpsConfigLatitude;
    longitude?: GpsConfigLongitude;
    speed?: GpsConfigSpeed;
    course?: GpsConfigCourse;
    altitude?: GpsConfigAltitude;
    satellites?: GpsConfigSatellites;
    update_interval?: any;
    uart_id?: ID;
}

export class GpsTime extends EsphomeComponent<GpsTimeConfig> {
    componentName: string = "gps.time";
}

export type GpsTimeConfig = {
        id?: ID;
        gps_id?: ID;
        update_interval?: any;
    } & TimeTIME_SCHEMA & CoreCOMPONENT_SCHEMA;
