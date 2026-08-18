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
import type { CorePositiveTimePeriod, CorePositiveTimePeriodSeconds, CoreCOMPONENT_SCHEMA } from "./esphome.js";
import type { DisplayBASIC_DISPLAY_SCHEMA } from "./display.js";
import type { BleClientBLE_CLIENT_SCHEMA } from "./ble_client.js";
import type { Sensor_SENSOR_SCHEMA } from "./sensor.js";
import type { BthomeMithermometerBLE_DEVICE_SCHEMA } from "./bthome_mithermometer.js";

export class PvvxMithermometerDisplay extends EsphomeComponent<PvvxMithermometerDisplayConfig> {
    componentName: string = "pvvx_mithermometer.display";
}

export type PvvxMithermometerDisplayConfigDisconnectDelay = CorePositiveTimePeriod;
export type PvvxMithermometerDisplayConfigValidityPeriod = CorePositiveTimePeriodSeconds;
export type PvvxMithermometerDisplayConfig = {
        auto_clear_enabled?: boolean;
        disconnect_delay?: PvvxMithermometerDisplayConfigDisconnectDelay;
        id?: ID;
        time_id?: ID;
        update_interval?: any;
        validity_period?: PvvxMithermometerDisplayConfigValidityPeriod;
        lambda?: any;
    } & DisplayBASIC_DISPLAY_SCHEMA & BleClientBLE_CLIENT_SCHEMA & CoreCOMPONENT_SCHEMA;

export class PvvxMithermometerSensor extends EsphomeComponent<PvvxMithermometerSensorConfig> {
    componentName: string = "pvvx_mithermometer.sensor";
}

export interface PvvxMithermometerSensorConfigBatteryLevel extends Sensor_SENSOR_SCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    entity_category?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface PvvxMithermometerSensorConfigBatteryVoltage extends Sensor_SENSOR_SCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    entity_category?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface PvvxMithermometerSensorConfigHumidity extends Sensor_SENSOR_SCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface PvvxMithermometerSensorConfigSignalStrength extends Sensor_SENSOR_SCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    entity_category?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface PvvxMithermometerSensorConfigTemperature extends Sensor_SENSOR_SCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export type PvvxMithermometerSensorConfig = {
        battery_level?: PvvxMithermometerSensorConfigBatteryLevel;
        battery_voltage?: PvvxMithermometerSensorConfigBatteryVoltage;
        humidity?: PvvxMithermometerSensorConfigHumidity;
        id?: ID;
        mac_address: string;
        signal_strength?: PvvxMithermometerSensorConfigSignalStrength;
        temperature?: PvvxMithermometerSensorConfigTemperature;
    } & BthomeMithermometerBLE_DEVICE_SCHEMA & CoreCOMPONENT_SCHEMA;
