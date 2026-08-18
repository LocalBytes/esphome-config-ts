/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: am43.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/am43
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes)
 **/
import { type ID, type Pin, EsphomeComponent } from "@/lib/base.js";
import type { Cover_COVER_SCHEMA } from "./cover.js";
import type { CoreCOMPONENT_SCHEMA } from "./esphome.js";
import type { Sensor_SENSOR_SCHEMA } from "./sensor.js";

export class Am43Cover extends EsphomeComponent<Am43CoverConfig> {
    componentName: string = "am43.cover";
}

export type Am43CoverConfig = {
        ble_client_id?: ID;
        id?: ID;
        invert_position?: boolean;
        pin?: number;
    } & Cover_COVER_SCHEMA & CoreCOMPONENT_SCHEMA;

export class Am43Sensor extends EsphomeComponent<Am43SensorConfig> {
    componentName: string = "am43.sensor";
}

export interface Am43SensorConfigBatteryLevel extends Sensor_SENSOR_SCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    entity_category?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface Am43SensorConfigIlluminance extends Sensor_SENSOR_SCHEMA {
    accuracy_decimals?: any;
    icon?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface Am43SensorConfig extends CoreCOMPONENT_SCHEMA {
    battery_level?: Am43SensorConfigBatteryLevel;
    ble_client_id?: ID;
    id?: ID;
    illuminance?: Am43SensorConfigIlluminance;
    update_interval?: any;
}
