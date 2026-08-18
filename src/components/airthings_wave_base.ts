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
import type { Sensor_SENSOR_SCHEMA } from "./sensor.js";
import type { CoreCOMPONENT_SCHEMA } from "./esphome.js";

export abstract class AirthingsWaveBase extends EsphomeComponent {
    componentName: string = "airthings_wave_base";
}

export interface AirthingsWaveBaseBASE_SCHEMABatteryVoltage extends Sensor_SENSOR_SCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    entity_category?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface AirthingsWaveBaseBASE_SCHEMAHumidity extends Sensor_SENSOR_SCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface AirthingsWaveBaseBASE_SCHEMAPressure extends Sensor_SENSOR_SCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface AirthingsWaveBaseBASE_SCHEMATemperature extends Sensor_SENSOR_SCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface AirthingsWaveBaseBASE_SCHEMATvoc extends Sensor_SENSOR_SCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface AirthingsWaveBaseBASE_SCHEMA extends CoreCOMPONENT_SCHEMA {
    battery_update_interval?: any;
    battery_voltage?: AirthingsWaveBaseBASE_SCHEMABatteryVoltage;
    ble_client_id?: ID;
    humidity?: AirthingsWaveBaseBASE_SCHEMAHumidity;
    pressure?: AirthingsWaveBaseBASE_SCHEMAPressure;
    temperature?: AirthingsWaveBaseBASE_SCHEMATemperature;
    tvoc?: AirthingsWaveBaseBASE_SCHEMATvoc;
    update_interval?: any;
}
