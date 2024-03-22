/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: pvvx_mithermometer.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/pvvx_mithermometer
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes) 2023
 **/
import type { ID, Pin } from "../base.js";
import { BaseComponent } from "../base.js";
import type { SensorSENSOR_SCHEMA } from "./sensor.js";
import type { Esp32BleTrackerESP_BLE_DEVICE_SCHEMA } from "./esp32_ble_tracker.js";
import type { CoreCOMPONENT_SCHEMA, CoreTimePeriodDict, CorePositiveTimePeriodSeconds } from "./esphome.js";
import type { DisplayBASIC_DISPLAY_SCHEMA } from "./display.js";
import type { BleClientBLE_CLIENT_SCHEMA } from "./ble_client.js";

export class PvvxMithermometerSensor extends BaseComponent<PvvxMithermometerSensorConfig> {
    componentName: string = "pvvx_mithermometer.sensor";
}

export interface PvvxMithermometerSensorConfig extends Esp32BleTrackerESP_BLE_DEVICE_SCHEMA, CoreCOMPONENT_SCHEMA {
    id?: ID;
    mac_address: string;
    temperature?: PvvxMithermometerSensorConfigTemperature;
    humidity?: PvvxMithermometerSensorConfigHumidity;
    battery_level?: PvvxMithermometerSensorConfigBatteryLevel;
    battery_voltage?: PvvxMithermometerSensorConfigBatteryVoltage;
    signal_strength?: PvvxMithermometerSensorConfigSignalStrength;
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

export class PvvxMithermometerDisplay extends BaseComponent<PvvxMithermometerDisplayConfig> {
    componentName: string = "pvvx_mithermometer.display";
}

export interface PvvxMithermometerDisplayConfig extends DisplayBASIC_DISPLAY_SCHEMA, BleClientBLE_CLIENT_SCHEMA, CoreCOMPONENT_SCHEMA {
    id?: ID;
    time_id?: ID;
    auto_clear_enabled?: boolean;
    disconnect_delay?: PvvxMithermometerDisplayConfigDisconnectDelay;
    validity_period?: PvvxMithermometerDisplayConfigValidityPeriod;
    update_interval?: any;
}

export interface PvvxMithermometerDisplayConfigDisconnectDelay extends CoreTimePeriodDict {
}

export interface PvvxMithermometerDisplayConfigValidityPeriod extends CorePositiveTimePeriodSeconds {
}
