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
import type { SensorSENSOR_SCHEMA } from "./sensor.js";
import type { CoreCOMPONENT_SCHEMA } from "./esphome.js";
import type { CoverCOVER_SCHEMA } from "./cover.js";

export class Am43Sensor extends EsphomeComponent<Am43SensorConfig> {
    componentName: string = "am43.sensor";
}

export interface Am43SensorConfigBatteryLevel extends SensorSENSOR_SCHEMA {
    unit_of_measurement?: any;
    accuracy_decimals?: any;
    device_class?: any;
    entity_category?: any;
}

export interface Am43SensorConfigIlluminance extends SensorSENSOR_SCHEMA {
    unit_of_measurement?: any;
    icon?: any;
    accuracy_decimals?: any;
}

export interface Am43SensorConfig extends CoreCOMPONENT_SCHEMA {
    id?: ID;
    battery_level?: Am43SensorConfigBatteryLevel;
    illuminance?: Am43SensorConfigIlluminance;
    ble_client_id?: ID;
    update_interval?: any;
}

export class Am43Cover extends EsphomeComponent<Am43CoverConfig> {
    componentName: string = "am43.cover";
}

export type Am43CoverConfig = {
        id?: any;
        pin?: number;
        invert_position?: boolean;
        ble_client_id?: ID;
    } & CoverCOVER_SCHEMA & CoreCOMPONENT_SCHEMA;
