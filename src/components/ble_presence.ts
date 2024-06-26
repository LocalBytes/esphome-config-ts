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
import type { BinarySensorBINARY_SENSOR_SCHEMA } from "./binary_sensor.js";
import type { CoreCOMPONENT_SCHEMA } from "./esphome.js";

export class BlePresenceBinarySensor extends EsphomeComponent<BlePresenceBinarySensorConfig> {
    componentName: string = "ble_presence.binary_sensor";
}

export type BlePresenceBinarySensorConfig = {
        id?: any;
        mac_address?: any;
        service_uuid?: any;
        ibeacon_major?: number;
        ibeacon_minor?: number;
        ibeacon_uuid?: any;
        min_rssi?: number;
        esp32_ble_id?: ID;
    } & BinarySensorBINARY_SENSOR_SCHEMA & CoreCOMPONENT_SCHEMA;
