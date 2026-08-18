/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: opentherm.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/opentherm
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes)
 **/
import { type ID, type Pin, EsphomeComponent } from "@/lib/base.js";
import type { CoreCOMPONENT_SCHEMA } from "./esphome.js";
import type { BinarySensor_BINARY_SENSOR_SCHEMA } from "./binary_sensor.js";
import type { Number_NUMBER_SCHEMA } from "./number.js";
import type { OutputFLOAT_OUTPUT_SCHEMA } from "./output.js";
import type { Sensor_SENSOR_SCHEMA } from "./sensor.js";
import type { Switch_SWITCH_SCHEMA } from "./switch.js";

export class Opentherm extends EsphomeComponent<OpenthermConfig> {
    componentName: string = "opentherm";
}

export interface OpenthermConfig extends CoreCOMPONENT_SCHEMA {
    before_process_response?: object[];
    before_send?: object[];
    ch2_active?: boolean;
    ch_enable?: boolean;
    controller_configuration?: number;
    controller_id?: number;
    controller_product_type?: number;
    controller_product_version?: number;
    cooling_control?: ID;
    cooling_enable?: boolean;
    dhw_block?: boolean;
    dhw_enable?: boolean;
    id?: ID;
    in_pin: Pin;
    max_rel_mod_level?: ID;
    max_t_set?: ID;
    opentherm_version_controller?: any;
    otc_active?: boolean;
    otc_hc_ratio?: ID;
    out_pin: Pin;
    summer_mode_active?: boolean;
    sync_mode?: boolean;
    t_dhw_set?: ID;
    t_room?: ID;
    t_room_set?: ID;
    t_room_set_ch2?: ID;
    t_set?: ID;
    t_set_ch2?: ID;
}

export class OpenthermBinarySensor extends EsphomeComponent<OpenthermBinarySensorConfig> {
    componentName: string = "opentherm.binary_sensor";
}

export interface OpenthermBinarySensorConfigAirPressureFault extends BinarySensor_BINARY_SENSOR_SCHEMA {
    device_class?: any;
}

export interface OpenthermBinarySensorConfigCh2Active extends BinarySensor_BINARY_SENSOR_SCHEMA {
    device_class?: any;
    icon?: any;
}

export type OpenthermBinarySensorConfigCh2Present = BinarySensor_BINARY_SENSOR_SCHEMA;

export interface OpenthermBinarySensorConfigChActive extends BinarySensor_BINARY_SENSOR_SCHEMA {
    device_class?: any;
    icon?: any;
}

export type OpenthermBinarySensorConfigControlTypeOnOff = BinarySensor_BINARY_SENSOR_SCHEMA;
export type OpenthermBinarySensorConfigControllerPumpControlAllowed = BinarySensor_BINARY_SENSOR_SCHEMA;

export interface OpenthermBinarySensorConfigCoolingActive extends BinarySensor_BINARY_SENSOR_SCHEMA {
    device_class?: any;
}

export type OpenthermBinarySensorConfigCoolingSupported = BinarySensor_BINARY_SENSOR_SCHEMA;

export interface OpenthermBinarySensorConfigDhwActive extends BinarySensor_BINARY_SENSOR_SCHEMA {
    device_class?: any;
    icon?: any;
}

export type OpenthermBinarySensorConfigDhwPresent = BinarySensor_BINARY_SENSOR_SCHEMA;
export type OpenthermBinarySensorConfigDhwSetpointRw = BinarySensor_BINARY_SENSOR_SCHEMA;
export type OpenthermBinarySensorConfigDhwSetpointTransferEnabled = BinarySensor_BINARY_SENSOR_SCHEMA;
export type OpenthermBinarySensorConfigDhwStorageTank = BinarySensor_BINARY_SENSOR_SCHEMA;

export interface OpenthermBinarySensorConfigDiagnosticIndication extends BinarySensor_BINARY_SENSOR_SCHEMA {
    device_class?: any;
}

export interface OpenthermBinarySensorConfigElectricityProduction extends BinarySensor_BINARY_SENSOR_SCHEMA {
    device_class?: any;
}

export interface OpenthermBinarySensorConfigFaultIndication extends BinarySensor_BINARY_SENSOR_SCHEMA {
    device_class?: any;
}

export interface OpenthermBinarySensorConfigFlameFault extends BinarySensor_BINARY_SENSOR_SCHEMA {
    device_class?: any;
}

export interface OpenthermBinarySensorConfigFlameOn extends BinarySensor_BINARY_SENSOR_SCHEMA {
    device_class?: any;
    icon?: any;
}

export type OpenthermBinarySensorConfigHeatMode = BinarySensor_BINARY_SENSOR_SCHEMA;

export interface OpenthermBinarySensorConfigLockoutReset extends BinarySensor_BINARY_SENSOR_SCHEMA {
    device_class?: any;
}

export interface OpenthermBinarySensorConfigLowWaterPressure extends BinarySensor_BINARY_SENSOR_SCHEMA {
    device_class?: any;
}

export type OpenthermBinarySensorConfigMaxChSetpointRw = BinarySensor_BINARY_SENSOR_SCHEMA;
export type OpenthermBinarySensorConfigMaxChSetpointTransferEnabled = BinarySensor_BINARY_SENSOR_SCHEMA;

export interface OpenthermBinarySensorConfigServiceRequest extends BinarySensor_BINARY_SENSOR_SCHEMA {
    device_class?: any;
}

export type OpenthermBinarySensorConfigWaterFilling = BinarySensor_BINARY_SENSOR_SCHEMA;

export interface OpenthermBinarySensorConfigWaterOverTemp extends BinarySensor_BINARY_SENSOR_SCHEMA {
    device_class?: any;
}

export interface OpenthermBinarySensorConfig extends CoreCOMPONENT_SCHEMA {
    air_pressure_fault?: OpenthermBinarySensorConfigAirPressureFault;
    ch2_active?: OpenthermBinarySensorConfigCh2Active;
    ch2_present?: OpenthermBinarySensorConfigCh2Present;
    ch_active?: OpenthermBinarySensorConfigChActive;
    control_type_on_off?: OpenthermBinarySensorConfigControlTypeOnOff;
    controller_pump_control_allowed?: OpenthermBinarySensorConfigControllerPumpControlAllowed;
    cooling_active?: OpenthermBinarySensorConfigCoolingActive;
    cooling_supported?: OpenthermBinarySensorConfigCoolingSupported;
    dhw_active?: OpenthermBinarySensorConfigDhwActive;
    dhw_present?: OpenthermBinarySensorConfigDhwPresent;
    dhw_setpoint_rw?: OpenthermBinarySensorConfigDhwSetpointRw;
    dhw_setpoint_transfer_enabled?: OpenthermBinarySensorConfigDhwSetpointTransferEnabled;
    dhw_storage_tank?: OpenthermBinarySensorConfigDhwStorageTank;
    diagnostic_indication?: OpenthermBinarySensorConfigDiagnosticIndication;
    electricity_production?: OpenthermBinarySensorConfigElectricityProduction;
    fault_indication?: OpenthermBinarySensorConfigFaultIndication;
    flame_fault?: OpenthermBinarySensorConfigFlameFault;
    flame_on?: OpenthermBinarySensorConfigFlameOn;
    heat_mode?: OpenthermBinarySensorConfigHeatMode;
    lockout_reset?: OpenthermBinarySensorConfigLockoutReset;
    low_water_pressure?: OpenthermBinarySensorConfigLowWaterPressure;
    max_ch_setpoint_rw?: OpenthermBinarySensorConfigMaxChSetpointRw;
    max_ch_setpoint_transfer_enabled?: OpenthermBinarySensorConfigMaxChSetpointTransferEnabled;
    opentherm_id?: ID;
    service_request?: OpenthermBinarySensorConfigServiceRequest;
    water_filling?: OpenthermBinarySensorConfigWaterFilling;
    water_over_temp?: OpenthermBinarySensorConfigWaterOverTemp;
}

export class OpenthermNumber extends EsphomeComponent<OpenthermNumberConfig> {
    componentName: string = "opentherm.number";
}

export type OpenthermNumberConfigCoolingControl = {
        id?: ID;
        initial_value?: any;
        max_value?: any;
        min_value?: any;
        restore_value?: boolean;
        step?: any;
        unit_of_measurement?: any;
    } & Number_NUMBER_SCHEMA & CoreCOMPONENT_SCHEMA;
export type OpenthermNumberConfigMaxRelModLevel = {
        id?: ID;
        initial_value?: any;
        max_value?: any;
        min_value?: any;
        restore_value?: boolean;
        step?: any;
        unit_of_measurement?: any;
    } & Number_NUMBER_SCHEMA & CoreCOMPONENT_SCHEMA;
export type OpenthermNumberConfigMaxTSet = {
        auto_max_value?: boolean;
        auto_min_value?: boolean;
        id?: ID;
        initial_value?: any;
        max_value?: any;
        min_value?: any;
        restore_value?: boolean;
        step?: any;
        unit_of_measurement?: any;
    } & Number_NUMBER_SCHEMA & CoreCOMPONENT_SCHEMA;
export type OpenthermNumberConfigOtcHcRatio = {
        auto_max_value?: boolean;
        auto_min_value?: boolean;
        id?: ID;
        initial_value?: any;
        max_value?: any;
        min_value?: any;
        restore_value?: boolean;
        step?: any;
        unit_of_measurement?: any;
    } & Number_NUMBER_SCHEMA & CoreCOMPONENT_SCHEMA;
export type OpenthermNumberConfigTDhwSet = {
        auto_max_value?: boolean;
        auto_min_value?: boolean;
        id?: ID;
        initial_value?: any;
        max_value?: any;
        min_value?: any;
        restore_value?: boolean;
        step?: any;
        unit_of_measurement?: any;
    } & Number_NUMBER_SCHEMA & CoreCOMPONENT_SCHEMA;
export type OpenthermNumberConfigTRoom = {
        id?: ID;
        initial_value?: any;
        max_value?: any;
        min_value?: any;
        restore_value?: boolean;
        step?: any;
        unit_of_measurement?: any;
    } & Number_NUMBER_SCHEMA & CoreCOMPONENT_SCHEMA;
export type OpenthermNumberConfigTRoomSet = {
        id?: ID;
        initial_value?: any;
        max_value?: any;
        min_value?: any;
        restore_value?: boolean;
        step?: any;
        unit_of_measurement?: any;
    } & Number_NUMBER_SCHEMA & CoreCOMPONENT_SCHEMA;
export type OpenthermNumberConfigTRoomSetCh2 = {
        id?: ID;
        initial_value?: any;
        max_value?: any;
        min_value?: any;
        restore_value?: boolean;
        step?: any;
        unit_of_measurement?: any;
    } & Number_NUMBER_SCHEMA & CoreCOMPONENT_SCHEMA;
export type OpenthermNumberConfigTSet = {
        auto_max_value?: boolean;
        id?: ID;
        initial_value?: any;
        max_value?: any;
        min_value?: any;
        restore_value?: boolean;
        step?: any;
        unit_of_measurement?: any;
    } & Number_NUMBER_SCHEMA & CoreCOMPONENT_SCHEMA;
export type OpenthermNumberConfigTSetCh2 = {
        auto_max_value?: boolean;
        id?: ID;
        initial_value?: any;
        max_value?: any;
        min_value?: any;
        restore_value?: boolean;
        step?: any;
        unit_of_measurement?: any;
    } & Number_NUMBER_SCHEMA & CoreCOMPONENT_SCHEMA;

export interface OpenthermNumberConfig extends CoreCOMPONENT_SCHEMA {
    cooling_control?: OpenthermNumberConfigCoolingControl;
    max_rel_mod_level?: OpenthermNumberConfigMaxRelModLevel;
    max_t_set?: OpenthermNumberConfigMaxTSet;
    opentherm_id?: ID;
    otc_hc_ratio?: OpenthermNumberConfigOtcHcRatio;
    t_dhw_set?: OpenthermNumberConfigTDhwSet;
    t_room?: OpenthermNumberConfigTRoom;
    t_room_set?: OpenthermNumberConfigTRoomSet;
    t_room_set_ch2?: OpenthermNumberConfigTRoomSetCh2;
    t_set?: OpenthermNumberConfigTSet;
    t_set_ch2?: OpenthermNumberConfigTSetCh2;
}

export class OpenthermOutput extends EsphomeComponent<OpenthermOutputConfig> {
    componentName: string = "opentherm.output";
}

export type OpenthermOutputConfigCoolingControl = {
        id?: ID;
        max_value?: any;
        min_value?: any;
    } & OutputFLOAT_OUTPUT_SCHEMA & CoreCOMPONENT_SCHEMA;
export type OpenthermOutputConfigMaxRelModLevel = {
        id?: ID;
        max_value?: any;
        min_value?: any;
    } & OutputFLOAT_OUTPUT_SCHEMA & CoreCOMPONENT_SCHEMA;
export type OpenthermOutputConfigMaxTSet = {
        auto_max_value?: boolean;
        auto_min_value?: boolean;
        id?: ID;
        max_value?: any;
        min_value?: any;
    } & OutputFLOAT_OUTPUT_SCHEMA & CoreCOMPONENT_SCHEMA;
export type OpenthermOutputConfigOtcHcRatio = {
        auto_max_value?: boolean;
        auto_min_value?: boolean;
        id?: ID;
        max_value?: any;
        min_value?: any;
    } & OutputFLOAT_OUTPUT_SCHEMA & CoreCOMPONENT_SCHEMA;
export type OpenthermOutputConfigTDhwSet = {
        auto_max_value?: boolean;
        auto_min_value?: boolean;
        id?: ID;
        max_value?: any;
        min_value?: any;
    } & OutputFLOAT_OUTPUT_SCHEMA & CoreCOMPONENT_SCHEMA;
export type OpenthermOutputConfigTRoom = {
        id?: ID;
        max_value?: any;
        min_value?: any;
    } & OutputFLOAT_OUTPUT_SCHEMA & CoreCOMPONENT_SCHEMA;
export type OpenthermOutputConfigTRoomSet = {
        id?: ID;
        max_value?: any;
        min_value?: any;
    } & OutputFLOAT_OUTPUT_SCHEMA & CoreCOMPONENT_SCHEMA;
export type OpenthermOutputConfigTRoomSetCh2 = {
        id?: ID;
        max_value?: any;
        min_value?: any;
    } & OutputFLOAT_OUTPUT_SCHEMA & CoreCOMPONENT_SCHEMA;
export type OpenthermOutputConfigTSet = {
        auto_max_value?: boolean;
        id?: ID;
        max_value?: any;
        min_value?: any;
    } & OutputFLOAT_OUTPUT_SCHEMA & CoreCOMPONENT_SCHEMA;
export type OpenthermOutputConfigTSetCh2 = {
        auto_max_value?: boolean;
        id?: ID;
        max_value?: any;
        min_value?: any;
    } & OutputFLOAT_OUTPUT_SCHEMA & CoreCOMPONENT_SCHEMA;

export interface OpenthermOutputConfig extends CoreCOMPONENT_SCHEMA {
    cooling_control?: OpenthermOutputConfigCoolingControl;
    max_rel_mod_level?: OpenthermOutputConfigMaxRelModLevel;
    max_t_set?: OpenthermOutputConfigMaxTSet;
    opentherm_id?: ID;
    otc_hc_ratio?: OpenthermOutputConfigOtcHcRatio;
    t_dhw_set?: OpenthermOutputConfigTDhwSet;
    t_room?: OpenthermOutputConfigTRoom;
    t_room_set?: OpenthermOutputConfigTRoomSet;
    t_room_set_ch2?: OpenthermOutputConfigTRoomSetCh2;
    t_set?: OpenthermOutputConfigTSet;
    t_set_ch2?: OpenthermOutputConfigTSetCh2;
}

export class OpenthermSensor extends EsphomeComponent<OpenthermSensorConfig> {
    componentName: string = "opentherm.sensor";
}

export type OpenthermSensorConfigBurnerOperationHoursDataType = 'u16' | 's8_lb' | 'u8_hb' | 'u8_lb' | 'u8_lb_60' | 'u8_hb_60' | 'f88' | 's16' | 's8_hb';

export interface OpenthermSensorConfigBurnerOperationHours extends Sensor_SENSOR_SCHEMA {
    accuracy_decimals?: any;
    data_type?: OpenthermSensorConfigBurnerOperationHoursDataType;
    icon?: any;
    state_class?: any;
}

export type OpenthermSensorConfigBurnerStartsDataType = 'u16' | 's8_lb' | 'u8_hb' | 'u8_lb' | 'u8_lb_60' | 'u8_hb_60' | 'f88' | 's16' | 's8_hb';

export interface OpenthermSensorConfigBurnerStarts extends Sensor_SENSOR_SCHEMA {
    accuracy_decimals?: any;
    data_type?: OpenthermSensorConfigBurnerStartsDataType;
    icon?: any;
    state_class?: any;
}

export type OpenthermSensorConfigChPressureDataType = 'u16' | 's8_lb' | 'u8_hb' | 'u8_lb' | 'u8_lb_60' | 'u8_hb_60' | 'f88' | 's16' | 's8_hb';

export interface OpenthermSensorConfigChPressure extends Sensor_SENSOR_SCHEMA {
    accuracy_decimals?: any;
    data_type?: OpenthermSensorConfigChPressureDataType;
    device_class?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export type OpenthermSensorConfigChPumpOperationHoursDataType = 'u16' | 's8_lb' | 'u8_hb' | 'u8_lb' | 'u8_lb_60' | 'u8_hb_60' | 'f88' | 's16' | 's8_hb';

export interface OpenthermSensorConfigChPumpOperationHours extends Sensor_SENSOR_SCHEMA {
    accuracy_decimals?: any;
    data_type?: OpenthermSensorConfigChPumpOperationHoursDataType;
    icon?: any;
    state_class?: any;
}

export type OpenthermSensorConfigChPumpStartsDataType = 'u16' | 's8_lb' | 'u8_hb' | 'u8_lb' | 'u8_lb_60' | 'u8_hb_60' | 'f88' | 's16' | 's8_hb';

export interface OpenthermSensorConfigChPumpStarts extends Sensor_SENSOR_SCHEMA {
    accuracy_decimals?: any;
    data_type?: OpenthermSensorConfigChPumpStartsDataType;
    icon?: any;
    state_class?: any;
}

export type OpenthermSensorConfigDeviceIdDataType = 'u16' | 's8_lb' | 'u8_hb' | 'u8_lb' | 'u8_lb_60' | 'u8_hb_60' | 'f88' | 's16' | 's8_hb';

export interface OpenthermSensorConfigDeviceId extends Sensor_SENSOR_SCHEMA {
    accuracy_decimals?: any;
    data_type?: OpenthermSensorConfigDeviceIdDataType;
    state_class?: any;
}

export type OpenthermSensorConfigDeviceTypeDataType = 'u16' | 's8_lb' | 'u8_hb' | 'u8_lb' | 'u8_lb_60' | 'u8_hb_60' | 'f88' | 's16' | 's8_hb';

export interface OpenthermSensorConfigDeviceType extends Sensor_SENSOR_SCHEMA {
    accuracy_decimals?: any;
    data_type?: OpenthermSensorConfigDeviceTypeDataType;
    state_class?: any;
}

export type OpenthermSensorConfigDeviceVersionDataType = 'u16' | 's8_lb' | 'u8_hb' | 'u8_lb' | 'u8_lb_60' | 'u8_hb_60' | 'f88' | 's16' | 's8_hb';

export interface OpenthermSensorConfigDeviceVersion extends Sensor_SENSOR_SCHEMA {
    accuracy_decimals?: any;
    data_type?: OpenthermSensorConfigDeviceVersionDataType;
    state_class?: any;
}

export type OpenthermSensorConfigDhwBurnerOperationHoursDataType = 'u16' | 's8_lb' | 'u8_hb' | 'u8_lb' | 'u8_lb_60' | 'u8_hb_60' | 'f88' | 's16' | 's8_hb';

export interface OpenthermSensorConfigDhwBurnerOperationHours extends Sensor_SENSOR_SCHEMA {
    accuracy_decimals?: any;
    data_type?: OpenthermSensorConfigDhwBurnerOperationHoursDataType;
    icon?: any;
    state_class?: any;
}

export type OpenthermSensorConfigDhwBurnerStartsDataType = 'u16' | 's8_lb' | 'u8_hb' | 'u8_lb' | 'u8_lb_60' | 'u8_hb_60' | 'f88' | 's16' | 's8_hb';

export interface OpenthermSensorConfigDhwBurnerStarts extends Sensor_SENSOR_SCHEMA {
    accuracy_decimals?: any;
    data_type?: OpenthermSensorConfigDhwBurnerStartsDataType;
    icon?: any;
    state_class?: any;
}

export type OpenthermSensorConfigDhwFlowRateDataType = 'u16' | 's8_lb' | 'u8_hb' | 'u8_lb' | 'u8_lb_60' | 'u8_hb_60' | 'f88' | 's16' | 's8_hb';

export interface OpenthermSensorConfigDhwFlowRate extends Sensor_SENSOR_SCHEMA {
    accuracy_decimals?: any;
    data_type?: OpenthermSensorConfigDhwFlowRateDataType;
    icon?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export type OpenthermSensorConfigDhwPumpValveOperationHoursDataType = 'u16' | 's8_lb' | 'u8_hb' | 'u8_lb' | 'u8_lb_60' | 'u8_hb_60' | 'f88' | 's16' | 's8_hb';

export interface OpenthermSensorConfigDhwPumpValveOperationHours extends Sensor_SENSOR_SCHEMA {
    accuracy_decimals?: any;
    data_type?: OpenthermSensorConfigDhwPumpValveOperationHoursDataType;
    icon?: any;
    state_class?: any;
}

export type OpenthermSensorConfigDhwPumpValveStartsDataType = 'u16' | 's8_lb' | 'u8_hb' | 'u8_lb' | 'u8_lb_60' | 'u8_hb_60' | 'f88' | 's16' | 's8_hb';

export interface OpenthermSensorConfigDhwPumpValveStarts extends Sensor_SENSOR_SCHEMA {
    accuracy_decimals?: any;
    data_type?: OpenthermSensorConfigDhwPumpValveStartsDataType;
    icon?: any;
    state_class?: any;
}

export type OpenthermSensorConfigFanSpeedDataType = 'u16' | 's8_lb' | 'u8_hb' | 'u8_lb' | 'u8_lb_60' | 'u8_hb_60' | 'f88' | 's16' | 's8_hb';

export interface OpenthermSensorConfigFanSpeed extends Sensor_SENSOR_SCHEMA {
    accuracy_decimals?: any;
    data_type?: OpenthermSensorConfigFanSpeedDataType;
    icon?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export type OpenthermSensorConfigFanSpeedSetpointDataType = 'u16' | 's8_lb' | 'u8_hb' | 'u8_lb' | 'u8_lb_60' | 'u8_hb_60' | 'f88' | 's16' | 's8_hb';

export interface OpenthermSensorConfigFanSpeedSetpoint extends Sensor_SENSOR_SCHEMA {
    accuracy_decimals?: any;
    data_type?: OpenthermSensorConfigFanSpeedSetpointDataType;
    icon?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export type OpenthermSensorConfigFlameCurrentDataType = 'u16' | 's8_lb' | 'u8_hb' | 'u8_lb' | 'u8_lb_60' | 'u8_hb_60' | 'f88' | 's16' | 's8_hb';

export interface OpenthermSensorConfigFlameCurrent extends Sensor_SENSOR_SCHEMA {
    accuracy_decimals?: any;
    data_type?: OpenthermSensorConfigFlameCurrentDataType;
    device_class?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export type OpenthermSensorConfigMaxCapacityDataType = 'u16' | 's8_lb' | 'u8_hb' | 'u8_lb' | 'u8_lb_60' | 'u8_hb_60' | 'f88' | 's16' | 's8_hb';

export interface OpenthermSensorConfigMaxCapacity extends Sensor_SENSOR_SCHEMA {
    accuracy_decimals?: any;
    data_type?: OpenthermSensorConfigMaxCapacityDataType;
    state_class?: any;
    unit_of_measurement?: any;
}

export type OpenthermSensorConfigMaxTSetDataType = 'u16' | 's8_lb' | 'u8_hb' | 'u8_lb' | 'u8_lb_60' | 'u8_hb_60' | 'f88' | 's16' | 's8_hb';

export interface OpenthermSensorConfigMaxTSet extends Sensor_SENSOR_SCHEMA {
    accuracy_decimals?: any;
    data_type?: OpenthermSensorConfigMaxTSetDataType;
    device_class?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export type OpenthermSensorConfigMaxTSetLbDataType = 'u16' | 's8_lb' | 'u8_hb' | 'u8_lb' | 'u8_lb_60' | 'u8_hb_60' | 'f88' | 's16' | 's8_hb';

export interface OpenthermSensorConfigMaxTSetLb extends Sensor_SENSOR_SCHEMA {
    accuracy_decimals?: any;
    data_type?: OpenthermSensorConfigMaxTSetLbDataType;
    device_class?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export type OpenthermSensorConfigMaxTSetUbDataType = 'u16' | 's8_lb' | 'u8_hb' | 'u8_lb' | 'u8_lb_60' | 'u8_hb_60' | 'f88' | 's16' | 's8_hb';

export interface OpenthermSensorConfigMaxTSetUb extends Sensor_SENSOR_SCHEMA {
    accuracy_decimals?: any;
    data_type?: OpenthermSensorConfigMaxTSetUbDataType;
    device_class?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export type OpenthermSensorConfigMinModLevelDataType = 'u16' | 's8_lb' | 'u8_hb' | 'u8_lb' | 'u8_lb_60' | 'u8_hb_60' | 'f88' | 's16' | 's8_hb';

export interface OpenthermSensorConfigMinModLevel extends Sensor_SENSOR_SCHEMA {
    accuracy_decimals?: any;
    data_type?: OpenthermSensorConfigMinModLevelDataType;
    icon?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export type OpenthermSensorConfigOemDiagnosticCodeDataType = 'u16' | 's8_lb' | 'u8_hb' | 'u8_lb' | 'u8_lb_60' | 'u8_hb_60' | 'f88' | 's16' | 's8_hb';

export interface OpenthermSensorConfigOemDiagnosticCode extends Sensor_SENSOR_SCHEMA {
    accuracy_decimals?: any;
    data_type?: OpenthermSensorConfigOemDiagnosticCodeDataType;
    state_class?: any;
}

export type OpenthermSensorConfigOemFaultCodeDataType = 'u16' | 's8_lb' | 'u8_hb' | 'u8_lb' | 'u8_lb_60' | 'u8_hb_60' | 'f88' | 's16' | 's8_hb';

export interface OpenthermSensorConfigOemFaultCode extends Sensor_SENSOR_SCHEMA {
    accuracy_decimals?: any;
    data_type?: OpenthermSensorConfigOemFaultCodeDataType;
    state_class?: any;
}

export type OpenthermSensorConfigOpenthermVersionDeviceDataType = 'u16' | 's8_lb' | 'u8_hb' | 'u8_lb' | 'u8_lb_60' | 'u8_hb_60' | 'f88' | 's16' | 's8_hb';

export interface OpenthermSensorConfigOpenthermVersionDevice extends Sensor_SENSOR_SCHEMA {
    accuracy_decimals?: any;
    data_type?: OpenthermSensorConfigOpenthermVersionDeviceDataType;
    state_class?: any;
}

export type OpenthermSensorConfigOtcHcRatioLbDataType = 'u16' | 's8_lb' | 'u8_hb' | 'u8_lb' | 'u8_lb_60' | 'u8_hb_60' | 'f88' | 's16' | 's8_hb';

export interface OpenthermSensorConfigOtcHcRatioLb extends Sensor_SENSOR_SCHEMA {
    accuracy_decimals?: any;
    data_type?: OpenthermSensorConfigOtcHcRatioLbDataType;
    state_class?: any;
}

export type OpenthermSensorConfigOtcHcRatioUbDataType = 'u16' | 's8_lb' | 'u8_hb' | 'u8_lb' | 'u8_lb_60' | 'u8_hb_60' | 'f88' | 's16' | 's8_hb';

export interface OpenthermSensorConfigOtcHcRatioUb extends Sensor_SENSOR_SCHEMA {
    accuracy_decimals?: any;
    data_type?: OpenthermSensorConfigOtcHcRatioUbDataType;
    state_class?: any;
}

export type OpenthermSensorConfigRelModLevelDataType = 'u16' | 's8_lb' | 'u8_hb' | 'u8_lb' | 'u8_lb_60' | 'u8_hb_60' | 'f88' | 's16' | 's8_hb';

export interface OpenthermSensorConfigRelModLevel extends Sensor_SENSOR_SCHEMA {
    accuracy_decimals?: any;
    data_type?: OpenthermSensorConfigRelModLevelDataType;
    icon?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export type OpenthermSensorConfigTBoilerDataType = 'u16' | 's8_lb' | 'u8_hb' | 'u8_lb' | 'u8_lb_60' | 'u8_hb_60' | 'f88' | 's16' | 's8_hb';

export interface OpenthermSensorConfigTBoiler extends Sensor_SENSOR_SCHEMA {
    accuracy_decimals?: any;
    data_type?: OpenthermSensorConfigTBoilerDataType;
    device_class?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export type OpenthermSensorConfigTCollectorDataType = 'u16' | 's8_lb' | 'u8_hb' | 'u8_lb' | 'u8_lb_60' | 'u8_hb_60' | 'f88' | 's16' | 's8_hb';

export interface OpenthermSensorConfigTCollector extends Sensor_SENSOR_SCHEMA {
    accuracy_decimals?: any;
    data_type?: OpenthermSensorConfigTCollectorDataType;
    device_class?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export type OpenthermSensorConfigTDhwDataType = 'u16' | 's8_lb' | 'u8_hb' | 'u8_lb' | 'u8_lb_60' | 'u8_hb_60' | 'f88' | 's16' | 's8_hb';

export interface OpenthermSensorConfigTDhw extends Sensor_SENSOR_SCHEMA {
    accuracy_decimals?: any;
    data_type?: OpenthermSensorConfigTDhwDataType;
    device_class?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export type OpenthermSensorConfigTDhw2DataType = 'u16' | 's8_lb' | 'u8_hb' | 'u8_lb' | 'u8_lb_60' | 'u8_hb_60' | 'f88' | 's16' | 's8_hb';

export interface OpenthermSensorConfigTDhw2 extends Sensor_SENSOR_SCHEMA {
    accuracy_decimals?: any;
    data_type?: OpenthermSensorConfigTDhw2DataType;
    device_class?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export type OpenthermSensorConfigTDhwSetDataType = 'u16' | 's8_lb' | 'u8_hb' | 'u8_lb' | 'u8_lb_60' | 'u8_hb_60' | 'f88' | 's16' | 's8_hb';

export interface OpenthermSensorConfigTDhwSet extends Sensor_SENSOR_SCHEMA {
    accuracy_decimals?: any;
    data_type?: OpenthermSensorConfigTDhwSetDataType;
    device_class?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export type OpenthermSensorConfigTDhwSetLbDataType = 'u16' | 's8_lb' | 'u8_hb' | 'u8_lb' | 'u8_lb_60' | 'u8_hb_60' | 'f88' | 's16' | 's8_hb';

export interface OpenthermSensorConfigTDhwSetLb extends Sensor_SENSOR_SCHEMA {
    accuracy_decimals?: any;
    data_type?: OpenthermSensorConfigTDhwSetLbDataType;
    device_class?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export type OpenthermSensorConfigTDhwSetUbDataType = 'u16' | 's8_lb' | 'u8_hb' | 'u8_lb' | 'u8_lb_60' | 'u8_hb_60' | 'f88' | 's16' | 's8_hb';

export interface OpenthermSensorConfigTDhwSetUb extends Sensor_SENSOR_SCHEMA {
    accuracy_decimals?: any;
    data_type?: OpenthermSensorConfigTDhwSetUbDataType;
    device_class?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export type OpenthermSensorConfigTExhaustDataType = 'u16' | 's8_lb' | 'u8_hb' | 'u8_lb' | 'u8_lb_60' | 'u8_hb_60' | 'f88' | 's16' | 's8_hb';

export interface OpenthermSensorConfigTExhaust extends Sensor_SENSOR_SCHEMA {
    accuracy_decimals?: any;
    data_type?: OpenthermSensorConfigTExhaustDataType;
    device_class?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export type OpenthermSensorConfigTFlowCh2DataType = 'u16' | 's8_lb' | 'u8_hb' | 'u8_lb' | 'u8_lb_60' | 'u8_hb_60' | 'f88' | 's16' | 's8_hb';

export interface OpenthermSensorConfigTFlowCh2 extends Sensor_SENSOR_SCHEMA {
    accuracy_decimals?: any;
    data_type?: OpenthermSensorConfigTFlowCh2DataType;
    device_class?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export type OpenthermSensorConfigTOutsideDataType = 'u16' | 's8_lb' | 'u8_hb' | 'u8_lb' | 'u8_lb_60' | 'u8_hb_60' | 'f88' | 's16' | 's8_hb';

export interface OpenthermSensorConfigTOutside extends Sensor_SENSOR_SCHEMA {
    accuracy_decimals?: any;
    data_type?: OpenthermSensorConfigTOutsideDataType;
    device_class?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export type OpenthermSensorConfigTRetDataType = 'u16' | 's8_lb' | 'u8_hb' | 'u8_lb' | 'u8_lb_60' | 'u8_hb_60' | 'f88' | 's16' | 's8_hb';

export interface OpenthermSensorConfigTRet extends Sensor_SENSOR_SCHEMA {
    accuracy_decimals?: any;
    data_type?: OpenthermSensorConfigTRetDataType;
    device_class?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export type OpenthermSensorConfigTStorageDataType = 'u16' | 's8_lb' | 'u8_hb' | 'u8_lb' | 'u8_lb_60' | 'u8_hb_60' | 'f88' | 's16' | 's8_hb';

export interface OpenthermSensorConfigTStorage extends Sensor_SENSOR_SCHEMA {
    accuracy_decimals?: any;
    data_type?: OpenthermSensorConfigTStorageDataType;
    device_class?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface OpenthermSensorConfig extends CoreCOMPONENT_SCHEMA {
    burner_operation_hours?: OpenthermSensorConfigBurnerOperationHours;
    burner_starts?: OpenthermSensorConfigBurnerStarts;
    ch_pressure?: OpenthermSensorConfigChPressure;
    ch_pump_operation_hours?: OpenthermSensorConfigChPumpOperationHours;
    ch_pump_starts?: OpenthermSensorConfigChPumpStarts;
    device_id?: OpenthermSensorConfigDeviceId;
    device_type?: OpenthermSensorConfigDeviceType;
    device_version?: OpenthermSensorConfigDeviceVersion;
    dhw_burner_operation_hours?: OpenthermSensorConfigDhwBurnerOperationHours;
    dhw_burner_starts?: OpenthermSensorConfigDhwBurnerStarts;
    dhw_flow_rate?: OpenthermSensorConfigDhwFlowRate;
    dhw_pump_valve_operation_hours?: OpenthermSensorConfigDhwPumpValveOperationHours;
    dhw_pump_valve_starts?: OpenthermSensorConfigDhwPumpValveStarts;
    fan_speed?: OpenthermSensorConfigFanSpeed;
    fan_speed_setpoint?: OpenthermSensorConfigFanSpeedSetpoint;
    flame_current?: OpenthermSensorConfigFlameCurrent;
    max_capacity?: OpenthermSensorConfigMaxCapacity;
    max_t_set?: OpenthermSensorConfigMaxTSet;
    max_t_set_lb?: OpenthermSensorConfigMaxTSetLb;
    max_t_set_ub?: OpenthermSensorConfigMaxTSetUb;
    min_mod_level?: OpenthermSensorConfigMinModLevel;
    oem_diagnostic_code?: OpenthermSensorConfigOemDiagnosticCode;
    oem_fault_code?: OpenthermSensorConfigOemFaultCode;
    opentherm_id?: ID;
    opentherm_version_device?: OpenthermSensorConfigOpenthermVersionDevice;
    otc_hc_ratio_lb?: OpenthermSensorConfigOtcHcRatioLb;
    otc_hc_ratio_ub?: OpenthermSensorConfigOtcHcRatioUb;
    rel_mod_level?: OpenthermSensorConfigRelModLevel;
    t_boiler?: OpenthermSensorConfigTBoiler;
    t_collector?: OpenthermSensorConfigTCollector;
    t_dhw?: OpenthermSensorConfigTDhw;
    t_dhw2?: OpenthermSensorConfigTDhw2;
    t_dhw_set?: OpenthermSensorConfigTDhwSet;
    t_dhw_set_lb?: OpenthermSensorConfigTDhwSetLb;
    t_dhw_set_ub?: OpenthermSensorConfigTDhwSetUb;
    t_exhaust?: OpenthermSensorConfigTExhaust;
    t_flow_ch2?: OpenthermSensorConfigTFlowCh2;
    t_outside?: OpenthermSensorConfigTOutside;
    t_ret?: OpenthermSensorConfigTRet;
    t_storage?: OpenthermSensorConfigTStorage;
}

export class OpenthermSwitch extends EsphomeComponent<OpenthermSwitchConfig> {
    componentName: string = "opentherm.switch";
}

export type OpenthermSwitchConfigCh2Active = {
        id?: ID;
        restore_mode?: any;
    } & Switch_SWITCH_SCHEMA & CoreCOMPONENT_SCHEMA;
export type OpenthermSwitchConfigChEnable = {
        id?: ID;
        restore_mode?: any;
    } & Switch_SWITCH_SCHEMA & CoreCOMPONENT_SCHEMA;
export type OpenthermSwitchConfigCoolingEnable = {
        id?: ID;
        restore_mode?: any;
    } & Switch_SWITCH_SCHEMA & CoreCOMPONENT_SCHEMA;
export type OpenthermSwitchConfigDhwBlock = {
        id?: ID;
        restore_mode?: any;
    } & Switch_SWITCH_SCHEMA & CoreCOMPONENT_SCHEMA;
export type OpenthermSwitchConfigDhwEnable = {
        id?: ID;
        restore_mode?: any;
    } & Switch_SWITCH_SCHEMA & CoreCOMPONENT_SCHEMA;
export type OpenthermSwitchConfigOtcActive = {
        id?: ID;
        restore_mode?: any;
    } & Switch_SWITCH_SCHEMA & CoreCOMPONENT_SCHEMA;
export type OpenthermSwitchConfigSummerModeActive = {
        id?: ID;
        restore_mode?: any;
    } & Switch_SWITCH_SCHEMA & CoreCOMPONENT_SCHEMA;

export interface OpenthermSwitchConfig extends CoreCOMPONENT_SCHEMA {
    ch2_active?: OpenthermSwitchConfigCh2Active;
    ch_enable?: OpenthermSwitchConfigChEnable;
    cooling_enable?: OpenthermSwitchConfigCoolingEnable;
    dhw_block?: OpenthermSwitchConfigDhwBlock;
    dhw_enable?: OpenthermSwitchConfigDhwEnable;
    opentherm_id?: ID;
    otc_active?: OpenthermSwitchConfigOtcActive;
    summer_mode_active?: OpenthermSwitchConfigSummerModeActive;
}
