/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: bme68x_bsec2.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/bme68x_bsec2
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes)
 **/
import { type ID, type Pin, EsphomeComponent } from "@/lib/base.js";
import type { CorePositiveTimePeriodMinutes } from "./esphome.js";
import type { Sensor_SENSOR_SCHEMA } from "./sensor.js";
import type { TextSensor_TEXT_SENSOR_SCHEMA } from "./text_sensor.js";

export abstract class Bme68xBsec2 extends EsphomeComponent {
    componentName: string = "bme68x_bsec2";
}

export type Bme68xBsec2CONFIG_SCHEMA_BASEAlgorithmOutput = 'classification' | 'regression';
export type Bme68xBsec2CONFIG_SCHEMA_BASEModel = 'bme680' | 'bme688';
export type Bme68xBsec2CONFIG_SCHEMA_BASEOperatingAge = '4d' | '28d';
export type Bme68xBsec2CONFIG_SCHEMA_BASESampleRate = 'LP' | 'ULP';
export type Bme68xBsec2CONFIG_SCHEMA_BASEStateSaveInterval = CorePositiveTimePeriodMinutes;
export type Bme68xBsec2CONFIG_SCHEMA_BASESupplyVoltage = '1.8V' | '3.3V';

export interface Bme68xBsec2CONFIG_SCHEMA_BASE {
    algorithm_output?: Bme68xBsec2CONFIG_SCHEMA_BASEAlgorithmOutput;
    id?: ID;
    model: Bme68xBsec2CONFIG_SCHEMA_BASEModel;
    operating_age?: Bme68xBsec2CONFIG_SCHEMA_BASEOperatingAge;
    raw_data_id?: ID;
    sample_rate?: Bme68xBsec2CONFIG_SCHEMA_BASESampleRate;
    state_save_interval?: Bme68xBsec2CONFIG_SCHEMA_BASEStateSaveInterval;
    supply_voltage?: Bme68xBsec2CONFIG_SCHEMA_BASESupplyVoltage;
    temperature_offset?: any;
}

export class Bme68xBsec2Sensor extends EsphomeComponent<Bme68xBsec2SensorConfig> {
    componentName: string = "bme68x_bsec2.sensor";
}

export interface Bme68xBsec2SensorConfigBreathVocEquivalent extends Sensor_SENSOR_SCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface Bme68xBsec2SensorConfigCo2Equivalent extends Sensor_SENSOR_SCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface Bme68xBsec2SensorConfigGasResistance extends Sensor_SENSOR_SCHEMA {
    accuracy_decimals?: any;
    icon?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export type Bme68xBsec2SensorConfigHumiditySampleRate = 'LP' | 'ULP';

export interface Bme68xBsec2SensorConfigHumidity extends Sensor_SENSOR_SCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    icon?: any;
    sample_rate?: Bme68xBsec2SensorConfigHumiditySampleRate;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface Bme68xBsec2SensorConfigIaq extends Sensor_SENSOR_SCHEMA {
    accuracy_decimals?: any;
    icon?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface Bme68xBsec2SensorConfigIaqAccuracy extends Sensor_SENSOR_SCHEMA {
    accuracy_decimals?: any;
    icon?: any;
    state_class?: any;
}

export interface Bme68xBsec2SensorConfigIaqStatic extends Sensor_SENSOR_SCHEMA {
    accuracy_decimals?: any;
    icon?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export type Bme68xBsec2SensorConfigPressureSampleRate = 'LP' | 'ULP';

export interface Bme68xBsec2SensorConfigPressure extends Sensor_SENSOR_SCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    sample_rate?: Bme68xBsec2SensorConfigPressureSampleRate;
    state_class?: any;
    unit_of_measurement?: any;
}

export type Bme68xBsec2SensorConfigTemperatureSampleRate = 'LP' | 'ULP';

export interface Bme68xBsec2SensorConfigTemperature extends Sensor_SENSOR_SCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    icon?: any;
    sample_rate?: Bme68xBsec2SensorConfigTemperatureSampleRate;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface Bme68xBsec2SensorConfig {
    bme68x_bsec2_id?: ID;
    breath_voc_equivalent?: Bme68xBsec2SensorConfigBreathVocEquivalent;
    co2_equivalent?: Bme68xBsec2SensorConfigCo2Equivalent;
    gas_resistance?: Bme68xBsec2SensorConfigGasResistance;
    humidity?: Bme68xBsec2SensorConfigHumidity;
    iaq?: Bme68xBsec2SensorConfigIaq;
    iaq_accuracy?: Bme68xBsec2SensorConfigIaqAccuracy;
    iaq_static?: Bme68xBsec2SensorConfigIaqStatic;
    id?: ID;
    pressure?: Bme68xBsec2SensorConfigPressure;
    temperature?: Bme68xBsec2SensorConfigTemperature;
}

export class Bme68xBsec2TextSensor extends EsphomeComponent<Bme68xBsec2TextSensorConfig> {
    componentName: string = "bme68x_bsec2.text_sensor";
}

export interface Bme68xBsec2TextSensorConfigIaqAccuracy extends TextSensor_TEXT_SENSOR_SCHEMA {
    icon?: any;
}

export interface Bme68xBsec2TextSensorConfig {
    bme68x_bsec2_id?: ID;
    iaq_accuracy?: Bme68xBsec2TextSensorConfigIaqAccuracy;
}
