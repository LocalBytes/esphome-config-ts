/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: radon_eye_rd200.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/radon_eye_rd200
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes)
 **/
import { type ID, type Pin, EsphomeComponent } from "@/lib/base.js";
import type { SensorSENSOR_SCHEMA } from "./sensor.js";
import type { CoreCOMPONENT_SCHEMA } from "./esphome.js";
import type { BleClientBLE_CLIENT_SCHEMA } from "./ble_client.js";

export class RadonEyeRd200Sensor extends EsphomeComponent<RadonEyeRd200SensorConfig> {
    componentName: string = "radon_eye_rd200.sensor";
}

export interface RadonEyeRd200SensorConfigRadon extends SensorSENSOR_SCHEMA {
    unit_of_measurement?: any;
    icon?: any;
    accuracy_decimals?: any;
    state_class?: any;
}

export interface RadonEyeRd200SensorConfigRadonLongTerm extends SensorSENSOR_SCHEMA {
    unit_of_measurement?: any;
    icon?: any;
    accuracy_decimals?: any;
    state_class?: any;
}

export type RadonEyeRd200SensorConfig = {
        id?: ID;
        radon?: RadonEyeRd200SensorConfigRadon;
        radon_long_term?: RadonEyeRd200SensorConfigRadonLongTerm;
        update_interval?: any;
    } & CoreCOMPONENT_SCHEMA & BleClientBLE_CLIENT_SCHEMA;
