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
import type { AudioFileMEDIA_FILE_TYPE_SCHEMA } from "./audio_file.js";
import type { MediaPlayer_MEDIA_PLAYER_SCHEMA } from "./media_player.js";

export abstract class Speaker extends EsphomeComponent {
    componentName: string = "speaker";
}

export interface SpeakerSPEAKER_AUTOMATION_SCHEMA {
    id?: ID;
}

export interface SpeakerSPEAKER_SCHEMA {
    audio_dac?: ID;
    bits_per_sample?: number;
    num_channels?: number;
    sample_rate?: number;
}

export class SpeakerMediaPlayer extends EsphomeComponent<SpeakerMediaPlayerConfig> {
    componentName: string = "speaker.media_player";
}

export type SpeakerMediaPlayerConfigAnnouncementPipeline = SpeakerMediaPlayerPIPELINE_SCHEMA;
export type SpeakerMediaPlayerConfigFiles = AudioFileMEDIA_FILE_TYPE_SCHEMA;
export type SpeakerMediaPlayerConfigMediaPipeline = SpeakerMediaPlayerPIPELINE_SCHEMA;

export interface SpeakerMediaPlayerConfig extends MediaPlayer_MEDIA_PLAYER_SCHEMA {
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

export interface SpeakerMediaPlayerFINAL_VALIDATE_SCHEMA {
    announcement_pipeline?: any;
    media_pipeline?: any;
}

export type SpeakerMediaPlayerPIPELINE_SCHEMAFormat = 'NONE' | 'WAV' | 'MP3' | 'FLAC' | 'OPUS';

export interface SpeakerMediaPlayerPIPELINE_SCHEMA {
    format?: SpeakerMediaPlayerPIPELINE_SCHEMAFormat;
    id?: ID;
    num_channels?: number;
    sample_rate?: number;
    speaker: ID;
}
