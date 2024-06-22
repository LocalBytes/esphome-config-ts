/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 *
 * Schema: mqtt.json
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/mqtt
 *
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes)
 **/
import { type ID, type Pin, EsphomeComponent } from "@/lib/base.js";
import type { CorePositiveTimePeriodSeconds, CorePositiveTimePeriodMilliseconds } from "./esphome.js";

export class Mqtt extends EsphomeComponent<MqttConfig> {
    componentName: string = "mqtt";
}

export type MqttConfigDiscovery = 'CLEAN';
export type MqttConfigDiscoveryUniqueIdGenerator = 'legacy' | 'mac';
export type MqttConfigDiscoveryObjectIdGenerator = 'none' | 'device_name';
export type MqttConfigBirthMessage = MqttMQTT_MESSAGE_SCHEMA;
export type MqttConfigWillMessage = MqttMQTT_MESSAGE_SCHEMA;
export type MqttConfigShutdownMessage = MqttMQTT_MESSAGE_SCHEMA;
export type MqttConfigLogTopicLevel = 'NONE' | 'ERROR' | 'WARN' | 'INFO' | 'DEBUG' | 'VERBOSE' | 'VERY_VERBOSE';

export interface MqttConfigLogTopic extends MqttMQTT_MESSAGE_BASE {
    level?: MqttConfigLogTopicLevel;
}

export type MqttConfigKeepalive = CorePositiveTimePeriodSeconds;
export type MqttConfigRebootTimeout = CorePositiveTimePeriodMilliseconds;

export interface MqttConfig {
    id?: ID;
    broker: string;
    port?: number;
    username?: string;
    password?: string;
    client_id?: string;
    idf_send_async?: boolean;
    certificate_authority?: string;
    skip_cert_cn_check?: boolean;
    discovery?: MqttConfigDiscovery;
    discovery_retain?: boolean;
    discovery_prefix?: any;
    discovery_unique_id_generator?: MqttConfigDiscoveryUniqueIdGenerator;
    discovery_object_id_generator?: MqttConfigDiscoveryObjectIdGenerator;
    use_abbreviations?: boolean;
    birth_message?: MqttConfigBirthMessage;
    will_message?: MqttConfigWillMessage;
    shutdown_message?: MqttConfigShutdownMessage;
    topic_prefix?: any;
    log_topic?: MqttConfigLogTopic;
    ssl_fingerprints?: any[];
    keepalive?: MqttConfigKeepalive;
    reboot_timeout?: MqttConfigRebootTimeout;
    on_connect?: object[];
    on_disconnect?: object[];
    on_message?: object[];
    on_json_message?: object[];
}

export interface MqttMQTT_MESSAGE_BASE {
    topic: string;
    qos?: any;
    retain?: boolean;
}

export interface MqttMQTT_MESSAGE_SCHEMA extends MqttMQTT_MESSAGE_BASE {
    payload: string;
}
