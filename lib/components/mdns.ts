/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: mdns.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/mdns
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes) 2023
 **/
import { ID, Pin, BaseComponent } from "../base.js";

export class Mdns extends BaseComponent<MdnsConfig> {
    componentName: string = "mdns";
}

export interface MdnsConfig {
    id?: ID;
    disabled?: boolean;
    services?: MdnsConfigServices[];
}

export interface MdnsConfigServices {
    service: string;
    protocol: string;
    port?: number;
    txt: MdnsConfigServicesTxt;
}

export type MdnsConfigServicesTxt = Record<string, string>;
