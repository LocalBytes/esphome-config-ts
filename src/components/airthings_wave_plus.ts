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
import type { SensorSENSOR_SCHEMA } from "./sensor.js";
import type { AirthingsWaveBaseBASE_SCHEMA } from "./airthings_wave_base.js";

export class AirthingsWavePlusSensor extends EsphomeComponent<AirthingsWavePlusSensorConfig> {
    componentName: string = "airthings_wave_plus.sensor";
}

export interface AirthingsWavePlusSensorConfigRadon extends SensorSENSOR_SCHEMA {
    unit_of_measurement?: any;
    icon?: any;
    accuracy_decimals?: any;
    state_class?: any;
}

export interface AirthingsWavePlusSensorConfigRadonLongTerm extends SensorSENSOR_SCHEMA {
    unit_of_measurement?: any;
    icon?: any;
    accuracy_decimals?: any;
    state_class?: any;
}

export interface AirthingsWavePlusSensorConfigCo2 extends SensorSENSOR_SCHEMA {
    unit_of_measurement?: any;
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
}

export interface AirthingsWavePlusSensorConfig extends AirthingsWaveBaseBASE_SCHEMA {
    id?: any;
    radon?: AirthingsWavePlusSensorConfigRadon;
    radon_long_term?: AirthingsWavePlusSensorConfigRadonLongTerm;
    co2?: AirthingsWavePlusSensorConfigCo2;
}
