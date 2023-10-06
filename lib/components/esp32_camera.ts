/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: esp32_camera.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/esp32_camera
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes) 2023
 **/
import { ID, Pin, BaseComponent } from "../base.js";
import { CoreENTITY_BASE_SCHEMA, CoreCOMPONENT_SCHEMA } from "./esphome.js";

export class Esp32Camera extends BaseComponent<Esp32CameraConfig> {
    componentName: string = "esp32_camera";
}

export interface Esp32CameraConfig extends CoreENTITY_BASE_SCHEMA, CoreCOMPONENT_SCHEMA {
    id?: ID;
    data_pins: string;
    vsync_pin: Pin;
    href_pin: Pin;
    pixel_clock_pin: Pin;
    external_clock: Esp32CameraConfigExternalClock;
    i2c_pins: Esp32CameraConfigI2cPins;
    reset_pin?: Pin;
    power_down_pin?: Pin;
    resolution?: Esp32CameraConfigResolution;
    jpeg_quality?: number;
    contrast?: number;
    brightness?: number;
    saturation?: number;
    vertical_flip?: boolean;
    horizontal_mirror?: boolean;
    special_effect?: Esp32CameraConfigSpecialEffect;
    agc_mode?: Esp32CameraConfigAgcMode;
    aec2?: boolean;
    ae_level?: number;
    aec_value?: number;
    aec_mode?: Esp32CameraConfigAecMode;
    agc_value?: number;
    agc_gain_ceiling?: Esp32CameraConfigAgcGainCeiling;
    wb_mode?: Esp32CameraConfigWbMode;
    test_pattern?: boolean;
    max_framerate?: any;
    idle_framerate?: any;
    on_stream_start?: object[];
    on_stream_stop?: object[];
}

export interface Esp32CameraConfigExternalClock {
    pin: Pin;
    frequency?: any;
}

export interface Esp32CameraConfigI2cPins {
    sda: Pin;
    scl: Pin;
}

export type Esp32CameraConfigResolution = '160X120' | 'QQVGA' | '176X144' | 'QCIF' | '240X176' | 'HQVGA' | '320X240' | 'QVGA' | '400X296' | 'CIF' | '640X480' | 'VGA' | '800X600' | 'SVGA' | '1024X768' | 'XGA' | '1280X1024' | 'SXGA' | '1600X1200' | 'UXGA' | '1920X1080' | 'FHD' | '720X1280' | 'PHD' | '864X1536' | 'P3MP' | '2048X1536' | 'QXGA' | '2560X1440' | 'QHD' | '2560X1600' | 'WQXGA' | '1080X1920' | 'PFHD' | '2560X1920' | 'QSXGA';
export type Esp32CameraConfigSpecialEffect = 'NONE' | 'NEGATIVE' | 'GRAYSCALE' | 'RED_TINT' | 'GREEN_TINT' | 'BLUE_TINT' | 'SEPIA';
export type Esp32CameraConfigAgcMode = 'MANUAL' | 'AUTO';
export type Esp32CameraConfigAecMode = 'MANUAL' | 'AUTO';
export type Esp32CameraConfigAgcGainCeiling = '2X' | '4X' | '8X' | '16X' | '32X' | '64X' | '128X';
export type Esp32CameraConfigWbMode = 'AUTO' | 'SUNNY' | 'CLOUDY' | 'OFFICE' | 'HOME';
