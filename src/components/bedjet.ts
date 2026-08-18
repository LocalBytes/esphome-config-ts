/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: bedjet.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/bedjet
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes)
 **/
import { type ID, type Pin, EsphomeComponent } from "@/lib/base.js";
import type { CorePositiveTimePeriodMilliseconds, CoreCOMPONENT_SCHEMA } from "./esphome.js";
import type { Climate_CLIMATE_SCHEMA } from "./climate.js";
import type { Fan_FAN_SCHEMA } from "./fan.js";
import type { Sensor_SENSOR_SCHEMA } from "./sensor.js";

export class Bedjet extends EsphomeComponent<BedjetConfig> {
    componentName: string = "bedjet";
}

export interface BedjetBEDJET_CLIENT_SCHEMA {
    bedjet_id?: ID;
}

export type BedjetConfigReceiveTimeout = CorePositiveTimePeriodMilliseconds;

export interface BedjetConfig extends CoreCOMPONENT_SCHEMA {
    ble_client_id?: ID;
    id?: ID;
    receive_timeout?: BedjetConfigReceiveTimeout;
    time_id?: ID;
    update_interval?: any;
}

export class BedjetClimate extends EsphomeComponent<BedjetClimateConfig> {
    componentName: string = "bedjet.climate";
}

export type BedjetClimateConfigHeatMode = 'heat' | 'extended';
export type BedjetClimateConfigTemperatureSource = 'outlet' | 'ambient';
export type BedjetClimateConfig = {
        heat_mode?: BedjetClimateConfigHeatMode;
        id?: ID;
        temperature_source?: BedjetClimateConfigTemperatureSource;
        update_interval?: any;
    } & Climate_CLIMATE_SCHEMA & CoreCOMPONENT_SCHEMA & BedjetBEDJET_CLIENT_SCHEMA;

export class BedjetFan extends EsphomeComponent<BedjetFanConfig> {
    componentName: string = "bedjet.fan";
}

export type BedjetFanConfig = {
        id?: ID;
        update_interval?: any;
    } & Fan_FAN_SCHEMA & CoreCOMPONENT_SCHEMA & BedjetBEDJET_CLIENT_SCHEMA;

export class BedjetSensor extends EsphomeComponent<BedjetSensorConfig> {
    componentName: string = "bedjet.sensor";
}

export interface BedjetSensorConfigAmbientTemperature extends Sensor_SENSOR_SCHEMA {
    device_class?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface BedjetSensorConfigOutletTemperature extends Sensor_SENSOR_SCHEMA {
    device_class?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface BedjetSensorConfig extends BedjetBEDJET_CLIENT_SCHEMA {
    ambient_temperature?: BedjetSensorConfigAmbientTemperature;
    id?: ID;
    outlet_temperature?: BedjetSensorConfigOutletTemperature;
}
