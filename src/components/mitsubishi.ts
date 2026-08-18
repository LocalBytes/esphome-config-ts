/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: mitsubishi.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/mitsubishi
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes)
 **/
import { type ID, type Pin, EsphomeComponent } from "@/lib/base.js";
import type { ClimateCLIMATESCHEMA } from "./climate.js";
import type { CoreCOMPONENTSCHEMA } from "./esphome.js";

export class MitsubishiClimate extends EsphomeComponent<MitsubishiClimateConfig> {
    componentName: string = "mitsubishi.climate";
}

export type MitsubishiClimateConfigHorizontalDefault = 'left' | 'middle-left' | 'middle' | 'middle-right' | 'right' | 'split';
export type MitsubishiClimateConfigSetFanMode = 'quiet_4levels' | '4levels' | '3levels';
export type MitsubishiClimateConfigVerticalDefault = 'auto' | 'up' | 'middle-up' | 'middle' | 'middle-down' | 'down';
export type MitsubishiClimateConfig = {
        horizontal_default?: MitsubishiClimateConfigHorizontalDefault;
        humidity_sensor?: ID;
        id?: ID;
        receiver_id?: ID;
        sensor?: ID;
        set_fan_mode?: MitsubishiClimateConfigSetFanMode;
        supports_cool?: boolean;
        supports_dry?: boolean;
        supports_fan_only?: boolean;
        supports_heat?: boolean;
        transmitter_id?: ID;
        vertical_default?: MitsubishiClimateConfigVerticalDefault;
    } & ClimateCLIMATESCHEMA & CoreCOMPONENTSCHEMA;
