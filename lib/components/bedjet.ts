/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: bedjet.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/bedjet
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes) 2023
 **/
import type { ID, Pin } from "../base.js";
import { BaseComponent } from "../base.js";
import type { CorePositiveTimePeriodMilliseconds, CoreCOMPONENT_SCHEMA } from "./esphome.js";
import type { ClimateCLIMATE_SCHEMA } from "./climate.js";
import type { FanFAN_SCHEMA } from "./fan.js";

export class Bedjet extends BaseComponent<BedjetConfig> {
    componentName: string = "bedjet";
}

export interface BedjetConfig extends CoreCOMPONENT_SCHEMA {
    id?: ID;
    time_id?: ID;
    receive_timeout?: BedjetConfigReceiveTimeout;
    ble_client_id?: ID;
    update_interval?: any;
}

export interface BedjetConfigReceiveTimeout extends CorePositiveTimePeriodMilliseconds {
}

export interface BedjetBEDJET_CLIENT_SCHEMA {
    bedjet_id: ID;
}

export class BedjetClimate extends BaseComponent<BedjetClimateConfig> {
    componentName: string = "bedjet.climate";
}

export interface BedjetClimateConfig extends ClimateCLIMATE_SCHEMA, CoreCOMPONENT_SCHEMA, BedjetBEDJET_CLIENT_SCHEMA {
    id?: any;
    heat_mode?: BedjetClimateConfigHeatMode;
    update_interval?: any;
}

export type BedjetClimateConfigHeatMode = 'heat' | 'extended';

export class BedjetFan extends BaseComponent<BedjetFanConfig> {
    componentName: string = "bedjet.fan";
}

export interface BedjetFanConfig extends FanFAN_SCHEMA, CoreCOMPONENT_SCHEMA, BedjetBEDJET_CLIENT_SCHEMA {
    id?: any;
    update_interval?: any;
}
