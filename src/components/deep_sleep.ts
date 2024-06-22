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
import type { CorePositiveTimePeriodMilliseconds, CoreCOMPONENT_SCHEMA } from "./esphome.js";

export class DeepSleep extends EsphomeComponent<DeepSleepConfig> {
    componentName: string = "deep_sleep";
}

export type DeepSleepConfigRunDurationDefault = CorePositiveTimePeriodMilliseconds;
export type DeepSleepConfigRunDurationTouchWakeupReason = CorePositiveTimePeriodMilliseconds;
export type DeepSleepConfigRunDurationGpioWakeupReason = CorePositiveTimePeriodMilliseconds;

export interface DeepSleepConfigRunDuration {
    default: DeepSleepConfigRunDurationDefault;
    touch_wakeup_reason?: DeepSleepConfigRunDurationTouchWakeupReason;
    gpio_wakeup_reason?: DeepSleepConfigRunDurationGpioWakeupReason;
}

export type DeepSleepConfigSleepDuration = CorePositiveTimePeriodMilliseconds;
export type DeepSleepConfigWakeupPinMode = 'IGNORE' | 'KEEP_AWAKE' | 'INVERT_WAKEUP';
export type DeepSleepConfigEsp32Ext1WakeupMode = 'ALL_LOW' | 'ANY_HIGH';

export interface DeepSleepConfigEsp32Ext1Wakeup {
    pins: Pin[];
    mode: DeepSleepConfigEsp32Ext1WakeupMode;
}

export interface DeepSleepConfig extends CoreCOMPONENT_SCHEMA {
    id?: ID;
    run_duration?: DeepSleepConfigRunDuration;
    sleep_duration?: DeepSleepConfigSleepDuration;
    wakeup_pin?: Pin;
    wakeup_pin_mode?: DeepSleepConfigWakeupPinMode;
    esp32_ext1_wakeup?: DeepSleepConfigEsp32Ext1Wakeup;
    touch_wakeup?: boolean;
}

export interface DeepSleepDEEP_SLEEP_ACTION_SCHEMA {
    id?: ID;
}
