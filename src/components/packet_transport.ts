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
import type { CorePositiveTimePeriodSeconds, CoreCOMPONENTSCHEMA } from "./esphome.js";
import type { BinarySensorBINARYSENSORSCHEMA } from "./binary_sensor.js";
import type { SensorSENSORSCHEMA } from "./sensor.js";

export abstract class PacketTransport extends EsphomeComponent {
    componentName: string = "packet_transport";
}

export interface PacketTransportENCRYPTIONSCHEMAEncryption {
    key: string;
}

export interface PacketTransportENCRYPTIONSCHEMA {
    encryption?: PacketTransportENCRYPTIONSCHEMAEncryption;
}

export interface PacketTransportPROVIDERSCHEMA extends PacketTransportENCRYPTIONSCHEMA {
    name: string;
}

export interface PacketTransportTRANSPORTSCHEMABinarySensors {
    broadcast_id?: any;
    id: ID;
}

export type PacketTransportTRANSPORTSCHEMAPingPongRecycleTime = CorePositiveTimePeriodSeconds;
export type PacketTransportTRANSPORTSCHEMAProviders = PacketTransportPROVIDERSCHEMA;

export interface PacketTransportTRANSPORTSCHEMASensors {
    broadcast_id?: any;
    id: ID;
}

export type PacketTransportTRANSPORTSCHEMA = {
        binary_sensors?: PacketTransportTRANSPORTSCHEMABinarySensors[];
        ping_pong_enable?: boolean;
        ping_pong_recycle_time?: PacketTransportTRANSPORTSCHEMAPingPongRecycleTime;
        providers?: PacketTransportTRANSPORTSCHEMAProviders[];
        rolling_code_enable?: boolean;
        sensors?: PacketTransportTRANSPORTSCHEMASensors[];
        update_interval?: any;
    } & CoreCOMPONENTSCHEMA & PacketTransportENCRYPTIONSCHEMA;

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

export interface PacketTransportBinarySensorSTATUSSENSORSCHEMA extends BinarySensorBINARYSENSORSCHEMA {
    device_class?: any;
    entity_category?: any;
    provider: string;
    transport_id?: ID;
}

export class PacketTransportSensor extends EsphomeComponent<PacketTransportSensorConfig> {
    componentName: string = "packet_transport.sensor";
}

export interface PacketTransportSensorConfig extends SensorSENSORSCHEMA {
    provider: string;
    remote_id?: string;
    transport_id?: ID;
    id?: ID;
    name?: any;
    internal?: any;
}
