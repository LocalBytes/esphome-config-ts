/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: xiaomi_hhccjcy01.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/xiaomi_hhccjcy01
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes)
 **/
import { type ID, type Pin, EsphomeComponent } from "@/lib/base.js";
import type { SensorSENSORSCHEMA } from "./sensor.js";
import type { BthomeMithermometerBLEDEVICESCHEMA } from "./bthome_mithermometer.js";
import type { CoreCOMPONENTSCHEMA } from "./esphome.js";

export class XiaomiHhccjcy01Sensor extends EsphomeComponent<XiaomiHhccjcy01SensorConfig> {
    componentName: string = "xiaomi_hhccjcy01.sensor";
}

export interface XiaomiHhccjcy01SensorConfigBatteryLevel extends SensorSENSORSCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    entity_category?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface XiaomiHhccjcy01SensorConfigConductivity extends SensorSENSORSCHEMA {
    accuracy_decimals?: any;
    icon?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface XiaomiHhccjcy01SensorConfigIlluminance extends SensorSENSORSCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface XiaomiHhccjcy01SensorConfigMoisture extends SensorSENSORSCHEMA {
    accuracy_decimals?: any;
    icon?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface XiaomiHhccjcy01SensorConfigTemperature extends SensorSENSORSCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export type XiaomiHhccjcy01SensorConfig = {
        battery_level?: XiaomiHhccjcy01SensorConfigBatteryLevel;
        conductivity?: XiaomiHhccjcy01SensorConfigConductivity;
        id?: ID;
        illuminance?: XiaomiHhccjcy01SensorConfigIlluminance;
        mac_address: string;
        moisture?: XiaomiHhccjcy01SensorConfigMoisture;
        temperature?: XiaomiHhccjcy01SensorConfigTemperature;
    } & BthomeMithermometerBLEDEVICESCHEMA & CoreCOMPONENTSCHEMA;
