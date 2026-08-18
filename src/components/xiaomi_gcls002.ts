/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: xiaomi_gcls002.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/xiaomi_gcls002
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes)
 **/
import { type ID, type Pin, EsphomeComponent } from "@/lib/base.js";
import type { Sensor_SENSOR_SCHEMA } from "./sensor.js";
import type { BthomeMithermometerBLE_DEVICE_SCHEMA } from "./bthome_mithermometer.js";
import type { CoreCOMPONENT_SCHEMA } from "./esphome.js";

export class XiaomiGcls002Sensor extends EsphomeComponent<XiaomiGcls002SensorConfig> {
    componentName: string = "xiaomi_gcls002.sensor";
}

export interface XiaomiGcls002SensorConfigConductivity extends Sensor_SENSOR_SCHEMA {
    accuracy_decimals?: any;
    icon?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface XiaomiGcls002SensorConfigIlluminance extends Sensor_SENSOR_SCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface XiaomiGcls002SensorConfigMoisture extends Sensor_SENSOR_SCHEMA {
    accuracy_decimals?: any;
    icon?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface XiaomiGcls002SensorConfigTemperature extends Sensor_SENSOR_SCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export type XiaomiGcls002SensorConfig = {
        conductivity?: XiaomiGcls002SensorConfigConductivity;
        id?: ID;
        illuminance?: XiaomiGcls002SensorConfigIlluminance;
        mac_address: string;
        moisture?: XiaomiGcls002SensorConfigMoisture;
        temperature?: XiaomiGcls002SensorConfigTemperature;
    } & BthomeMithermometerBLE_DEVICE_SCHEMA & CoreCOMPONENT_SCHEMA;
