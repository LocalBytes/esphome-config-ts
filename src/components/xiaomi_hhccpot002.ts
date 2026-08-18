/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: xiaomi_hhccpot002.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/xiaomi_hhccpot002
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes)
 **/
import { type ID, type Pin, EsphomeComponent } from "@/lib/base.js";
import type { Sensor_SENSOR_SCHEMA } from "./sensor.js";
import type { BthomeMithermometerBLE_DEVICE_SCHEMA } from "./bthome_mithermometer.js";
import type { CoreCOMPONENT_SCHEMA } from "./esphome.js";

export class XiaomiHhccpot002Sensor extends EsphomeComponent<XiaomiHhccpot002SensorConfig> {
    componentName: string = "xiaomi_hhccpot002.sensor";
}

export interface XiaomiHhccpot002SensorConfigConductivity extends Sensor_SENSOR_SCHEMA {
    accuracy_decimals?: any;
    icon?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface XiaomiHhccpot002SensorConfigMoisture extends Sensor_SENSOR_SCHEMA {
    accuracy_decimals?: any;
    icon?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export type XiaomiHhccpot002SensorConfig = {
        conductivity?: XiaomiHhccpot002SensorConfigConductivity;
        id?: ID;
        mac_address: string;
        moisture?: XiaomiHhccpot002SensorConfigMoisture;
    } & BthomeMithermometerBLE_DEVICE_SCHEMA & CoreCOMPONENT_SCHEMA;
