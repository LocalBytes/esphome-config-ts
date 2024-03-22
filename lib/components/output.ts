/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: output.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/output
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes) 2023
 **/
import type { ID, Pin } from "../base.js";
import { BaseComponent } from "../base.js";
import type { CorePositiveTimePeriodMilliseconds, CoreCOMPONENT_SCHEMA } from "./esphome.js";
import type { ButtonBUTTON_SCHEMA } from "./button.js";
import type { LockLOCK_SCHEMA } from "./lock.js";
import type { Switch_SWITCH_SCHEMA } from "./switch.js";

export abstract class Output extends BaseComponent {
    componentName: string = "output";
}

export interface OutputBINARY_OUTPUT_SCHEMA {
    power_supply?: ID;
    inverted?: boolean;
}

export interface OutputFLOAT_OUTPUT_SCHEMA extends OutputBINARY_OUTPUT_SCHEMA {
    max_power?: any;
    min_power?: any;
    zero_means_zero?: boolean;
}

export interface OutputBINARY_OUTPUT_ACTION_SCHEMA {
    id: ID;
}

export class OutputButton extends BaseComponent<OutputButtonConfig> {
    componentName: string = "output.button";
}

export interface OutputButtonConfig extends ButtonBUTTON_SCHEMA, CoreCOMPONENT_SCHEMA {
    id?: ID;
    output: ID;
    duration: OutputButtonConfigDuration;
}

export interface OutputButtonConfigDuration extends CorePositiveTimePeriodMilliseconds {
}

export class OutputLock extends BaseComponent<OutputLockConfig> {
    componentName: string = "output.lock";
}

export interface OutputLockConfig extends LockLOCK_SCHEMA, CoreCOMPONENT_SCHEMA {
    id?: ID;
    output: ID;
}

export class OutputSwitch extends BaseComponent<OutputSwitchConfig> {
    componentName: string = "output.switch";
}

export interface OutputSwitchConfig extends Switch_SWITCH_SCHEMA, CoreCOMPONENT_SCHEMA {
    restore_mode?: OutputSwitchConfigRestoreMode;
    id?: ID;
    output: ID;
}

export type OutputSwitchConfigRestoreMode = 'RESTORE_DEFAULT_OFF' | 'RESTORE_DEFAULT_ON' | 'ALWAYS_OFF' | 'ALWAYS_ON' | 'RESTORE_INVERTED_DEFAULT_OFF' | 'RESTORE_INVERTED_DEFAULT_ON' | 'DISABLED';
