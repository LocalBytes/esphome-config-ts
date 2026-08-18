/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: ble_presence.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/ble_presence
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes)
 **/
import { type ID, type Pin, EsphomeComponent } from "@/lib/base.js";
import type { CorePositiveTimePeriod, CoreCOMPONENT_SCHEMA } from "./esphome.js";
import type { BinarySensor_BINARY_SENSOR_SCHEMA } from "./binary_sensor.js";

export class BlePresenceBinarySensor extends EsphomeComponent<BlePresenceBinarySensorConfig> {
    componentName: string = "ble_presence.binary_sensor";
}

export type BlePresenceBinarySensorConfigTimeout = CorePositiveTimePeriod;
export type BlePresenceBinarySensorConfig = {
        esp32_ble_id?: ID;
        ibeacon_major?: number;
        ibeacon_minor?: number;
        ibeacon_uuid?: any;
        id?: any;
        irk?: any;
        mac_address?: any;
        min_rssi?: number;
        service_uuid?: any;
        timeout?: BlePresenceBinarySensorConfigTimeout;
    } & BinarySensor_BINARY_SENSOR_SCHEMA & CoreCOMPONENT_SCHEMA;
