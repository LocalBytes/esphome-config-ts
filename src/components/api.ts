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
import type { CorePositiveTimePeriodMilliseconds, CoreCOMPONENTSCHEMA } from "./esphome.js";

export class Api extends EsphomeComponent<ApiConfig> {
    componentName: string = "api";
}

export type ApiConfigActions = any;
export type ApiConfigBatchDelay = CorePositiveTimePeriodMilliseconds;
export type ApiConfigRebootTimeout = CorePositiveTimePeriodMilliseconds;
export type ApiConfigServices = any;

export interface ApiConfig extends CoreCOMPONENTSCHEMA {
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

export type ApiHOMEASSISTANTACTIONACTIONSCHEMAData = ApiKEYVALUESCHEMA;
export type ApiHOMEASSISTANTACTIONACTIONSCHEMADataTemplate = ApiKEYVALUESCHEMA;

export interface ApiHOMEASSISTANTACTIONACTIONSCHEMAVariables {
    string?: any;
}

export interface ApiHOMEASSISTANTACTIONACTIONSCHEMA {
    action: string;
    capture_response?: boolean;
    data?: ApiHOMEASSISTANTACTIONACTIONSCHEMAData;
    data_template?: ApiHOMEASSISTANTACTIONACTIONSCHEMADataTemplate;
    id?: ID;
    on_error?: object[];
    on_success?: object[];
    response_template?: string;
    service?: string;
    variables?: ApiHOMEASSISTANTACTIONACTIONSCHEMAVariables;
}

export interface ApiKEYVALUESCHEMA {
    string: string;
}
