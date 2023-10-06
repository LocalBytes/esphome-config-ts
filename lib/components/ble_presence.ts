/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: ble_presence.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/ble_presence
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes) 2023
 **/
import { ID, Pin, BaseComponent } from "../base.js";
import { BinarySensorBINARY_SENSOR_SCHEMA } from "./binary_sensor.js";
import { CoreCOMPONENT_SCHEMA } from "./esphome.js";

export class BlePresenceBinarySensor extends BaseComponent<BlePresenceBinarySensorConfig> {
    componentName: string = "ble_presence.binary_sensor";
}

export interface BlePresenceBinarySensorConfig extends BinarySensorBINARY_SENSOR_SCHEMA, CoreCOMPONENT_SCHEMA {
    id?: any;
    mac_address?: any;
    service_uuid?: any;
    ibeacon_major?: number;
    ibeacon_minor?: number;
    ibeacon_uuid?: any;
    min_rssi?: number;
    esp32_ble_id?: ID;
}
