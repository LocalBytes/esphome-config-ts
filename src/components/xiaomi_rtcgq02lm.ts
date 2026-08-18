/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: xiaomi_rtcgq02lm.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/xiaomi_rtcgq02lm
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes)
 **/
import { type ID, type Pin, EsphomeComponent } from "@/lib/base.js";
import type { BthomeMithermometerBLEDEVICESCHEMA } from "./bthome_mithermometer.js";
import type { CoreCOMPONENTSCHEMA, CorePositiveTimePeriodMilliseconds } from "./esphome.js";
import type { BinarySensorBINARYSENSORSCHEMA } from "./binary_sensor.js";
import type { SensorSENSORSCHEMA } from "./sensor.js";

export class XiaomiRtcgq02lm extends EsphomeComponent<XiaomiRtcgq02lmConfig> {
    componentName: string = "xiaomi_rtcgq02lm";
}

export type XiaomiRtcgq02lmConfig = {
        bindkey: string;
        id?: ID;
        mac_address: string;
    } & BthomeMithermometerBLEDEVICESCHEMA & CoreCOMPONENTSCHEMA;

export class XiaomiRtcgq02lmBinarySensor extends EsphomeComponent<XiaomiRtcgq02lmBinarySensorConfig> {
    componentName: string = "xiaomi_rtcgq02lm.binary_sensor";
}

export type XiaomiRtcgq02lmBinarySensorConfigButtonTimeout = CorePositiveTimePeriodMilliseconds;

export interface XiaomiRtcgq02lmBinarySensorConfigButton extends BinarySensorBINARYSENSORSCHEMA {
    timeout?: XiaomiRtcgq02lmBinarySensorConfigButtonTimeout;
}

export interface XiaomiRtcgq02lmBinarySensorConfigLight extends BinarySensorBINARYSENSORSCHEMA {
    device_class?: any;
}

export type XiaomiRtcgq02lmBinarySensorConfigMotionTimeout = CorePositiveTimePeriodMilliseconds;

export interface XiaomiRtcgq02lmBinarySensorConfigMotion extends BinarySensorBINARYSENSORSCHEMA {
    device_class?: any;
    timeout?: XiaomiRtcgq02lmBinarySensorConfigMotionTimeout;
}

export interface XiaomiRtcgq02lmBinarySensorConfig {
    button?: XiaomiRtcgq02lmBinarySensorConfigButton;
    id?: ID;
    light?: XiaomiRtcgq02lmBinarySensorConfigLight;
    motion?: XiaomiRtcgq02lmBinarySensorConfigMotion;
}

export class XiaomiRtcgq02lmSensor extends EsphomeComponent<XiaomiRtcgq02lmSensorConfig> {
    componentName: string = "xiaomi_rtcgq02lm.sensor";
}

export interface XiaomiRtcgq02lmSensorConfigBatteryLevel extends SensorSENSORSCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    entity_category?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface XiaomiRtcgq02lmSensorConfig {
    battery_level?: XiaomiRtcgq02lmSensorConfigBatteryLevel;
    id?: ID;
}
