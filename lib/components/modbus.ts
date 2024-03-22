/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: modbus.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/modbus
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes) 2023
 **/
import type { ID, Pin } from "../base.js";
import { BaseComponent } from "../base.js";
import type { CorePositiveTimePeriodMilliseconds, CoreCOMPONENT_SCHEMA } from "./esphome.js";

export class Modbus extends BaseComponent<ModbusConfig> {
    componentName: string = "modbus";
}

export interface ModbusConfig extends CoreCOMPONENT_SCHEMA {
    id?: ID;
    flow_control_pin?: Pin;
    send_wait_time?: ModbusConfigSendWaitTime;
    disable_crc?: boolean;
    uart_id?: ID;
}

export interface ModbusConfigSendWaitTime extends CorePositiveTimePeriodMilliseconds {
}
