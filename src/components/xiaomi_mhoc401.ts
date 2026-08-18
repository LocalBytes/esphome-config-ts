/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: xiaomi_mhoc401.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/xiaomi_mhoc401
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes)
 **/
import { type ID, type Pin, EsphomeComponent } from "@/lib/base.js";
import type { Sensor_SENSOR_SCHEMA } from "./sensor.js";
import type { BthomeMithermometerBLE_DEVICE_SCHEMA } from "./bthome_mithermometer.js";
import type { CoreCOMPONENT_SCHEMA } from "./esphome.js";

export class XiaomiMhoc401Sensor extends EsphomeComponent<XiaomiMhoc401SensorConfig> {
    componentName: string = "xiaomi_mhoc401.sensor";
}

export interface XiaomiMhoc401SensorConfigBatteryLevel extends Sensor_SENSOR_SCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    entity_category?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface XiaomiMhoc401SensorConfigHumidity extends Sensor_SENSOR_SCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface XiaomiMhoc401SensorConfigTemperature extends Sensor_SENSOR_SCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export type XiaomiMhoc401SensorConfig = {
        battery_level?: XiaomiMhoc401SensorConfigBatteryLevel;
        bindkey: string;
        humidity?: XiaomiMhoc401SensorConfigHumidity;
        id?: ID;
        mac_address: string;
        temperature?: XiaomiMhoc401SensorConfigTemperature;
    } & BthomeMithermometerBLE_DEVICE_SCHEMA & CoreCOMPONENT_SCHEMA;
