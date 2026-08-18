/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: max31856.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/max31856
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes)
 **/
import { type ID, type Pin, EsphomeComponent } from "@/lib/base.js";
import type { Sensor_SENSOR_SCHEMA } from "./sensor.js";
import type { CoreCOMPONENT_SCHEMA } from "./esphome.js";

export class Max31856Sensor extends EsphomeComponent<Max31856SensorConfig> {
    componentName: string = "max31856.sensor";
}

export type Max31856SensorConfigMainsFilter = '50' | '60';
export type Max31856SensorConfigSpiMode = '0' | '1' | '2' | '3' | 'MODE0' | 'MODE1' | 'MODE2' | 'MODE3';
export type Max31856SensorConfigThermocoupleType = 'B' | 'E' | 'J' | 'K' | 'N' | 'R' | 'S' | 'T';
export type Max31856SensorConfig = {
        accuracy_decimals?: any;
        cs_pin: Pin;
        data_rate?: any;
        device_class?: any;
        id?: any;
        mains_filter?: Max31856SensorConfigMainsFilter;
        release_device?: boolean;
        spi_id?: ID;
        spi_mode?: Max31856SensorConfigSpiMode;
        state_class?: any;
        thermocouple_type?: Max31856SensorConfigThermocoupleType;
        unit_of_measurement?: any;
        update_interval?: any;
    } & Sensor_SENSOR_SCHEMA & CoreCOMPONENT_SCHEMA;
