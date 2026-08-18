/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: esphome.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/esphome
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes)
 **/
import { type ID, type Pin, EsphomeComponent } from "@/lib/base.js";
import type { OtaBASEOTASCHEMA } from "./ota.js";

export abstract class Core extends EsphomeComponent {
    componentName: string = "core";
}

export interface CoreCOMPONENTSCHEMA {
    setup_priority?: any;
}

export interface CoreENTITYBASESCHEMA {
    device_id?: ID;
    disabled_by_default?: boolean;
    entity_category?: any;
    icon?: any;
    internal?: boolean;
    name?: any;
}

export interface CoreGITSCHEMA {
    password?: string;
    path: string;
    ref?: any;
    url: string;
    username?: string;
}

export interface CoreMQTTCOMMANDCOMPONENTSCHEMA extends CoreMQTTCOMPONENTSCHEMA {
    command_retain?: boolean;
    command_topic?: any;
}

export interface CoreMQTTCOMPONENTSCHEMAAvailability {
    payload_available?: any;
    payload_not_available?: any;
    topic: string;
}

export interface CoreMQTTCOMPONENTSCHEMA {
    availability?: CoreMQTTCOMPONENTSCHEMAAvailability;
    discovery?: boolean;
    qos?: any;
    retain?: boolean;
    state_topic?: any;
    subscribe_qos?: any;
}

export type CorePositiveTimePeriod = CoreTimePeriod;
export type CorePositiveTimePeriodMicroseconds = CorePositiveTimePeriod;
export type CorePositiveTimePeriodMilliseconds = CorePositiveTimePeriod;
export type CorePositiveTimePeriodMinutes = CorePositiveTimePeriod;
export type CorePositiveTimePeriodNanoseconds = CorePositiveTimePeriod;
export type CorePositiveTimePeriodSeconds = CorePositiveTimePeriod;

export interface CoreTimePeriod {
    days?: any;
    hours?: any;
    microseconds?: any;
    milliseconds?: any;
    minutes?: any;
    seconds?: any;
}

export class Esphome extends EsphomeComponent<EsphomeConfig> {
    componentName: string = "esphome";
}

export interface EsphomeConfigAreas {
    id?: ID;
    name: string;
}

export interface EsphomeConfigDevices {
    area_id?: ID;
    id?: ID;
    name: string;
}

export interface EsphomeConfigEnvironmentVariables {
    string: string;
}

export interface EsphomeConfigPlatformioOptions {
    string: string;
}

export interface EsphomeConfigProject {
    name: string;
    on_update?: object[];
    version: string;
}

export interface EsphomeConfig {
    area?: any;
    areas?: EsphomeConfigAreas[];
    build_flags?: string[];
    build_path?: string;
    comment?: string;
    compile_process_limit?: number;
    debug_scheduler?: boolean;
    devices?: EsphomeConfigDevices[];
    environment_variables?: EsphomeConfigEnvironmentVariables;
    friendly_name?: any;
    includes?: any[];
    includes_c?: any[];
    libraries?: string[];
    min_version?: any;
    name: string;
    name_add_mac_suffix?: boolean;
    on_boot?: object[];
    on_loop?: object[];
    on_shutdown?: object[];
    platformio_options?: EsphomeConfigPlatformioOptions;
    project?: EsphomeConfigProject;
}

export class EsphomeOta extends EsphomeComponent<EsphomeOtaConfig> {
    componentName: string = "esphome.ota";
}

export type EsphomeOtaConfigVersion = '1' | '2';
export type EsphomeOtaConfig = {
        allow_partition_access?: boolean;
        id?: ID;
        password?: string;
        port?: number;
        version?: EsphomeOtaConfigVersion;
    } & OtaBASEOTASCHEMA & CoreCOMPONENTSCHEMA;
