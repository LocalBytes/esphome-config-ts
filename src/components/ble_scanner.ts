/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: ble_scanner.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/ble_scanner
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes)
 **/
import { type ID, type Pin, EsphomeComponent } from "@/lib/base.js";
import type { TextSensor_TEXT_SENSOR_SCHEMA } from "./text_sensor.js";
import type { CoreCOMPONENT_SCHEMA } from "./esphome.js";

export class BleScannerTextSensor extends EsphomeComponent<BleScannerTextSensorConfig> {
    componentName: string = "ble_scanner.text_sensor";
}

export type BleScannerTextSensorConfig = {
        esp32_ble_id?: ID;
        id?: any;
    } & TextSensor_TEXT_SENSOR_SCHEMA & CoreCOMPONENT_SCHEMA;
