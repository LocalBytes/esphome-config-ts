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
import type { CorePositiveTimePeriodMilliseconds, CoreCOMPONENT_SCHEMA } from "./esphome.js";

export class VoiceAssistant extends EsphomeComponent<VoiceAssistantConfig> {
    componentName: string = "voice_assistant";
}

export type VoiceAssistantConfigConversationTimeout = CorePositiveTimePeriodMilliseconds;

export interface VoiceAssistantConfigMicrophone {
    bits_per_sample?: number;
    channels?: number[];
    gain_factor?: number;
    id?: ID;
    microphone?: ID;
}

export interface VoiceAssistantConfig extends CoreCOMPONENT_SCHEMA {
    auto_gain?: number;
    conversation_timeout?: VoiceAssistantConfigConversationTimeout;
    id?: ID;
    media_player?: ID;
    micro_wake_word?: ID;
    microphone?: VoiceAssistantConfigMicrophone[];
    noise_suppression_level?: number;
    on_client_connected?: object[];
    on_client_disconnected?: object[];
    on_end?: object[];
    on_error?: object[];
    on_idle?: object[];
    on_intent_end?: object[];
    on_intent_progress?: object[];
    on_intent_start?: object[];
    on_listening?: object[];
    on_start?: object[];
    on_stt_end?: object[];
    on_stt_vad_end?: object[];
    on_stt_vad_start?: object[];
    on_timer_cancelled?: object[];
    on_timer_finished?: object[];
    on_timer_started?: object[];
    on_timer_tick?: object[];
    on_timer_updated?: object[];
    on_tts_end?: object[];
    on_tts_start?: object[];
    on_tts_stream_end?: object[];
    on_tts_stream_start?: object[];
    on_wake_word_detected?: object[];
    speaker?: ID;
    use_wake_word?: boolean;
    volume_multiplier?: any;
}

export interface VoiceAssistantVOICE_ASSISTANT_ACTION_SCHEMA {
    id?: ID;
}
