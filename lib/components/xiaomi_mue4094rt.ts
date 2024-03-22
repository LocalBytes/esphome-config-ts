/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: xiaomi_mue4094rt.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/xiaomi_mue4094rt
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes) 2023
 **/
import type { ID, Pin } from "../base.js";
import { BaseComponent } from "../base.js";
import type { CorePositiveTimePeriodMilliseconds, CoreCOMPONENT_SCHEMA } from "./esphome.js";
import type { BinarySensorBINARY_SENSOR_SCHEMA } from "./binary_sensor.js";
import type { Esp32BleTrackerESP_BLE_DEVICE_SCHEMA } from "./esp32_ble_tracker.js";

export class XiaomiMue4094rtBinarySensor extends BaseComponent<XiaomiMue4094rtBinarySensorConfig> {
    componentName: string = "xiaomi_mue4094rt.binary_sensor";
}

export interface XiaomiMue4094rtBinarySensorConfig extends BinarySensorBINARY_SENSOR_SCHEMA, Esp32BleTrackerESP_BLE_DEVICE_SCHEMA, CoreCOMPONENT_SCHEMA {
    id?: any;
    device_class?: any;
    mac_address: string;
    timeout?: XiaomiMue4094rtBinarySensorConfigTimeout;
}

export interface XiaomiMue4094rtBinarySensorConfigTimeout extends CorePositiveTimePeriodMilliseconds {
}
