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
import type { CorePositiveTimePeriodMilliseconds, CoreTimePeriod, CoreCOMPONENT_SCHEMA } from "./esphome.js";
import type { OtaBASE_OTA_SCHEMA } from "./ota.js";
import type { Update_UPDATE_SCHEMA } from "./update.js";

export class HttpRequest extends EsphomeComponent<HttpRequestConfig> {
    componentName: string = "http_request";
}

export type HttpRequestConfigTimeout = CorePositiveTimePeriodMilliseconds;
export type HttpRequestConfigWatchdogTimeout = CoreTimePeriod;

export interface HttpRequestConfig extends CoreCOMPONENT_SCHEMA {
    buffer_size_rx?: number;
    buffer_size_tx?: number;
    ca_certificate_path?: any;
    esp8266_disable_ssl_support?: boolean;
    follow_redirects?: boolean;
    id?: ID;
    redirect_limit?: number;
    timeout?: HttpRequestConfigTimeout;
    tls_buffer_size_rx?: number;
    tls_buffer_size_tx?: number;
    useragent?: string;
    verify_ssl?: boolean;
    watchdog_timeout?: HttpRequestConfigWatchdogTimeout;
}

export interface HttpRequestHTTP_REQUEST_ACTION_SCHEMARequestHeaders {
    string: string;
}

export interface HttpRequestHTTP_REQUEST_ACTION_SCHEMA {
    capture_response?: boolean;
    collect_headers?: string[];
    id?: ID;
    max_response_buffer_size?: any;
    on_error?: object[];
    on_response?: object[];
    request_headers?: HttpRequestHTTP_REQUEST_ACTION_SCHEMARequestHeaders;
    url: string;
}

export class HttpRequestOta extends EsphomeComponent<HttpRequestOtaConfig> {
    componentName: string = "http_request.ota";
}

export type HttpRequestOtaConfig = {
        http_request_id?: ID;
        id?: ID;
    } & OtaBASE_OTA_SCHEMA & CoreCOMPONENT_SCHEMA;

export class HttpRequestUpdate extends EsphomeComponent<HttpRequestUpdateConfig> {
    componentName: string = "http_request.update";
}

export type HttpRequestUpdateConfig = {
        http_request_id?: ID;
        id?: ID;
        ota_id?: ID;
        source: string;
        update_interval?: any;
    } & Update_UPDATE_SCHEMA & CoreCOMPONENT_SCHEMA;
