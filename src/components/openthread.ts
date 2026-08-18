/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: openthread.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/openthread
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes)
 **/
import { type ID, type Pin, EsphomeComponent } from "@/lib/base.js";
import type { CorePositiveTimePeriodMilliseconds } from "./esphome.js";

export class Openthread extends EsphomeComponent<OpenthreadConfig> {
    componentName: string = "openthread";
}

export type OpenthreadConfigDeviceType = 'FTD' | 'MTD';
export type OpenthreadConfigPollPeriod = CorePositiveTimePeriodMilliseconds;

export interface OpenthreadConfig {
    channel?: number;
    device_type?: OpenthreadConfigDeviceType;
    ext_pan_id?: any;
    force_dataset?: boolean;
    id?: ID;
    mdns_id?: ID;
    mesh_local_prefix?: any;
    network_key?: any;
    network_name?: string;
    output_power?: any;
    pan_id?: any;
    poll_period?: OpenthreadConfigPollPeriod;
    pskc?: any;
    srp_id?: ID;
    tlv?: string;
    use_address?: string;
}
