/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: udp.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/udp
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes)
 **/
import { type ID, type Pin, EsphomeComponent } from "@/lib/base.js";
import type { PacketTransportTRANSPORTSCHEMA } from "./packet_transport.js";

export class Udp extends EsphomeComponent<UdpConfig> {
    componentName: string = "udp";
}

export interface UdpConfig {
    addresses?: any[];
    binary_sensors?: any;
    encryption?: any;
    id?: ID;
    listen_address?: any;
    on_receive?: object[];
    ping_pong_enable?: any;
    port?: number;
    providers?: any;
    rolling_code_enable?: any;
    sensors?: any;
}

export interface UdpUDPSCHEMA {
    udp_id?: ID;
}

export class UdpPacketTransport extends EsphomeComponent<UdpPacketTransportConfig> {
    componentName: string = "udp.packet_transport";
}

export type UdpPacketTransportConfig = {
        id?: ID;
    } & PacketTransportTRANSPORTSCHEMA & UdpUDPSCHEMA;
