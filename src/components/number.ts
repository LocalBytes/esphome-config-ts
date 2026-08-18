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
import type { CoreENTITYBASESCHEMA, CoreMQTTCOMMANDCOMPONENTSCHEMA, CoreCOMPONENTSCHEMA } from "./esphome.js";
import type { SensorSENSORSCHEMA } from "./sensor.js";

export abstract class Number extends EsphomeComponent {
    componentName: string = "number";
}

export interface NumberNUMBERINRANGECONDITIONSCHEMA {
    above?: any;
    below?: any;
    id: ID;
}

export interface NumberOPERATIONBASESCHEMA {
    id: ID;
}

export type NumberNUMBERSCHEMADeviceClass = 'absolute_humidity' | 'apparent_power' | 'aqi' | 'area' | 'atmospheric_pressure' | 'battery' | 'blood_glucose_concentration' | 'carbon_dioxide' | 'carbon_monoxide' | 'conductivity' | 'current' | 'data_rate' | 'data_size' | 'distance' | 'duration' | '' | 'energy' | 'energy_distance' | 'energy_storage' | 'frequency' | 'gas' | 'humidity' | 'illuminance' | 'irradiance' | 'moisture' | 'monetary' | 'nitrogen_dioxide' | 'nitrogen_monoxide' | 'nitrous_oxide' | 'ozone' | 'ph' | 'pm1' | 'pm10' | 'pm25' | 'pm4' | 'power' | 'power_factor' | 'precipitation' | 'precipitation_intensity' | 'pressure' | 'reactive_energy' | 'reactive_power' | 'signal_strength' | 'sound_pressure' | 'speed' | 'sulphur_dioxide' | 'temperature' | 'temperature_delta' | 'volatile_organic_compounds' | 'volatile_organic_compounds_parts' | 'voltage' | 'volume' | 'volume_flow_rate' | 'volume_storage' | 'water' | 'weight' | 'wind_direction' | 'wind_speed';
export type NumberNUMBERSCHEMAMode = 'AUTO' | 'BOX' | 'SLIDER';

export interface NumberNUMBERSCHEMAWebServer {
    sorting_group_id?: ID;
    sorting_weight?: any;
    web_server_id?: ID;
}

export type NumberNUMBERSCHEMA = {
        device_class?: NumberNUMBERSCHEMADeviceClass;
        mode?: NumberNUMBERSCHEMAMode;
        mqtt_id?: any;
        on_value?: object[];
        on_value_range?: object[];
        unit_of_measurement?: string;
        web_server?: NumberNUMBERSCHEMAWebServer;
        zigbee_id?: ID;
        zigbee_number?: any;
        id?: any;
    } & CoreENTITYBASESCHEMA & CoreMQTTCOMMANDCOMPONENTSCHEMA;

export class NumberSensor extends EsphomeComponent<NumberSensorConfig> {
    componentName: string = "number.sensor";
}

export type NumberSensorConfig = {
        id?: any;
        source_id: ID;
    } & SensorSENSORSCHEMA & CoreCOMPONENTSCHEMA;
