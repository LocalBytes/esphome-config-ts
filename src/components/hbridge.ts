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
import type { FanFANSCHEMA } from "./fan.js";
import type { CoreCOMPONENTSCHEMA, CorePositiveTimePeriodMilliseconds } from "./esphome.js";
import type { LightRGBLIGHTSCHEMA } from "./light.js";
import type { SwitchSWITCHSCHEMA } from "./switch.js";

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
    } & FanFANSCHEMA & CoreCOMPONENTSCHEMA;

export class HbridgeLight extends EsphomeComponent<HbridgeLightConfig> {
    componentName: string = "hbridge.light";
}

export interface HbridgeLightConfig extends LightRGBLIGHTSCHEMA {
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
    } & SwitchSWITCHSCHEMA & CoreCOMPONENTSCHEMA;
