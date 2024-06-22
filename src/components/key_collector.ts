/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: key_collector.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/key_collector
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes)
 **/
import { type ID, type Pin, BaseComponent } from "@/lib/base.js";
import type { CorePositiveTimePeriodMilliseconds, CoreCOMPONENT_SCHEMA } from "./esphome.js";

export class KeyCollector extends BaseComponent<KeyCollectorConfig> {
    componentName: string = "key_collector";
}

export type KeyCollectorConfigTimeout = CorePositiveTimePeriodMilliseconds;

export interface KeyCollectorConfig extends CoreCOMPONENT_SCHEMA {
    id?: ID;
    source_id?: ID;
    min_length?: number;
    max_length?: number;
    start_keys?: string;
    end_keys?: string;
    end_key_required?: boolean;
    back_keys?: string;
    clear_keys?: string;
    allowed_keys?: string;
    on_progress?: object[];
    on_result?: object[];
    on_timeout?: object[];
    timeout?: KeyCollectorConfigTimeout;
}
