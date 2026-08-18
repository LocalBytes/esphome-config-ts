/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: max31855.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/max31855
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes)
 **/
import { type ID, type Pin, EsphomeComponent } from "@/lib/base.js";
import type { Sensor_SENSOR_SCHEMA } from "./sensor.js";
import type { CoreCOMPONENT_SCHEMA } from "./esphome.js";

export class Max31855Sensor extends EsphomeComponent<Max31855SensorConfig> {
    componentName: string = "max31855.sensor";
}

export interface Max31855SensorConfigReferenceTemperature extends Sensor_SENSOR_SCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export type Max31855SensorConfigSpiMode = '0' | '1' | '2' | '3' | 'MODE0' | 'MODE1' | 'MODE2' | 'MODE3';
export type Max31855SensorConfig = {
        accuracy_decimals?: any;
        cs_pin: Pin;
        data_rate?: any;
        device_class?: any;
        id?: any;
        reference_temperature?: Max31855SensorConfigReferenceTemperature;
        release_device?: boolean;
        spi_id?: ID;
        spi_mode?: Max31855SensorConfigSpiMode;
        state_class?: any;
        unit_of_measurement?: any;
        update_interval?: any;
    } & Sensor_SENSOR_SCHEMA & CoreCOMPONENT_SCHEMA;
