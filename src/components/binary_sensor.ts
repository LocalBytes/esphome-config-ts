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

export type BinarySensorMULTI_CLICK_TIMING_SCHEMAMinLength = CorePositiveTimePeriodMilliseconds;
export type BinarySensorMULTI_CLICK_TIMING_SCHEMAMaxLength = CorePositiveTimePeriodMilliseconds;

export interface BinarySensorMULTI_CLICK_TIMING_SCHEMA {
    state?: boolean;
    min_length?: BinarySensorMULTI_CLICK_TIMING_SCHEMAMinLength;
    max_length?: BinarySensorMULTI_CLICK_TIMING_SCHEMAMaxLength;
}

export type BinarySensorBINARY_SENSOR_SCHEMADeviceClass = 'battery' | 'battery_charging' | 'carbon_monoxide' | 'cold' | 'connectivity' | 'door' | '' | 'garage_door' | 'gas' | 'heat' | 'light' | 'lock' | 'moisture' | 'motion' | 'moving' | 'occupancy' | 'opening' | 'plug' | 'power' | 'presence' | 'problem' | 'running' | 'safety' | 'smoke' | 'sound' | 'tamper' | 'update' | 'vibration' | 'window';
export type BinarySensorBINARY_SENSOR_SCHEMA = {
        id?: ID;
        mqtt_id?: any;
        publish_initial_state?: boolean;
        device_class?: BinarySensorBINARY_SENSOR_SCHEMADeviceClass;
        filters?: any[];
        on_press?: object[];
        on_release?: object[];
        on_click?: object[];
        on_double_click?: object[];
        on_multi_click?: object[];
        on_state?: object[];
    } & CoreENTITY_BASE_SCHEMA & CoreMQTT_COMPONENT_SCHEMA;

export interface BinarySensorBINARY_SENSOR_CONDITION_SCHEMA {
    id: ID;
}
