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
import type { SensorSENSORSCHEMA } from "./sensor.js";
import type { CoreCOMPONENTSCHEMA } from "./esphome.js";
import type { TimeTIMESCHEMA } from "./time.js";

export class Gps extends EsphomeComponent<GpsConfig> {
    componentName: string = "gps";
}

export interface GpsConfigAltitude extends SensorSENSORSCHEMA {
    accuracy_decimals?: any;
    icon?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface GpsConfigCourse extends SensorSENSORSCHEMA {
    accuracy_decimals?: any;
    icon?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface GpsConfigHdop extends SensorSENSORSCHEMA {
    accuracy_decimals?: any;
    icon?: any;
    state_class?: any;
}

export interface GpsConfigLatitude extends SensorSENSORSCHEMA {
    accuracy_decimals?: any;
    icon?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface GpsConfigLongitude extends SensorSENSORSCHEMA {
    accuracy_decimals?: any;
    icon?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface GpsConfigSatellites extends SensorSENSORSCHEMA {
    accuracy_decimals?: any;
    icon?: any;
    state_class?: any;
}

export interface GpsConfigSpeed extends SensorSENSORSCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    icon?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface GpsConfig extends CoreCOMPONENTSCHEMA {
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
    } & TimeTIMESCHEMA & CoreCOMPONENTSCHEMA;
