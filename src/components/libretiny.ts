/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: libretiny.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/libretiny
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes)
 **/
import { type ID, type Pin, EsphomeComponent } from "@/lib/base.js";
import type { TextSensor_TEXT_SENSOR_SCHEMA } from "./text_sensor.js";

export class Libretiny extends EsphomeComponent<any> {
    componentName: string = "libretiny";
}

export class LibretinyTextSensor extends EsphomeComponent<LibretinyTextSensorConfig> {
    componentName: string = "libretiny.text_sensor";
}

export interface LibretinyTextSensorConfigVersion extends TextSensor_TEXT_SENSOR_SCHEMA {
    entity_category?: any;
    icon?: any;
}

export interface LibretinyTextSensorConfig {
    libretiny?: ID;
    version?: LibretinyTextSensorConfigVersion;
}
