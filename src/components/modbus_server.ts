/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: modbus_server.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/modbus_server
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes)
 **/
import { type ID, type Pin, EsphomeComponent } from "@/lib/base.js";

export class ModbusServer extends EsphomeComponent<ModbusServerConfig> {
    componentName: string = "modbus_server";
}

export interface ModbusServerConfigCourtesyResponse {
    enabled?: boolean;
    register_last_address?: any;
    register_value?: any;
}

export type ModbusServerConfigRegistersValueType = 'RAW' | 'U_WORD' | 'S_WORD' | 'U_DWORD' | 'U_DWORD_R' | 'S_DWORD' | 'S_DWORD_R' | 'U_QWORD' | 'U_QWORD_R' | 'S_QWORD' | 'S_QWORD_R' | 'FP32' | 'FP32_R';

export interface ModbusServerConfigRegisters {
    address: number;
    id?: ID;
    read_lambda: string;
    value_type?: ModbusServerConfigRegistersValueType;
    write_lambda?: any;
}

export interface ModbusServerConfig {
    address: string;
    courtesy_response?: ModbusServerConfigCourtesyResponse;
    id?: ID;
    modbus_id?: ID;
    registers?: ModbusServerConfigRegisters[];
}
