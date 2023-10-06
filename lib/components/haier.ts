/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: haier.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/haier
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes) 2023
 **/
import { ID, Pin, BaseComponent } from "../base.js";
import { CorePositiveTimePeriodMilliseconds, CoreCOMPONENT_SCHEMA } from "./esphome.js";
import { ClimateCLIMATE_SCHEMA } from "./climate.js";
import { SensorSENSOR_SCHEMA } from "./sensor.js";

export class HaierClimate extends BaseComponent<HaierClimateConfig> {
    componentName: string = "haier.climate";
}

export interface HaierClimateBASE_CONFIG_SCHEMA extends ClimateCLIMATE_SCHEMA, CoreCOMPONENT_SCHEMA {
    supported_modes?: HaierClimateBASE_CONFIG_SCHEMASupportedModes[];
    supported_swing_modes?: HaierClimateBASE_CONFIG_SCHEMASupportedSwingModes[];
    wifi_signal?: boolean;
    display?: boolean;
    answer_timeout?: HaierClimateBASE_CONFIG_SCHEMAAnswerTimeout;
    uart_id?: ID;
}

export type HaierClimateBASE_CONFIG_SCHEMASupportedModes = 'OFF' | 'HEAT_COOL' | 'COOL' | 'HEAT' | 'DRY' | 'FAN_ONLY';
export type HaierClimateBASE_CONFIG_SCHEMASupportedSwingModes = 'OFF' | 'VERTICAL' | 'HORIZONTAL' | 'BOTH';

export interface HaierClimateBASE_CONFIG_SCHEMAAnswerTimeout extends CorePositiveTimePeriodMilliseconds {
}

export type HaierClimateConfig = HaierClimateConfigSMARTAIR2 | HaierClimateConfigHON;

export interface HaierClimateConfigSMARTAIR2 {
    protocol: "SMARTAIR2" | "SMARTAIR2";
    id?: ID;
    supported_presets?: HaierClimateConfigSMARTAIR2SupportedPresets[];
}

export type HaierClimateConfigSMARTAIR2SupportedPresets = 'BOOST' | 'COMFORT';

export interface HaierClimateConfigHON {
    protocol: "HON" | "HON";
    id?: ID;
    beeper?: boolean;
    supported_presets?: HaierClimateConfigHONSupportedPresets[];
    outdoor_temperature?: HaierClimateConfigHONOutdoorTemperature;
}

export type HaierClimateConfigHONSupportedPresets = 'ECO' | 'BOOST' | 'SLEEP';

export interface HaierClimateConfigHONOutdoorTemperature extends SensorSENSOR_SCHEMA {
    unit_of_measurement?: any;
    icon?: any;
    accuracy_decimals?: any;
    device_class?: any;
    state_class?: any;
}

export interface HaierClimateHAIER_BASE_ACTION_SCHEMA {
    id?: ID;
}

export interface HaierClimateHAIER_HON_BASE_ACTION_SCHEMA {
    id?: ID;
}
