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
import type { CorePositiveTimePeriodMilliseconds, CoreENTITYBASESCHEMA, CoreMQTTCOMPONENTSCHEMA } from "./esphome.js";

export abstract class Sensor extends EsphomeComponent {
    componentName: string = "sensor";
}

export interface SensorCLAMPSCHEMA {
    ignore_out_of_range?: boolean;
    max_value?: any;
    min_value?: any;
}

export interface SensorDELTASCHEMA {
    baseline?: any;
    max_value?: any;
    min_value?: any;
}

export interface SensorEXPONENTIALAVERAGESCHEMA {
    alpha?: any;
    send_every?: number;
    send_first_at?: number;
}

export type SensorHEARTBEATSCHEMAPeriod = CorePositiveTimePeriodMilliseconds;

export interface SensorHEARTBEATSCHEMA {
    optimistic?: boolean;
    period: SensorHEARTBEATSCHEMAPeriod;
}

export interface SensorMAXSCHEMA {
    send_every?: number;
    send_first_at?: number;
    window_size?: number;
}

export interface SensorMEDIANSCHEMA {
    send_every?: number;
    send_first_at?: number;
    window_size?: number;
}

export interface SensorMINSCHEMA {
    send_every?: number;
    send_first_at?: number;
    window_size?: number;
}

export interface SensorQUANTILESCHEMA {
    quantile?: any;
    send_every?: number;
    send_first_at?: number;
    window_size?: number;
}

export interface SensorSENSORINRANGECONDITIONSCHEMA {
    above?: any;
    below?: any;
    id: ID;
}

export interface SensorSLIDINGAVERAGESCHEMA {
    send_every?: number;
    send_first_at?: number;
    window_size?: number;
}

export type SensorTHROTTLEWITHPRIORITYSCHEMATimeout = CorePositiveTimePeriodMilliseconds;

export interface SensorTHROTTLEWITHPRIORITYSCHEMA {
    timeout: SensorTHROTTLEWITHPRIORITYSCHEMATimeout;
    value?: any;
}

export type SensorTIMEOUTSCHEMATimeout = CorePositiveTimePeriodMilliseconds;

export interface SensorTIMEOUTSCHEMA {
    timeout: SensorTIMEOUTSCHEMATimeout;
    value?: any;
}

export type SensorSENSORSCHEMADeviceClass = 'absolute_humidity' | 'apparent_power' | 'aqi' | 'area' | 'atmospheric_pressure' | 'battery' | 'blood_glucose_concentration' | 'carbon_dioxide' | 'carbon_monoxide' | 'conductivity' | 'current' | 'data_rate' | 'data_size' | 'date' | 'distance' | 'duration' | '' | 'energy' | 'energy_distance' | 'energy_storage' | 'frequency' | 'gas' | 'humidity' | 'illuminance' | 'irradiance' | 'moisture' | 'monetary' | 'nitrogen_dioxide' | 'nitrogen_monoxide' | 'nitrous_oxide' | 'ozone' | 'ph' | 'pm1' | 'pm10' | 'pm25' | 'pm4' | 'power' | 'power_factor' | 'precipitation' | 'precipitation_intensity' | 'pressure' | 'reactive_energy' | 'reactive_power' | 'signal_strength' | 'sound_pressure' | 'speed' | 'sulphur_dioxide' | 'temperature' | 'temperature_delta' | 'timestamp' | 'uptime' | 'volatile_organic_compounds' | 'volatile_organic_compounds_parts' | 'voltage' | 'volume' | 'volume_flow_rate' | 'volume_storage' | 'water' | 'weight' | 'wind_direction' | 'wind_speed';
export type SensorSENSORSCHEMAEntityCategory = '' | 'diagnostic';
export type SensorSENSORSCHEMAExpireAfter = CorePositiveTimePeriodMilliseconds;
export type SensorSENSORSCHEMAReport = 'coordinator' | 'enable' | 'force';
export type SensorSENSORSCHEMAStateClass = '' | 'measurement' | 'total_increasing' | 'total' | 'measurement_angle';

export interface SensorSENSORSCHEMAWebServer {
    sorting_group_id?: ID;
    sorting_weight?: any;
    web_server_id?: ID;
}

export type SensorSENSORSCHEMA = {
        accuracy_decimals?: number;
        device_class?: SensorSENSORSCHEMADeviceClass;
        entity_category?: SensorSENSORSCHEMAEntityCategory;
        expire_after?: SensorSENSORSCHEMAExpireAfter;
        filters?: any[];
        force_update?: boolean;
        id?: ID;
        mqtt_id?: any;
        on_raw_value?: object[];
        on_value?: object[];
        on_value_range?: object[];
        report?: SensorSENSORSCHEMAReport;
        state_class?: SensorSENSORSCHEMAStateClass;
        unit_of_measurement?: string;
        web_server?: SensorSENSORSCHEMAWebServer;
        zigbee_id?: ID;
        zigbee_sensor?: any;
        name?: any;
        icon?: any;
        internal?: any;
        disabled_by_default?: any;
    } & CoreENTITYBASESCHEMA & CoreMQTTCOMPONENTSCHEMA;
