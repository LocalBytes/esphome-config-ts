/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: network.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/network
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes) 2023
 **/
import type { ID, Pin } from "../base.js";
import { BaseComponent } from "../base.js";

export class Network extends BaseComponent<NetworkConfig> {
    componentName: string = "network";
}

export interface NetworkConfig {
    enable_ipv6?: boolean;
}
