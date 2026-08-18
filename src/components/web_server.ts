/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: web_server.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/web_server
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes)
 **/
import { type ID, type Pin, EsphomeComponent } from "@/lib/base.js";
import type { CoreCOMPONENT_SCHEMA } from "./esphome.js";
import type { OtaBASE_OTA_SCHEMA } from "./ota.js";

export class WebServer extends EsphomeComponent<WebServerConfig> {
    componentName: string = "web_server";
}

export interface WebServerConfigAuth {
    password: string;
    username: string;
}

export type WebServerConfigCompression = 'gzip' | 'br';

export interface WebServerConfigSortingGroups {
    id: string;
    name: string;
    sorting_weight?: any;
}

export type WebServerConfigVersion = '1' | '2' | '3';

export interface WebServerConfig extends CoreCOMPONENT_SCHEMA {
    auth?: WebServerConfigAuth;
    compression?: WebServerConfigCompression;
    css_include?: any;
    css_url?: string;
    enable_private_network_access?: boolean;
    id?: ID;
    include_internal?: boolean;
    js_include?: any;
    js_url?: string;
    local?: boolean;
    log?: boolean;
    ota?: boolean;
    port?: number;
    sorting_groups?: WebServerConfigSortingGroups[];
    version?: WebServerConfigVersion;
    web_server_base_id?: ID;
}

export class WebServerOta extends EsphomeComponent<WebServerOtaConfig> {
    componentName: string = "web_server.ota";
}

export type WebServerOtaConfig = {
        id?: ID;
    } & OtaBASE_OTA_SCHEMA & CoreCOMPONENT_SCHEMA;
