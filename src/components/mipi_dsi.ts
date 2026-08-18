/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: mipi_dsi.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/mipi_dsi
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes)
 **/
import { type ID, type Pin, EsphomeComponent } from "@/lib/base.js";
import type { DisplayFULLDISPLAYSCHEMA } from "./display.js";

export class MipiDsiDisplay extends EsphomeComponent<MipiDsiDisplayConfig> {
    componentName: string = "mipi_dsi.display";
}

export type MipiDsiDisplayConfigByteOrder = 'little_endian' | 'big_endian';
export type MipiDsiDisplayConfigColorDepth = '16' | '24' | '16bit' | '24bit';
export type MipiDsiDisplayConfigColorOrder = 'RGB' | 'BGR';

export interface MipiDsiDisplayConfigDimensions {
    height: string;
    offset_height?: any;
    offset_width?: any;
    pad_height?: any;
    pad_width?: any;
    width: string;
}

export type MipiDsiDisplayConfigModel = 'CUSTOM' | 'JC1060P470' | 'JC4880P443' | 'JC8012P4A1' | 'M5STACK-TAB5' | 'M5STACK-TAB5-V2' | 'SEEED-RETERMINAL-D1001' | 'WAVESHARE-10.1-DSI-TOUCH-A' | 'WAVESHARE-3.4-DSI-TOUCH-C' | 'WAVESHARE-4-DSI-TOUCH-C' | 'WAVESHARE-7-DSI-TOUCH-A' | 'WAVESHARE-8-DSI-TOUCH-A' | 'WAVESHARE-ESP32-P4-WIFI6-TOUCH-LCD-3.4C' | 'WAVESHARE-ESP32-P4-WIFI6-TOUCH-LCD-4C' | 'WAVESHARE-ESP32-P4-WIFI6-TOUCH-LCD-7B' | 'WAVESHARE-P4-86-PANEL' | 'WAVESHARE-P4-NANO-10.1';
export type MipiDsiDisplayConfigPixelMode = '16' | '24' | '16bit' | '24bit';
export type MipiDsiDisplayConfigTransform = 'disabled';

export interface MipiDsiDisplayConfig extends DisplayFULLDISPLAYSCHEMA {
    byte_order?: MipiDsiDisplayConfigByteOrder;
    color_depth?: MipiDsiDisplayConfigColorDepth;
    color_order?: MipiDsiDisplayConfigColorOrder;
    dimensions?: MipiDsiDisplayConfigDimensions;
    draw_rounding?: any;
    enable_pin?: Pin[];
    hsync_back_porch?: number;
    hsync_front_porch?: number;
    hsync_pulse_width?: number;
    id?: ID;
    init_sequence?: any[];
    invert_colors?: boolean;
    lane_bit_rate?: any;
    lanes?: number;
    model: MipiDsiDisplayConfigModel;
    pclk_frequency?: any;
    pixel_mode?: MipiDsiDisplayConfigPixelMode;
    reset_pin?: Pin;
    transform?: MipiDsiDisplayConfigTransform;
    use_axis_flips?: boolean;
    vsync_back_porch?: number;
    vsync_front_porch?: number;
    vsync_pulse_width?: number;
    rotation?: any;
}
