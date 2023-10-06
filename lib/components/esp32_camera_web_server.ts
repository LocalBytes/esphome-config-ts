/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: esp32_camera_web_server.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/esp32_camera_web_server
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes) 2023
 **/
import { ID, Pin, BaseComponent } from "../base.js";
import { CoreCOMPONENT_SCHEMA } from "./esphome.js";

export class Esp32CameraWebServer extends BaseComponent<Esp32CameraWebServerConfig> {
    componentName: string = "esp32_camera_web_server";
}

export interface Esp32CameraWebServerConfig extends CoreCOMPONENT_SCHEMA {
    id?: ID;
    port: number;
    mode: Esp32CameraWebServerConfigMode;
}

export type Esp32CameraWebServerConfigMode = 'STREAM' | 'SNAPSHOT';
