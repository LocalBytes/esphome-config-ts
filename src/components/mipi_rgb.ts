/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: mipi_rgb.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/mipi_rgb
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes)
 **/
import { type ID, type Pin, EsphomeComponent } from "@/lib/base.js";
import type { DisplayFULLDISPLAYSCHEMA } from "./display.js";

export class MipiRgbDisplay extends EsphomeComponent<MipiRgbDisplayConfig> {
    componentName: string = "mipi_rgb.display";
}

export type MipiRgbDisplayConfigByteOrder = 'little_endian' | 'big_endian';
export type MipiRgbDisplayConfigColorOrder = 'RGB' | 'BGR';

export interface MipiRgbDisplayConfigDataPins {
    blue: string;
    green: string;
    red: string;
}

export interface MipiRgbDisplayConfigDimensions {
    height: string;
    offset_height?: any;
    offset_width?: any;
    pad_height?: any;
    pad_width?: any;
    width: string;
}

export type MipiRgbDisplayConfigModel = 'CUSTOM' | 'ESP32-8048S050' | 'ESP32-8048S070' | 'ESP32-S3-TOUCH-LCD-4.3' | 'ESP32-S3-TOUCH-LCD-7-800X480' | 'GUITION-4848S040' | 'MAKERFABS-4' | 'RPI' | 'SEEED-INDICATOR-D1' | 'ST7701S' | 'T-PANEL-S3' | 'T-RGB-2.1' | 'T-RGB-2.8' | 'UEDX48480021-MD80ET' | 'WAVESHARE-3.16-320X820' | 'WAVESHARE-4-480X480' | 'WAVESHARE-5-1024X600' | 'ZX2D10GE01R-V4848';
export type MipiRgbDisplayConfigPixelMode = '16' | '18' | '16bit' | '18bit';
export type MipiRgbDisplayConfigTransform = 'disabled';

export interface MipiRgbDisplayConfig extends DisplayFULLDISPLAYSCHEMA {
    byte_order?: MipiRgbDisplayConfigByteOrder;
    color_order?: MipiRgbDisplayConfigColorOrder;
    data_pins: MipiRgbDisplayConfigDataPins;
    de_pin: Pin;
    dimensions: MipiRgbDisplayConfigDimensions;
    draw_rounding?: any;
    enable_pin?: Pin[];
    hsync_back_porch?: number;
    hsync_front_porch?: number;
    hsync_pin?: Pin;
    hsync_pulse_width?: number;
    id?: ID;
    init_sequence?: any[];
    invert_colors?: boolean;
    model: MipiRgbDisplayConfigModel;
    pclk_frequency?: any;
    pclk_inverted?: boolean;
    pclk_pin: Pin;
    pixel_mode?: MipiRgbDisplayConfigPixelMode;
    reset_pin?: Pin;
    transform?: MipiRgbDisplayConfigTransform;
    use_axis_flips?: boolean;
    vsync_back_porch?: number;
    vsync_front_porch?: number;
    vsync_pin?: Pin;
    vsync_pulse_width?: number;
    rotation?: any;
    update_interval?: any;
    lambda?: any;
    pages?: any;
}
