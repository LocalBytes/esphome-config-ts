/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: xiaomi_lywsdcgq.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/xiaomi_lywsdcgq
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes)
 **/
import { type ID, type Pin, EsphomeComponent } from "@/lib/base.js";
import type { SensorSENSORSCHEMA } from "./sensor.js";
import type { BthomeMithermometerBLEDEVICESCHEMA } from "./bthome_mithermometer.js";
import type { CoreCOMPONENTSCHEMA } from "./esphome.js";

export class XiaomiLywsdcgqSensor extends EsphomeComponent<XiaomiLywsdcgqSensorConfig> {
    componentName: string = "xiaomi_lywsdcgq.sensor";
}

export interface XiaomiLywsdcgqSensorConfigBatteryLevel extends SensorSENSORSCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    entity_category?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface XiaomiLywsdcgqSensorConfigHumidity extends SensorSENSORSCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface XiaomiLywsdcgqSensorConfigTemperature extends SensorSENSORSCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export type XiaomiLywsdcgqSensorConfig = {
        battery_level?: XiaomiLywsdcgqSensorConfigBatteryLevel;
        humidity?: XiaomiLywsdcgqSensorConfigHumidity;
        id?: ID;
        mac_address: string;
        temperature?: XiaomiLywsdcgqSensorConfigTemperature;
    } & BthomeMithermometerBLEDEVICESCHEMA & CoreCOMPONENTSCHEMA;
