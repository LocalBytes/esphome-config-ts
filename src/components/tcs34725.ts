/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: tcs34725.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/tcs34725
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes)
 **/
import { type ID, type Pin, EsphomeComponent } from "@/lib/base.js";
import type { SensorSENSORSCHEMA } from "./sensor.js";
import type { CoreCOMPONENTSCHEMA } from "./esphome.js";

export class Tcs34725Sensor extends EsphomeComponent<Tcs34725SensorConfig> {
    componentName: string = "tcs34725.sensor";
}

export type Tcs34725SensorConfigBlueChannel = Tcs34725SensorColorChannelSchema;
export type Tcs34725SensorConfigClearChannel = Tcs34725SensorColorChannelSchema;

export interface Tcs34725SensorConfigColorTemperature extends SensorSENSORSCHEMA {
    accuracy_decimals?: any;
    icon?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export type Tcs34725SensorConfigGain = '1X' | '4X' | '16X' | '60X';
export type Tcs34725SensorConfigGreenChannel = Tcs34725SensorColorChannelSchema;

export interface Tcs34725SensorConfigIlluminance extends SensorSENSORSCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export type Tcs34725SensorConfigIntegrationTime = 'auto' | '2.4ms' | '24ms' | '50ms' | '101ms' | '120ms' | '154ms' | '180ms' | '199ms' | '240ms' | '300ms' | '360ms' | '401ms' | '420ms' | '480ms' | '499ms' | '540ms' | '600ms' | '614ms';
export type Tcs34725SensorConfigRedChannel = Tcs34725SensorColorChannelSchema;

export interface Tcs34725SensorConfig extends CoreCOMPONENTSCHEMA {
    address?: any;
    blue_channel?: Tcs34725SensorConfigBlueChannel;
    clear_channel?: Tcs34725SensorConfigClearChannel;
    color_temperature?: Tcs34725SensorConfigColorTemperature;
    gain?: Tcs34725SensorConfigGain;
    glass_attenuation_factor?: any;
    green_channel?: Tcs34725SensorConfigGreenChannel;
    i2c_id?: ID;
    id?: ID;
    illuminance?: Tcs34725SensorConfigIlluminance;
    integration_time?: Tcs34725SensorConfigIntegrationTime;
    red_channel?: Tcs34725SensorConfigRedChannel;
    update_interval?: any;
}

export interface Tcs34725SensorColorChannelSchema extends SensorSENSORSCHEMA {
    accuracy_decimals?: any;
    icon?: any;
    state_class?: any;
    unit_of_measurement?: any;
}
