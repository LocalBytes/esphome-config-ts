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
import { type ID, type Pin, BaseComponent } from "@/lib/base.js";
import type { CoreCOMPONENT_SCHEMA } from "./esphome.js";

export class WebServer extends BaseComponent<WebServerConfig> {
    componentName: string = "web_server";
}

export type WebServerConfigVersion = '1' | '2';

export interface WebServerConfigAuth {
    username: string;
    password: string;
}

export interface WebServerConfig extends CoreCOMPONENT_SCHEMA {
    id?: ID;
    port?: number;
    version?: WebServerConfigVersion;
    css_url?: string;
    css_include?: any;
    js_url?: string;
    js_include?: any;
    auth?: WebServerConfigAuth;
    web_server_base_id?: ID;
    include_internal?: boolean;
    ota?: boolean;
    log?: boolean;
    local?: boolean;
}
