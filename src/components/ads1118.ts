/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: ads1118.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/ads1118
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes)
 **/
import { type ID, type Pin, EsphomeComponent } from "@/lib/base.js";
import type { CoreCOMPONENT_SCHEMA } from "./esphome.js";

export class Ads1118 extends EsphomeComponent<Ads1118Config> {
    componentName: string = "ads1118";
}

export type Ads1118ConfigSpiMode = '0' | '1' | '2' | '3' | 'MODE0' | 'MODE1' | 'MODE2' | 'MODE3';

export interface Ads1118Config extends CoreCOMPONENT_SCHEMA {
    cs_pin: Pin;
    data_rate?: any;
    id?: ID;
    release_device?: boolean;
    spi_id?: ID;
    spi_mode?: Ads1118ConfigSpiMode;
}

export class Ads1118Sensor extends EsphomeComponent<Ads1118SensorConfig> {
    componentName: string = "ads1118.sensor";
}

export type Ads1118SensorConfig = Ads1118SensorConfigAdc | Ads1118SensorConfigTemperature;
export type Ads1118SensorConfigAdcGain = '6.144' | '4.096' | '2.048' | '1.024' | '0.512' | '0.256';
export type Ads1118SensorConfigAdcMultiplexer = 'A0_A1' | 'A0_A3' | 'A1_A3' | 'A2_A3' | 'A0_GND' | 'A1_GND' | 'A2_GND' | 'A3_GND';

export interface Ads1118SensorConfigAdc {
    type: "adc" | "ADC";
    accuracy_decimals?: any;
    ads1118_id?: ID;
    device_class?: any;
    gain: Ads1118SensorConfigAdcGain;
    id?: any;
    multiplexer: Ads1118SensorConfigAdcMultiplexer;
    state_class?: any;
    unit_of_measurement?: any;
    update_interval?: any;
}

export interface Ads1118SensorConfigTemperature {
    type: "temperature" | "TEMPERATURE";
    accuracy_decimals?: any;
    ads1118_id?: ID;
    device_class?: any;
    id?: any;
    state_class?: any;
    unit_of_measurement?: any;
    update_interval?: any;
}
