/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: resampler.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/resampler
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes)
 **/
import { type ID, type Pin, EsphomeComponent } from "@/lib/base.js";
import type { CorePositiveTimePeriodMilliseconds, CoreCOMPONENT_SCHEMA } from "./esphome.js";
import type { SpeakerSPEAKER_SCHEMA } from "./speaker.js";

export class ResamplerSpeaker extends EsphomeComponent<ResamplerSpeakerConfig> {
    componentName: string = "resampler.speaker";
}

export type ResamplerSpeakerConfigBufferDuration = CorePositiveTimePeriodMilliseconds;
export type ResamplerSpeakerConfig = {
        bits_per_sample?: any;
        buffer_duration?: ResamplerSpeakerConfigBufferDuration;
        filters?: number;
        id?: ID;
        output_speaker: ID;
        taps?: any;
        task_stack_in_psram?: any;
    } & SpeakerSPEAKER_SCHEMA & CoreCOMPONENT_SCHEMA;
