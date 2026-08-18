/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: slow_pwm.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/slow_pwm
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes)
 **/
import { type ID, type Pin, EsphomeComponent } from "@/lib/base.js";
import type { CorePositiveTimePeriodMilliseconds, CoreCOMPONENT_SCHEMA } from "./esphome.js";
import type { OutputFLOAT_OUTPUT_SCHEMA } from "./output.js";

export class SlowPwmOutput extends EsphomeComponent<SlowPwmOutputConfig> {
    componentName: string = "slow_pwm.output";
}

export type SlowPwmOutputConfigPeriod = CorePositiveTimePeriodMilliseconds;
export type SlowPwmOutputConfig = {
        id: string;
        period: SlowPwmOutputConfigPeriod;
        pin?: Pin;
        restart_cycle_on_state_change?: boolean;
        state_change_action?: object[];
        turn_off_action?: object[];
        turn_on_action?: object[];
    } & OutputFLOAT_OUTPUT_SCHEMA & CoreCOMPONENT_SCHEMA;
