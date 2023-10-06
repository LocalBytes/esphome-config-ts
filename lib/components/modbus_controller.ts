/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: modbus_controller.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/modbus_controller
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes) 2023
 **/
import { ID, Pin, BaseComponent } from "../base.js";
import { CorePositiveTimePeriodMilliseconds, CoreCOMPONENT_SCHEMA } from "./esphome.js";
import { SensorSENSOR_SCHEMA } from "./sensor.js";
import { BinarySensorBINARY_SENSOR_SCHEMA } from "./binary_sensor.js";
import { NumberNUMBER_SCHEMA } from "./number.js";
import { SelectSELECT_SCHEMA } from "./select.js";
import { Switch_SWITCH_SCHEMA } from "./switch.js";
import { TextSensorTEXT_SENSOR_SCHEMA } from "./text_sensor.js";

export class ModbusController extends BaseComponent<ModbusControllerConfig> {
    componentName: string = "modbus_controller";
}

export interface ModbusControllerConfig extends CoreCOMPONENT_SCHEMA {
    id?: ID;
    command_throttle?: ModbusControllerConfigCommandThrottle;
    update_interval?: any;
    modbus_id?: ID;
    address?: any;
}

export interface ModbusControllerConfigCommandThrottle extends CorePositiveTimePeriodMilliseconds {
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

export class ModbusControllerSensor extends BaseComponent<ModbusControllerSensorConfig> {
    componentName: string = "modbus_controller.sensor";
}

export interface ModbusControllerSensorConfig extends SensorSENSOR_SCHEMA, CoreCOMPONENT_SCHEMA, ModbusControllerModbusItemBaseSchema {
    id?: any;
    register_type?: ModbusControllerSensorConfigRegisterType;
    value_type?: ModbusControllerSensorConfigValueType;
    register_count?: number;
}

export type ModbusControllerSensorConfigRegisterType = 'custom' | 'coil' | 'holding' | 'discrete_input' | 'read';
export type ModbusControllerSensorConfigValueType = 'RAW' | 'U_WORD' | 'S_WORD' | 'U_DWORD' | 'U_DWORD_R' | 'S_DWORD' | 'S_DWORD_R' | 'U_QWORD' | 'U_QWORD_R' | 'S_QWORD' | 'S_QWORD_R' | 'FP32' | 'FP32_R';

export class ModbusControllerBinarySensor extends BaseComponent<ModbusControllerBinarySensorConfig> {
    componentName: string = "modbus_controller.binary_sensor";
}

export interface ModbusControllerBinarySensorConfig extends BinarySensorBINARY_SENSOR_SCHEMA, CoreCOMPONENT_SCHEMA, ModbusControllerModbusItemBaseSchema {
    id?: any;
    register_type?: ModbusControllerBinarySensorConfigRegisterType;
}

export type ModbusControllerBinarySensorConfigRegisterType = 'custom' | 'coil' | 'holding' | 'discrete_input' | 'read';

export class ModbusControllerNumber extends BaseComponent<ModbusControllerNumberConfig> {
    componentName: string = "modbus_controller.number";
}

export interface ModbusControllerNumberConfig extends NumberNUMBER_SCHEMA, ModbusControllerModbusItemBaseSchema {
    id?: ID;
    register_type?: ModbusControllerNumberConfigRegisterType;
    value_type?: ModbusControllerNumberConfigValueType;
    write_lambda?: any;
    max_value?: any;
    min_value?: any;
    step?: any;
    multiply?: any;
    use_write_multiple?: boolean;
}

export type ModbusControllerNumberConfigRegisterType = 'custom' | 'coil' | 'holding';
export type ModbusControllerNumberConfigValueType = 'RAW' | 'U_WORD' | 'S_WORD' | 'U_DWORD' | 'U_DWORD_R' | 'S_DWORD' | 'S_DWORD_R' | 'U_QWORD' | 'U_QWORD_R' | 'S_QWORD' | 'S_QWORD_R' | 'FP32' | 'FP32_R';

export class ModbusControllerOutput extends BaseComponent<ModbusControllerOutputConfig> {
    componentName: string = "modbus_controller.output";
}

export type ModbusControllerOutputConfig = ModbusControllerOutputConfigCoil | ModbusControllerOutputConfigHolding;

export interface ModbusControllerOutputConfigCoil {
    register_type: "coil" | "COIL";
    id?: ID;
    write_lambda?: any;
    use_write_multiple?: boolean;
}

export interface ModbusControllerOutputConfigHolding {
    register_type: "holding" | "HOLDING";
    id?: ID;
    value_type?: ModbusControllerOutputConfigHoldingValueType;
    write_lambda?: any;
    multiply?: any;
    use_write_multiple?: boolean;
}

export type ModbusControllerOutputConfigHoldingValueType = 'RAW' | 'U_WORD' | 'S_WORD' | 'U_DWORD' | 'U_DWORD_R' | 'S_DWORD' | 'S_DWORD_R' | 'U_QWORD' | 'U_QWORD_R' | 'S_QWORD' | 'S_QWORD_R' | 'FP32' | 'FP32_R';

export class ModbusControllerSelect extends BaseComponent<ModbusControllerSelectConfig> {
    componentName: string = "modbus_controller.select";
}

export interface ModbusControllerSelectConfig extends SelectSELECT_SCHEMA, CoreCOMPONENT_SCHEMA {
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
}

export type ModbusControllerSelectConfigValueType = 'RAW' | 'U_WORD' | 'S_WORD' | 'U_DWORD' | 'U_DWORD_R' | 'S_DWORD' | 'S_DWORD_R' | 'U_QWORD' | 'U_QWORD_R' | 'S_QWORD' | 'S_QWORD_R';

export class ModbusControllerSwitch extends BaseComponent<ModbusControllerSwitchConfig> {
    componentName: string = "modbus_controller.switch";
}

export interface ModbusControllerSwitchConfig extends Switch_SWITCH_SCHEMA, CoreCOMPONENT_SCHEMA, ModbusControllerModbusItemBaseSchema {
    restore_mode?: ModbusControllerSwitchConfigRestoreMode;
    id?: ID;
    register_type?: ModbusControllerSwitchConfigRegisterType;
    use_write_multiple?: boolean;
    write_lambda?: any;
}

export type ModbusControllerSwitchConfigRestoreMode = 'RESTORE_DEFAULT_OFF' | 'RESTORE_DEFAULT_ON' | 'ALWAYS_OFF' | 'ALWAYS_ON' | 'RESTORE_INVERTED_DEFAULT_OFF' | 'RESTORE_INVERTED_DEFAULT_ON' | 'DISABLED';
export type ModbusControllerSwitchConfigRegisterType = 'custom' | 'coil' | 'holding' | 'discrete_input' | 'read';

export class ModbusControllerTextSensor extends BaseComponent<ModbusControllerTextSensorConfig> {
    componentName: string = "modbus_controller.text_sensor";
}

export interface ModbusControllerTextSensorConfig extends TextSensorTEXT_SENSOR_SCHEMA, CoreCOMPONENT_SCHEMA, ModbusControllerModbusItemBaseSchema {
    id?: any;
    register_type?: ModbusControllerTextSensorConfigRegisterType;
    register_count?: number;
    response_size?: any;
    raw_encode?: ModbusControllerTextSensorConfigRawEncode;
}

export type ModbusControllerTextSensorConfigRegisterType = 'custom' | 'coil' | 'holding' | 'discrete_input' | 'read';
export type ModbusControllerTextSensorConfigRawEncode = 'NONE' | 'HEXBYTES' | 'COMMA';
