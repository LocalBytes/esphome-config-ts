/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: i2s_audio.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/i2s_audio
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes)
 **/
import { type ID, type Pin, EsphomeComponent } from "@/lib/base.js";
import type { MicrophoneMICROPHONE_SCHEMA } from "./microphone.js";
import type { CoreCOMPONENT_SCHEMA, CorePositiveTimePeriodMilliseconds } from "./esphome.js";
import type { SpeakerSPEAKER_SCHEMA } from "./speaker.js";

export class I2sAudio extends EsphomeComponent<I2sAudioConfig> {
    componentName: string = "i2s_audio";
}

export interface I2sAudioConfig {
    i2s_bclk_pin?: Pin;
    i2s_lrclk_pin: Pin;
    i2s_mclk_pin?: Pin;
    id?: ID;
}

export class I2sAudioMicrophone extends EsphomeComponent<I2sAudioMicrophoneConfig> {
    componentName: string = "i2s_audio.microphone";
}

export type I2sAudioMicrophoneBASE_SCHEMABitsPerSample = '8' | '16' | '24' | '32';
export type I2sAudioMicrophoneBASE_SCHEMAChannel = 'mono' | 'left' | 'right' | 'stereo';
export type I2sAudioMicrophoneBASE_SCHEMAI2sMode = 'primary' | 'secondary';
export type I2sAudioMicrophoneBASE_SCHEMAMclkMultiple = '128' | '256' | '384' | '512';
export type I2sAudioMicrophoneBASE_SCHEMA = {
        bits_per_sample: I2sAudioMicrophoneBASE_SCHEMABitsPerSample;
        channel?: I2sAudioMicrophoneBASE_SCHEMAChannel;
        correct_dc_offset?: boolean;
        i2s_audio_id?: ID;
        i2s_mode?: I2sAudioMicrophoneBASE_SCHEMAI2sMode;
        id?: ID;
        mclk_multiple?: I2sAudioMicrophoneBASE_SCHEMAMclkMultiple;
        sample_rate?: any;
        use_apll?: boolean;
    } & MicrophoneMICROPHONE_SCHEMA & CoreCOMPONENT_SCHEMA;
export type I2sAudioMicrophoneConfig = I2sAudioMicrophoneConfigExternal | I2sAudioMicrophoneConfigInternal;

export interface I2sAudioMicrophoneConfigExternal {
    adc_type: "external" | "EXTERNAL";
    i2s_din_pin: Pin;
    pdm?: boolean;
}

export interface I2sAudioMicrophoneConfigInternal {
    adc_type: "internal" | "INTERNAL";
    adc_pin: Pin;
}

export class I2sAudioSpeaker extends EsphomeComponent<I2sAudioSpeakerConfig> {
    componentName: string = "i2s_audio.speaker";
}

export type I2sAudioSpeakerBASE_SCHEMABitsPerSample = '8' | '16' | '24' | '32';
export type I2sAudioSpeakerBASE_SCHEMABufferDuration = CorePositiveTimePeriodMilliseconds;
export type I2sAudioSpeakerBASE_SCHEMAChannel = 'mono' | 'left' | 'right' | 'stereo';
export type I2sAudioSpeakerBASE_SCHEMAI2sMode = 'primary' | 'secondary';
export type I2sAudioSpeakerBASE_SCHEMAMclkMultiple = '128' | '256' | '384' | '512';
export type I2sAudioSpeakerBASE_SCHEMATimeout = 'never';
export type I2sAudioSpeakerBASE_SCHEMA = {
        bits_per_sample: I2sAudioSpeakerBASE_SCHEMABitsPerSample;
        buffer_duration?: I2sAudioSpeakerBASE_SCHEMABufferDuration;
        channel?: I2sAudioSpeakerBASE_SCHEMAChannel;
        i2s_audio_id?: ID;
        i2s_mode?: I2sAudioSpeakerBASE_SCHEMAI2sMode;
        id?: ID;
        mclk_multiple?: I2sAudioSpeakerBASE_SCHEMAMclkMultiple;
        sample_rate?: any;
        timeout?: I2sAudioSpeakerBASE_SCHEMATimeout;
        use_apll?: boolean;
    } & SpeakerSPEAKER_SCHEMA & CoreCOMPONENT_SCHEMA;
export type I2sAudioSpeakerConfig = I2sAudioSpeakerConfigExternal | I2sAudioSpeakerConfigInternal;
export type I2sAudioSpeakerConfigExternalI2sCommFmt = 'stand_i2s' | 'stand_msb' | 'stand_pcm_short' | 'stand_pcm_long' | 'stand_max' | 'i2s_msb' | 'i2s_lsb' | 'pcm' | 'pcm_short' | 'pcm_long';

export interface I2sAudioSpeakerConfigExternal {
    dac_type: "external" | "EXTERNAL";
    i2s_comm_fmt?: I2sAudioSpeakerConfigExternalI2sCommFmt;
    i2s_dout_pin: Pin;
    spdif_mode?: boolean;
}

export type I2sAudioSpeakerConfigInternalMode = 'left' | 'right' | 'stereo';

export interface I2sAudioSpeakerConfigInternal {
    dac_type: "internal" | "INTERNAL";
    mode: I2sAudioSpeakerConfigInternalMode;
}
