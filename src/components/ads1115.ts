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
import type { SensorSENSOR_SCHEMA } from "./sensor.js";

export class Ads1115 extends EsphomeComponent<Ads1115Config> {
    componentName: string = "ads1115";
}

export interface Ads1115Config extends CoreCOMPONENT_SCHEMA {
    id?: ID;
    continuous_mode?: boolean;
    i2c_id?: ID;
    address: string;
}

export class Ads1115Sensor extends EsphomeComponent<Ads1115SensorConfig> {
    componentName: string = "ads1115.sensor";
}

export type Ads1115SensorConfigMultiplexer = 'A0_A1' | 'A0_A3' | 'A1_A3' | 'A2_A3' | 'A0_GND' | 'A1_GND' | 'A2_GND' | 'A3_GND';
export type Ads1115SensorConfigResolution = '16_BITS' | '12_BITS';
export type Ads1115SensorConfig = {
        id?: any;
        unit_of_measurement?: any;
        accuracy_decimals?: any;
        device_class?: any;
        state_class?: any;
        ads1115_id?: ID;
        multiplexer: Ads1115SensorConfigMultiplexer;
        gain: string;
        resolution?: Ads1115SensorConfigResolution;
        update_interval?: any;
    } & SensorSENSOR_SCHEMA & CoreCOMPONENT_SCHEMA;
