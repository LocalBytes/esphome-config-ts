/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: xiaomi_cgdk2.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/xiaomi_cgdk2
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes)
 **/
import { type ID, type Pin, EsphomeComponent } from "@/lib/base.js";
import type { SensorSENSORSCHEMA } from "./sensor.js";
import type { BthomeMithermometerBLEDEVICESCHEMA } from "./bthome_mithermometer.js";
import type { CoreCOMPONENTSCHEMA } from "./esphome.js";

export class XiaomiCgdk2Sensor extends EsphomeComponent<XiaomiCgdk2SensorConfig> {
    componentName: string = "xiaomi_cgdk2.sensor";
}

export interface XiaomiCgdk2SensorConfigBatteryLevel extends SensorSENSORSCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    entity_category?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface XiaomiCgdk2SensorConfigHumidity extends SensorSENSORSCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface XiaomiCgdk2SensorConfigTemperature extends SensorSENSORSCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export type XiaomiCgdk2SensorConfig = {
        battery_level?: XiaomiCgdk2SensorConfigBatteryLevel;
        bindkey: string;
        humidity?: XiaomiCgdk2SensorConfigHumidity;
        id?: ID;
        mac_address: string;
        temperature?: XiaomiCgdk2SensorConfigTemperature;
    } & BthomeMithermometerBLEDEVICESCHEMA & CoreCOMPONENTSCHEMA;
