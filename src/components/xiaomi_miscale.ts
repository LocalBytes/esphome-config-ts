/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: xiaomi_miscale.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/xiaomi_miscale
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes)
 **/
import { type ID, type Pin, BaseComponent } from "@/lib/base.js";
import type { SensorSENSOR_SCHEMA } from "./sensor.js";
import type { Esp32BleTrackerESP_BLE_DEVICE_SCHEMA } from "./esp32_ble_tracker.js";
import type { CoreCOMPONENT_SCHEMA } from "./esphome.js";

export class XiaomiMiscaleSensor extends BaseComponent<XiaomiMiscaleSensorConfig> {
    componentName: string = "xiaomi_miscale.sensor";
}

export interface XiaomiMiscaleSensorConfigWeight extends SensorSENSOR_SCHEMA {
    unit_of_measurement?: any;
    icon?: any;
    accuracy_decimals?: any;
    state_class?: any;
}

export interface XiaomiMiscaleSensorConfigImpedance extends SensorSENSOR_SCHEMA {
    unit_of_measurement?: any;
    icon?: any;
    accuracy_decimals?: any;
    state_class?: any;
}

export type XiaomiMiscaleSensorConfig = {
        id?: ID;
        mac_address: string;
        clear_impedance?: boolean;
        weight?: XiaomiMiscaleSensorConfigWeight;
        impedance?: XiaomiMiscaleSensorConfigImpedance;
    } & Esp32BleTrackerESP_BLE_DEVICE_SCHEMA & CoreCOMPONENT_SCHEMA;
