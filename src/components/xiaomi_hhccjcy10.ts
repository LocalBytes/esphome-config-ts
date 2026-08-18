/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: xiaomi_hhccjcy10.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/xiaomi_hhccjcy10
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes)
 **/
import { type ID, type Pin, EsphomeComponent } from "@/lib/base.js";
import type { SensorSENSORSCHEMA } from "./sensor.js";
import type { BthomeMithermometerBLEDEVICESCHEMA } from "./bthome_mithermometer.js";
import type { CoreCOMPONENTSCHEMA } from "./esphome.js";

export class XiaomiHhccjcy10Sensor extends EsphomeComponent<XiaomiHhccjcy10SensorConfig> {
    componentName: string = "xiaomi_hhccjcy10.sensor";
}

export interface XiaomiHhccjcy10SensorConfigBatteryLevel extends SensorSENSORSCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    entity_category?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface XiaomiHhccjcy10SensorConfigConductivity extends SensorSENSORSCHEMA {
    accuracy_decimals?: any;
    icon?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface XiaomiHhccjcy10SensorConfigIlluminance extends SensorSENSORSCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface XiaomiHhccjcy10SensorConfigMoisture extends SensorSENSORSCHEMA {
    accuracy_decimals?: any;
    icon?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface XiaomiHhccjcy10SensorConfigTemperature extends SensorSENSORSCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export type XiaomiHhccjcy10SensorConfig = {
        battery_level?: XiaomiHhccjcy10SensorConfigBatteryLevel;
        conductivity?: XiaomiHhccjcy10SensorConfigConductivity;
        id?: ID;
        illuminance?: XiaomiHhccjcy10SensorConfigIlluminance;
        mac_address: string;
        moisture?: XiaomiHhccjcy10SensorConfigMoisture;
        temperature?: XiaomiHhccjcy10SensorConfigTemperature;
    } & BthomeMithermometerBLEDEVICESCHEMA & CoreCOMPONENTSCHEMA;
