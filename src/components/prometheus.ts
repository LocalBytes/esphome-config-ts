/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: prometheus.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/prometheus
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes)
 **/
import { type ID, type Pin, EsphomeComponent } from "@/lib/base.js";
import type { CoreCOMPONENTSCHEMA } from "./esphome.js";

export class Prometheus extends EsphomeComponent<PrometheusConfig> {
    componentName: string = "prometheus";
}

export interface PrometheusConfigRelabelString {
    id?: string;
    name?: string;
}

export interface PrometheusConfigRelabel {
    string: PrometheusConfigRelabelString;
}

export interface PrometheusConfig extends CoreCOMPONENTSCHEMA {
    id?: ID;
    include_internal?: boolean;
    relabel?: PrometheusConfigRelabel;
    web_server_base_id?: ID;
}
