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
import type { CorePositiveTimePeriodMilliseconds, CoreCOMPONENTSCHEMA } from "./esphome.js";
import type { ClimateCLIMATESCHEMA } from "./climate.js";
import type { FanFANSCHEMA } from "./fan.js";
import type { SensorSENSORSCHEMA } from "./sensor.js";

export class Bedjet extends EsphomeComponent<BedjetConfig> {
    componentName: string = "bedjet";
}

export interface BedjetBEDJETCLIENTSCHEMA {
    bedjet_id?: ID;
}

export type BedjetConfigReceiveTimeout = CorePositiveTimePeriodMilliseconds;

export interface BedjetConfig extends CoreCOMPONENTSCHEMA {
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
    } & ClimateCLIMATESCHEMA & CoreCOMPONENTSCHEMA & BedjetBEDJETCLIENTSCHEMA;

export class BedjetFan extends EsphomeComponent<BedjetFanConfig> {
    componentName: string = "bedjet.fan";
}

export type BedjetFanConfig = {
        id?: ID;
        update_interval?: any;
    } & FanFANSCHEMA & CoreCOMPONENTSCHEMA & BedjetBEDJETCLIENTSCHEMA;

export class BedjetSensor extends EsphomeComponent<BedjetSensorConfig> {
    componentName: string = "bedjet.sensor";
}

export interface BedjetSensorConfigAmbientTemperature extends SensorSENSORSCHEMA {
    device_class?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface BedjetSensorConfigOutletTemperature extends SensorSENSORSCHEMA {
    device_class?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface BedjetSensorConfig extends BedjetBEDJETCLIENTSCHEMA {
    ambient_temperature?: BedjetSensorConfigAmbientTemperature;
    id?: ID;
    outlet_temperature?: BedjetSensorConfigOutletTemperature;
}
