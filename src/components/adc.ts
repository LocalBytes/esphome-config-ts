/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: adc.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/adc
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes)
 **/
import { type ID, type Pin, EsphomeComponent } from "@/lib/base.js";
import type { Sensor_SENSOR_SCHEMA } from "./sensor.js";
import type { CoreCOMPONENT_SCHEMA } from "./esphome.js";

export class AdcSensor extends EsphomeComponent<AdcSensorConfig> {
    componentName: string = "adc.sensor";
}

export type AdcSensorConfigAttenuation = '0db' | '2.5db' | '6db' | '11db' | '12db' | 'auto';
export type AdcSensorConfigSamplingMode = 'avg' | 'min' | 'max';
export type AdcSensorConfig = {
        accuracy_decimals?: any;
        attenuation?: AdcSensorConfigAttenuation;
        device_class?: any;
        id?: any;
        nrf_saadc?: any;
        pin: Pin;
        raw?: boolean;
        samples?: number;
        sampling_mode?: AdcSensorConfigSamplingMode;
        state_class?: any;
        unit_of_measurement?: any;
        update_interval?: any;
    } & Sensor_SENSOR_SCHEMA & CoreCOMPONENT_SCHEMA;
