/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: xiaomi_cgpr1.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/xiaomi_cgpr1
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes)
 **/
import { type ID, type Pin, EsphomeComponent } from "@/lib/base.js";
import type { SensorSENSORSCHEMA } from "./sensor.js";
import type { BinarySensorBINARYSENSORSCHEMA } from "./binary_sensor.js";
import type { BthomeMithermometerBLEDEVICESCHEMA } from "./bthome_mithermometer.js";
import type { CoreCOMPONENTSCHEMA } from "./esphome.js";

export class XiaomiCgpr1BinarySensor extends EsphomeComponent<XiaomiCgpr1BinarySensorConfig> {
    componentName: string = "xiaomi_cgpr1.binary_sensor";
}

export interface XiaomiCgpr1BinarySensorConfigBatteryLevel extends SensorSENSORSCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    entity_category?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface XiaomiCgpr1BinarySensorConfigIdleTime extends SensorSENSORSCHEMA {
    accuracy_decimals?: any;
    entity_category?: any;
    icon?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface XiaomiCgpr1BinarySensorConfigIlluminance extends SensorSENSORSCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export type XiaomiCgpr1BinarySensorConfig = {
        battery_level?: XiaomiCgpr1BinarySensorConfigBatteryLevel;
        bindkey: string;
        device_class?: any;
        id?: any;
        idle_time?: XiaomiCgpr1BinarySensorConfigIdleTime;
        illuminance?: XiaomiCgpr1BinarySensorConfigIlluminance;
        mac_address: string;
    } & BinarySensorBINARYSENSORSCHEMA & BthomeMithermometerBLEDEVICESCHEMA & CoreCOMPONENTSCHEMA;
