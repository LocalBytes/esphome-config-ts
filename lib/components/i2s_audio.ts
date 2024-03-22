/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: i2s_audio.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/i2s_audio
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes) 2023
 **/
import type { ID, Pin } from "../base.js";
import { BaseComponent } from "../base.js";
import type { MicrophoneMICROPHONE_SCHEMA } from "./microphone.js";
import type { CoreCOMPONENT_SCHEMA } from "./esphome.js";

export class I2sAudio extends BaseComponent<I2sAudioConfig> {
    componentName: string = "i2s_audio";
}

export interface I2sAudioConfig {
    id?: ID;
    i2s_lrclk_pin: Pin;
    i2s_bclk_pin?: Pin;
    i2s_mclk_pin?: Pin;
}

export class I2sAudioMediaPlayer extends BaseComponent<I2sAudioMediaPlayerConfig> {
    componentName: string = "i2s_audio.media_player";
}

export type I2sAudioMediaPlayerConfig = I2sAudioMediaPlayerConfigInternal | I2sAudioMediaPlayerConfigExternal;

export interface I2sAudioMediaPlayerConfigInternal {
    dac_type: "internal" | "INTERNAL";
    id?: ID;
    i2s_audio_id?: ID;
    mode: I2sAudioMediaPlayerConfigInternalMode;
}

export type I2sAudioMediaPlayerConfigInternalMode = 'left' | 'right' | 'stereo';

export interface I2sAudioMediaPlayerConfigExternal {
    dac_type: "external" | "EXTERNAL";
    id?: ID;
    i2s_audio_id?: ID;
    i2s_dout_pin: Pin;
    mute_pin?: Pin;
    mode?: I2sAudioMediaPlayerConfigExternalMode;
    i2s_comm_fmt?: I2sAudioMediaPlayerConfigExternalI2sCommFmt;
}

export type I2sAudioMediaPlayerConfigExternalMode = 'mono' | 'stereo';
export type I2sAudioMediaPlayerConfigExternalI2sCommFmt = 'lsb' | 'msb';

export class I2sAudioMicrophone extends BaseComponent<I2sAudioMicrophoneConfig> {
    componentName: string = "i2s_audio.microphone";
}

export interface I2sAudioMicrophoneBASE_SCHEMA extends MicrophoneMICROPHONE_SCHEMA, CoreCOMPONENT_SCHEMA {
    id?: ID;
    i2s_audio_id?: ID;
    channel?: I2sAudioMicrophoneBASE_SCHEMAChannel;
    bits_per_sample?: I2sAudioMicrophoneBASE_SCHEMABitsPerSample;
}

export type I2sAudioMicrophoneBASE_SCHEMAChannel = 'left' | 'right';
export type I2sAudioMicrophoneBASE_SCHEMABitsPerSample = '16' | '32';
export type I2sAudioMicrophoneConfig = I2sAudioMicrophoneConfigInternal | I2sAudioMicrophoneConfigExternal;

export interface I2sAudioMicrophoneConfigInternal {
    adc_type: "internal" | "INTERNAL";
    adc_pin: Pin;
}

export interface I2sAudioMicrophoneConfigExternal {
    adc_type: "external" | "EXTERNAL";
    i2s_din_pin: Pin;
    pdm: boolean;
}

export class I2sAudioSpeaker extends BaseComponent<I2sAudioSpeakerConfig> {
    componentName: string = "i2s_audio.speaker";
}

export type I2sAudioSpeakerConfig = I2sAudioSpeakerConfigInternal | I2sAudioSpeakerConfigExternal;

export interface I2sAudioSpeakerConfigInternal {
    dac_type: "internal" | "INTERNAL";
    id?: ID;
    i2s_audio_id?: ID;
    mode: I2sAudioSpeakerConfigInternalMode;
}

export type I2sAudioSpeakerConfigInternalMode = 'left' | 'right' | 'stereo';

export interface I2sAudioSpeakerConfigExternal {
    dac_type: "external" | "EXTERNAL";
    id?: ID;
    i2s_audio_id?: ID;
    i2s_dout_pin: Pin;
    mode?: I2sAudioSpeakerConfigExternalMode;
}

export type I2sAudioSpeakerConfigExternalMode = 'mono' | 'stereo';
