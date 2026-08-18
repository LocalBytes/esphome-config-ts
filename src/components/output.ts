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
import { type ID, type Pin, EsphomeComponent } from "@/lib/base.js";
import type { CorePositiveTimePeriodMilliseconds, CoreCOMPONENT_SCHEMA } from "./esphome.js";
import type { Button_BUTTON_SCHEMA } from "./button.js";
import type { Lock_LOCK_SCHEMA } from "./lock.js";
import type { Switch_SWITCH_SCHEMA } from "./switch.js";

export abstract class Output extends EsphomeComponent {
    componentName: string = "output";
}

export interface OutputBINARY_OUTPUT_ACTION_SCHEMA {
    id: ID;
}

export interface OutputBINARY_OUTPUT_SCHEMA {
    inverted?: boolean;
    power_supply?: ID;
}

export interface OutputFLOAT_OUTPUT_SCHEMA extends OutputBINARY_OUTPUT_SCHEMA {
    max_power?: any;
    min_power?: any;
    zero_means_zero?: boolean;
}

export class OutputButton extends EsphomeComponent<OutputButtonConfig> {
    componentName: string = "output.button";
}

export type OutputButtonConfigDuration = CorePositiveTimePeriodMilliseconds;
export type OutputButtonConfig = {
        duration: OutputButtonConfigDuration;
        id?: ID;
        output: ID;
    } & Button_BUTTON_SCHEMA & CoreCOMPONENT_SCHEMA;

export class OutputLock extends EsphomeComponent<OutputLockConfig> {
    componentName: string = "output.lock";
}

export type OutputLockConfig = {
        id?: ID;
        output: ID;
    } & Lock_LOCK_SCHEMA & CoreCOMPONENT_SCHEMA;

export class OutputSwitch extends EsphomeComponent<OutputSwitchConfig> {
    componentName: string = "output.switch";
}

export type OutputSwitchConfig = {
        id?: ID;
        output: ID;
    } & Switch_SWITCH_SCHEMA & CoreCOMPONENT_SCHEMA;
