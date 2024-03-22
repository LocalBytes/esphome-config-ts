/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: prometheus.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/prometheus
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes) 2023
 **/
import type { ID, Pin } from "../base.js";
import { BaseComponent } from "../base.js";
import type { CoreCOMPONENT_SCHEMA } from "./esphome.js";

export class Prometheus extends BaseComponent<PrometheusConfig> {
    componentName: string = "prometheus";
}

export interface PrometheusConfig extends CoreCOMPONENT_SCHEMA {
    id?: ID;
    web_server_base_id?: ID;
    include_internal?: boolean;
    relabel: PrometheusConfigRelabel;
}

export type PrometheusConfigRelabel = Record<string, string>;
