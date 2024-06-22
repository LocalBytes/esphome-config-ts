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
import type { SensorSENSOR_SCHEMA } from "./sensor.js";
import type { BinarySensorBINARY_SENSOR_SCHEMA } from "./binary_sensor.js";

export class Wireguard extends EsphomeComponent<WireguardConfig> {
    componentName: string = "wireguard";
}

export type WireguardConfigPeerPersistentKeepalive = CorePositiveTimePeriodSeconds;
export type WireguardConfigRebootTimeout = CorePositiveTimePeriodMilliseconds;

export interface WireguardConfig extends CoreCOMPONENT_SCHEMA {
    id?: ID;
    time_id?: ID;
    address: string;
    netmask?: any;
    private_key: string;
    peer_endpoint: string;
    peer_public_key: string;
    peer_port?: number;
    peer_preshared_key?: any;
    peer_allowed_ips?: any[];
    peer_persistent_keepalive?: WireguardConfigPeerPersistentKeepalive;
    reboot_timeout?: WireguardConfigRebootTimeout;
    require_connection_to_proceed?: boolean;
    update_interval?: any;
}

export class WireguardSensor extends EsphomeComponent<WireguardSensorConfig> {
    componentName: string = "wireguard.sensor";
}

export interface WireguardSensorConfigLatestHandshake extends SensorSENSOR_SCHEMA {
    device_class?: any;
    entity_category?: any;
}

export interface WireguardSensorConfig {
    wireguard_id?: ID;
    latest_handshake?: WireguardSensorConfigLatestHandshake;
}

export class WireguardBinarySensor extends EsphomeComponent<WireguardBinarySensorConfig> {
    componentName: string = "wireguard.binary_sensor";
}

export interface WireguardBinarySensorConfigStatus extends BinarySensorBINARY_SENSOR_SCHEMA {
    device_class?: any;
}

export interface WireguardBinarySensorConfig {
    wireguard_id?: ID;
    status?: WireguardBinarySensorConfigStatus;
}
