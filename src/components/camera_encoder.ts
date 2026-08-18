/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: camera_encoder.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/camera_encoder
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes)
 **/
import { type ID, type Pin, EsphomeComponent } from "@/lib/base.js";

export class CameraEncoder extends EsphomeComponent<CameraEncoderConfig> {
    componentName: string = "camera_encoder";
}

export type CameraEncoderConfig = CameraEncoderConfigEsp32Camera;

export interface CameraEncoderConfigEsp32Camera {
    type: "esp32_camera" | "ESP32_CAMERA";
    buffer_expand_size?: number;
    buffer_size?: number;
    encoder_buffer_id?: ID;
    id?: ID;
    quality?: number;
}
