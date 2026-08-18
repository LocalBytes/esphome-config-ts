/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: xiaomi_wx08zm.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/xiaomi_wx08zm
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes)
 **/
import { type ID, type Pin, EsphomeComponent } from "@/lib/base.js";
import type { Sensor_SENSOR_SCHEMA } from "./sensor.js";
import type { BinarySensor_BINARY_SENSOR_SCHEMA } from "./binary_sensor.js";
import type { BthomeMithermometerBLE_DEVICE_SCHEMA } from "./bthome_mithermometer.js";
import type { CoreCOMPONENT_SCHEMA } from "./esphome.js";

export class XiaomiWx08zmBinarySensor extends EsphomeComponent<XiaomiWx08zmBinarySensorConfig> {
    componentName: string = "xiaomi_wx08zm.binary_sensor";
}

export interface XiaomiWx08zmBinarySensorConfigBatteryLevel extends Sensor_SENSOR_SCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    entity_category?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface XiaomiWx08zmBinarySensorConfigTablet extends Sensor_SENSOR_SCHEMA {
    accuracy_decimals?: any;
    icon?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export type XiaomiWx08zmBinarySensorConfig = {
        battery_level?: XiaomiWx08zmBinarySensorConfigBatteryLevel;
        id?: any;
        mac_address: string;
        tablet?: XiaomiWx08zmBinarySensorConfigTablet;
    } & BinarySensor_BINARY_SENSOR_SCHEMA & BthomeMithermometerBLE_DEVICE_SCHEMA & CoreCOMPONENT_SCHEMA;
