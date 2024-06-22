/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: voice_assistant.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/voice_assistant
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes)
 **/
import { type ID, type Pin, EsphomeComponent } from "@/lib/base.js";
import type { CoreCOMPONENT_SCHEMA } from "./esphome.js";

export class VoiceAssistant extends EsphomeComponent<VoiceAssistantConfig> {
    componentName: string = "voice_assistant";
}

export interface VoiceAssistantConfig extends CoreCOMPONENT_SCHEMA {
    id?: ID;
    microphone?: ID;
    speaker?: ID;
    media_player?: ID;
    silence_detection?: boolean;
    on_listening?: object[];
    on_start?: object[];
    on_stt_end?: object[];
    on_tts_start?: object[];
    on_tts_end?: object[];
    on_end?: object[];
    on_error?: object[];
}

export interface VoiceAssistantVOICE_ASSISTANT_ACTION_SCHEMA {
    id?: ID;
}
