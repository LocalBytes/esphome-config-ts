/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: hbridge.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/hbridge
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes)
 **/
import { type ID, type Pin, EsphomeComponent } from "@/lib/base.js";
import type { Fan_FAN_SCHEMA } from "./fan.js";
import type { CoreCOMPONENT_SCHEMA, CorePositiveTimePeriodMilliseconds } from "./esphome.js";
import type { LightRGB_LIGHT_SCHEMA } from "./light.js";
import type { Switch_SWITCH_SCHEMA } from "./switch.js";

export class HbridgeFan extends EsphomeComponent<HbridgeFanConfig> {
    componentName: string = "hbridge.fan";
}

export type HbridgeFanConfigDecayMode = 'SLOW' | 'FAST';
export type HbridgeFanConfig = {
        decay_mode?: HbridgeFanConfigDecayMode;
        enable_pin?: ID;
        id?: ID;
        pin_a: ID;
        pin_b: ID;
        preset_modes?: any;
        speed_count?: number;
    } & Fan_FAN_SCHEMA & CoreCOMPONENT_SCHEMA;

export class HbridgeLight extends EsphomeComponent<HbridgeLightConfig> {
    componentName: string = "hbridge.light";
}

export interface HbridgeLightConfig extends LightRGB_LIGHT_SCHEMA {
    output_id?: ID;
    pin_a: ID;
    pin_b: ID;
}

export class HbridgeSwitch extends EsphomeComponent<HbridgeSwitchConfig> {
    componentName: string = "hbridge.switch";
}

export type HbridgeSwitchConfigPulseLength = CorePositiveTimePeriodMilliseconds;
export type HbridgeSwitchConfigWaitTime = CorePositiveTimePeriodMilliseconds;
export type HbridgeSwitchConfig = {
        id?: ID;
        off_pin: Pin;
        on_pin: Pin;
        optimistic?: boolean;
        pulse_length?: HbridgeSwitchConfigPulseLength;
        wait_time?: HbridgeSwitchConfigWaitTime;
    } & Switch_SWITCH_SCHEMA & CoreCOMPONENT_SCHEMA;
