/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: number.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/number
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes) 2023
 **/
import type { ID, Pin } from "../base.js";
import { BaseComponent } from "../base.js";
import type { CoreENTITY_BASE_SCHEMA, CoreMQTT_COMMAND_COMPONENT_SCHEMA } from "./esphome.js";

export abstract class Number extends BaseComponent {
    componentName: string = "number";
}

export interface NumberNUMBER_SCHEMA extends CoreENTITY_BASE_SCHEMA, CoreMQTT_COMMAND_COMPONENT_SCHEMA {
    mqtt_id?: any;
    on_value?: object[];
    on_value_range?: object[];
    unit_of_measurement?: string;
    mode?: NumberNUMBER_SCHEMAMode;
    device_class?: NumberNUMBER_SCHEMADeviceClass;
}

export type NumberNUMBER_SCHEMAMode = 'AUTO' | 'BOX' | 'SLIDER';
export type NumberNUMBER_SCHEMADeviceClass = 'apparent_power' | 'aqi' | 'atmospheric_pressure' | 'battery' | 'carbon_dioxide' | 'carbon_monoxide' | 'current' | 'data_rate' | 'data_size' | 'distance' | 'duration' | '' | 'energy' | 'energy_storage' | 'frequency' | 'gas' | 'humidity' | 'illuminance' | 'irradiance' | 'moisture' | 'monetary' | 'nitrogen_dioxide' | 'nitrogen_monoxide' | 'nitrous_oxide' | 'ozone' | 'ph' | 'pm1' | 'pm10' | 'pm25' | 'power' | 'power_factor' | 'precipitation' | 'precipitation_intensity' | 'pressure' | 'reactive_power' | 'signal_strength' | 'sound_pressure' | 'speed' | 'sulphur_dioxide' | 'temperature' | 'volatile_organic_compounds' | 'volatile_organic_compounds_parts' | 'voltage' | 'volume' | 'volume_storage' | 'water' | 'weight' | 'wind_speed';

export interface NumberNUMBER_IN_RANGE_CONDITION_SCHEMA {
    id: ID;
    above?: any;
    below?: any;
}

export interface NumberOPERATION_BASE_SCHEMA {
    id: ID;
}
