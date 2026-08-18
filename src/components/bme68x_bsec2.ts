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
import type { SensorSENSORSCHEMA } from "./sensor.js";
import type { TextSensorTEXTSENSORSCHEMA } from "./text_sensor.js";

export abstract class Bme68xBsec2 extends EsphomeComponent {
    componentName: string = "bme68x_bsec2";
}

export type Bme68xBsec2CONFIGSCHEMABASEAlgorithmOutput = 'classification' | 'regression';
export type Bme68xBsec2CONFIGSCHEMABASEModel = 'bme680' | 'bme688';
export type Bme68xBsec2CONFIGSCHEMABASEOperatingAge = '4d' | '28d';
export type Bme68xBsec2CONFIGSCHEMABASESampleRate = 'LP' | 'ULP';
export type Bme68xBsec2CONFIGSCHEMABASEStateSaveInterval = CorePositiveTimePeriodMinutes;
export type Bme68xBsec2CONFIGSCHEMABASESupplyVoltage = '1.8V' | '3.3V';

export interface Bme68xBsec2CONFIGSCHEMABASE {
    algorithm_output?: Bme68xBsec2CONFIGSCHEMABASEAlgorithmOutput;
    id?: ID;
    model: Bme68xBsec2CONFIGSCHEMABASEModel;
    operating_age?: Bme68xBsec2CONFIGSCHEMABASEOperatingAge;
    raw_data_id?: ID;
    sample_rate?: Bme68xBsec2CONFIGSCHEMABASESampleRate;
    state_save_interval?: Bme68xBsec2CONFIGSCHEMABASEStateSaveInterval;
    supply_voltage?: Bme68xBsec2CONFIGSCHEMABASESupplyVoltage;
    temperature_offset?: any;
}

export class Bme68xBsec2Sensor extends EsphomeComponent<Bme68xBsec2SensorConfig> {
    componentName: string = "bme68x_bsec2.sensor";
}

export interface Bme68xBsec2SensorConfigBreathVocEquivalent extends SensorSENSORSCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface Bme68xBsec2SensorConfigCo2Equivalent extends SensorSENSORSCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface Bme68xBsec2SensorConfigGasResistance extends SensorSENSORSCHEMA {
    accuracy_decimals?: any;
    icon?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export type Bme68xBsec2SensorConfigHumiditySampleRate = 'LP' | 'ULP';

export interface Bme68xBsec2SensorConfigHumidity extends SensorSENSORSCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    icon?: any;
    sample_rate?: Bme68xBsec2SensorConfigHumiditySampleRate;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface Bme68xBsec2SensorConfigIaq extends SensorSENSORSCHEMA {
    accuracy_decimals?: any;
    icon?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface Bme68xBsec2SensorConfigIaqAccuracy extends SensorSENSORSCHEMA {
    accuracy_decimals?: any;
    icon?: any;
    state_class?: any;
}

export interface Bme68xBsec2SensorConfigIaqStatic extends SensorSENSORSCHEMA {
    accuracy_decimals?: any;
    icon?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export type Bme68xBsec2SensorConfigPressureSampleRate = 'LP' | 'ULP';

export interface Bme68xBsec2SensorConfigPressure extends SensorSENSORSCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    sample_rate?: Bme68xBsec2SensorConfigPressureSampleRate;
    state_class?: any;
    unit_of_measurement?: any;
}

export type Bme68xBsec2SensorConfigTemperatureSampleRate = 'LP' | 'ULP';

export interface Bme68xBsec2SensorConfigTemperature extends SensorSENSORSCHEMA {
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

export interface Bme68xBsec2TextSensorConfigIaqAccuracy extends TextSensorTEXTSENSORSCHEMA {
    icon?: any;
}

export interface Bme68xBsec2TextSensorConfig {
    bme68x_bsec2_id?: ID;
    iaq_accuracy?: Bme68xBsec2TextSensorConfigIaqAccuracy;
}
