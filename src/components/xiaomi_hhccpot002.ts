/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 *
 * Schema: xiaomi_hhccpot002.json
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/xiaomi_hhccpot002
 *
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes)
 **/
import { type ID, type Pin, EsphomeComponent } from "@/lib/base.js";
import type { SensorSENSOR_SCHEMA } from "./sensor.js";
import type { Esp32BleTrackerESP_BLE_DEVICE_SCHEMA } from "./esp32_ble_tracker.js";
import type { CoreCOMPONENT_SCHEMA } from "./esphome.js";

export class XiaomiHhccpot002Sensor extends EsphomeComponent<XiaomiHhccpot002SensorConfig> {
    componentName: string = "xiaomi_hhccpot002.sensor";
}

export interface XiaomiHhccpot002SensorConfigMoisture extends SensorSENSOR_SCHEMA {
    unit_of_measurement?: any;
    icon?: any;
    accuracy_decimals?: any;
    state_class?: any;
}

export interface XiaomiHhccpot002SensorConfigConductivity extends SensorSENSOR_SCHEMA {
    unit_of_measurement?: any;
    icon?: any;
    accuracy_decimals?: any;
    state_class?: any;
}

export type XiaomiHhccpot002SensorConfig = {
        id?: ID;
        mac_address: string;
        moisture?: XiaomiHhccpot002SensorConfigMoisture;
        conductivity?: XiaomiHhccpot002SensorConfigConductivity;
    } & Esp32BleTrackerESP_BLE_DEVICE_SCHEMA & CoreCOMPONENT_SCHEMA;
