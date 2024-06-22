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
import type { TextSensorTEXT_SENSOR_SCHEMA } from "./text_sensor.js";
import type { CoreCOMPONENT_SCHEMA } from "./esphome.js";

export class EthernetInfoTextSensor extends EsphomeComponent<EthernetInfoTextSensorConfig> {
    componentName: string = "ethernet_info.text_sensor";
}

export type EthernetInfoTextSensorConfigIpAddress = {
        id?: any;
        entity_category?: any;
        update_interval?: any;
    } & TextSensorTEXT_SENSOR_SCHEMA & CoreCOMPONENT_SCHEMA;

export interface EthernetInfoTextSensorConfig {
    ip_address?: EthernetInfoTextSensorConfigIpAddress;
}
