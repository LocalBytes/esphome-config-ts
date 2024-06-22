/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 *
 * Schema: bme280.json
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/bme280
 *
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes)
 **/
import { type ID, type Pin, EsphomeComponent } from "@/lib/base.js";
import type { SensorSENSOR_SCHEMA } from "./sensor.js";
import type { CoreCOMPONENT_SCHEMA } from "./esphome.js";

export class Bme280Sensor extends EsphomeComponent<Bme280SensorConfig> {
    componentName: string = "bme280.sensor";
}

export type Bme280SensorConfigTemperatureOversampling = 'NONE' | '1X' | '2X' | '4X' | '8X' | '16X';

export interface Bme280SensorConfigTemperature extends SensorSENSOR_SCHEMA {
    unit_of_measurement?: any;
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
    oversampling?: Bme280SensorConfigTemperatureOversampling;
}

export type Bme280SensorConfigPressureOversampling = 'NONE' | '1X' | '2X' | '4X' | '8X' | '16X';

export interface Bme280SensorConfigPressure extends SensorSENSOR_SCHEMA {
    unit_of_measurement?: any;
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
    oversampling?: Bme280SensorConfigPressureOversampling;
}

export type Bme280SensorConfigHumidityOversampling = 'NONE' | '1X' | '2X' | '4X' | '8X' | '16X';

export interface Bme280SensorConfigHumidity extends SensorSENSOR_SCHEMA {
    unit_of_measurement?: any;
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
    oversampling?: Bme280SensorConfigHumidityOversampling;
}

export type Bme280SensorConfigIirFilter = 'OFF' | '2X' | '4X' | '8X' | '16X';

export interface Bme280SensorConfig extends CoreCOMPONENT_SCHEMA {
    id?: ID;
    temperature?: Bme280SensorConfigTemperature;
    pressure?: Bme280SensorConfigPressure;
    humidity?: Bme280SensorConfigHumidity;
    iir_filter?: Bme280SensorConfigIirFilter;
    update_interval?: any;
    i2c_id?: ID;
    address?: any;
}
