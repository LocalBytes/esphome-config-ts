/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: haier.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/haier
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes)
 **/
import { type ID, type Pin, EsphomeComponent } from "@/lib/base.js";
import type { BinarySensorBINARYSENSORSCHEMA } from "./binary_sensor.js";
import type { ButtonBUTTONSCHEMA } from "./button.js";
import type { CorePositiveTimePeriodMilliseconds } from "./esphome.js";
import type { SensorSENSORSCHEMA } from "./sensor.js";
import type { SwitchSWITCHSCHEMA } from "./switch.js";
import type { TextSensorTEXTSENSORSCHEMA } from "./text_sensor.js";

export class HaierBinarySensor extends EsphomeComponent<HaierBinarySensorConfig> {
    componentName: string = "haier.binary_sensor";
}

export interface HaierBinarySensorConfigCompressorStatus extends BinarySensorBINARYSENSORSCHEMA {
    entity_category?: any;
    icon?: any;
}

export interface HaierBinarySensorConfigDefrostStatus extends BinarySensorBINARYSENSORSCHEMA {
    entity_category?: any;
    icon?: any;
}

export interface HaierBinarySensorConfigFourWayValveStatus extends BinarySensorBINARYSENSORSCHEMA {
    entity_category?: any;
    icon?: any;
}

export interface HaierBinarySensorConfigIndoorElectricHeatingStatus extends BinarySensorBINARYSENSORSCHEMA {
    entity_category?: any;
    icon?: any;
}

export interface HaierBinarySensorConfigIndoorFanStatus extends BinarySensorBINARYSENSORSCHEMA {
    entity_category?: any;
    icon?: any;
}

export interface HaierBinarySensorConfigOutdoorFanStatus extends BinarySensorBINARYSENSORSCHEMA {
    entity_category?: any;
    icon?: any;
}

export interface HaierBinarySensorConfig {
    compressor_status?: HaierBinarySensorConfigCompressorStatus;
    defrost_status?: HaierBinarySensorConfigDefrostStatus;
    four_way_valve_status?: HaierBinarySensorConfigFourWayValveStatus;
    haier_id?: ID;
    indoor_electric_heating_status?: HaierBinarySensorConfigIndoorElectricHeatingStatus;
    indoor_fan_status?: HaierBinarySensorConfigIndoorFanStatus;
    outdoor_fan_status?: HaierBinarySensorConfigOutdoorFanStatus;
}

export class HaierButton extends EsphomeComponent<HaierButtonConfig> {
    componentName: string = "haier.button";
}

export interface HaierButtonConfigSelfCleaning extends ButtonBUTTONSCHEMA {
    icon?: any;
    id?: ID;
}

export interface HaierButtonConfigSteriCleaning extends ButtonBUTTONSCHEMA {
    icon?: any;
    id?: ID;
}

export interface HaierButtonConfig {
    haier_id?: ID;
    self_cleaning?: HaierButtonConfigSelfCleaning;
    steri_cleaning?: HaierButtonConfigSteriCleaning;
}

export class HaierClimate extends EsphomeComponent<HaierClimateConfig> {
    componentName: string = "haier.climate";
}

export type HaierClimateConfig = HaierClimateConfigHON | HaierClimateConfigSMARTAIR2;
export type HaierClimateConfigHONAnswerTimeout = CorePositiveTimePeriodMilliseconds;
export type HaierClimateConfigHONControlMethod = 'MONITOR_ONLY' | 'SET_GROUP_PARAMETERS' | 'SET_SINGLE_PARAMETER';
export type HaierClimateConfigHONSupportedModes = 'OFF' | 'HEAT_COOL' | 'COOL' | 'HEAT' | 'DRY' | 'FAN_ONLY';
export type HaierClimateConfigHONSupportedPresets = 'AWAY' | 'BOOST' | 'SLEEP';
export type HaierClimateConfigHONSupportedSwingModes = 'OFF' | 'VERTICAL' | 'HORIZONTAL' | 'BOTH';

export interface HaierClimateConfigHON {
    protocol: "HON" | "HON";
    answer_timeout?: HaierClimateConfigHONAnswerTimeout;
    control_method?: HaierClimateConfigHONControlMethod;
    control_packet_size?: number;
    display?: boolean;
    id?: ID;
    on_alarm_end?: object[];
    on_alarm_start?: object[];
    on_status_message?: object[];
    sensors_packet_size?: number;
    status_message_header_size?: number;
    supported_modes?: HaierClimateConfigHONSupportedModes[];
    supported_presets?: HaierClimateConfigHONSupportedPresets[];
    supported_swing_modes?: HaierClimateConfigHONSupportedSwingModes[];
    uart_id?: ID;
    wifi_signal?: boolean;
}

export type HaierClimateConfigSMARTAIR2AnswerTimeout = CorePositiveTimePeriodMilliseconds;
export type HaierClimateConfigSMARTAIR2SupportedModes = 'OFF' | 'HEAT_COOL' | 'COOL' | 'HEAT' | 'DRY' | 'FAN_ONLY';
export type HaierClimateConfigSMARTAIR2SupportedPresets = 'AWAY' | 'BOOST' | 'COMFORT';
export type HaierClimateConfigSMARTAIR2SupportedSwingModes = 'OFF' | 'VERTICAL' | 'HORIZONTAL' | 'BOTH';

export interface HaierClimateConfigSMARTAIR2 {
    protocol: "SMARTAIR2" | "SMARTAIR2";
    alternative_swing_control?: boolean;
    answer_timeout?: HaierClimateConfigSMARTAIR2AnswerTimeout;
    display?: boolean;
    id?: ID;
    on_status_message?: object[];
    supported_modes?: HaierClimateConfigSMARTAIR2SupportedModes[];
    supported_presets?: HaierClimateConfigSMARTAIR2SupportedPresets[];
    supported_swing_modes?: HaierClimateConfigSMARTAIR2SupportedSwingModes[];
    uart_id?: ID;
    wifi_signal?: boolean;
}

export interface HaierClimateHAIERBASEACTIONSCHEMA {
    id?: ID;
}

export interface HaierClimateHAIERHONBASEACTIONSCHEMA {
    id?: ID;
}

export class HaierSensor extends EsphomeComponent<HaierSensorConfig> {
    componentName: string = "haier.sensor";
}

export interface HaierSensorConfigCompressorCurrent extends SensorSENSORSCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    entity_category?: any;
    icon?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface HaierSensorConfigCompressorFrequency extends SensorSENSORSCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    entity_category?: any;
    icon?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface HaierSensorConfigExpansionValveOpenDegree extends SensorSENSORSCHEMA {
    accuracy_decimals?: any;
    entity_category?: any;
    icon?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface HaierSensorConfigHumidity extends SensorSENSORSCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    icon?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface HaierSensorConfigIndoorCoilTemperature extends SensorSENSORSCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    entity_category?: any;
    icon?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface HaierSensorConfigOutdoorCoilTemperature extends SensorSENSORSCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    entity_category?: any;
    icon?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface HaierSensorConfigOutdoorDefrostTemperature extends SensorSENSORSCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    entity_category?: any;
    icon?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface HaierSensorConfigOutdoorInAirTemperature extends SensorSENSORSCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    entity_category?: any;
    icon?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface HaierSensorConfigOutdoorOutAirTemperature extends SensorSENSORSCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    entity_category?: any;
    icon?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface HaierSensorConfigOutdoorTemperature extends SensorSENSORSCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    icon?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface HaierSensorConfigPower extends SensorSENSORSCHEMA {
    accuracy_decimals?: any;
    device_class?: any;
    entity_category?: any;
    icon?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface HaierSensorConfig {
    compressor_current?: HaierSensorConfigCompressorCurrent;
    compressor_frequency?: HaierSensorConfigCompressorFrequency;
    expansion_valve_open_degree?: HaierSensorConfigExpansionValveOpenDegree;
    haier_id?: ID;
    humidity?: HaierSensorConfigHumidity;
    indoor_coil_temperature?: HaierSensorConfigIndoorCoilTemperature;
    outdoor_coil_temperature?: HaierSensorConfigOutdoorCoilTemperature;
    outdoor_defrost_temperature?: HaierSensorConfigOutdoorDefrostTemperature;
    outdoor_in_air_temperature?: HaierSensorConfigOutdoorInAirTemperature;
    outdoor_out_air_temperature?: HaierSensorConfigOutdoorOutAirTemperature;
    outdoor_temperature?: HaierSensorConfigOutdoorTemperature;
    power?: HaierSensorConfigPower;
}

export class HaierSwitch extends EsphomeComponent<HaierSwitchConfig> {
    componentName: string = "haier.switch";
}

export interface HaierSwitchConfigBeeper extends SwitchSWITCHSCHEMA {
    entity_category?: any;
    icon?: any;
    id?: ID;
    restore_mode?: any;
}

export interface HaierSwitchConfigDisplay extends SwitchSWITCHSCHEMA {
    entity_category?: any;
    icon?: any;
    id?: ID;
    restore_mode?: any;
}

export interface HaierSwitchConfigHealthMode extends SwitchSWITCHSCHEMA {
    icon?: any;
    id?: ID;
    restore_mode?: any;
}

export interface HaierSwitchConfigQuietMode extends SwitchSWITCHSCHEMA {
    entity_category?: any;
    icon?: any;
    id?: ID;
    restore_mode?: any;
}

export interface HaierSwitchConfig {
    beeper?: HaierSwitchConfigBeeper;
    display?: HaierSwitchConfigDisplay;
    haier_id?: ID;
    health_mode?: HaierSwitchConfigHealthMode;
    quiet_mode?: HaierSwitchConfigQuietMode;
}

export class HaierTextSensor extends EsphomeComponent<HaierTextSensorConfig> {
    componentName: string = "haier.text_sensor";
}

export interface HaierTextSensorConfigApplianceName extends TextSensorTEXTSENSORSCHEMA {
    entity_category?: any;
    icon?: any;
}

export interface HaierTextSensorConfigCleaningStatus extends TextSensorTEXTSENSORSCHEMA {
    entity_category?: any;
    icon?: any;
}

export interface HaierTextSensorConfigProtocolVersion extends TextSensorTEXTSENSORSCHEMA {
    entity_category?: any;
    icon?: any;
}

export interface HaierTextSensorConfig {
    appliance_name?: HaierTextSensorConfigApplianceName;
    cleaning_status?: HaierTextSensorConfigCleaningStatus;
    haier_id?: ID;
    protocol_version?: HaierTextSensorConfigProtocolVersion;
}
