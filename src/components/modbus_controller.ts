/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: modbus_controller.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/modbus_controller
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes)
 **/
import { type ID, type Pin, EsphomeComponent } from "@/lib/base.js";
import type { CorePositiveTimePeriodMilliseconds, CoreCOMPONENT_SCHEMA } from "./esphome.js";
import type { BinarySensor_BINARY_SENSOR_SCHEMA } from "./binary_sensor.js";
import type { Number_NUMBER_SCHEMA } from "./number.js";
import type { Select_SELECT_SCHEMA } from "./select.js";
import type { Sensor_SENSOR_SCHEMA } from "./sensor.js";
import type { Switch_SWITCH_SCHEMA } from "./switch.js";
import type { TextSensor_TEXT_SENSOR_SCHEMA } from "./text_sensor.js";

export class ModbusController extends EsphomeComponent<ModbusControllerConfig> {
    componentName: string = "modbus_controller";
}

export type ModbusControllerConfigCommandThrottle = CorePositiveTimePeriodMilliseconds;

export interface ModbusControllerConfig extends CoreCOMPONENT_SCHEMA {
    address: string;
    allow_duplicate_commands?: boolean;
    command_throttle?: ModbusControllerConfigCommandThrottle;
    id?: ID;
    max_cmd_retries?: number;
    modbus_id?: ID;
    offline_skip_updates?: number;
    on_command_sent?: object[];
    on_offline?: object[];
    on_online?: object[];
    update_interval?: any;
}

export interface ModbusControllerModbusItemBaseSchema {
    address?: number;
    bitmask?: any;
    byte_offset?: number;
    custom_command?: any[];
    force_new_range?: boolean;
    lambda?: any;
    modbus_controller_id?: ID;
    offset?: number;
    response_size?: number;
    skip_updates?: number;
}

export class ModbusControllerBinarySensor extends EsphomeComponent<ModbusControllerBinarySensorConfig> {
    componentName: string = "modbus_controller.binary_sensor";
}

export type ModbusControllerBinarySensorConfigRegisterType = 'custom' | 'coil' | 'holding' | 'discrete_input' | 'read';
export type ModbusControllerBinarySensorConfig = {
        id?: any;
        register_type?: ModbusControllerBinarySensorConfigRegisterType;
    } & BinarySensor_BINARY_SENSOR_SCHEMA & CoreCOMPONENT_SCHEMA & ModbusControllerModbusItemBaseSchema;

export class ModbusControllerNumber extends EsphomeComponent<ModbusControllerNumberConfig> {
    componentName: string = "modbus_controller.number";
}

export type ModbusControllerNumberConfigRegisterType = 'custom' | 'coil' | 'holding';
export type ModbusControllerNumberConfigValueType = 'RAW' | 'U_WORD' | 'S_WORD' | 'U_DWORD' | 'U_DWORD_R' | 'S_DWORD' | 'S_DWORD_R' | 'U_QWORD' | 'U_QWORD_R' | 'S_QWORD' | 'S_QWORD_R' | 'FP32' | 'FP32_R';
export type ModbusControllerNumberConfig = {
        id?: ID;
        max_value?: any;
        min_value?: any;
        multiply?: any;
        register_type?: ModbusControllerNumberConfigRegisterType;
        step?: any;
        use_write_multiple?: boolean;
        value_type?: ModbusControllerNumberConfigValueType;
        write_lambda?: any;
    } & Number_NUMBER_SCHEMA & ModbusControllerModbusItemBaseSchema;

export class ModbusControllerOutput extends EsphomeComponent<ModbusControllerOutputConfig> {
    componentName: string = "modbus_controller.output";
}

export type ModbusControllerOutputConfig = ModbusControllerOutputConfigCoil | ModbusControllerOutputConfigHolding;

export interface ModbusControllerOutputConfigCoil {
    register_type: "coil" | "COIL";
    address: string;
    id?: ID;
    use_write_multiple?: boolean;
    write_lambda?: any;
}

export type ModbusControllerOutputConfigHoldingValueType = 'RAW' | 'U_WORD' | 'S_WORD' | 'U_DWORD' | 'U_DWORD_R' | 'S_DWORD' | 'S_DWORD_R' | 'U_QWORD' | 'U_QWORD_R' | 'S_QWORD' | 'S_QWORD_R' | 'FP32' | 'FP32_R';

export interface ModbusControllerOutputConfigHolding {
    register_type: "holding" | "HOLDING";
    address: string;
    id?: ID;
    multiply?: any;
    use_write_multiple?: boolean;
    value_type?: ModbusControllerOutputConfigHoldingValueType;
    write_lambda?: any;
}

export class ModbusControllerSelect extends EsphomeComponent<ModbusControllerSelectConfig> {
    componentName: string = "modbus_controller.select";
}

export type ModbusControllerSelectConfigValueType = 'RAW' | 'U_WORD' | 'S_WORD' | 'U_DWORD' | 'U_DWORD_R' | 'S_DWORD' | 'S_DWORD_R' | 'U_QWORD' | 'U_QWORD_R' | 'S_QWORD' | 'S_QWORD_R';
export type ModbusControllerSelectConfig = {
        address: number;
        force_new_range?: boolean;
        id?: any;
        lambda?: any;
        modbus_controller_id?: ID;
        optimistic?: boolean;
        optionsmap: string;
        register_count?: number;
        skip_updates?: number;
        use_write_multiple?: boolean;
        value_type?: ModbusControllerSelectConfigValueType;
        write_lambda?: any;
    } & Select_SELECT_SCHEMA & CoreCOMPONENT_SCHEMA;

export class ModbusControllerSensor extends EsphomeComponent<ModbusControllerSensorConfig> {
    componentName: string = "modbus_controller.sensor";
}

export type ModbusControllerSensorConfigRegisterType = 'custom' | 'coil' | 'holding' | 'discrete_input' | 'read';
export type ModbusControllerSensorConfigValueType = 'RAW' | 'U_WORD' | 'S_WORD' | 'U_DWORD' | 'U_DWORD_R' | 'S_DWORD' | 'S_DWORD_R' | 'U_QWORD' | 'U_QWORD_R' | 'S_QWORD' | 'S_QWORD_R' | 'FP32' | 'FP32_R';
export type ModbusControllerSensorConfig = {
        id?: any;
        register_count?: number;
        register_type?: ModbusControllerSensorConfigRegisterType;
        value_type?: ModbusControllerSensorConfigValueType;
    } & Sensor_SENSOR_SCHEMA & CoreCOMPONENT_SCHEMA & ModbusControllerModbusItemBaseSchema;

export class ModbusControllerSwitch extends EsphomeComponent<ModbusControllerSwitchConfig> {
    componentName: string = "modbus_controller.switch";
}

export type ModbusControllerSwitchConfigRegisterType = 'custom' | 'coil' | 'holding' | 'discrete_input' | 'read';
export type ModbusControllerSwitchConfig = {
        assumed_state?: boolean;
        id?: ID;
        register_type?: ModbusControllerSwitchConfigRegisterType;
        restore_mode?: any;
        use_write_multiple?: boolean;
        write_lambda?: any;
    } & Switch_SWITCH_SCHEMA & CoreCOMPONENT_SCHEMA & ModbusControllerModbusItemBaseSchema;

export class ModbusControllerTextSensor extends EsphomeComponent<ModbusControllerTextSensorConfig> {
    componentName: string = "modbus_controller.text_sensor";
}

export type ModbusControllerTextSensorConfigRawEncode = 'NONE' | 'HEXBYTES' | 'COMMA' | 'ANSI';
export type ModbusControllerTextSensorConfigRegisterType = 'custom' | 'coil' | 'holding' | 'discrete_input' | 'read';
export type ModbusControllerTextSensorConfig = {
        id?: any;
        raw_encode?: ModbusControllerTextSensorConfigRawEncode;
        register_count?: number;
        register_type?: ModbusControllerTextSensorConfigRegisterType;
        response_size?: any;
    } & TextSensor_TEXT_SENSOR_SCHEMA & CoreCOMPONENT_SCHEMA & ModbusControllerModbusItemBaseSchema;
