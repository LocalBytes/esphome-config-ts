/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: network.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/network
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes)
 **/
import { type ID, type Pin, EsphomeComponent } from "@/lib/base.js";

export class Network extends EsphomeComponent<NetworkConfig> {
    componentName: string = "network";
}

export interface NetworkConfig {
    enable_high_performance?: boolean;
    enable_ipv6?: boolean;
    id?: ID;
    min_ipv6_addr_count?: number;
}
