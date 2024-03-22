/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: http_request.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/http_request
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes) 2023
 **/
import type { ID, Pin } from "../base.js";
import { BaseComponent } from "../base.js";
import type { CorePositiveTimePeriodMilliseconds, CoreCOMPONENT_SCHEMA } from "./esphome.js";

export class HttpRequest extends BaseComponent<HttpRequestConfig> {
    componentName: string = "http_request";
}

export interface HttpRequestConfig extends CoreCOMPONENT_SCHEMA {
    id?: ID;
    useragent?: string;
    follow_redirects?: boolean;
    redirect_limit?: number;
    timeout?: HttpRequestConfigTimeout;
    esp8266_disable_ssl_support?: boolean;
}

export interface HttpRequestConfigTimeout extends CorePositiveTimePeriodMilliseconds {
}

export interface HttpRequestHTTP_REQUEST_ACTION_SCHEMA {
    id?: ID;
    url: string;
    headers: HttpRequestHTTP_REQUEST_ACTION_SCHEMAHeaders;
    verify_ssl?: boolean;
    on_response?: object[];
}

export interface HttpRequestHTTP_REQUEST_ACTION_SCHEMAHeaders {
    string: string;
}
