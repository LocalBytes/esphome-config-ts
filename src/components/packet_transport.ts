/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: packet_transport.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/packet_transport
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes)
 **/
import { type ID, type Pin, EsphomeComponent } from "@/lib/base.js";
import type { CorePositiveTimePeriodSeconds, CoreCOMPONENT_SCHEMA } from "./esphome.js";
import type { BinarySensor_BINARY_SENSOR_SCHEMA } from "./binary_sensor.js";
import type { Sensor_SENSOR_SCHEMA } from "./sensor.js";

export abstract class PacketTransport extends EsphomeComponent {
    componentName: string = "packet_transport";
}

export interface PacketTransportENCRYPTION_SCHEMAEncryption {
    key: string;
}

export interface PacketTransportENCRYPTION_SCHEMA {
    encryption?: PacketTransportENCRYPTION_SCHEMAEncryption;
}

export interface PacketTransportPROVIDER_SCHEMA extends PacketTransportENCRYPTION_SCHEMA {
    name: string;
}

export interface PacketTransportTRANSPORT_SCHEMABinarySensors {
    broadcast_id?: any;
    id: ID;
}

export type PacketTransportTRANSPORT_SCHEMAPingPongRecycleTime = CorePositiveTimePeriodSeconds;
export type PacketTransportTRANSPORT_SCHEMAProviders = PacketTransportPROVIDER_SCHEMA;

export interface PacketTransportTRANSPORT_SCHEMASensors {
    broadcast_id?: any;
    id: ID;
}

export type PacketTransportTRANSPORT_SCHEMA = {
        binary_sensors?: PacketTransportTRANSPORT_SCHEMABinarySensors[];
        ping_pong_enable?: boolean;
        ping_pong_recycle_time?: PacketTransportTRANSPORT_SCHEMAPingPongRecycleTime;
        providers?: PacketTransportTRANSPORT_SCHEMAProviders[];
        rolling_code_enable?: boolean;
        sensors?: PacketTransportTRANSPORT_SCHEMASensors[];
        update_interval?: any;
    } & CoreCOMPONENT_SCHEMA & PacketTransportENCRYPTION_SCHEMA;

export class PacketTransportBinarySensor extends EsphomeComponent<PacketTransportBinarySensorConfig> {
    componentName: string = "packet_transport.binary_sensor";
}

export type PacketTransportBinarySensorConfig = PacketTransportBinarySensorConfigData | PacketTransportBinarySensorConfigStatus;

export interface PacketTransportBinarySensorConfigData {
    type: "data" | "DATA";
    provider: string;
    remote_id?: string;
    transport_id?: ID;
    id?: ID;
    name?: any;
    internal?: any;
}

export interface PacketTransportBinarySensorConfigStatus {
    type: "status" | "STATUS";
    id?: ID;
    name?: any;
    internal?: any;
}

export interface PacketTransportBinarySensorSTATUS_SENSOR_SCHEMA extends BinarySensor_BINARY_SENSOR_SCHEMA {
    device_class?: any;
    entity_category?: any;
    provider: string;
    transport_id?: ID;
}

export class PacketTransportSensor extends EsphomeComponent<PacketTransportSensorConfig> {
    componentName: string = "packet_transport.sensor";
}

export interface PacketTransportSensorConfig extends Sensor_SENSOR_SCHEMA {
    provider: string;
    remote_id?: string;
    transport_id?: ID;
    id?: ID;
    name?: any;
    internal?: any;
}
