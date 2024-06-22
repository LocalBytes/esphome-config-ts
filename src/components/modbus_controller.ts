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
import type { SensorSENSOR_SCHEMA } from "./sensor.js";
import type { BinarySensorBINARY_SENSOR_SCHEMA } from "./binary_sensor.js";
import type { NumberNUMBER_SCHEMA } from "./number.js";
import type { SelectSELECT_SCHEMA } from "./select.js";
import type { Switch_SWITCH_SCHEMA } from "./switch.js";
import type { TextSensorTEXT_SENSOR_SCHEMA } from "./text_sensor.js";

export class ModbusController extends EsphomeComponent<ModbusControllerConfig> {
    componentName: string = "modbus_controller";
}

export type ModbusControllerConfigCommandThrottle = CorePositiveTimePeriodMilliseconds;

export interface ModbusControllerConfig extends CoreCOMPONENT_SCHEMA {
    id?: ID;
    command_throttle?: ModbusControllerConfigCommandThrottle;
    offline_skip_updates?: number;
    update_interval?: any;
    modbus_id?: ID;
    address?: any;
}

export interface ModbusControllerModbusItemBaseSchema {
    modbus_controller_id?: ID;
    address?: number;
    custom_command?: any[];
    offset?: number;
    byte_offset?: number;
    bitmask?: any;
    skip_updates?: number;
    force_new_range?: boolean;
    lambda?: any;
    response_size?: number;
}

export class ModbusControllerSensor extends EsphomeComponent<ModbusControllerSensorConfig> {
    componentName: string = "modbus_controller.sensor";
}

export type ModbusControllerSensorConfigRegisterType = 'custom' | 'coil' | 'holding' | 'discrete_input' | 'read';
export type ModbusControllerSensorConfigValueType = 'RAW' | 'U_WORD' | 'S_WORD' | 'U_DWORD' | 'U_DWORD_R' | 'S_DWORD' | 'S_DWORD_R' | 'U_QWORD' | 'U_QWORD_R' | 'S_QWORD' | 'S_QWORD_R' | 'FP32' | 'FP32_R';
export type ModbusControllerSensorConfig = {
        id?: any;
        register_type?: ModbusControllerSensorConfigRegisterType;
        value_type?: ModbusControllerSensorConfigValueType;
        register_count?: number;
    } & SensorSENSOR_SCHEMA & CoreCOMPONENT_SCHEMA & ModbusControllerModbusItemBaseSchema;

export class ModbusControllerBinarySensor extends EsphomeComponent<ModbusControllerBinarySensorConfig> {
    componentName: string = "modbus_controller.binary_sensor";
}

export type ModbusControllerBinarySensorConfigRegisterType = 'custom' | 'coil' | 'holding' | 'discrete_input' | 'read';
export type ModbusControllerBinarySensorConfig = {
        id?: any;
        register_type?: ModbusControllerBinarySensorConfigRegisterType;
    } & BinarySensorBINARY_SENSOR_SCHEMA & CoreCOMPONENT_SCHEMA & ModbusControllerModbusItemBaseSchema;

export class ModbusControllerNumber extends EsphomeComponent<ModbusControllerNumberConfig> {
    componentName: string = "modbus_controller.number";
}

export type ModbusControllerNumberConfigRegisterType = 'custom' | 'coil' | 'holding';
export type ModbusControllerNumberConfigValueType = 'RAW' | 'U_WORD' | 'S_WORD' | 'U_DWORD' | 'U_DWORD_R' | 'S_DWORD' | 'S_DWORD_R' | 'U_QWORD' | 'U_QWORD_R' | 'S_QWORD' | 'S_QWORD_R' | 'FP32' | 'FP32_R';
export type ModbusControllerNumberConfig = {
        id?: ID;
        register_type?: ModbusControllerNumberConfigRegisterType;
        value_type?: ModbusControllerNumberConfigValueType;
        write_lambda?: any;
        max_value?: any;
        min_value?: any;
        step?: any;
        multiply?: any;
        use_write_multiple?: boolean;
    } & NumberNUMBER_SCHEMA & ModbusControllerModbusItemBaseSchema;

export class ModbusControllerOutput extends EsphomeComponent<ModbusControllerOutputConfig> {
    componentName: string = "modbus_controller.output";
}

export type ModbusControllerOutputConfig = ModbusControllerOutputConfigCoil | ModbusControllerOutputConfigHolding;

export interface ModbusControllerOutputConfigCoil {
    register_type: "coil" | "COIL";
    id?: ID;
    write_lambda?: any;
    use_write_multiple?: boolean;
}

export type ModbusControllerOutputConfigHoldingValueType = 'RAW' | 'U_WORD' | 'S_WORD' | 'U_DWORD' | 'U_DWORD_R' | 'S_DWORD' | 'S_DWORD_R' | 'U_QWORD' | 'U_QWORD_R' | 'S_QWORD' | 'S_QWORD_R' | 'FP32' | 'FP32_R';

export interface ModbusControllerOutputConfigHolding {
    register_type: "holding" | "HOLDING";
    id?: ID;
    value_type?: ModbusControllerOutputConfigHoldingValueType;
    write_lambda?: any;
    multiply?: any;
    use_write_multiple?: boolean;
}

export class ModbusControllerSelect extends EsphomeComponent<ModbusControllerSelectConfig> {
    componentName: string = "modbus_controller.select";
}

export type ModbusControllerSelectConfigValueType = 'RAW' | 'U_WORD' | 'S_WORD' | 'U_DWORD' | 'U_DWORD_R' | 'S_DWORD' | 'S_DWORD_R' | 'U_QWORD' | 'U_QWORD_R' | 'S_QWORD' | 'S_QWORD_R';
export type ModbusControllerSelectConfig = {
        id?: any;
        modbus_controller_id?: ID;
        address: number;
        value_type?: ModbusControllerSelectConfigValueType;
        register_count?: number;
        skip_updates?: number;
        force_new_range?: boolean;
        optionsmap: string;
        use_write_multiple?: boolean;
        optimistic?: boolean;
        lambda?: any;
        write_lambda?: any;
    } & SelectSELECT_SCHEMA & CoreCOMPONENT_SCHEMA;

export class ModbusControllerSwitch extends EsphomeComponent<ModbusControllerSwitchConfig> {
    componentName: string = "modbus_controller.switch";
}

export type ModbusControllerSwitchConfigRestoreMode = 'RESTORE_DEFAULT_OFF' | 'RESTORE_DEFAULT_ON' | 'ALWAYS_OFF' | 'ALWAYS_ON' | 'RESTORE_INVERTED_DEFAULT_OFF' | 'RESTORE_INVERTED_DEFAULT_ON' | 'DISABLED';
export type ModbusControllerSwitchConfigRegisterType = 'custom' | 'coil' | 'holding' | 'discrete_input' | 'read';
export type ModbusControllerSwitchConfig = {
        restore_mode?: ModbusControllerSwitchConfigRestoreMode;
        id?: ID;
        register_type?: ModbusControllerSwitchConfigRegisterType;
        use_write_multiple?: boolean;
        write_lambda?: any;
    } & Switch_SWITCH_SCHEMA & CoreCOMPONENT_SCHEMA & ModbusControllerModbusItemBaseSchema;

export class ModbusControllerTextSensor extends EsphomeComponent<ModbusControllerTextSensorConfig> {
    componentName: string = "modbus_controller.text_sensor";
}

export type ModbusControllerTextSensorConfigRegisterType = 'custom' | 'coil' | 'holding' | 'discrete_input' | 'read';
export type ModbusControllerTextSensorConfigRawEncode = 'NONE' | 'HEXBYTES' | 'COMMA';
export type ModbusControllerTextSensorConfig = {
        id?: any;
        register_type?: ModbusControllerTextSensorConfigRegisterType;
        register_count?: number;
        response_size?: any;
        raw_encode?: ModbusControllerTextSensorConfigRawEncode;
    } & TextSensorTEXT_SENSOR_SCHEMA & CoreCOMPONENT_SCHEMA & ModbusControllerModbusItemBaseSchema;
