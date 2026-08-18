/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: api.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/api
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes)
 **/
import { type ID, type Pin, EsphomeComponent } from "@/lib/base.js";
import type { CorePositiveTimePeriodMilliseconds, CoreCOMPONENT_SCHEMA } from "./esphome.js";

export class Api extends EsphomeComponent<ApiConfig> {
    componentName: string = "api";
}

export type ApiConfigActions = ApiACTIONS_SCHEMA;
export type ApiConfigBatchDelay = CorePositiveTimePeriodMilliseconds;
export type ApiConfigRebootTimeout = CorePositiveTimePeriodMilliseconds;
export type ApiConfigServices = ApiACTIONS_SCHEMA;

export interface ApiConfig extends CoreCOMPONENT_SCHEMA {
    actions?: ApiConfigActions;
    batch_delay?: ApiConfigBatchDelay;
    custom_services?: boolean;
    encryption?: any;
    homeassistant_services?: boolean;
    homeassistant_states?: boolean;
    id?: ID;
    listen_backlog?: number;
    max_connections?: number;
    max_send_queue?: number;
    on_client_connected?: object[];
    on_client_disconnected?: object[];
    port?: number;
    reboot_timeout?: ApiConfigRebootTimeout;
    services?: ApiConfigServices;
}

export type ApiHOMEASSISTANT_ACTION_ACTION_SCHEMAData = ApiKEY_VALUE_SCHEMA;
export type ApiHOMEASSISTANT_ACTION_ACTION_SCHEMADataTemplate = ApiKEY_VALUE_SCHEMA;

export interface ApiHOMEASSISTANT_ACTION_ACTION_SCHEMAVariables {
    string?: any;
}

export interface ApiHOMEASSISTANT_ACTION_ACTION_SCHEMA {
    action: string;
    capture_response?: boolean;
    data?: ApiHOMEASSISTANT_ACTION_ACTION_SCHEMAData;
    data_template?: ApiHOMEASSISTANT_ACTION_ACTION_SCHEMADataTemplate;
    id?: ID;
    on_error?: object[];
    on_success?: object[];
    response_template?: string;
    service?: string;
    variables?: ApiHOMEASSISTANT_ACTION_ACTION_SCHEMAVariables;
}

export interface ApiKEY_VALUE_SCHEMA {
    string: string;
}
