/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: ble_rssi.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/ble_rssi
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes) 2023
 **/
import type { ID, Pin } from "../base.js";
import { BaseComponent } from "../base.js";
import type { SensorSENSOR_SCHEMA } from "./sensor.js";
import type { CoreCOMPONENT_SCHEMA } from "./esphome.js";

export class BleRssiSensor extends BaseComponent<BleRssiSensorConfig> {
    componentName: string = "ble_rssi.sensor";
}

export interface BleRssiSensorConfig extends SensorSENSOR_SCHEMA, CoreCOMPONENT_SCHEMA {
    id?: any;
    unit_of_measurement?: any;
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
    mac_address?: any;
    service_uuid?: any;
    ibeacon_major?: number;
    ibeacon_minor?: number;
    ibeacon_uuid?: any;
    esp32_ble_id?: ID;
}
