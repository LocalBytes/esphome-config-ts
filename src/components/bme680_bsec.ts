/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: bme680_bsec.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/bme680_bsec
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes)
 **/
import { type ID, type Pin, EsphomeComponent } from "@/lib/base.js";
import type { CorePositiveTimePeriodMinutes } from "./esphome.js";
import type { SensorSENSORSCHEMA } from "./sensor.js";
import type { TextSensorTEXTSENSORSCHEMA } from "./text_sensor.js";

export class Bme680Bsec extends EsphomeComponent<Bme680BsecConfig> {
    componentName: string = "bme680_bsec";
}

export type Bme680BsecConfigIaqMode = 'STATIC' | 'MOBILE';
export type Bme680BsecConfigSampleRate = 'LP' | 'ULP';
export type Bme680BsecConfigStateSaveInterval = CorePositiveTimePeriodMinutes;
export type Bme680BsecConfigSupplyVoltage = '1.8V' | '3.3V';

export interface Bme680BsecConfig {
    address?: any;
    i2c_id?: ID;
    iaq_mode?: Bme680BsecConfigIaqMode;
    id?: ID;
    sample_rate?: Bme680BsecConfigSampleRate;
    state_save_interval?: Bme680BsecConfigStateSaveInterval;
    supply_voltage?: Bme680BsecConfigSupplyVoltage;
    temperature_offset?: any;
}

export class Bme680BsecSensor extends EsphomeComponent<Bme680BsecSensorConfig> {
    componentName: string = "bme680_bsec.sensor";
}

export interface Bme680BsecSensorConfigBreathVocEquivalent extends SensorSENSORSCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface Bme680BsecSensorConfigCo2Equivalent extends SensorSENSORSCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface Bme680BsecSensorConfigGasResistance extends SensorSENSORSCHEMA {
    accuracy_decimals?: any;
    icon?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export type Bme680BsecSensorConfigHumiditySampleRate = 'LP' | 'ULP';

export interface Bme680BsecSensorConfigHumidity extends SensorSENSORSCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    icon?: any;
    sample_rate?: Bme680BsecSensorConfigHumiditySampleRate;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface Bme680BsecSensorConfigIaq extends SensorSENSORSCHEMA {
    accuracy_decimals?: any;
    icon?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface Bme680BsecSensorConfigIaqAccuracy extends SensorSENSORSCHEMA {
    accuracy_decimals?: any;
    icon?: any;
    state_class?: any;
}

export type Bme680BsecSensorConfigPressureSampleRate = 'LP' | 'ULP';

export interface Bme680BsecSensorConfigPressure extends SensorSENSORSCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    sample_rate?: Bme680BsecSensorConfigPressureSampleRate;
    state_class?: any;
    unit_of_measurement?: any;
}

export type Bme680BsecSensorConfigTemperatureSampleRate = 'LP' | 'ULP';

export interface Bme680BsecSensorConfigTemperature extends SensorSENSORSCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    icon?: any;
    sample_rate?: Bme680BsecSensorConfigTemperatureSampleRate;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface Bme680BsecSensorConfig {
    bme680_bsec_id?: ID;
    breath_voc_equivalent?: Bme680BsecSensorConfigBreathVocEquivalent;
    co2_equivalent?: Bme680BsecSensorConfigCo2Equivalent;
    gas_resistance?: Bme680BsecSensorConfigGasResistance;
    humidity?: Bme680BsecSensorConfigHumidity;
    iaq?: Bme680BsecSensorConfigIaq;
    iaq_accuracy?: Bme680BsecSensorConfigIaqAccuracy;
    pressure?: Bme680BsecSensorConfigPressure;
    temperature?: Bme680BsecSensorConfigTemperature;
}

export class Bme680BsecTextSensor extends EsphomeComponent<Bme680BsecTextSensorConfig> {
    componentName: string = "bme680_bsec.text_sensor";
}

export interface Bme680BsecTextSensorConfigIaqAccuracy extends TextSensorTEXTSENSORSCHEMA {
    icon?: any;
}

export interface Bme680BsecTextSensorConfig {
    bme680_bsec_id?: ID;
    iaq_accuracy?: Bme680BsecTextSensorConfigIaqAccuracy;
}
