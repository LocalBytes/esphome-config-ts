/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: mixer.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/mixer
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes)
 **/
import { type ID, type Pin, EsphomeComponent } from "@/lib/base.js";
import type { CorePositiveTimePeriodMilliseconds } from "./esphome.js";
import type { SpeakerSPEAKER_SCHEMA } from "./speaker.js";

export class MixerSpeaker extends EsphomeComponent<MixerSpeakerConfig> {
    componentName: string = "mixer.speaker";
}

export type MixerSpeakerConfigBitsPerSample = '8' | '16' | '24' | '32';
export type MixerSpeakerConfigSourceSpeakersBufferDuration = CorePositiveTimePeriodMilliseconds;
export type MixerSpeakerConfigSourceSpeakersTimeout = 'never';

export interface MixerSpeakerConfigSourceSpeakers extends SpeakerSPEAKER_SCHEMA {
    buffer_duration?: MixerSpeakerConfigSourceSpeakersBufferDuration;
    id?: ID;
    timeout?: MixerSpeakerConfigSourceSpeakersTimeout;
}

export interface MixerSpeakerConfig {
    bits_per_sample?: MixerSpeakerConfigBitsPerSample;
    id?: ID;
    num_channels?: number;
    output_speaker: ID;
    queue_mode?: boolean;
    source_speakers: MixerSpeakerConfigSourceSpeakers[];
    task_stack_in_psram?: any;
}
