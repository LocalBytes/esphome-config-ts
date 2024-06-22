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
import { type ID, type Pin, BaseComponent } from "@/lib/base.js";
import type { SensorSENSOR_SCHEMA } from "./sensor.js";
import type { CoreCOMPONENT_SCHEMA } from "./esphome.js";

export class AdcSensor extends BaseComponent<AdcSensorConfig> {
    componentName: string = "adc.sensor";
}

export type AdcSensorConfigAttenuation = '0db' | '2.5db' | '6db' | '11db' | 'auto';
export type AdcSensorConfig = {
        id?: any;
        unit_of_measurement?: any;
        accuracy_decimals?: any;
        device_class?: any;
        state_class?: any;
        pin: Pin;
        raw?: boolean;
        attenuation?: AdcSensorConfigAttenuation;
        update_interval?: any;
    } & SensorSENSOR_SCHEMA & CoreCOMPONENT_SCHEMA;
