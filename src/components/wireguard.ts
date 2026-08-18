/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: wireguard.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/wireguard
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes)
 **/
import { type ID, type Pin, EsphomeComponent } from "@/lib/base.js";
import type { CorePositiveTimePeriodSeconds, CorePositiveTimePeriodMilliseconds, CoreCOMPONENT_SCHEMA } from "./esphome.js";
import type { BinarySensor_BINARY_SENSOR_SCHEMA } from "./binary_sensor.js";
import type { Sensor_SENSOR_SCHEMA } from "./sensor.js";
import type { TextSensor_TEXT_SENSOR_SCHEMA } from "./text_sensor.js";

export class Wireguard extends EsphomeComponent<WireguardConfig> {
    componentName: string = "wireguard";
}

export type WireguardConfigPeerPersistentKeepalive = CorePositiveTimePeriodSeconds;
export type WireguardConfigRebootTimeout = CorePositiveTimePeriodMilliseconds;

export interface WireguardConfig extends CoreCOMPONENT_SCHEMA {
    address: string;
    id?: ID;
    netmask?: any;
    peer_allowed_ips?: any[];
    peer_endpoint: string;
    peer_persistent_keepalive?: WireguardConfigPeerPersistentKeepalive;
    peer_port?: number;
    peer_preshared_key?: any;
    peer_public_key: string;
    private_key: string;
    reboot_timeout?: WireguardConfigRebootTimeout;
    require_connection_to_proceed?: boolean;
    time_id?: ID;
    update_interval?: any;
}

export class WireguardBinarySensor extends EsphomeComponent<WireguardBinarySensorConfig> {
    componentName: string = "wireguard.binary_sensor";
}

export interface WireguardBinarySensorConfigEnabled extends BinarySensor_BINARY_SENSOR_SCHEMA {
    entity_category?: any;
}

export interface WireguardBinarySensorConfigStatus extends BinarySensor_BINARY_SENSOR_SCHEMA {
    device_class?: any;
}

export interface WireguardBinarySensorConfig {
    enabled?: WireguardBinarySensorConfigEnabled;
    status?: WireguardBinarySensorConfigStatus;
    wireguard_id?: ID;
}

export class WireguardSensor extends EsphomeComponent<WireguardSensorConfig> {
    componentName: string = "wireguard.sensor";
}

export interface WireguardSensorConfigLatestHandshake extends Sensor_SENSOR_SCHEMA {
    device_class?: any;
    entity_category?: any;
}

export interface WireguardSensorConfig {
    latest_handshake?: WireguardSensorConfigLatestHandshake;
    wireguard_id?: ID;
}

export class WireguardTextSensor extends EsphomeComponent<WireguardTextSensorConfig> {
    componentName: string = "wireguard.text_sensor";
}

export interface WireguardTextSensorConfigAddress extends TextSensor_TEXT_SENSOR_SCHEMA {
    entity_category?: any;
}

export interface WireguardTextSensorConfig {
    address?: WireguardTextSensorConfigAddress;
    wireguard_id?: ID;
}
