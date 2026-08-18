/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: xiaomi_wx08zm.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/xiaomi_wx08zm
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes)
 **/
import { type ID, type Pin, EsphomeComponent } from "@/lib/base.js";
import type { SensorSENSORSCHEMA } from "./sensor.js";
import type { BinarySensorBINARYSENSORSCHEMA } from "./binary_sensor.js";
import type { BthomeMithermometerBLEDEVICESCHEMA } from "./bthome_mithermometer.js";
import type { CoreCOMPONENTSCHEMA } from "./esphome.js";

export class XiaomiWx08zmBinarySensor extends EsphomeComponent<XiaomiWx08zmBinarySensorConfig> {
    componentName: string = "xiaomi_wx08zm.binary_sensor";
}

export interface XiaomiWx08zmBinarySensorConfigBatteryLevel extends SensorSENSORSCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    entity_category?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface XiaomiWx08zmBinarySensorConfigTablet extends SensorSENSORSCHEMA {
    accuracy_decimals?: any;
    icon?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export type XiaomiWx08zmBinarySensorConfig = {
        battery_level?: XiaomiWx08zmBinarySensorConfigBatteryLevel;
        id?: any;
        mac_address: string;
        tablet?: XiaomiWx08zmBinarySensorConfigTablet;
    } & BinarySensorBINARYSENSORSCHEMA & BthomeMithermometerBLEDEVICESCHEMA & CoreCOMPONENTSCHEMA;
