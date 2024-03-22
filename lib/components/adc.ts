/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: adc.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/adc
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes) 2023
 **/
import type { ID, Pin } from "../base.js";
import { BaseComponent } from "../base.js";
import type { SensorSENSOR_SCHEMA } from "./sensor.js";
import type { CoreCOMPONENT_SCHEMA } from "./esphome.js";

export class AdcSensor extends BaseComponent<AdcSensorConfig> {
    componentName: string = "adc.sensor";
}

export interface AdcSensorConfig extends SensorSENSOR_SCHEMA, CoreCOMPONENT_SCHEMA {
    id?: any;
    unit_of_measurement?: any;
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
    pin: Pin;
    raw?: boolean;
    attenuation?: AdcSensorConfigAttenuation;
    update_interval?: any;
}

export type AdcSensorConfigAttenuation = '0db' | '2.5db' | '6db' | '11db' | 'auto';
