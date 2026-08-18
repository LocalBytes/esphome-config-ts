/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: deep_sleep.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/deep_sleep
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes)
 **/
import { type ID, type Pin, EsphomeComponent } from "@/lib/base.js";
import type { CorePositiveTimePeriodMilliseconds, CoreCOMPONENTSCHEMA } from "./esphome.js";

export class DeepSleep extends EsphomeComponent<DeepSleepConfig> {
    componentName: string = "deep_sleep";
}

export type DeepSleepConfigEsp32Ext1WakeupMode = 'ANY_LOW' | 'ALL_LOW' | 'ANY_HIGH';

export interface DeepSleepConfigEsp32Ext1Wakeup {
    mode: DeepSleepConfigEsp32Ext1WakeupMode;
    pins: Pin[];
}

export type DeepSleepConfigRunDurationDefault = CorePositiveTimePeriodMilliseconds;
export type DeepSleepConfigRunDurationGpioWakeupReason = CorePositiveTimePeriodMilliseconds;
export type DeepSleepConfigRunDurationTouchWakeupReason = CorePositiveTimePeriodMilliseconds;

export interface DeepSleepConfigRunDuration {
    default: DeepSleepConfigRunDurationDefault;
    gpio_wakeup_reason?: DeepSleepConfigRunDurationGpioWakeupReason;
    touch_wakeup_reason?: DeepSleepConfigRunDurationTouchWakeupReason;
}

export type DeepSleepConfigSleepDuration = CorePositiveTimePeriodMilliseconds;
export type DeepSleepConfigWakeupPinMode = 'IGNORE' | 'KEEP_AWAKE' | 'INVERT_WAKEUP';

export interface DeepSleepConfig extends CoreCOMPONENTSCHEMA {
    esp32_ext1_wakeup?: DeepSleepConfigEsp32Ext1Wakeup;
    id?: ID;
    run_duration?: DeepSleepConfigRunDuration;
    sleep_duration?: DeepSleepConfigSleepDuration;
    touch_wakeup?: boolean;
    wakeup_pin?: any;
    wakeup_pin_mode?: DeepSleepConfigWakeupPinMode;
}

export interface DeepSleepDEEPSLEEPACTIONSCHEMA {
    id?: ID;
}
