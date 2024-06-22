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

export class Esphome extends EsphomeComponent<EsphomeConfig> {
    componentName: string = "esphome";
}

export type EsphomeConfigPlatformioOptions = Record<string, string>;

export interface EsphomeConfigProject {
    name: string;
    version: string;
}

export interface EsphomeConfig {
    name: string;
    friendly_name?: string;
    comment?: string;
    build_path: string;
    platformio_options: EsphomeConfigPlatformioOptions;
    on_boot?: object[];
    on_shutdown?: object[];
    on_loop?: object[];
    includes?: any[];
    libraries?: string[];
    name_add_mac_suffix?: boolean;
    project?: EsphomeConfigProject;
    min_version?: any;
    compile_process_limit?: number;
}

export abstract class Core extends EsphomeComponent {
    componentName: string = "core";
}

export interface CoreTimePeriodDict {
    days?: any;
    hours?: any;
    minutes?: any;
    seconds?: any;
    milliseconds?: any;
    microseconds?: any;
}

export type CorePositiveTimePeriodMilliseconds = CoreTimePeriodDict;
export type CorePositiveTimePeriodSeconds = CoreTimePeriodDict;
export type CorePositiveTimePeriodMinutes = CoreTimePeriodDict;
export type CorePositiveTimePeriodMicroseconds = CoreTimePeriodDict;

export interface CoreMQTT_COMPONENT_SCHEMAAvailability {
    topic: string;
    payload_available?: any;
    payload_not_available?: any;
}

export interface CoreMQTT_COMPONENT_SCHEMA {
    retain?: boolean;
    discovery?: boolean;
    state_topic?: any;
    availability?: CoreMQTT_COMPONENT_SCHEMAAvailability;
}

export interface CoreCOMPONENT_SCHEMA {
    setup_priority?: any;
}

export interface CoreMQTT_COMMAND_COMPONENT_SCHEMA extends CoreMQTT_COMPONENT_SCHEMA {
    command_topic?: any;
    command_retain?: boolean;
}

export interface CoreENTITY_BASE_SCHEMA {
    name?: string;
    internal?: boolean;
    disabled_by_default?: boolean;
    icon?: any;
    entity_category?: any;
}

export type CoreSOURCE_SCHEMA = CoreSOURCE_SCHEMAGit | CoreSOURCE_SCHEMALocal;

export interface CoreSOURCE_SCHEMAGit {
    type: "git" | "GIT";
    url: string;
    ref?: any;
    username?: string;
    password?: string;
}

export interface CoreSOURCE_SCHEMALocal {
    type: "local" | "LOCAL";
    path: string;
}
