/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: xiaomi_jqjcy01ym.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/xiaomi_jqjcy01ym
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes)
 **/
import { type ID, type Pin, EsphomeComponent } from "@/lib/base.js";
import type { Sensor_SENSOR_SCHEMA } from "./sensor.js";
import type { BthomeMithermometerBLE_DEVICE_SCHEMA } from "./bthome_mithermometer.js";
import type { CoreCOMPONENT_SCHEMA } from "./esphome.js";

export class XiaomiJqjcy01ymSensor extends EsphomeComponent<XiaomiJqjcy01ymSensorConfig> {
    componentName: string = "xiaomi_jqjcy01ym.sensor";
}

export interface XiaomiJqjcy01ymSensorConfigBatteryLevel extends Sensor_SENSOR_SCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    entity_category?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface XiaomiJqjcy01ymSensorConfigFormaldehyde extends Sensor_SENSOR_SCHEMA {
    accuracy_decimals?: any;
    icon?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface XiaomiJqjcy01ymSensorConfigHumidity extends Sensor_SENSOR_SCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface XiaomiJqjcy01ymSensorConfigTemperature extends Sensor_SENSOR_SCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export type XiaomiJqjcy01ymSensorConfig = {
        battery_level?: XiaomiJqjcy01ymSensorConfigBatteryLevel;
        formaldehyde?: XiaomiJqjcy01ymSensorConfigFormaldehyde;
        humidity?: XiaomiJqjcy01ymSensorConfigHumidity;
        id?: ID;
        mac_address: string;
        temperature?: XiaomiJqjcy01ymSensorConfigTemperature;
    } & BthomeMithermometerBLE_DEVICE_SCHEMA & CoreCOMPONENT_SCHEMA;
