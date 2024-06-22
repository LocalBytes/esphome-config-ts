/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: sensor.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/sensor
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes)
 **/
import { type ID, type Pin, BaseComponent } from "@/lib/base.js";
import type { CorePositiveTimePeriodMilliseconds, CoreENTITY_BASE_SCHEMA, CoreMQTT_COMPONENT_SCHEMA } from "./esphome.js";

export abstract class Sensor extends BaseComponent {
    componentName: string = "sensor";
}

export type SensorSENSOR_SCHEMADeviceClass = 'apparent_power' | 'aqi' | 'atmospheric_pressure' | 'battery' | 'carbon_dioxide' | 'carbon_monoxide' | 'current' | 'data_rate' | 'data_size' | 'date' | 'distance' | 'duration' | '' | 'energy' | 'energy_storage' | 'frequency' | 'gas' | 'humidity' | 'illuminance' | 'irradiance' | 'moisture' | 'monetary' | 'nitrogen_dioxide' | 'nitrogen_monoxide' | 'nitrous_oxide' | 'ozone' | 'ph' | 'pm1' | 'pm10' | 'pm25' | 'power' | 'power_factor' | 'precipitation' | 'precipitation_intensity' | 'pressure' | 'reactive_power' | 'signal_strength' | 'sound_pressure' | 'speed' | 'sulphur_dioxide' | 'temperature' | 'timestamp' | 'volatile_organic_compounds' | 'volatile_organic_compounds_parts' | 'voltage' | 'volume' | 'volume_storage' | 'water' | 'weight' | 'wind_speed';
export type SensorSENSOR_SCHEMAStateClass = '' | 'measurement' | 'total_increasing' | 'total';
export type SensorSENSOR_SCHEMAExpireAfter = CorePositiveTimePeriodMilliseconds;
export type SensorSENSOR_SCHEMA = {
        mqtt_id?: any;
        id?: ID;
        unit_of_measurement?: string;
        accuracy_decimals?: number;
        device_class?: SensorSENSOR_SCHEMADeviceClass;
        state_class?: SensorSENSOR_SCHEMAStateClass;
        force_update?: boolean;
        expire_after?: SensorSENSOR_SCHEMAExpireAfter;
        filters?: any[];
        on_value?: object[];
        on_raw_value?: object[];
        on_value_range?: object[];
    } & CoreENTITY_BASE_SCHEMA & CoreMQTT_COMPONENT_SCHEMA;

export interface SensorQUANTILE_SCHEMA {
    window_size?: number;
    send_every?: number;
    send_first_at?: number;
    quantile?: any;
}

export interface SensorMEDIAN_SCHEMA {
    window_size?: number;
    send_every?: number;
    send_first_at?: number;
}

export interface SensorMIN_SCHEMA {
    window_size?: number;
    send_every?: number;
    send_first_at?: number;
}

export interface SensorMAX_SCHEMA {
    window_size?: number;
    send_every?: number;
    send_first_at?: number;
}

export interface SensorSLIDING_AVERAGE_SCHEMA {
    window_size?: number;
    send_every?: number;
    send_first_at?: number;
}

export interface SensorEXPONENTIAL_AVERAGE_SCHEMA {
    alpha?: any;
    send_every?: number;
    send_first_at?: number;
}

export type SensorDELTA_SCHEMAType = 'absolute' | 'percentage';

export interface SensorDELTA_SCHEMA {
    value: string;
    type?: SensorDELTA_SCHEMAType;
}

export type SensorTIMEOUT_SCHEMATimeout = CorePositiveTimePeriodMilliseconds;

export interface SensorTIMEOUT_SCHEMA {
    timeout: SensorTIMEOUT_SCHEMATimeout;
    value?: any;
}

export interface SensorCLAMP_SCHEMA {
    min_value?: any;
    max_value?: any;
}

export interface SensorSENSOR_IN_RANGE_CONDITION_SCHEMA {
    id: ID;
    above?: any;
    below?: any;
}
