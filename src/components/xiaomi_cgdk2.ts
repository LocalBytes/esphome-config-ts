/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: xiaomi_cgdk2.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/xiaomi_cgdk2
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes)
 **/
import { type ID, type Pin, EsphomeComponent } from "@/lib/base.js";
import type { Sensor_SENSOR_SCHEMA } from "./sensor.js";
import type { BthomeMithermometerBLE_DEVICE_SCHEMA } from "./bthome_mithermometer.js";
import type { CoreCOMPONENT_SCHEMA } from "./esphome.js";

export class XiaomiCgdk2Sensor extends EsphomeComponent<XiaomiCgdk2SensorConfig> {
    componentName: string = "xiaomi_cgdk2.sensor";
}

export interface XiaomiCgdk2SensorConfigBatteryLevel extends Sensor_SENSOR_SCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    entity_category?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface XiaomiCgdk2SensorConfigHumidity extends Sensor_SENSOR_SCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface XiaomiCgdk2SensorConfigTemperature extends Sensor_SENSOR_SCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export type XiaomiCgdk2SensorConfig = {
        battery_level?: XiaomiCgdk2SensorConfigBatteryLevel;
        bindkey: string;
        humidity?: XiaomiCgdk2SensorConfigHumidity;
        id?: ID;
        mac_address: string;
        temperature?: XiaomiCgdk2SensorConfigTemperature;
    } & BthomeMithermometerBLE_DEVICE_SCHEMA & CoreCOMPONENT_SCHEMA;
