/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: pvvx_mithermometer.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/pvvx_mithermometer
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes)
 **/
import { type ID, type Pin, EsphomeComponent } from "@/lib/base.js";
import type { SensorSENSOR_SCHEMA } from "./sensor.js";
import type { Esp32BleTrackerESP_BLE_DEVICE_SCHEMA } from "./esp32_ble_tracker.js";
import type { CoreCOMPONENT_SCHEMA, CoreTimePeriodDict, CorePositiveTimePeriodSeconds } from "./esphome.js";
import type { DisplayBASIC_DISPLAY_SCHEMA } from "./display.js";
import type { BleClientBLE_CLIENT_SCHEMA } from "./ble_client.js";

export class PvvxMithermometerSensor extends EsphomeComponent<PvvxMithermometerSensorConfig> {
    componentName: string = "pvvx_mithermometer.sensor";
}

export interface PvvxMithermometerSensorConfigTemperature extends SensorSENSOR_SCHEMA {
    unit_of_measurement?: any;
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
}

export interface PvvxMithermometerSensorConfigHumidity extends SensorSENSOR_SCHEMA {
    unit_of_measurement?: any;
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
}

export interface PvvxMithermometerSensorConfigBatteryLevel extends SensorSENSOR_SCHEMA {
    unit_of_measurement?: any;
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
    entity_category?: any;
}

export interface PvvxMithermometerSensorConfigBatteryVoltage extends SensorSENSOR_SCHEMA {
    unit_of_measurement?: any;
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
    entity_category?: any;
}

export interface PvvxMithermometerSensorConfigSignalStrength extends SensorSENSOR_SCHEMA {
    unit_of_measurement?: any;
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
    entity_category?: any;
}

export type PvvxMithermometerSensorConfig = {
        id?: ID;
        mac_address: string;
        temperature?: PvvxMithermometerSensorConfigTemperature;
        humidity?: PvvxMithermometerSensorConfigHumidity;
        battery_level?: PvvxMithermometerSensorConfigBatteryLevel;
        battery_voltage?: PvvxMithermometerSensorConfigBatteryVoltage;
        signal_strength?: PvvxMithermometerSensorConfigSignalStrength;
    } & Esp32BleTrackerESP_BLE_DEVICE_SCHEMA & CoreCOMPONENT_SCHEMA;

export class PvvxMithermometerDisplay extends EsphomeComponent<PvvxMithermometerDisplayConfig> {
    componentName: string = "pvvx_mithermometer.display";
}

export type PvvxMithermometerDisplayConfigDisconnectDelay = CoreTimePeriodDict;
export type PvvxMithermometerDisplayConfigValidityPeriod = CorePositiveTimePeriodSeconds;
export type PvvxMithermometerDisplayConfig = {
        id?: ID;
        time_id?: ID;
        auto_clear_enabled?: boolean;
        disconnect_delay?: PvvxMithermometerDisplayConfigDisconnectDelay;
        validity_period?: PvvxMithermometerDisplayConfigValidityPeriod;
        update_interval?: any;
    } & DisplayBASIC_DISPLAY_SCHEMA & BleClientBLE_CLIENT_SCHEMA & CoreCOMPONENT_SCHEMA;
