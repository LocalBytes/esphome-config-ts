/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: esp32_camera.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/esp32_camera
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes)
 **/
import { type ID, type Pin, EsphomeComponent } from "@/lib/base.js";
import type { CoreENTITY_BASE_SCHEMA, CoreCOMPONENT_SCHEMA } from "./esphome.js";

export class Esp32Camera extends EsphomeComponent<Esp32CameraConfig> {
    componentName: string = "esp32_camera";
}

export type Esp32CameraConfigAecMode = 'MANUAL' | 'AUTO';
export type Esp32CameraConfigAgcGainCeiling = '2X' | '4X' | '8X' | '16X' | '32X' | '64X' | '128X';
export type Esp32CameraConfigAgcMode = 'MANUAL' | 'AUTO';

export interface Esp32CameraConfigExternalClock {
    frequency?: any;
    pin: Pin;
}

export interface Esp32CameraConfigI2cPins {
    scl: Pin;
    sda: Pin;
}

export type Esp32CameraConfigPixelFormat = 'RGB565' | 'YUV422' | 'YUV420' | 'GRAYSCALE' | 'JPEG' | 'RGB888' | 'RAW' | 'RGB444' | 'RGB555';
export type Esp32CameraConfigResolution = '160X120' | 'QQVGA' | '176X144' | 'QCIF' | '240X176' | 'HQVGA' | '320X240' | 'QVGA' | '400X296' | 'CIF' | '640X480' | 'VGA' | '800X600' | 'SVGA' | '1024X768' | 'XGA' | '1280X1024' | 'SXGA' | '1600X1200' | 'UXGA' | '1920X1080' | 'FHD' | '720X1280' | 'PHD' | '864X1536' | 'P3MP' | '2048X1536' | 'QXGA' | '2560X1440' | 'QHD' | '2560X1600' | 'WQXGA' | '1080X1920' | 'PFHD' | '2560X1920' | 'QSXGA';
export type Esp32CameraConfigSpecialEffect = 'NONE' | 'NEGATIVE' | 'GRAYSCALE' | 'RED_TINT' | 'GREEN_TINT' | 'BLUE_TINT' | 'SEPIA';
export type Esp32CameraConfigWbMode = 'AUTO' | 'SUNNY' | 'CLOUDY' | 'OFFICE' | 'HOME';
export type Esp32CameraConfig = {
        ae_level?: number;
        aec2?: boolean;
        aec_mode?: Esp32CameraConfigAecMode;
        aec_value?: number;
        agc_gain_ceiling?: Esp32CameraConfigAgcGainCeiling;
        agc_mode?: Esp32CameraConfigAgcMode;
        agc_value?: number;
        brightness?: number;
        contrast?: number;
        data_pins: string;
        external_clock: Esp32CameraConfigExternalClock;
        frame_buffer_count?: number;
        frame_buffer_location?: any;
        horizontal_mirror?: boolean;
        href_pin: Pin;
        i2c_id?: ID;
        i2c_pins?: Esp32CameraConfigI2cPins;
        id?: ID;
        idle_framerate?: any;
        jpeg_quality?: number;
        max_framerate?: any;
        on_image?: object[];
        on_stream_start?: object[];
        on_stream_stop?: object[];
        pixel_clock_pin: Pin;
        pixel_format?: Esp32CameraConfigPixelFormat;
        power_down_pin?: Pin;
        reset_pin?: Pin;
        resolution?: Esp32CameraConfigResolution;
        saturation?: number;
        special_effect?: Esp32CameraConfigSpecialEffect;
        test_pattern?: boolean;
        vertical_flip?: boolean;
        vsync_pin: Pin;
        wb_mode?: Esp32CameraConfigWbMode;
        name?: any;
        icon?: any;
        internal?: any;
        disabled_by_default?: any;
        entity_category?: any;
    } & CoreENTITY_BASE_SCHEMA & CoreCOMPONENT_SCHEMA;
