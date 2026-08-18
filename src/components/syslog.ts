/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: syslog.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/syslog
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes)
 **/
import { type ID, type Pin, EsphomeComponent } from "@/lib/base.js";

export class Syslog extends EsphomeComponent<SyslogConfig> {
    componentName: string = "syslog";
}

export type SyslogConfigLevel = 'NONE' | 'ERROR' | 'WARN' | 'INFO' | 'DEBUG' | 'VERBOSE' | 'VERY_VERBOSE';

export interface SyslogConfig {
    facility?: number;
    id?: ID;
    level?: SyslogConfigLevel;
    port?: number;
    strip?: boolean;
    time_id?: ID;
    udp_id?: ID;
}
