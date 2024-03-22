/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: api.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/api
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes) 2023
 **/
import type { ID, Pin } from "../base.js";
import { BaseComponent } from "../base.js";
import type { CorePositiveTimePeriodMilliseconds, CoreCOMPONENT_SCHEMA } from "./esphome.js";

export class Api extends BaseComponent<ApiConfig> {
    componentName: string = "api";
}

export interface ApiConfig extends CoreCOMPONENT_SCHEMA {
    id?: ID;
    port?: number;
    password?: string;
    reboot_timeout?: ApiConfigRebootTimeout;
    services?: object[];
    encryption?: ApiConfigEncryption;
}

export interface ApiConfigRebootTimeout extends CorePositiveTimePeriodMilliseconds {
}

export interface ApiConfigEncryption {
    key: string;
}

export interface ApiKEY_VALUE_SCHEMA {
    string: string;
}
