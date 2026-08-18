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
import { type ID, type Pin, EsphomeComponent } from "@/lib/base.js";
import type { SensorSENSORSCHEMA } from "./sensor.js";
import type { CorePositiveTimePeriodMilliseconds, CoreCOMPONENTSCHEMA } from "./esphome.js";

export class Bme680Sensor extends EsphomeComponent<Bme680SensorConfig> {
    componentName: string = "bme680.sensor";
}

export interface Bme680SensorConfigGasResistance extends SensorSENSORSCHEMA {
    accuracy_decimals?: any;
    icon?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export type Bme680SensorConfigHeaterDuration = CorePositiveTimePeriodMilliseconds;

export interface Bme680SensorConfigHeater {
    duration?: Bme680SensorConfigHeaterDuration;
    temperature?: number;
}

export type Bme680SensorConfigHumidityOversampling = 'NONE' | '1X' | '2X' | '4X' | '8X' | '16X';

export interface Bme680SensorConfigHumidity extends SensorSENSORSCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    oversampling?: Bme680SensorConfigHumidityOversampling;
    state_class?: any;
    unit_of_measurement?: any;
}

export type Bme680SensorConfigIirFilter = 'OFF' | '1X' | '3X' | '7X' | '15X' | '31X' | '63X' | '127X';
export type Bme680SensorConfigPressureOversampling = 'NONE' | '1X' | '2X' | '4X' | '8X' | '16X';

export interface Bme680SensorConfigPressure extends SensorSENSORSCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    oversampling?: Bme680SensorConfigPressureOversampling;
    state_class?: any;
    unit_of_measurement?: any;
}

export type Bme680SensorConfigTemperatureOversampling = 'NONE' | '1X' | '2X' | '4X' | '8X' | '16X';

export interface Bme680SensorConfigTemperature extends SensorSENSORSCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    oversampling?: Bme680SensorConfigTemperatureOversampling;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface Bme680SensorConfig extends CoreCOMPONENTSCHEMA {
    address?: any;
    gas_resistance?: Bme680SensorConfigGasResistance;
    heater?: Bme680SensorConfigHeater;
    humidity?: Bme680SensorConfigHumidity;
    i2c_id?: ID;
    id?: ID;
    iir_filter?: Bme680SensorConfigIirFilter;
    pressure?: Bme680SensorConfigPressure;
    temperature?: Bme680SensorConfigTemperature;
    update_interval?: any;
}
