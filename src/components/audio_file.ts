/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: audio_file.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/audio_file
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes)
 **/
import { type ID, type Pin, EsphomeComponent } from "@/lib/base.js";

export class AudioFile extends EsphomeComponent<AudioFileConfig> {
    componentName: string = "audio_file";
}

export interface AudioFileConfig extends AudioFileMEDIA_FILE_TYPE_SCHEMA {
    id: string;
}

export interface AudioFileMEDIA_FILE_TYPE_SCHEMA {
    file: string;
    id: string;
    raw_data_id?: ID;
}

export class AudioFileMediaSource extends EsphomeComponent<any> {
    componentName: string = "audio_file.media_source";
}
