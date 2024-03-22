/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: slow_pwm.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/slow_pwm
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes) 2023
 **/
import type { ID, Pin } from "../base.js";
import { BaseComponent } from "../base.js";
import type { CorePositiveTimePeriodMilliseconds, CoreCOMPONENT_SCHEMA } from "./esphome.js";
import type { OutputFLOAT_OUTPUT_SCHEMA } from "./output.js";

export class SlowPwmOutput extends BaseComponent<SlowPwmOutputConfig> {
    componentName: string = "slow_pwm.output";
}

export interface SlowPwmOutputConfig extends OutputFLOAT_OUTPUT_SCHEMA, CoreCOMPONENT_SCHEMA {
    id: string;
    pin?: Pin;
    turn_on_action?: object[];
    turn_off_action?: object[];
    state_change_action?: object[];
    period: SlowPwmOutputConfigPeriod;
    restart_cycle_on_state_change?: boolean;
}

export interface SlowPwmOutputConfigPeriod extends CorePositiveTimePeriodMilliseconds {
}
