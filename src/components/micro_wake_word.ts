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
import type { CoreCOMPONENT_SCHEMA } from "./esphome.js";

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

export type MicroWakeWordConfigModels = MicroWakeWordMODEL_SCHEMA;

export interface MicroWakeWordConfig extends CoreCOMPONENT_SCHEMA {
    id?: ID;
    microphone?: MicroWakeWordConfigMicrophone;
    models: MicroWakeWordConfigModels[];
    on_wake_word_detected?: object[];
    stop_after_detection?: boolean;
    task_stack_in_psram?: any;
    vad?: any;
}

export interface MicroWakeWordMICRO_WAKE_WORD_ACTION_SCHEMA {
    id?: ID;
}

export interface MicroWakeWordMICRO_WAKE_WORLD_MODEL_ACTION_SCHEMA {
    id: ID;
}

export type MicroWakeWordMODEL_SCHEMAModel = MicroWakeWordMODEL_SCHEMAModelGit | MicroWakeWordMODEL_SCHEMAModelHttp | MicroWakeWordMODEL_SCHEMAModelLocal;

export interface MicroWakeWordMODEL_SCHEMAModelGit {
    type: "git" | "GIT";
    file: string;
    refresh?: string;
}

export interface MicroWakeWordMODEL_SCHEMAModelHttp {
    type: "http" | "HTTP";
    url: string;
}

export interface MicroWakeWordMODEL_SCHEMAModelLocal {
    type: "local" | "LOCAL";
    path: string;
}

export interface MicroWakeWordMODEL_SCHEMA {
    id?: ID;
    internal?: boolean;
    model?: MicroWakeWordMODEL_SCHEMAModel;
    probability_cutoff?: any;
    raw_data_id?: ID;
    sliding_window_size?: number;
}
