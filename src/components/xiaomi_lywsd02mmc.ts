/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: xiaomi_lywsd02mmc.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/xiaomi_lywsd02mmc
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes)
 **/
import { type ID, type Pin, EsphomeComponent } from "@/lib/base.js";
import type { Sensor_SENSOR_SCHEMA } from "./sensor.js";
import type { BthomeMithermometerBLE_DEVICE_SCHEMA } from "./bthome_mithermometer.js";
import type { CoreCOMPONENT_SCHEMA } from "./esphome.js";

export class XiaomiLywsd02mmcSensor extends EsphomeComponent<XiaomiLywsd02mmcSensorConfig> {
    componentName: string = "xiaomi_lywsd02mmc.sensor";
}

export interface XiaomiLywsd02mmcSensorConfigBatteryLevel extends Sensor_SENSOR_SCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    entity_category?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface XiaomiLywsd02mmcSensorConfigHumidity extends Sensor_SENSOR_SCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface XiaomiLywsd02mmcSensorConfigTemperature extends Sensor_SENSOR_SCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export type XiaomiLywsd02mmcSensorConfig = {
        battery_level?: XiaomiLywsd02mmcSensorConfigBatteryLevel;
        bindkey: string;
        humidity?: XiaomiLywsd02mmcSensorConfigHumidity;
        id?: ID;
        mac_address: string;
        temperature?: XiaomiLywsd02mmcSensorConfigTemperature;
    } & BthomeMithermometerBLE_DEVICE_SCHEMA & CoreCOMPONENT_SCHEMA;
