/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: openthread_info.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/openthread_info
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes)
 **/
import { type ID, type Pin, EsphomeComponent } from "@/lib/base.js";
import type { TextSensor_TEXT_SENSOR_SCHEMA } from "./text_sensor.js";
import type { CoreCOMPONENT_SCHEMA } from "./esphome.js";

export class OpenthreadInfoTextSensor extends EsphomeComponent<OpenthreadInfoTextSensorConfig> {
    componentName: string = "openthread_info.text_sensor";
}

export type OpenthreadInfoTextSensorConfigChannel = {
        entity_category?: any;
        id?: any;
        update_interval?: any;
    } & TextSensor_TEXT_SENSOR_SCHEMA & CoreCOMPONENT_SCHEMA;
export type OpenthreadInfoTextSensorConfigEui64 = {
        entity_category?: any;
        id?: any;
        update_interval?: any;
    } & TextSensor_TEXT_SENSOR_SCHEMA & CoreCOMPONENT_SCHEMA;
export type OpenthreadInfoTextSensorConfigExtAddr = {
        entity_category?: any;
        id?: any;
        update_interval?: any;
    } & TextSensor_TEXT_SENSOR_SCHEMA & CoreCOMPONENT_SCHEMA;
export type OpenthreadInfoTextSensorConfigExtPanId = {
        entity_category?: any;
        id?: any;
        update_interval?: any;
    } & TextSensor_TEXT_SENSOR_SCHEMA & CoreCOMPONENT_SCHEMA;
export type OpenthreadInfoTextSensorConfigIpAddress = {
        entity_category?: any;
        id?: any;
        update_interval?: any;
    } & TextSensor_TEXT_SENSOR_SCHEMA & CoreCOMPONENT_SCHEMA;
export type OpenthreadInfoTextSensorConfigNetworkKey = {
        entity_category?: any;
        id?: any;
        update_interval?: any;
    } & TextSensor_TEXT_SENSOR_SCHEMA & CoreCOMPONENT_SCHEMA;
export type OpenthreadInfoTextSensorConfigNetworkName = {
        entity_category?: any;
        id?: any;
        update_interval?: any;
    } & TextSensor_TEXT_SENSOR_SCHEMA & CoreCOMPONENT_SCHEMA;
export type OpenthreadInfoTextSensorConfigPanId = {
        entity_category?: any;
        id?: any;
        update_interval?: any;
    } & TextSensor_TEXT_SENSOR_SCHEMA & CoreCOMPONENT_SCHEMA;
export type OpenthreadInfoTextSensorConfigRloc16 = {
        entity_category?: any;
        id?: any;
        update_interval?: any;
    } & TextSensor_TEXT_SENSOR_SCHEMA & CoreCOMPONENT_SCHEMA;
export type OpenthreadInfoTextSensorConfigRole = {
        entity_category?: any;
        id?: any;
        update_interval?: any;
    } & TextSensor_TEXT_SENSOR_SCHEMA & CoreCOMPONENT_SCHEMA;

export interface OpenthreadInfoTextSensorConfig {
    channel?: OpenthreadInfoTextSensorConfigChannel;
    eui64?: OpenthreadInfoTextSensorConfigEui64;
    ext_addr?: OpenthreadInfoTextSensorConfigExtAddr;
    ext_pan_id?: OpenthreadInfoTextSensorConfigExtPanId;
    ip_address?: OpenthreadInfoTextSensorConfigIpAddress;
    network_key?: OpenthreadInfoTextSensorConfigNetworkKey;
    network_name?: OpenthreadInfoTextSensorConfigNetworkName;
    pan_id?: OpenthreadInfoTextSensorConfigPanId;
    rloc16?: OpenthreadInfoTextSensorConfigRloc16;
    role?: OpenthreadInfoTextSensorConfigRole;
}
