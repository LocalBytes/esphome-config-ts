/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: xiaomi_rtcgq02lm.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/xiaomi_rtcgq02lm
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes) 2023
 **/
import { ID, Pin, BaseComponent } from "../base.js";
import { Esp32BleTrackerESP_BLE_DEVICE_SCHEMA } from "./esp32_ble_tracker.js";
import { CoreCOMPONENT_SCHEMA, CorePositiveTimePeriodMilliseconds } from "./esphome.js";
import { SensorSENSOR_SCHEMA } from "./sensor.js";
import { BinarySensorBINARY_SENSOR_SCHEMA } from "./binary_sensor.js";

export class XiaomiRtcgq02lm extends BaseComponent<XiaomiRtcgq02lmConfig> {
    componentName: string = "xiaomi_rtcgq02lm";
}

export interface XiaomiRtcgq02lmConfig extends Esp32BleTrackerESP_BLE_DEVICE_SCHEMA, CoreCOMPONENT_SCHEMA {
    id?: ID;
    bindkey: string;
    mac_address: string;
}

export class XiaomiRtcgq02lmSensor extends BaseComponent<XiaomiRtcgq02lmSensorConfig> {
    componentName: string = "xiaomi_rtcgq02lm.sensor";
}

export interface XiaomiRtcgq02lmSensorConfig {
    id?: ID;
    battery_level?: XiaomiRtcgq02lmSensorConfigBatteryLevel;
}

export interface XiaomiRtcgq02lmSensorConfigBatteryLevel extends SensorSENSOR_SCHEMA {
    unit_of_measurement?: any;
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
    entity_category?: any;
}

export class XiaomiRtcgq02lmBinarySensor extends BaseComponent<XiaomiRtcgq02lmBinarySensorConfig> {
    componentName: string = "xiaomi_rtcgq02lm.binary_sensor";
}

export interface XiaomiRtcgq02lmBinarySensorConfig {
    id?: ID;
    motion?: XiaomiRtcgq02lmBinarySensorConfigMotion;
    light?: XiaomiRtcgq02lmBinarySensorConfigLight;
    button?: XiaomiRtcgq02lmBinarySensorConfigButton;
}

export interface XiaomiRtcgq02lmBinarySensorConfigMotion extends BinarySensorBINARY_SENSOR_SCHEMA {
    device_class?: any;
    timeout?: XiaomiRtcgq02lmBinarySensorConfigMotionTimeout;
}

export interface XiaomiRtcgq02lmBinarySensorConfigMotionTimeout extends CorePositiveTimePeriodMilliseconds {
}

export interface XiaomiRtcgq02lmBinarySensorConfigLight extends BinarySensorBINARY_SENSOR_SCHEMA {
    device_class?: any;
}

export interface XiaomiRtcgq02lmBinarySensorConfigButton extends BinarySensorBINARY_SENSOR_SCHEMA {
    timeout?: XiaomiRtcgq02lmBinarySensorConfigButtonTimeout;
}

export interface XiaomiRtcgq02lmBinarySensorConfigButtonTimeout extends CorePositiveTimePeriodMilliseconds {
}
