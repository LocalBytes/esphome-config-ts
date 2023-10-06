/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: gps.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/gps
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes) 2023
 **/
import { ID, Pin, BaseComponent } from "../base.js";
import { SensorSENSOR_SCHEMA } from "./sensor.js";
import { CoreCOMPONENT_SCHEMA } from "./esphome.js";
import { TimeTIME_SCHEMA } from "./time.js";

export class Gps extends BaseComponent<GpsConfig> {
    componentName: string = "gps";
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

export class GpsTime extends BaseComponent<GpsTimeConfig> {
    componentName: string = "gps.time";
}

export interface GpsTimeConfig extends TimeTIME_SCHEMA, CoreCOMPONENT_SCHEMA {
    id?: ID;
    gps_id?: ID;
    update_interval?: any;
}
