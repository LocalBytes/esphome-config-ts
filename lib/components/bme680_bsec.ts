/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: bme680_bsec.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/bme680_bsec
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes) 2023
 **/
import type { ID, Pin } from "../base.js";
import { BaseComponent } from "../base.js";
import type { CorePositiveTimePeriodMinutes } from "./esphome.js";
import type { SensorSENSOR_SCHEMA } from "./sensor.js";
import type { TextSensorTEXT_SENSOR_SCHEMA } from "./text_sensor.js";

export class Bme680Bsec extends BaseComponent<Bme680BsecConfig> {
    componentName: string = "bme680_bsec";
}

export interface Bme680BsecConfig {
    id?: ID;
    temperature_offset?: any;
    iaq_mode?: Bme680BsecConfigIaqMode;
    sample_rate?: Bme680BsecConfigSampleRate;
    state_save_interval?: Bme680BsecConfigStateSaveInterval;
    i2c_id?: ID;
    address?: any;
}

export type Bme680BsecConfigIaqMode = 'STATIC' | 'MOBILE';
export type Bme680BsecConfigSampleRate = 'LP' | 'ULP';

export interface Bme680BsecConfigStateSaveInterval extends CorePositiveTimePeriodMinutes {
}

export class Bme680BsecSensor extends BaseComponent<Bme680BsecSensorConfig> {
    componentName: string = "bme680_bsec.sensor";
}

export interface Bme680BsecSensorConfig {
    bme680_bsec_id?: ID;
    temperature?: Bme680BsecSensorConfigTemperature;
    pressure?: Bme680BsecSensorConfigPressure;
    humidity?: Bme680BsecSensorConfigHumidity;
    gas_resistance?: Bme680BsecSensorConfigGasResistance;
    iaq?: Bme680BsecSensorConfigIaq;
    iaq_accuracy?: Bme680BsecSensorConfigIaqAccuracy;
    co2_equivalent?: Bme680BsecSensorConfigCo2Equivalent;
    breath_voc_equivalent?: Bme680BsecSensorConfigBreathVocEquivalent;
}

export interface Bme680BsecSensorConfigTemperature extends SensorSENSOR_SCHEMA {
    unit_of_measurement?: any;
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
    sample_rate?: Bme680BsecSensorConfigTemperatureSampleRate;
}

export type Bme680BsecSensorConfigTemperatureSampleRate = 'LP' | 'ULP';

export interface Bme680BsecSensorConfigPressure extends SensorSENSOR_SCHEMA {
    unit_of_measurement?: any;
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
    sample_rate?: Bme680BsecSensorConfigPressureSampleRate;
}

export type Bme680BsecSensorConfigPressureSampleRate = 'LP' | 'ULP';

export interface Bme680BsecSensorConfigHumidity extends SensorSENSOR_SCHEMA {
    unit_of_measurement?: any;
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
    sample_rate?: Bme680BsecSensorConfigHumiditySampleRate;
}

export type Bme680BsecSensorConfigHumiditySampleRate = 'LP' | 'ULP';

export interface Bme680BsecSensorConfigGasResistance extends SensorSENSOR_SCHEMA {
    unit_of_measurement?: any;
    icon?: any;
    accuracy_decimals?: any;
    state_class?: any;
}

export interface Bme680BsecSensorConfigIaq extends SensorSENSOR_SCHEMA {
    unit_of_measurement?: any;
    icon?: any;
    accuracy_decimals?: any;
    state_class?: any;
}

export interface Bme680BsecSensorConfigIaqAccuracy extends SensorSENSOR_SCHEMA {
    icon?: any;
    accuracy_decimals?: any;
    state_class?: any;
}

export interface Bme680BsecSensorConfigCo2Equivalent extends SensorSENSOR_SCHEMA {
    unit_of_measurement?: any;
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
}

export interface Bme680BsecSensorConfigBreathVocEquivalent extends SensorSENSOR_SCHEMA {
    unit_of_measurement?: any;
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
}

export class Bme680BsecTextSensor extends BaseComponent<Bme680BsecTextSensorConfig> {
    componentName: string = "bme680_bsec.text_sensor";
}

export interface Bme680BsecTextSensorConfig {
    bme680_bsec_id?: ID;
    iaq_accuracy?: Bme680BsecTextSensorConfigIaqAccuracy;
}

export interface Bme680BsecTextSensorConfigIaqAccuracy extends TextSensorTEXT_SENSOR_SCHEMA {
    icon?: any;
}
