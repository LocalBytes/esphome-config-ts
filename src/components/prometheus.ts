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
import { type ID, type Pin, BaseComponent } from "@/lib/base.js";
import type { CoreCOMPONENT_SCHEMA } from "./esphome.js";

export class Prometheus extends BaseComponent<PrometheusConfig> {
    componentName: string = "prometheus";
}

export type PrometheusConfigRelabel = Record<string, string>;

export interface PrometheusConfig extends CoreCOMPONENT_SCHEMA {
    id?: ID;
    web_server_base_id?: ID;
    include_internal?: boolean;
    relabel: PrometheusConfigRelabel;
}
