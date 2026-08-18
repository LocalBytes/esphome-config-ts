/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: airthings_wave_plus.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/airthings_wave_plus
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes)
 **/
import { type ID, type Pin, EsphomeComponent } from "@/lib/base.js";
import type { Sensor_SENSOR_SCHEMA } from "./sensor.js";
import type { AirthingsWaveBaseBASE_SCHEMA } from "./airthings_wave_base.js";

export class AirthingsWavePlusSensor extends EsphomeComponent<AirthingsWavePlusSensorConfig> {
    componentName: string = "airthings_wave_plus.sensor";
}

export interface AirthingsWavePlusSensorConfigCo2 extends Sensor_SENSOR_SCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export type AirthingsWavePlusSensorConfigDeviceType = 'WAVE_PLUS' | 'WAVE_GEN2';

export interface AirthingsWavePlusSensorConfigIlluminance extends Sensor_SENSOR_SCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface AirthingsWavePlusSensorConfigRadon extends Sensor_SENSOR_SCHEMA {
    accuracy_decimals?: any;
    icon?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface AirthingsWavePlusSensorConfigRadonLongTerm extends Sensor_SENSOR_SCHEMA {
    accuracy_decimals?: any;
    icon?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface AirthingsWavePlusSensorConfig extends AirthingsWaveBaseBASE_SCHEMA {
    co2?: AirthingsWavePlusSensorConfigCo2;
    device_type?: AirthingsWavePlusSensorConfigDeviceType;
    id?: ID;
    illuminance?: AirthingsWavePlusSensorConfigIlluminance;
    radon?: AirthingsWavePlusSensorConfigRadon;
    radon_long_term?: AirthingsWavePlusSensorConfigRadonLongTerm;
}
