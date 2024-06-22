/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: output.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/output
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes)
 **/
import { type ID, type Pin, BaseComponent } from "@/lib/base.js";
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

export type OutputButtonConfigDuration = CorePositiveTimePeriodMilliseconds;
export type OutputButtonConfig = {
        id?: ID;
        output: ID;
        duration: OutputButtonConfigDuration;
    } & ButtonBUTTON_SCHEMA & CoreCOMPONENT_SCHEMA;

export class OutputLock extends BaseComponent<OutputLockConfig> {
    componentName: string = "output.lock";
}

export type OutputLockConfig = {
        id?: ID;
        output: ID;
    } & LockLOCK_SCHEMA & CoreCOMPONENT_SCHEMA;

export class OutputSwitch extends BaseComponent<OutputSwitchConfig> {
    componentName: string = "output.switch";
}

export type OutputSwitchConfigRestoreMode = 'RESTORE_DEFAULT_OFF' | 'RESTORE_DEFAULT_ON' | 'ALWAYS_OFF' | 'ALWAYS_ON' | 'RESTORE_INVERTED_DEFAULT_OFF' | 'RESTORE_INVERTED_DEFAULT_ON' | 'DISABLED';
export type OutputSwitchConfig = {
        restore_mode?: OutputSwitchConfigRestoreMode;
        id?: ID;
        output: ID;
    } & Switch_SWITCH_SCHEMA & CoreCOMPONENT_SCHEMA;
