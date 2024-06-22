/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: mdns.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/mdns
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes)
 **/
import { type ID, type Pin, EsphomeComponent } from "@/lib/base.js";

export class Mdns extends EsphomeComponent<MdnsConfig> {
    componentName: string = "mdns";
}

export type MdnsConfigServicesTxt = Record<string, string>;

export interface MdnsConfigServices {
    service: string;
    protocol: string;
    port?: number;
    txt: MdnsConfigServicesTxt;
}

export interface MdnsConfig {
    id?: ID;
    disabled?: boolean;
    services?: MdnsConfigServices[];
}
