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

export type MqttConfigBirthMessage = MqttMQTT_MESSAGE_SCHEMA;
export type MqttConfigDiscovery = 'CLEAN';
export type MqttConfigDiscoveryObjectIdGenerator = 'none' | 'device_name';
export type MqttConfigDiscoveryUniqueIdGenerator = 'legacy' | 'mac';
export type MqttConfigKeepalive = CorePositiveTimePeriodSeconds;
export type MqttConfigLogTopicLevel = 'NONE' | 'ERROR' | 'WARN' | 'INFO' | 'DEBUG' | 'VERBOSE' | 'VERY_VERBOSE';

export interface MqttConfigLogTopic extends MqttMQTT_MESSAGE_BASE {
    level?: MqttConfigLogTopicLevel;
}

export type MqttConfigRebootTimeout = CorePositiveTimePeriodMilliseconds;
export type MqttConfigShutdownMessage = MqttMQTT_MESSAGE_SCHEMA;
export type MqttConfigWillMessage = MqttMQTT_MESSAGE_SCHEMA;

export interface MqttConfig {
    birth_message?: MqttConfigBirthMessage;
    broker: string;
    certificate_authority?: string;
    clean_session?: boolean;
    client_certificate?: string;
    client_certificate_key?: string;
    client_id?: string;
    discover_ip?: boolean;
    discovery?: MqttConfigDiscovery;
    discovery_object_id_generator?: MqttConfigDiscoveryObjectIdGenerator;
    discovery_prefix?: any;
    discovery_retain?: boolean;
    discovery_unique_id_generator?: MqttConfigDiscoveryUniqueIdGenerator;
    enable_on_boot?: boolean;
    id?: ID;
    idf_send_async?: boolean;
    keepalive?: MqttConfigKeepalive;
    log_topic?: MqttConfigLogTopic;
    on_connect?: object[];
    on_disconnect?: object[];
    on_json_message?: object[];
    on_message?: object[];
    password?: string;
    port?: number;
    publish_nan_as_none?: boolean;
    reboot_timeout?: MqttConfigRebootTimeout;
    shutdown_message?: MqttConfigShutdownMessage;
    skip_cert_cn_check?: boolean;
    topic_prefix?: any;
    use_abbreviations?: boolean;
    username?: string;
    wait_for_connection?: boolean;
    will_message?: MqttConfigWillMessage;
}

export interface MqttMQTT_MESSAGE_BASE {
    qos?: any;
    retain?: boolean;
    topic: string;
}

export interface MqttMQTT_MESSAGE_SCHEMA extends MqttMQTT_MESSAGE_BASE {
    payload: string;
}
