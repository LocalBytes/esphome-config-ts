/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: sendspin.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/sendspin
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes)
 **/
import { type ID, type Pin, EsphomeComponent } from "@/lib/base.js";
import type { MediaPlayerMEDIAPLAYERSCHEMA } from "./media_player.js";
import type { TextSensorTEXTSENSORSCHEMA } from "./text_sensor.js";

export class Sendspin extends EsphomeComponent<SendspinConfig> {
    componentName: string = "sendspin";
}

export interface SendspinConfig {
    id?: ID;
    task_stack_in_psram?: any;
}

export class SendspinMediaPlayer extends EsphomeComponent<SendspinMediaPlayerConfig> {
    componentName: string = "sendspin.media_player";
}

export interface SendspinMediaPlayerConfig extends MediaPlayerMEDIAPLAYERSCHEMA {
    id?: ID;
    sendspin_id?: ID;
    volume_increment?: any;
}

export class SendspinMediaSource extends EsphomeComponent<any> {
    componentName: string = "sendspin.media_source";
}

export interface SendspinMediaSourceSENDSPINMEDIASOURCEACTIONSCHEMA {
    id?: ID;
}

export class SendspinSensor extends EsphomeComponent<SendspinSensorConfig> {
    componentName: string = "sendspin.sensor";
}

export type SendspinSensorConfig = SendspinSensorConfigTrack | SendspinSensorConfigTrackDuration | SendspinSensorConfigTrackProgress | SendspinSensorConfigYear;

export interface SendspinSensorConfigTrack {
    type: "track" | "TRACK";
    accuracy_decimals?: any;
    id?: any;
}

export interface SendspinSensorConfigTrackDuration {
    type: "track_duration" | "TRACK_DURATION";
    accuracy_decimals?: any;
    id?: any;
    state_class?: any;
    unit_of_measurement?: any;
}

export interface SendspinSensorConfigTrackProgress {
    type: "track_progress" | "TRACK_PROGRESS";
    accuracy_decimals?: any;
    id?: any;
    state_class?: any;
    unit_of_measurement?: any;
    update_interval?: any;
}

export interface SendspinSensorConfigYear {
    type: "year" | "YEAR";
    accuracy_decimals?: any;
    id?: any;
}

export interface SendspinSensorHUBIDSCHEMA {
    sendspin_id?: ID;
}

export class SendspinTextSensor extends EsphomeComponent<SendspinTextSensorConfig> {
    componentName: string = "sendspin.text_sensor";
}

export type SendspinTextSensorConfigType = 'title' | 'artist' | 'album' | 'album_artist';

export interface SendspinTextSensorConfig extends TextSensorTEXTSENSORSCHEMA {
    id?: any;
    sendspin_id?: ID;
    type: SendspinTextSensorConfigType;
}
