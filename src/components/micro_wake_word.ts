/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: micro_wake_word.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/micro_wake_word
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes)
 **/
import { type ID, type Pin, EsphomeComponent } from "@/lib/base.js";
import type { CoreCOMPONENTSCHEMA } from "./esphome.js";

export class MicroWakeWord extends EsphomeComponent<MicroWakeWordConfig> {
    componentName: string = "micro_wake_word";
}

export interface MicroWakeWordConfigMicrophone {
    bits_per_sample?: number;
    channels?: number[];
    gain_factor?: number;
    id?: ID;
    microphone?: ID;
}

export type MicroWakeWordConfigModels = MicroWakeWordMODELSCHEMA;

export interface MicroWakeWordConfig extends CoreCOMPONENTSCHEMA {
    id?: ID;
    microphone?: MicroWakeWordConfigMicrophone;
    models: MicroWakeWordConfigModels[];
    on_wake_word_detected?: object[];
    stop_after_detection?: boolean;
    task_stack_in_psram?: any;
    vad?: any;
}

export interface MicroWakeWordMICROWAKEWORDACTIONSCHEMA {
    id?: ID;
}

export interface MicroWakeWordMICROWAKEWORLDMODELACTIONSCHEMA {
    id: ID;
}

export type MicroWakeWordMODELSCHEMAModel = MicroWakeWordMODELSCHEMAModelGit | MicroWakeWordMODELSCHEMAModelHttp | MicroWakeWordMODELSCHEMAModelLocal;

export interface MicroWakeWordMODELSCHEMAModelGit {
    type: "git" | "GIT";
    file: string;
    refresh?: string;
}

export interface MicroWakeWordMODELSCHEMAModelHttp {
    type: "http" | "HTTP";
    url: string;
}

export interface MicroWakeWordMODELSCHEMAModelLocal {
    type: "local" | "LOCAL";
    path: string;
}

export interface MicroWakeWordMODELSCHEMA {
    id?: ID;
    internal?: boolean;
    model?: MicroWakeWordMODELSCHEMAModel;
    probability_cutoff?: any;
    raw_data_id?: ID;
    sliding_window_size?: number;
}
