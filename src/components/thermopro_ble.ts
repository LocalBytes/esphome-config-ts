/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: thermopro_ble.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/thermopro_ble
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes)
 **/
import { type ID, type Pin, EsphomeComponent } from "@/lib/base.js";
import type { SensorSENSORSCHEMA } from "./sensor.js";
import type { BthomeMithermometerBLEDEVICESCHEMA } from "./bthome_mithermometer.js";
import type { CoreCOMPONENTSCHEMA } from "./esphome.js";

export class ThermoproBleSensor extends EsphomeComponent<ThermoproBleSensorConfig> {
    componentName: string = "thermopro_ble.sensor";
}

export interface ThermoproBleSensorConfigBatteryLevel extends SensorSENSORSCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    entity_category?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface ThermoproBleSensorConfigExternalTemperature extends SensorSENSORSCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface ThermoproBleSensorConfigHumidity extends SensorSENSORSCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface ThermoproBleSensorConfigSignalStrength extends SensorSENSORSCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    entity_category?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface ThermoproBleSensorConfigTemperature extends SensorSENSORSCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export type ThermoproBleSensorConfig = {
        battery_level?: ThermoproBleSensorConfigBatteryLevel;
        external_temperature?: ThermoproBleSensorConfigExternalTemperature;
        humidity?: ThermoproBleSensorConfigHumidity;
        id?: ID;
        mac_address: string;
        signal_strength?: ThermoproBleSensorConfigSignalStrength;
        temperature?: ThermoproBleSensorConfigTemperature;
    } & BthomeMithermometerBLEDEVICESCHEMA & CoreCOMPONENTSCHEMA;
