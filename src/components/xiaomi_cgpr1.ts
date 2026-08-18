/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: xiaomi_cgpr1.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/xiaomi_cgpr1
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes)
 **/
import { type ID, type Pin, EsphomeComponent } from "@/lib/base.js";
import type { Sensor_SENSOR_SCHEMA } from "./sensor.js";
import type { BinarySensor_BINARY_SENSOR_SCHEMA } from "./binary_sensor.js";
import type { BthomeMithermometerBLE_DEVICE_SCHEMA } from "./bthome_mithermometer.js";
import type { CoreCOMPONENT_SCHEMA } from "./esphome.js";

export class XiaomiCgpr1BinarySensor extends EsphomeComponent<XiaomiCgpr1BinarySensorConfig> {
    componentName: string = "xiaomi_cgpr1.binary_sensor";
}

export interface XiaomiCgpr1BinarySensorConfigBatteryLevel extends Sensor_SENSOR_SCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    entity_category?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface XiaomiCgpr1BinarySensorConfigIdleTime extends Sensor_SENSOR_SCHEMA {
    accuracy_decimals?: any;
    entity_category?: any;
    icon?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface XiaomiCgpr1BinarySensorConfigIlluminance extends Sensor_SENSOR_SCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export type XiaomiCgpr1BinarySensorConfig = {
        battery_level?: XiaomiCgpr1BinarySensorConfigBatteryLevel;
        bindkey: string;
        device_class?: any;
        id?: any;
        idle_time?: XiaomiCgpr1BinarySensorConfigIdleTime;
        illuminance?: XiaomiCgpr1BinarySensorConfigIlluminance;
        mac_address: string;
    } & BinarySensor_BINARY_SENSOR_SCHEMA & BthomeMithermometerBLE_DEVICE_SCHEMA & CoreCOMPONENT_SCHEMA;
