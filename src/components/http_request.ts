/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 *
 * Schema: http_request.json
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/http_request
 *
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes)
 **/
import { type ID, type Pin, EsphomeComponent } from "@/lib/base.js";
import type { CorePositiveTimePeriodMilliseconds, CoreCOMPONENT_SCHEMA } from "./esphome.js";

export class HttpRequest extends EsphomeComponent<HttpRequestConfig> {
    componentName: string = "http_request";
}

export type HttpRequestConfigTimeout = CorePositiveTimePeriodMilliseconds;

export interface HttpRequestConfig extends CoreCOMPONENT_SCHEMA {
    id?: ID;
    useragent?: string;
    follow_redirects?: boolean;
    redirect_limit?: number;
    timeout?: HttpRequestConfigTimeout;
    esp8266_disable_ssl_support?: boolean;
}

export interface HttpRequestHTTP_REQUEST_ACTION_SCHEMAHeaders {
    string: string;
}

export interface HttpRequestHTTP_REQUEST_ACTION_SCHEMA {
    id?: ID;
    url: string;
    headers: HttpRequestHTTP_REQUEST_ACTION_SCHEMAHeaders;
    verify_ssl?: boolean;
    on_response?: object[];
}
