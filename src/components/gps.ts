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
import type { Sensor_SENSOR_SCHEMA } from "./sensor.js";
import type { CoreCOMPONENT_SCHEMA } from "./esphome.js";
import type { TimeTIME_SCHEMA } from "./time.js";

export class Gps extends EsphomeComponent<GpsConfig> {
    componentName: string = "gps";
}

export interface GpsConfigAltitude extends Sensor_SENSOR_SCHEMA {
    accuracy_decimals?: any;
    icon?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface GpsConfigCourse extends Sensor_SENSOR_SCHEMA {
    accuracy_decimals?: any;
    icon?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface GpsConfigHdop extends Sensor_SENSOR_SCHEMA {
    accuracy_decimals?: any;
    icon?: any;
    state_class?: any;
}

export interface GpsConfigLatitude extends Sensor_SENSOR_SCHEMA {
    accuracy_decimals?: any;
    icon?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface GpsConfigLongitude extends Sensor_SENSOR_SCHEMA {
    accuracy_decimals?: any;
    icon?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface GpsConfigSatellites extends Sensor_SENSOR_SCHEMA {
    accuracy_decimals?: any;
    icon?: any;
    state_class?: any;
}

export interface GpsConfigSpeed extends Sensor_SENSOR_SCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    icon?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface GpsConfig extends CoreCOMPONENT_SCHEMA {
    altitude?: GpsConfigAltitude;
    course?: GpsConfigCourse;
    hdop?: GpsConfigHdop;
    id?: ID;
    latitude?: GpsConfigLatitude;
    longitude?: GpsConfigLongitude;
    satellites?: GpsConfigSatellites;
    speed?: GpsConfigSpeed;
    uart_id?: ID;
    update_interval?: any;
}

export class GpsTime extends EsphomeComponent<GpsTimeConfig> {
    componentName: string = "gps.time";
}

export type GpsTimeConfig = {
        gps_id?: ID;
        id?: ID;
        update_interval?: any;
    } & TimeTIME_SCHEMA & CoreCOMPONENT_SCHEMA;
