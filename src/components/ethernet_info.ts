/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: ethernet_info.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/ethernet_info
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes)
 **/
import { type ID, type Pin, EsphomeComponent } from "@/lib/base.js";
import type { TextSensorTEXTSENSORSCHEMA } from "./text_sensor.js";

export class EthernetInfoTextSensor extends EsphomeComponent<EthernetInfoTextSensorConfig> {
    componentName: string = "ethernet_info.text_sensor";
}

export interface EthernetInfoTextSensorConfigDnsAddress extends TextSensorTEXTSENSORSCHEMA {
    entity_category?: any;
    id?: any;
}

export interface EthernetInfoTextSensorConfigIpAddressAddress0 extends TextSensorTEXTSENSORSCHEMA {
    entity_category?: any;
}

export interface EthernetInfoTextSensorConfigIpAddressAddress1 extends TextSensorTEXTSENSORSCHEMA {
    entity_category?: any;
}

export interface EthernetInfoTextSensorConfigIpAddressAddress2 extends TextSensorTEXTSENSORSCHEMA {
    entity_category?: any;
}

export interface EthernetInfoTextSensorConfigIpAddressAddress3 extends TextSensorTEXTSENSORSCHEMA {
    entity_category?: any;
}

export interface EthernetInfoTextSensorConfigIpAddressAddress4 extends TextSensorTEXTSENSORSCHEMA {
    entity_category?: any;
}

export interface EthernetInfoTextSensorConfigIpAddress extends TextSensorTEXTSENSORSCHEMA {
    address_0?: EthernetInfoTextSensorConfigIpAddressAddress0;
    address_1?: EthernetInfoTextSensorConfigIpAddressAddress1;
    address_2?: EthernetInfoTextSensorConfigIpAddressAddress2;
    address_3?: EthernetInfoTextSensorConfigIpAddressAddress3;
    address_4?: EthernetInfoTextSensorConfigIpAddressAddress4;
    entity_category?: any;
    id?: any;
}

export interface EthernetInfoTextSensorConfigMacAddress extends TextSensorTEXTSENSORSCHEMA {
    entity_category?: any;
    id?: any;
}

export interface EthernetInfoTextSensorConfig {
    dns_address?: EthernetInfoTextSensorConfigDnsAddress;
    ip_address?: EthernetInfoTextSensorConfigIpAddress;
    mac_address?: EthernetInfoTextSensorConfigMacAddress;
}
