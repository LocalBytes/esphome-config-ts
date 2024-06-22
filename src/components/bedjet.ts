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
import type { ClimateCLIMATE_SCHEMA } from "./climate.js";
import type { FanFAN_SCHEMA } from "./fan.js";

export class Bedjet extends EsphomeComponent<BedjetConfig> {
    componentName: string = "bedjet";
}

export type BedjetConfigReceiveTimeout = CorePositiveTimePeriodMilliseconds;

export interface BedjetConfig extends CoreCOMPONENT_SCHEMA {
    id?: ID;
    time_id?: ID;
    receive_timeout?: BedjetConfigReceiveTimeout;
    ble_client_id?: ID;
    update_interval?: any;
}

export interface BedjetBEDJET_CLIENT_SCHEMA {
    bedjet_id: ID;
}

export class BedjetClimate extends EsphomeComponent<BedjetClimateConfig> {
    componentName: string = "bedjet.climate";
}

export type BedjetClimateConfigHeatMode = 'heat' | 'extended';
export type BedjetClimateConfig = {
        id?: any;
        heat_mode?: BedjetClimateConfigHeatMode;
        update_interval?: any;
    } & ClimateCLIMATE_SCHEMA & CoreCOMPONENT_SCHEMA & BedjetBEDJET_CLIENT_SCHEMA;

export class BedjetFan extends EsphomeComponent<BedjetFanConfig> {
    componentName: string = "bedjet.fan";
}

export type BedjetFanConfig = {
        id?: any;
        update_interval?: any;
    } & FanFAN_SCHEMA & CoreCOMPONENT_SCHEMA & BedjetBEDJET_CLIENT_SCHEMA;
