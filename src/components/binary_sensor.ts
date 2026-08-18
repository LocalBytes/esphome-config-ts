/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: binary_sensor.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/binary_sensor
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes)
 **/
import { type ID, type Pin, EsphomeComponent } from "@/lib/base.js";
import type { CorePositiveTimePeriodMilliseconds, CoreENTITYBASESCHEMA, CoreMQTTCOMPONENTSCHEMA } from "./esphome.js";

export abstract class BinarySensor extends EsphomeComponent {
    componentName: string = "binary_sensor";
}

export interface BinarySensorBINARYSENSORCONDITIONSCHEMA {
    id: ID;
}

export type BinarySensorMULTICLICKTIMINGSCHEMAMaxLength = CorePositiveTimePeriodMilliseconds;
export type BinarySensorMULTICLICKTIMINGSCHEMAMinLength = CorePositiveTimePeriodMilliseconds;

export interface BinarySensorMULTICLICKTIMINGSCHEMA {
    max_length?: BinarySensorMULTICLICKTIMINGSCHEMAMaxLength;
    min_length?: BinarySensorMULTICLICKTIMINGSCHEMAMinLength;
    state?: boolean;
}

export type BinarySensorBINARYSENSORSCHEMADeviceClass = 'battery' | 'battery_charging' | 'carbon_monoxide' | 'cold' | 'connectivity' | 'door' | '' | 'garage_door' | 'gas' | 'heat' | 'light' | 'lock' | 'moisture' | 'motion' | 'moving' | 'occupancy' | 'opening' | 'plug' | 'power' | 'presence' | 'problem' | 'running' | 'safety' | 'smoke' | 'sound' | 'tamper' | 'update' | 'vibration' | 'window';
export type BinarySensorBINARYSENSORSCHEMAReport = 'coordinator' | 'enable' | 'force';

export interface BinarySensorBINARYSENSORSCHEMAWebServer {
    sorting_group_id?: ID;
    sorting_weight?: any;
    web_server_id?: ID;
}

export type BinarySensorBINARYSENSORSCHEMA = {
        device_class?: BinarySensorBINARYSENSORSCHEMADeviceClass;
        filters?: any[];
        id?: ID;
        mqtt_id?: any;
        on_click?: object[];
        on_double_click?: object[];
        on_multi_click?: object[];
        on_press?: object[];
        on_release?: object[];
        on_state?: object[];
        on_state_change?: object[];
        publish_initial_state?: any;
        report?: BinarySensorBINARYSENSORSCHEMAReport;
        trigger_on_initial_state?: boolean;
        web_server?: BinarySensorBINARYSENSORSCHEMAWebServer;
        zigbee_binary_sensor?: any;
        zigbee_id?: ID;
        name?: any;
        icon?: any;
        internal?: any;
        disabled_by_default?: any;
        entity_category?: any;
    } & CoreENTITYBASESCHEMA & CoreMQTTCOMPONENTSCHEMA;
