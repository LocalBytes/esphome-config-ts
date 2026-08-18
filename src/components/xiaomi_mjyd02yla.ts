/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: xiaomi_mjyd02yla.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/xiaomi_mjyd02yla
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes)
 **/
import { type ID, type Pin, EsphomeComponent } from "@/lib/base.js";
import type { Sensor_SENSOR_SCHEMA } from "./sensor.js";
import type { BinarySensor_BINARY_SENSOR_SCHEMA } from "./binary_sensor.js";
import type { BthomeMithermometerBLE_DEVICE_SCHEMA } from "./bthome_mithermometer.js";
import type { CoreCOMPONENT_SCHEMA } from "./esphome.js";

export class XiaomiMjyd02ylaBinarySensor extends EsphomeComponent<XiaomiMjyd02ylaBinarySensorConfig> {
    componentName: string = "xiaomi_mjyd02yla.binary_sensor";
}

export interface XiaomiMjyd02ylaBinarySensorConfigBatteryLevel extends Sensor_SENSOR_SCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    entity_category?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface XiaomiMjyd02ylaBinarySensorConfigIdleTime extends Sensor_SENSOR_SCHEMA {
    accuracy_decimals?: any;
    icon?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface XiaomiMjyd02ylaBinarySensorConfigIlluminance extends Sensor_SENSOR_SCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface XiaomiMjyd02ylaBinarySensorConfigLight extends BinarySensor_BINARY_SENSOR_SCHEMA {
    device_class?: any;
}

export type XiaomiMjyd02ylaBinarySensorConfig = {
        battery_level?: XiaomiMjyd02ylaBinarySensorConfigBatteryLevel;
        bindkey: string;
        device_class?: any;
        id?: any;
        idle_time?: XiaomiMjyd02ylaBinarySensorConfigIdleTime;
        illuminance?: XiaomiMjyd02ylaBinarySensorConfigIlluminance;
        light?: XiaomiMjyd02ylaBinarySensorConfigLight;
        mac_address: string;
    } & BinarySensor_BINARY_SENSOR_SCHEMA & BthomeMithermometerBLE_DEVICE_SCHEMA & CoreCOMPONENT_SCHEMA;
