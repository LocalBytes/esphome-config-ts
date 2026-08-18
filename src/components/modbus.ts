/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: modbus.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/modbus
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes)
 **/
import { type ID, type Pin, EsphomeComponent } from "@/lib/base.js";
import type { CorePositiveTimePeriodMilliseconds, CoreCOMPONENT_SCHEMA } from "./esphome.js";

export class Modbus extends EsphomeComponent<ModbusConfig> {
    componentName: string = "modbus";
}

export type ModbusConfigRole = 'client' | 'server';
export type ModbusConfigSendWaitTime = CorePositiveTimePeriodMilliseconds;
export type ModbusConfigTurnaroundTime = CorePositiveTimePeriodMilliseconds;

export interface ModbusConfig extends CoreCOMPONENT_SCHEMA {
    disable_crc?: boolean;
    flow_control_pin?: Pin;
    id?: ID;
    role?: ModbusConfigRole;
    send_wait_time?: ModbusConfigSendWaitTime;
    turnaround_time?: ModbusConfigTurnaroundTime;
    uart_id?: ID;
}
