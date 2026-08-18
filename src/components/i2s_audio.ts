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
import type { MicrophoneMICROPHONESCHEMA } from "./microphone.js";
import type { CoreCOMPONENTSCHEMA, CorePositiveTimePeriodMilliseconds } from "./esphome.js";
import type { SpeakerSPEAKERSCHEMA } from "./speaker.js";

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

export type I2sAudioMicrophoneBASESCHEMABitsPerSample = '8' | '16' | '24' | '32';
export type I2sAudioMicrophoneBASESCHEMAChannel = 'mono' | 'left' | 'right' | 'stereo';
export type I2sAudioMicrophoneBASESCHEMAI2sMode = 'primary' | 'secondary';
export type I2sAudioMicrophoneBASESCHEMAMclkMultiple = '128' | '256' | '384' | '512';
export type I2sAudioMicrophoneBASESCHEMA = {
        bits_per_sample: I2sAudioMicrophoneBASESCHEMABitsPerSample;
        channel?: I2sAudioMicrophoneBASESCHEMAChannel;
        correct_dc_offset?: boolean;
        i2s_audio_id?: ID;
        i2s_mode?: I2sAudioMicrophoneBASESCHEMAI2sMode;
        id?: ID;
        mclk_multiple?: I2sAudioMicrophoneBASESCHEMAMclkMultiple;
        sample_rate?: any;
        use_apll?: boolean;
    } & MicrophoneMICROPHONESCHEMA & CoreCOMPONENTSCHEMA;
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

export type I2sAudioSpeakerBASESCHEMABitsPerSample = '8' | '16' | '24' | '32';
export type I2sAudioSpeakerBASESCHEMABufferDuration = CorePositiveTimePeriodMilliseconds;
export type I2sAudioSpeakerBASESCHEMAChannel = 'mono' | 'left' | 'right' | 'stereo';
export type I2sAudioSpeakerBASESCHEMAI2sMode = 'primary' | 'secondary';
export type I2sAudioSpeakerBASESCHEMAMclkMultiple = '128' | '256' | '384' | '512';
export type I2sAudioSpeakerBASESCHEMATimeout = 'never';
export type I2sAudioSpeakerBASESCHEMA = {
        bits_per_sample: I2sAudioSpeakerBASESCHEMABitsPerSample;
        buffer_duration?: I2sAudioSpeakerBASESCHEMABufferDuration;
        channel?: I2sAudioSpeakerBASESCHEMAChannel;
        i2s_audio_id?: ID;
        i2s_mode?: I2sAudioSpeakerBASESCHEMAI2sMode;
        id?: ID;
        mclk_multiple?: I2sAudioSpeakerBASESCHEMAMclkMultiple;
        sample_rate?: any;
        timeout?: I2sAudioSpeakerBASESCHEMATimeout;
        use_apll?: boolean;
    } & SpeakerSPEAKERSCHEMA & CoreCOMPONENTSCHEMA;
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
