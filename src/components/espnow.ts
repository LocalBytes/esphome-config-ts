/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: espnow.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/espnow
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes)
 **/
import { type ID, type Pin, EsphomeComponent } from "@/lib/base.js";
import type { CoreCOMPONENTSCHEMA } from "./esphome.js";
import type { PacketTransportTRANSPORTSCHEMA } from "./packet_transport.js";

export class Espnow extends EsphomeComponent<EspnowConfig> {
    componentName: string = "espnow";
}

export interface EspnowConfig extends CoreCOMPONENTSCHEMA {
    auto_add_peer?: boolean;
    channel?: any;
    enable_on_boot?: boolean;
    id?: ID;
    on_broadcast?: object[];
    on_receive?: object[];
    on_unknown_peer?: object[];
    peers?: any[];
}

export interface EspnowPEERSCHEMA {
    address: string;
    id?: ID;
}

export interface EspnowSENDSCHEMA extends EspnowPEERSCHEMA {
    continue_on_error?: boolean;
    data: string;
    on_error?: any[];
    on_sent?: any[];
    wait_for_sent?: boolean;
}

export class EspnowPacketTransport extends EsphomeComponent<EspnowPacketTransportConfig> {
    componentName: string = "espnow.packet_transport";
}

export interface EspnowPacketTransportConfig extends PacketTransportTRANSPORTSCHEMA {
    espnow_id?: ID;
    id?: ID;
    peer_address?: any;
}
