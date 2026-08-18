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
import { type ID, type Pin, EsphomeComponent } from "@/lib/base.js";
import type { CorePositiveTimePeriodMilliseconds, CoreENTITY_BASE_SCHEMA, CoreMQTT_COMPONENT_SCHEMA } from "./esphome.js";

export abstract class Sensor extends EsphomeComponent {
    componentName: string = "sensor";
}

export interface SensorCLAMP_SCHEMA {
    ignore_out_of_range?: boolean;
    max_value?: any;
    min_value?: any;
}

export interface SensorDELTA_SCHEMA {
    baseline?: any;
    max_value?: any;
    min_value?: any;
}

export interface SensorEXPONENTIAL_AVERAGE_SCHEMA {
    alpha?: any;
    send_every?: number;
    send_first_at?: number;
}

export type SensorHEARTBEAT_SCHEMAPeriod = CorePositiveTimePeriodMilliseconds;

export interface SensorHEARTBEAT_SCHEMA {
    optimistic?: boolean;
    period: SensorHEARTBEAT_SCHEMAPeriod;
}

export interface SensorMAX_SCHEMA {
    send_every?: number;
    send_first_at?: number;
    window_size?: number;
}

export interface SensorMEDIAN_SCHEMA {
    send_every?: number;
    send_first_at?: number;
    window_size?: number;
}

export interface SensorMIN_SCHEMA {
    send_every?: number;
    send_first_at?: number;
    window_size?: number;
}

export interface SensorQUANTILE_SCHEMA {
    quantile?: any;
    send_every?: number;
    send_first_at?: number;
    window_size?: number;
}

export interface SensorSENSOR_IN_RANGE_CONDITION_SCHEMA {
    above?: any;
    below?: any;
    id: ID;
}

export interface SensorSLIDING_AVERAGE_SCHEMA {
    send_every?: number;
    send_first_at?: number;
    window_size?: number;
}

export type SensorTHROTTLE_WITH_PRIORITY_SCHEMATimeout = CorePositiveTimePeriodMilliseconds;

export interface SensorTHROTTLE_WITH_PRIORITY_SCHEMA {
    timeout: SensorTHROTTLE_WITH_PRIORITY_SCHEMATimeout;
    value?: any;
}

export type SensorTIMEOUT_SCHEMATimeout = CorePositiveTimePeriodMilliseconds;

export interface SensorTIMEOUT_SCHEMA {
    timeout: SensorTIMEOUT_SCHEMATimeout;
    value?: any;
}

export type Sensor_SENSOR_SCHEMADeviceClass = 'absolute_humidity' | 'apparent_power' | 'aqi' | 'area' | 'atmospheric_pressure' | 'battery' | 'blood_glucose_concentration' | 'carbon_dioxide' | 'carbon_monoxide' | 'conductivity' | 'current' | 'data_rate' | 'data_size' | 'date' | 'distance' | 'duration' | '' | 'energy' | 'energy_distance' | 'energy_storage' | 'frequency' | 'gas' | 'humidity' | 'illuminance' | 'irradiance' | 'moisture' | 'monetary' | 'nitrogen_dioxide' | 'nitrogen_monoxide' | 'nitrous_oxide' | 'ozone' | 'ph' | 'pm1' | 'pm10' | 'pm25' | 'pm4' | 'power' | 'power_factor' | 'precipitation' | 'precipitation_intensity' | 'pressure' | 'reactive_energy' | 'reactive_power' | 'signal_strength' | 'sound_pressure' | 'speed' | 'sulphur_dioxide' | 'temperature' | 'temperature_delta' | 'timestamp' | 'uptime' | 'volatile_organic_compounds' | 'volatile_organic_compounds_parts' | 'voltage' | 'volume' | 'volume_flow_rate' | 'volume_storage' | 'water' | 'weight' | 'wind_direction' | 'wind_speed';
export type Sensor_SENSOR_SCHEMAEntityCategory = '' | 'diagnostic';
export type Sensor_SENSOR_SCHEMAExpireAfter = CorePositiveTimePeriodMilliseconds;
export type Sensor_SENSOR_SCHEMAReport = 'coordinator' | 'enable' | 'force';
export type Sensor_SENSOR_SCHEMAStateClass = '' | 'measurement' | 'total_increasing' | 'total' | 'measurement_angle';

export interface Sensor_SENSOR_SCHEMAWebServer {
    sorting_group_id?: ID;
    sorting_weight?: any;
    web_server_id?: ID;
}

export type Sensor_SENSOR_SCHEMA = {
        accuracy_decimals?: number;
        device_class?: Sensor_SENSOR_SCHEMADeviceClass;
        entity_category?: Sensor_SENSOR_SCHEMAEntityCategory;
        expire_after?: Sensor_SENSOR_SCHEMAExpireAfter;
        filters?: any[];
        force_update?: boolean;
        id?: ID;
        mqtt_id?: any;
        on_raw_value?: object[];
        on_value?: object[];
        on_value_range?: object[];
        report?: Sensor_SENSOR_SCHEMAReport;
        state_class?: Sensor_SENSOR_SCHEMAStateClass;
        unit_of_measurement?: string;
        web_server?: Sensor_SENSOR_SCHEMAWebServer;
        zigbee_id?: ID;
        zigbee_sensor?: any;
        name?: any;
        icon?: any;
        internal?: any;
        disabled_by_default?: any;
    } & CoreENTITY_BASE_SCHEMA & CoreMQTT_COMPONENT_SCHEMA;
