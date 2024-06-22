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
import { type ID, type Pin, BaseComponent } from "@/lib/base.js";
import type { TextSensorTEXT_SENSOR_SCHEMA } from "./text_sensor.js";
import type { CoreCOMPONENT_SCHEMA } from "./esphome.js";

export class BleScannerTextSensor extends BaseComponent<BleScannerTextSensorConfig> {
    componentName: string = "ble_scanner.text_sensor";
}

export type BleScannerTextSensorConfig = {
        id?: any;
        esp32_ble_id?: ID;
    } & TextSensorTEXT_SENSOR_SCHEMA & CoreCOMPONENT_SCHEMA;
