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
import type { CorePositiveTimePeriodMilliseconds, CoreENTITY_BASE_SCHEMA, CoreMQTT_COMPONENT_SCHEMA } from "./esphome.js";

export abstract class BinarySensor extends EsphomeComponent {
    componentName: string = "binary_sensor";
}

export interface BinarySensorBINARY_SENSOR_CONDITION_SCHEMA {
    id: ID;
}

export type BinarySensorMULTI_CLICK_TIMING_SCHEMAMaxLength = CorePositiveTimePeriodMilliseconds;
export type BinarySensorMULTI_CLICK_TIMING_SCHEMAMinLength = CorePositiveTimePeriodMilliseconds;

export interface BinarySensorMULTI_CLICK_TIMING_SCHEMA {
    max_length?: BinarySensorMULTI_CLICK_TIMING_SCHEMAMaxLength;
    min_length?: BinarySensorMULTI_CLICK_TIMING_SCHEMAMinLength;
    state?: boolean;
}

export type BinarySensor_BINARY_SENSOR_SCHEMADeviceClass = 'battery' | 'battery_charging' | 'carbon_monoxide' | 'cold' | 'connectivity' | 'door' | '' | 'garage_door' | 'gas' | 'heat' | 'light' | 'lock' | 'moisture' | 'motion' | 'moving' | 'occupancy' | 'opening' | 'plug' | 'power' | 'presence' | 'problem' | 'running' | 'safety' | 'smoke' | 'sound' | 'tamper' | 'update' | 'vibration' | 'window';
export type BinarySensor_BINARY_SENSOR_SCHEMAReport = 'coordinator' | 'enable' | 'force';

export interface BinarySensor_BINARY_SENSOR_SCHEMAWebServer {
    sorting_group_id?: ID;
    sorting_weight?: any;
    web_server_id?: ID;
}

export type BinarySensor_BINARY_SENSOR_SCHEMA = {
        device_class?: BinarySensor_BINARY_SENSOR_SCHEMADeviceClass;
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
        report?: BinarySensor_BINARY_SENSOR_SCHEMAReport;
        trigger_on_initial_state?: boolean;
        web_server?: BinarySensor_BINARY_SENSOR_SCHEMAWebServer;
        zigbee_binary_sensor?: any;
        zigbee_id?: ID;
        name?: any;
        icon?: any;
        internal?: any;
        disabled_by_default?: any;
        entity_category?: any;
    } & CoreENTITY_BASE_SCHEMA & CoreMQTT_COMPONENT_SCHEMA;
