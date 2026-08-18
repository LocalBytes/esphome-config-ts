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
import type { SensorSENSORSCHEMA } from "./sensor.js";
import type { AirthingsWaveBaseBASESCHEMA } from "./airthings_wave_base.js";

export class AirthingsWavePlusSensor extends EsphomeComponent<AirthingsWavePlusSensorConfig> {
    componentName: string = "airthings_wave_plus.sensor";
}

export interface AirthingsWavePlusSensorConfigCo2 extends SensorSENSORSCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export type AirthingsWavePlusSensorConfigDeviceType = 'WAVE_PLUS' | 'WAVE_GEN2';

export interface AirthingsWavePlusSensorConfigIlluminance extends SensorSENSORSCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface AirthingsWavePlusSensorConfigRadon extends SensorSENSORSCHEMA {
    accuracy_decimals?: any;
    icon?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface AirthingsWavePlusSensorConfigRadonLongTerm extends SensorSENSORSCHEMA {
    accuracy_decimals?: any;
    icon?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface AirthingsWavePlusSensorConfig extends AirthingsWaveBaseBASESCHEMA {
    co2?: AirthingsWavePlusSensorConfigCo2;
    device_type?: AirthingsWavePlusSensorConfigDeviceType;
    id?: ID;
    illuminance?: AirthingsWavePlusSensorConfigIlluminance;
    radon?: AirthingsWavePlusSensorConfigRadon;
    radon_long_term?: AirthingsWavePlusSensorConfigRadonLongTerm;
}
