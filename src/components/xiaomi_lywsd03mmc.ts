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
import type { SensorSENSORSCHEMA } from "./sensor.js";
import type { BthomeMithermometerBLEDEVICESCHEMA } from "./bthome_mithermometer.js";
import type { CoreCOMPONENTSCHEMA } from "./esphome.js";

export class XiaomiLywsd03mmcSensor extends EsphomeComponent<XiaomiLywsd03mmcSensorConfig> {
    componentName: string = "xiaomi_lywsd03mmc.sensor";
}

export interface XiaomiLywsd03mmcSensorConfigBatteryLevel extends SensorSENSORSCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    entity_category?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface XiaomiLywsd03mmcSensorConfigHumidity extends SensorSENSORSCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface XiaomiLywsd03mmcSensorConfigTemperature extends SensorSENSORSCHEMA {
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
    } & BthomeMithermometerBLEDEVICESCHEMA & CoreCOMPONENTSCHEMA;
