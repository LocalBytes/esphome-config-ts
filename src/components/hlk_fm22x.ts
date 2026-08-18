/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: hlk_fm22x.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/hlk_fm22x
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes)
 **/
import { type ID, type Pin, EsphomeComponent } from "@/lib/base.js";
import type { CoreCOMPONENT_SCHEMA } from "./esphome.js";
import type { BinarySensor_BINARY_SENSOR_SCHEMA } from "./binary_sensor.js";
import type { Sensor_SENSOR_SCHEMA } from "./sensor.js";
import type { TextSensor_TEXT_SENSOR_SCHEMA } from "./text_sensor.js";

export class HlkFm22x extends EsphomeComponent<HlkFm22xConfig> {
    componentName: string = "hlk_fm22x";
}

export interface HlkFm22xConfig extends CoreCOMPONENT_SCHEMA {
    id?: ID;
    on_enrollment_done?: object[];
    on_enrollment_failed?: object[];
    on_face_info?: object[];
    on_face_scan_invalid?: object[];
    on_face_scan_matched?: object[];
    on_face_scan_unmatched?: object[];
    uart_id?: ID;
    update_interval?: any;
}

export class HlkFm22xBinarySensor extends EsphomeComponent<HlkFm22xBinarySensorConfig> {
    componentName: string = "hlk_fm22x.binary_sensor";
}

export interface HlkFm22xBinarySensorConfig extends BinarySensor_BINARY_SENSOR_SCHEMA {
    hlk_fm22x_id?: ID;
    icon?: any;
}

export class HlkFm22xSensor extends EsphomeComponent<HlkFm22xSensorConfig> {
    componentName: string = "hlk_fm22x.sensor";
}

export interface HlkFm22xSensorConfigFaceCount extends Sensor_SENSOR_SCHEMA {
    accuracy_decimals?: any;
    entity_category?: any;
    icon?: any;
}

export interface HlkFm22xSensorConfigLastFaceId extends Sensor_SENSOR_SCHEMA {
    accuracy_decimals?: any;
    entity_category?: any;
    icon?: any;
}

export interface HlkFm22xSensorConfigStatus extends Sensor_SENSOR_SCHEMA {
    accuracy_decimals?: any;
    entity_category?: any;
}

export interface HlkFm22xSensorConfig {
    face_count?: HlkFm22xSensorConfigFaceCount;
    hlk_fm22x_id?: ID;
    last_face_id?: HlkFm22xSensorConfigLastFaceId;
    status?: HlkFm22xSensorConfigStatus;
}

export class HlkFm22xTextSensor extends EsphomeComponent<HlkFm22xTextSensorConfig> {
    componentName: string = "hlk_fm22x.text_sensor";
}

export interface HlkFm22xTextSensorConfigLastFaceName extends TextSensor_TEXT_SENSOR_SCHEMA {
    entity_category?: any;
    icon?: any;
}

export interface HlkFm22xTextSensorConfigVersion extends TextSensor_TEXT_SENSOR_SCHEMA {
    entity_category?: any;
    icon?: any;
}

export interface HlkFm22xTextSensorConfig {
    hlk_fm22x_id?: ID;
    last_face_name?: HlkFm22xTextSensorConfigLastFaceName;
    version?: HlkFm22xTextSensorConfigVersion;
}
