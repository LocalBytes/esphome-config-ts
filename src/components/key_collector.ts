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
import { type ID, type Pin, EsphomeComponent } from "@/lib/base.js";
import type { CorePositiveTimePeriodMilliseconds, CoreCOMPONENTSCHEMA } from "./esphome.js";
import type { TextSensorTEXTSENSORSCHEMA } from "./text_sensor.js";

export class KeyCollector extends EsphomeComponent<KeyCollectorConfig> {
    componentName: string = "key_collector";
}

export type KeyCollectorConfigTimeout = CorePositiveTimePeriodMilliseconds;

export interface KeyCollectorConfig extends CoreCOMPONENTSCHEMA {
    allowed_keys?: string;
    back_keys?: string;
    clear_keys?: string;
    enable_on_boot?: boolean;
    end_key_required?: boolean;
    end_keys?: string;
    id?: ID;
    max_length?: number;
    min_length?: number;
    on_progress?: object[];
    on_result?: object[];
    on_timeout?: object[];
    source_id: ID[];
    start_keys?: string;
    timeout?: KeyCollectorConfigTimeout;
}

export class KeyCollectorTextSensor extends EsphomeComponent<KeyCollectorTextSensorConfig> {
    componentName: string = "key_collector.text_sensor";
}

export interface KeyCollectorTextSensorConfig extends TextSensorTEXTSENSORSCHEMA {
    id?: any;
    source_id?: ID;
}
