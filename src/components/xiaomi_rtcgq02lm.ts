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
import type { Esp32BleTrackerESP_BLE_DEVICE_SCHEMA } from "./esp32_ble_tracker.js";
import type { CoreCOMPONENT_SCHEMA, CorePositiveTimePeriodMilliseconds } from "./esphome.js";
import type { SensorSENSOR_SCHEMA } from "./sensor.js";
import type { BinarySensorBINARY_SENSOR_SCHEMA } from "./binary_sensor.js";

export class XiaomiRtcgq02lm extends EsphomeComponent<XiaomiRtcgq02lmConfig> {
    componentName: string = "xiaomi_rtcgq02lm";
}

export type XiaomiRtcgq02lmConfig = {
        id?: ID;
        bindkey: string;
        mac_address: string;
    } & Esp32BleTrackerESP_BLE_DEVICE_SCHEMA & CoreCOMPONENT_SCHEMA;

export class XiaomiRtcgq02lmSensor extends EsphomeComponent<XiaomiRtcgq02lmSensorConfig> {
    componentName: string = "xiaomi_rtcgq02lm.sensor";
}

export interface XiaomiRtcgq02lmSensorConfigBatteryLevel extends SensorSENSOR_SCHEMA {
    unit_of_measurement?: any;
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
    entity_category?: any;
}

export interface XiaomiRtcgq02lmSensorConfig {
    id?: ID;
    battery_level?: XiaomiRtcgq02lmSensorConfigBatteryLevel;
}

export class XiaomiRtcgq02lmBinarySensor extends EsphomeComponent<XiaomiRtcgq02lmBinarySensorConfig> {
    componentName: string = "xiaomi_rtcgq02lm.binary_sensor";
}

export type XiaomiRtcgq02lmBinarySensorConfigMotionTimeout = CorePositiveTimePeriodMilliseconds;

export interface XiaomiRtcgq02lmBinarySensorConfigMotion extends BinarySensorBINARY_SENSOR_SCHEMA {
    device_class?: any;
    timeout?: XiaomiRtcgq02lmBinarySensorConfigMotionTimeout;
}

export interface XiaomiRtcgq02lmBinarySensorConfigLight extends BinarySensorBINARY_SENSOR_SCHEMA {
    device_class?: any;
}

export type XiaomiRtcgq02lmBinarySensorConfigButtonTimeout = CorePositiveTimePeriodMilliseconds;

export interface XiaomiRtcgq02lmBinarySensorConfigButton extends BinarySensorBINARY_SENSOR_SCHEMA {
    timeout?: XiaomiRtcgq02lmBinarySensorConfigButtonTimeout;
}

export interface XiaomiRtcgq02lmBinarySensorConfig {
    id?: ID;
    motion?: XiaomiRtcgq02lmBinarySensorConfigMotion;
    light?: XiaomiRtcgq02lmBinarySensorConfigLight;
    button?: XiaomiRtcgq02lmBinarySensorConfigButton;
}
