/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: airthings_wave_base.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/airthings_wave_base
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes)
 **/
import { type ID, type Pin, EsphomeComponent } from "@/lib/base.js";
import type { SensorSENSOR_SCHEMA } from "./sensor.js";
import type { CoreCOMPONENT_SCHEMA } from "./esphome.js";

export abstract class AirthingsWaveBase extends EsphomeComponent {
    componentName: string = "airthings_wave_base";
}

export interface AirthingsWaveBaseBASE_SCHEMAHumidity extends SensorSENSOR_SCHEMA {
    unit_of_measurement?: any;
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
}

export interface AirthingsWaveBaseBASE_SCHEMATemperature extends SensorSENSOR_SCHEMA {
    unit_of_measurement?: any;
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
}

export interface AirthingsWaveBaseBASE_SCHEMAPressure extends SensorSENSOR_SCHEMA {
    unit_of_measurement?: any;
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
}

export interface AirthingsWaveBaseBASE_SCHEMATvoc extends SensorSENSOR_SCHEMA {
    unit_of_measurement?: any;
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
}

export interface AirthingsWaveBaseBASE_SCHEMABatteryVoltage extends SensorSENSOR_SCHEMA {
    unit_of_measurement?: any;
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
    entity_category?: any;
}

export type AirthingsWaveBaseBASE_SCHEMA = {
        humidity?: AirthingsWaveBaseBASE_SCHEMAHumidity;
        temperature?: AirthingsWaveBaseBASE_SCHEMATemperature;
        pressure?: AirthingsWaveBaseBASE_SCHEMAPressure;
        tvoc?: AirthingsWaveBaseBASE_SCHEMATvoc;
        battery_voltage?: AirthingsWaveBaseBASE_SCHEMABatteryVoltage;
        battery_update_interval?: any;
        update_interval?: any;
        ble_client_id?: ID;
    } & SensorSENSOR_SCHEMA & CoreCOMPONENT_SCHEMA;
