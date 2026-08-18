/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: ads1115.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/ads1115
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes)
 **/
import { type ID, type Pin, EsphomeComponent } from "@/lib/base.js";
import type { CoreCOMPONENT_SCHEMA } from "./esphome.js";
import type { Sensor_SENSOR_SCHEMA } from "./sensor.js";

export class Ads1115 extends EsphomeComponent<Ads1115Config> {
    componentName: string = "ads1115";
}

export interface Ads1115Config extends CoreCOMPONENT_SCHEMA {
    address: string;
    continuous_mode?: boolean;
    i2c_id?: ID;
    id?: ID;
}

export class Ads1115Sensor extends EsphomeComponent<Ads1115SensorConfig> {
    componentName: string = "ads1115.sensor";
}

export type Ads1115SensorConfigGain = '6.144' | '4.096' | '2.048' | '1.024' | '0.512' | '0.256';
export type Ads1115SensorConfigMultiplexer = 'A0_A1' | 'A0_A3' | 'A1_A3' | 'A2_A3' | 'A0_GND' | 'A1_GND' | 'A2_GND' | 'A3_GND';
export type Ads1115SensorConfigResolution = '16_BITS' | '12_BITS';
export type Ads1115SensorConfigSampleRate = '8' | '16' | '32' | '64' | '128' | '250' | '475' | '860';
export type Ads1115SensorConfig = {
        accuracy_decimals?: any;
        ads1115_id?: ID;
        device_class?: any;
        gain: Ads1115SensorConfigGain;
        id?: any;
        multiplexer: Ads1115SensorConfigMultiplexer;
        resolution?: Ads1115SensorConfigResolution;
        sample_rate?: Ads1115SensorConfigSampleRate;
        state_class?: any;
        unit_of_measurement?: any;
        update_interval?: any;
    } & Sensor_SENSOR_SCHEMA & CoreCOMPONENT_SCHEMA;
