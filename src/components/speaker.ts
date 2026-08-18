/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: speaker.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/speaker
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes)
 **/
import { type ID, type Pin, EsphomeComponent } from "@/lib/base.js";
import type { AudioFileMEDIAFILETYPESCHEMA } from "./audio_file.js";
import type { MediaPlayerMEDIAPLAYERSCHEMA } from "./media_player.js";

export abstract class Speaker extends EsphomeComponent {
    componentName: string = "speaker";
}

export interface SpeakerSPEAKERAUTOMATIONSCHEMA {
    id?: ID;
}

export interface SpeakerSPEAKERSCHEMA {
    audio_dac?: ID;
    bits_per_sample?: number;
    num_channels?: number;
    sample_rate?: number;
}

export class SpeakerMediaPlayer extends EsphomeComponent<SpeakerMediaPlayerConfig> {
    componentName: string = "speaker.media_player";
}

export type SpeakerMediaPlayerConfigAnnouncementPipeline = SpeakerMediaPlayerPIPELINESCHEMA;
export type SpeakerMediaPlayerConfigFiles = AudioFileMEDIAFILETYPESCHEMA;
export type SpeakerMediaPlayerConfigMediaPipeline = SpeakerMediaPlayerPIPELINESCHEMA;

export interface SpeakerMediaPlayerConfig extends MediaPlayerMEDIAPLAYERSCHEMA {
    announcement_pipeline: SpeakerMediaPlayerConfigAnnouncementPipeline;
    buffer_size?: number;
    codec_support_enabled?: string;
    files?: SpeakerMediaPlayerConfigFiles[];
    id?: ID;
    media_pipeline?: SpeakerMediaPlayerConfigMediaPipeline;
    on_mute?: object[];
    on_unmute?: object[];
    on_volume?: object[];
    task_stack_in_psram?: any;
    volume_increment?: any;
    volume_initial?: any;
    volume_max?: any;
    volume_min?: any;
}

export interface SpeakerMediaPlayerFINALVALIDATESCHEMA {
    announcement_pipeline?: any;
    media_pipeline?: any;
}

export type SpeakerMediaPlayerPIPELINESCHEMAFormat = 'NONE' | 'WAV' | 'MP3' | 'FLAC' | 'OPUS';

export interface SpeakerMediaPlayerPIPELINESCHEMA {
    format?: SpeakerMediaPlayerPIPELINESCHEMAFormat;
    id?: ID;
    num_channels?: number;
    sample_rate?: number;
    speaker: ID;
}
