/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: bme680.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/bme680
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes)
 **/
import { type ID, type Pin, BaseComponent } from "@/lib/base.js";
import type { SensorSENSOR_SCHEMA } from "./sensor.js";
import type { CorePositiveTimePeriodMilliseconds, CoreCOMPONENT_SCHEMA } from "./esphome.js";

export class Bme680Sensor extends BaseComponent<Bme680SensorConfig> {
    componentName: string = "bme680.sensor";
}

export type Bme680SensorConfigTemperatureOversampling = 'NONE' | '1X' | '2X' | '4X' | '8X' | '16X';

export interface Bme680SensorConfigTemperature extends SensorSENSOR_SCHEMA {
    unit_of_measurement?: any;
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
    oversampling?: Bme680SensorConfigTemperatureOversampling;
}

export type Bme680SensorConfigPressureOversampling = 'NONE' | '1X' | '2X' | '4X' | '8X' | '16X';

export interface Bme680SensorConfigPressure extends SensorSENSOR_SCHEMA {
    unit_of_measurement?: any;
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
    oversampling?: Bme680SensorConfigPressureOversampling;
}

export type Bme680SensorConfigHumidityOversampling = 'NONE' | '1X' | '2X' | '4X' | '8X' | '16X';

export interface Bme680SensorConfigHumidity extends SensorSENSOR_SCHEMA {
    unit_of_measurement?: any;
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
    oversampling?: Bme680SensorConfigHumidityOversampling;
}

export interface Bme680SensorConfigGasResistance extends SensorSENSOR_SCHEMA {
    unit_of_measurement?: any;
    icon?: any;
    accuracy_decimals?: any;
    state_class?: any;
}

export type Bme680SensorConfigIirFilter = 'OFF' | '1X' | '3X' | '7X' | '15X' | '31X' | '63X' | '127X';
export type Bme680SensorConfigHeaterDuration = CorePositiveTimePeriodMilliseconds;

export interface Bme680SensorConfigHeater {
    temperature?: number;
    duration?: Bme680SensorConfigHeaterDuration;
}

export interface Bme680SensorConfig extends CoreCOMPONENT_SCHEMA {
    id?: ID;
    temperature?: Bme680SensorConfigTemperature;
    pressure?: Bme680SensorConfigPressure;
    humidity?: Bme680SensorConfigHumidity;
    gas_resistance?: Bme680SensorConfigGasResistance;
    iir_filter?: Bme680SensorConfigIirFilter;
    heater?: Bme680SensorConfigHeater;
    update_interval?: any;
    i2c_id?: ID;
    address?: any;
}
