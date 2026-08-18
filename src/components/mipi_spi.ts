/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: mipi_spi.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/mipi_spi
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes)
 **/
import { type ID, type Pin, EsphomeComponent } from "@/lib/base.js";
import type { DisplayFULL_DISPLAY_SCHEMA } from "./display.js";

export class MipiSpiDisplay extends EsphomeComponent<MipiSpiDisplayConfig> {
    componentName: string = "mipi_spi.display";
}

export type MipiSpiDisplayConfigBusMode = 'single';
export type MipiSpiDisplayConfigByteOrder = 'big_endian' | 'little_endian';
export type MipiSpiDisplayConfigColorDepth = '8' | '16' | '16bit' | '8bit';
export type MipiSpiDisplayConfigColorOrder = 'RGB' | 'BGR';

export interface MipiSpiDisplayConfigDimensions {
    height: string;
    offset_height?: any;
    offset_width?: any;
    pad_height?: any;
    pad_width?: any;
    width: string;
}

export type MipiSpiDisplayConfigModel = 'ADAFRUIT-FUNHOUSE' | 'ADAFRUIT-S2-TFT-FEATHER' | 'AXS15231' | 'CO5300' | 'CUSTOM' | 'ESP32-2424S012' | 'ESP32-2432S028' | 'ESP32-2432S028-7789' | 'ESP32-2432S028-9342' | 'GC9A01A' | 'GC9D01N' | 'GEEKMAGIC-SMALLTV' | 'GEEKMAGIC-SMALLTV-PRO' | 'ILI9341' | 'ILI9342' | 'ILI9481' | 'ILI9486' | 'ILI9488' | 'ILI9488_A' | 'JC3248W535' | 'JC3636W518' | 'JC3636W518V2' | 'JC4827W543' | 'LANBON-L8' | 'M5CORE' | 'M5CORE2' | 'PICO-RESTOUCH-LCD-3.5' | 'RM690B0' | 'S3BOX' | 'S3BOXLITE' | 'ST7735' | 'ST7789P' | 'ST7789V' | 'ST7796' | 'T-DISPLAY' | 'T-DISPLAY-S3' | 'T-DISPLAY-S3-AMOLED' | 'T-DISPLAY-S3-AMOLED-PLUS' | 'T-DISPLAY-S3-PRO' | 'T-EMBED' | 'T4-S3' | 'WAVESHARE-1.83-V2' | 'WAVESHARE-4-TFT' | 'WAVESHARE-ESP32-C6-LCD-1.47' | 'WAVESHARE-ESP32-S3-GEEK' | 'WAVESHARE-ESP32-S3-TOUCH-AMOLED-1.75' | 'WAVESHARE-ESP32-S3-TOUCH-AMOLED-2.16' | 'WAVESHARE-ESP32-S3-TOUCH-LCD-3.49' | 'WT32-SC01-PLUS';
export type MipiSpiDisplayConfigPixelMode = '16bit' | '18bit';
export type MipiSpiDisplayConfigSpiMode = '0' | '1' | '2' | '3' | 'MODE0' | 'MODE1' | 'MODE2' | 'MODE3';
export type MipiSpiDisplayConfigTransform = 'disabled';

export interface MipiSpiDisplayConfig extends DisplayFULL_DISPLAY_SCHEMA {
    buffer_size?: any;
    bus_mode?: MipiSpiDisplayConfigBusMode;
    byte_order?: MipiSpiDisplayConfigByteOrder;
    color_depth?: MipiSpiDisplayConfigColorDepth;
    color_order?: MipiSpiDisplayConfigColorOrder;
    cs_pin?: Pin;
    data_rate?: any;
    dc_pin: Pin;
    dimensions?: MipiSpiDisplayConfigDimensions;
    draw_rounding?: any;
    enable_pin?: Pin[];
    id?: ID;
    init_sequence?: any[];
    invert_colors?: boolean;
    model: MipiSpiDisplayConfigModel;
    pixel_mode?: MipiSpiDisplayConfigPixelMode;
    release_device?: boolean;
    reset_pin?: Pin;
    spi_16?: boolean;
    spi_id?: ID;
    spi_mode?: MipiSpiDisplayConfigSpiMode;
    transform?: MipiSpiDisplayConfigTransform;
    use_axis_flips?: boolean;
    rotation?: any;
}
