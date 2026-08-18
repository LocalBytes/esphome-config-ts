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
import type { CoreCOMPONENTSCHEMA } from "./esphome.js";
import type { MediaPlayerMEDIAPLAYERSCHEMA } from "./media_player.js";

export abstract class SpeakerSource extends EsphomeComponent {
    componentName: string = "speaker_source";
}

export class SpeakerSourceMediaPlayer extends EsphomeComponent<SpeakerSourceMediaPlayerConfig> {
    componentName: string = "speaker_source.media_player";
}

export type SpeakerSourceMediaPlayerConfigAnnouncementPipeline = SpeakerSourceMediaPlayerPIPELINESCHEMA;
export type SpeakerSourceMediaPlayerConfigMediaPipeline = SpeakerSourceMediaPlayerPIPELINESCHEMA;
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
    } & CoreCOMPONENTSCHEMA & MediaPlayerMEDIAPLAYERSCHEMA;
export type SpeakerSourceMediaPlayerPIPELINESCHEMAFormat = 'NONE' | 'WAV' | 'MP3' | 'FLAC' | 'OPUS';

export interface SpeakerSourceMediaPlayerPIPELINESCHEMA {
    format?: SpeakerSourceMediaPlayerPIPELINESCHEMAFormat;
    id?: ID;
    num_channels?: number;
    sample_rate?: number;
    sources: ID[];
    speaker: ID;
}
