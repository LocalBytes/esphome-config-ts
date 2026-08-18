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
import type { SensorSENSORSCHEMA } from "./sensor.js";
import type { CoreCOMPONENTSCHEMA } from "./esphome.js";

export abstract class AirthingsWaveBase extends EsphomeComponent {
    componentName: string = "airthings_wave_base";
}

export interface AirthingsWaveBaseBASESCHEMABatteryVoltage extends SensorSENSORSCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    entity_category?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface AirthingsWaveBaseBASESCHEMAHumidity extends SensorSENSORSCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface AirthingsWaveBaseBASESCHEMAPressure extends SensorSENSORSCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface AirthingsWaveBaseBASESCHEMATemperature extends SensorSENSORSCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface AirthingsWaveBaseBASESCHEMATvoc extends SensorSENSORSCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface AirthingsWaveBaseBASESCHEMA extends CoreCOMPONENTSCHEMA {
    battery_update_interval?: any;
    battery_voltage?: AirthingsWaveBaseBASESCHEMABatteryVoltage;
    ble_client_id?: ID;
    humidity?: AirthingsWaveBaseBASESCHEMAHumidity;
    pressure?: AirthingsWaveBaseBASESCHEMAPressure;
    temperature?: AirthingsWaveBaseBASESCHEMATemperature;
    tvoc?: AirthingsWaveBaseBASESCHEMATvoc;
    update_interval?: any;
}
