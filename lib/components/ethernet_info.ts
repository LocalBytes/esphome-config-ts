/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: ethernet_info.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/ethernet_info
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes) 2023
 **/
import { ID, Pin, BaseComponent } from "../base.js";
import { TextSensorTEXT_SENSOR_SCHEMA } from "./text_sensor.js";
import { CoreCOMPONENT_SCHEMA } from "./esphome.js";

export class EthernetInfoTextSensor extends BaseComponent<EthernetInfoTextSensorConfig> {
    componentName: string = "ethernet_info.text_sensor";
}

export interface EthernetInfoTextSensorConfig {
    ip_address?: EthernetInfoTextSensorConfigIpAddress;
}

export interface EthernetInfoTextSensorConfigIpAddress extends TextSensorTEXT_SENSOR_SCHEMA, CoreCOMPONENT_SCHEMA {
    id?: any;
    entity_category?: any;
    update_interval?: any;
}
