/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: esp32_camera_web_server.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/esp32_camera_web_server
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes)
 **/
import { type ID, type Pin, EsphomeComponent } from "@/lib/base.js";
import type { CoreCOMPONENT_SCHEMA } from "./esphome.js";

export class Esp32CameraWebServer extends EsphomeComponent<Esp32CameraWebServerConfig> {
    componentName: string = "esp32_camera_web_server";
}

export type Esp32CameraWebServerConfigMode = 'STREAM' | 'SNAPSHOT';

export interface Esp32CameraWebServerConfig extends CoreCOMPONENT_SCHEMA {
    id?: ID;
    port: number;
    mode: Esp32CameraWebServerConfigMode;
}
