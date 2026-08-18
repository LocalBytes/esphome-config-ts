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
import type { TextSensor_TEXT_SENSOR_SCHEMA } from "./text_sensor.js";

export class EthernetInfoTextSensor extends EsphomeComponent<EthernetInfoTextSensorConfig> {
    componentName: string = "ethernet_info.text_sensor";
}

export interface EthernetInfoTextSensorConfigDnsAddress extends TextSensor_TEXT_SENSOR_SCHEMA {
    entity_category?: any;
    id?: any;
}

export interface EthernetInfoTextSensorConfigIpAddressAddress_0 extends TextSensor_TEXT_SENSOR_SCHEMA {
    entity_category?: any;
}

export interface EthernetInfoTextSensorConfigIpAddressAddress_1 extends TextSensor_TEXT_SENSOR_SCHEMA {
    entity_category?: any;
}

export interface EthernetInfoTextSensorConfigIpAddressAddress_2 extends TextSensor_TEXT_SENSOR_SCHEMA {
    entity_category?: any;
}

export interface EthernetInfoTextSensorConfigIpAddressAddress_3 extends TextSensor_TEXT_SENSOR_SCHEMA {
    entity_category?: any;
}

export interface EthernetInfoTextSensorConfigIpAddressAddress_4 extends TextSensor_TEXT_SENSOR_SCHEMA {
    entity_category?: any;
}

export interface EthernetInfoTextSensorConfigIpAddress extends TextSensor_TEXT_SENSOR_SCHEMA {
    address_0?: EthernetInfoTextSensorConfigIpAddressAddress_0;
    address_1?: EthernetInfoTextSensorConfigIpAddressAddress_1;
    address_2?: EthernetInfoTextSensorConfigIpAddressAddress_2;
    address_3?: EthernetInfoTextSensorConfigIpAddressAddress_3;
    address_4?: EthernetInfoTextSensorConfigIpAddressAddress_4;
    entity_category?: any;
    id?: any;
}

export interface EthernetInfoTextSensorConfigMacAddress extends TextSensor_TEXT_SENSOR_SCHEMA {
    entity_category?: any;
    id?: any;
}

export interface EthernetInfoTextSensorConfig {
    dns_address?: EthernetInfoTextSensorConfigDnsAddress;
    ip_address?: EthernetInfoTextSensorConfigIpAddress;
    mac_address?: EthernetInfoTextSensorConfigMacAddress;
}
