/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: xiaomi_lywsd03mmc.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/xiaomi_lywsd03mmc
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes)
 **/
import { type ID, type Pin, EsphomeComponent } from "@/lib/base.js";
import type { Sensor_SENSOR_SCHEMA } from "./sensor.js";
import type { BthomeMithermometerBLE_DEVICE_SCHEMA } from "./bthome_mithermometer.js";
import type { CoreCOMPONENT_SCHEMA } from "./esphome.js";

export class XiaomiLywsd03mmcSensor extends EsphomeComponent<XiaomiLywsd03mmcSensorConfig> {
    componentName: string = "xiaomi_lywsd03mmc.sensor";
}

export interface XiaomiLywsd03mmcSensorConfigBatteryLevel extends Sensor_SENSOR_SCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    entity_category?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface XiaomiLywsd03mmcSensorConfigHumidity extends Sensor_SENSOR_SCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface XiaomiLywsd03mmcSensorConfigTemperature extends Sensor_SENSOR_SCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export type XiaomiLywsd03mmcSensorConfig = {
        battery_level?: XiaomiLywsd03mmcSensorConfigBatteryLevel;
        bindkey: string;
        humidity?: XiaomiLywsd03mmcSensorConfigHumidity;
        id?: ID;
        mac_address: string;
        temperature?: XiaomiLywsd03mmcSensorConfigTemperature;
    } & BthomeMithermometerBLE_DEVICE_SCHEMA & CoreCOMPONENT_SCHEMA;
