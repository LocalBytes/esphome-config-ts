/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: xiaomi_lywsd02.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/xiaomi_lywsd02
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes)
 **/
import { type ID, type Pin, EsphomeComponent } from "@/lib/base.js";
import type { SensorSENSORSCHEMA } from "./sensor.js";
import type { BthomeMithermometerBLEDEVICESCHEMA } from "./bthome_mithermometer.js";
import type { CoreCOMPONENTSCHEMA } from "./esphome.js";

export class XiaomiLywsd02Sensor extends EsphomeComponent<XiaomiLywsd02SensorConfig> {
    componentName: string = "xiaomi_lywsd02.sensor";
}

export interface XiaomiLywsd02SensorConfigBatteryLevel extends SensorSENSORSCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    entity_category?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface XiaomiLywsd02SensorConfigHumidity extends SensorSENSORSCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface XiaomiLywsd02SensorConfigTemperature extends SensorSENSORSCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export type XiaomiLywsd02SensorConfig = {
        battery_level?: XiaomiLywsd02SensorConfigBatteryLevel;
        humidity?: XiaomiLywsd02SensorConfigHumidity;
        id?: ID;
        mac_address: string;
        temperature?: XiaomiLywsd02SensorConfigTemperature;
    } & BthomeMithermometerBLEDEVICESCHEMA & CoreCOMPONENTSCHEMA;
