/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: speaker_source.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/speaker_source
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes)
 **/
import { type ID, type Pin, EsphomeComponent } from "@/lib/base.js";
import type { CoreCOMPONENT_SCHEMA } from "./esphome.js";
import type { MediaPlayer_MEDIA_PLAYER_SCHEMA } from "./media_player.js";

export abstract class SpeakerSource extends EsphomeComponent {
    componentName: string = "speaker_source";
}

export class SpeakerSourceMediaPlayer extends EsphomeComponent<SpeakerSourceMediaPlayerConfig> {
    componentName: string = "speaker_source.media_player";
}

export type SpeakerSourceMediaPlayerConfigAnnouncementPipeline = SpeakerSourceMediaPlayerPIPELINE_SCHEMA;
export type SpeakerSourceMediaPlayerConfigMediaPipeline = SpeakerSourceMediaPlayerPIPELINE_SCHEMA;
export type SpeakerSourceMediaPlayerConfig = {
        announcement_pipeline?: SpeakerSourceMediaPlayerConfigAnnouncementPipeline;
        id?: ID;
        media_pipeline?: SpeakerSourceMediaPlayerConfigMediaPipeline;
        on_mute?: object[];
        on_unmute?: object[];
        on_volume?: object[];
        volume_increment?: any;
        volume_initial?: any;
        volume_max?: any;
        volume_min?: any;
    } & CoreCOMPONENT_SCHEMA & MediaPlayer_MEDIA_PLAYER_SCHEMA;
export type SpeakerSourceMediaPlayerPIPELINE_SCHEMAFormat = 'NONE' | 'WAV' | 'MP3' | 'FLAC' | 'OPUS';

export interface SpeakerSourceMediaPlayerPIPELINE_SCHEMA {
    format?: SpeakerSourceMediaPlayerPIPELINE_SCHEMAFormat;
    id?: ID;
    num_channels?: number;
    sample_rate?: number;
    sources: ID[];
    speaker: ID;
}
