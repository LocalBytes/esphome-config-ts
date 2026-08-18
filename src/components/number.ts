/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: number.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/number
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes)
 **/
import { type ID, type Pin, EsphomeComponent } from "@/lib/base.js";
import type { CoreENTITY_BASE_SCHEMA, CoreMQTT_COMMAND_COMPONENT_SCHEMA, CoreCOMPONENT_SCHEMA } from "./esphome.js";
import type { Sensor_SENSOR_SCHEMA } from "./sensor.js";

export abstract class Number extends EsphomeComponent {
    componentName: string = "number";
}

export interface NumberNUMBER_IN_RANGE_CONDITION_SCHEMA {
    above?: any;
    below?: any;
    id: ID;
}

export interface NumberOPERATION_BASE_SCHEMA {
    id: ID;
}

export type Number_NUMBER_SCHEMADeviceClass = 'absolute_humidity' | 'apparent_power' | 'aqi' | 'area' | 'atmospheric_pressure' | 'battery' | 'blood_glucose_concentration' | 'carbon_dioxide' | 'carbon_monoxide' | 'conductivity' | 'current' | 'data_rate' | 'data_size' | 'distance' | 'duration' | '' | 'energy' | 'energy_distance' | 'energy_storage' | 'frequency' | 'gas' | 'humidity' | 'illuminance' | 'irradiance' | 'moisture' | 'monetary' | 'nitrogen_dioxide' | 'nitrogen_monoxide' | 'nitrous_oxide' | 'ozone' | 'ph' | 'pm1' | 'pm10' | 'pm25' | 'pm4' | 'power' | 'power_factor' | 'precipitation' | 'precipitation_intensity' | 'pressure' | 'reactive_energy' | 'reactive_power' | 'signal_strength' | 'sound_pressure' | 'speed' | 'sulphur_dioxide' | 'temperature' | 'temperature_delta' | 'volatile_organic_compounds' | 'volatile_organic_compounds_parts' | 'voltage' | 'volume' | 'volume_flow_rate' | 'volume_storage' | 'water' | 'weight' | 'wind_direction' | 'wind_speed';
export type Number_NUMBER_SCHEMAMode = 'AUTO' | 'BOX' | 'SLIDER';

export interface Number_NUMBER_SCHEMAWebServer {
    sorting_group_id?: ID;
    sorting_weight?: any;
    web_server_id?: ID;
}

export type Number_NUMBER_SCHEMA = {
        device_class?: Number_NUMBER_SCHEMADeviceClass;
        mode?: Number_NUMBER_SCHEMAMode;
        mqtt_id?: any;
        on_value?: object[];
        on_value_range?: object[];
        unit_of_measurement?: string;
        web_server?: Number_NUMBER_SCHEMAWebServer;
        zigbee_id?: ID;
        zigbee_number?: any;
        id?: any;
    } & CoreENTITY_BASE_SCHEMA & CoreMQTT_COMMAND_COMPONENT_SCHEMA;

export class NumberSensor extends EsphomeComponent<NumberSensorConfig> {
    componentName: string = "number.sensor";
}

export type NumberSensorConfig = {
        id?: any;
        source_id: ID;
    } & Sensor_SENSOR_SCHEMA & CoreCOMPONENT_SCHEMA;
