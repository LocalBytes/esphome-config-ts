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
import type { CorePositiveTimePeriodMilliseconds, CoreCOMPONENTSCHEMA } from "./esphome.js";
import type { ButtonBUTTONSCHEMA } from "./button.js";
import type { LockLOCKSCHEMA } from "./lock.js";
import type { SwitchSWITCHSCHEMA } from "./switch.js";

export abstract class Output extends EsphomeComponent {
    componentName: string = "output";
}

export interface OutputBINARYOUTPUTACTIONSCHEMA {
    id: ID;
}

export interface OutputBINARYOUTPUTSCHEMA {
    inverted?: boolean;
    power_supply?: ID;
}

export interface OutputFLOATOUTPUTSCHEMA extends OutputBINARYOUTPUTSCHEMA {
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
    } & ButtonBUTTONSCHEMA & CoreCOMPONENTSCHEMA;

export class OutputLock extends EsphomeComponent<OutputLockConfig> {
    componentName: string = "output.lock";
}

export type OutputLockConfig = {
        id?: ID;
        output: ID;
    } & LockLOCKSCHEMA & CoreCOMPONENTSCHEMA;

export class OutputSwitch extends EsphomeComponent<OutputSwitchConfig> {
    componentName: string = "output.switch";
}

export type OutputSwitchConfig = {
        id?: ID;
        output: ID;
    } & SwitchSWITCHSCHEMA & CoreCOMPONENTSCHEMA;
