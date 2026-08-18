/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: host.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/host
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes)
 **/
import { type ID, type Pin, EsphomeComponent } from "@/lib/base.js";
import type { TimeTIMESCHEMA } from "./time.js";
import type { CoreCOMPONENTSCHEMA } from "./esphome.js";

export class Host extends EsphomeComponent<HostConfig> {
    componentName: string = "host";
}

export interface HostConfig {
    mac_address?: any;
}

export class HostTime extends EsphomeComponent<HostTimeConfig> {
    componentName: string = "host.time";
}

export type HostTimeConfig = {
        id?: ID;
    } & TimeTIMESCHEMA & CoreCOMPONENTSCHEMA;
