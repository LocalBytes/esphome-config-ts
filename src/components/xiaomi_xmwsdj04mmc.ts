/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: xiaomi_xmwsdj04mmc.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/xiaomi_xmwsdj04mmc
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes)
 **/
import { type ID, type Pin, EsphomeComponent } from "@/lib/base.js";
import type { Sensor_SENSOR_SCHEMA } from "./sensor.js";
import type { BthomeMithermometerBLE_DEVICE_SCHEMA } from "./bthome_mithermometer.js";
import type { CoreCOMPONENT_SCHEMA } from "./esphome.js";

export class XiaomiXmwsdj04mmcSensor extends EsphomeComponent<XiaomiXmwsdj04mmcSensorConfig> {
    componentName: string = "xiaomi_xmwsdj04mmc.sensor";
}

export interface XiaomiXmwsdj04mmcSensorConfigBatteryLevel extends Sensor_SENSOR_SCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    entity_category?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface XiaomiXmwsdj04mmcSensorConfigHumidity extends Sensor_SENSOR_SCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface XiaomiXmwsdj04mmcSensorConfigTemperature extends Sensor_SENSOR_SCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export type XiaomiXmwsdj04mmcSensorConfig = {
        battery_level?: XiaomiXmwsdj04mmcSensorConfigBatteryLevel;
        bindkey: string;
        humidity?: XiaomiXmwsdj04mmcSensorConfigHumidity;
        id?: ID;
        mac_address: string;
        temperature?: XiaomiXmwsdj04mmcSensorConfigTemperature;
    } & BthomeMithermometerBLE_DEVICE_SCHEMA & CoreCOMPONENT_SCHEMA;
