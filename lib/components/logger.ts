/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: logger.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/logger
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes) 2023
 **/
import type { ID, Pin } from "../base.js";
import { BaseComponent } from "../base.js";
import type { CoreCOMPONENT_SCHEMA } from "./esphome.js";

export class Logger extends BaseComponent<LoggerConfig> {
    componentName: string = "logger";
}

export interface LoggerConfig extends CoreCOMPONENT_SCHEMA {
    id?: ID;
    baud_rate?: number;
    tx_buffer_size?: any;
    deassert_rts_dtr?: boolean;
    hardware_uart?: any;
    level?: LoggerConfigLevel;
    logs: LoggerConfigLogs;
    on_message?: object[];
    esp8266_store_log_strings_in_flash?: boolean;
}

export type LoggerConfigLevel = 'NONE' | 'ERROR' | 'WARN' | 'INFO' | 'DEBUG' | 'VERBOSE' | 'VERY_VERBOSE';
export type LoggerConfigLogs = Record<string, string>;
