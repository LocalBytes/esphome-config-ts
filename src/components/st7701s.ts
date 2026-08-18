/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: st7701s.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/st7701s
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes)
 **/
import { type ID, type Pin, EsphomeComponent } from "@/lib/base.js";
import type { DisplayFULL_DISPLAY_SCHEMA } from "./display.js";

export class St7701sDisplay extends EsphomeComponent<St7701sDisplayConfig> {
    componentName: string = "st7701s.display";
}

export type St7701sDisplayConfigColorOrder = 'RGB' | 'BGR';

export interface St7701sDisplayConfigDataPins {
    blue: string;
    green: string;
    red: string;
}

export interface St7701sDisplayConfigDimensions {
    height: number;
    offset_height?: number;
    offset_width?: number;
    width: number;
}

export type St7701sDisplayConfigSpiMode = '0' | '1' | '2' | '3' | 'MODE0' | 'MODE1' | 'MODE2' | 'MODE3';

export interface St7701sDisplayConfigTransform {
    mirror_x?: boolean;
    mirror_y?: boolean;
}

export interface St7701sDisplayConfig extends DisplayFULL_DISPLAY_SCHEMA {
    color_order?: St7701sDisplayConfigColorOrder;
    cs_pin?: Pin;
    data_pins: St7701sDisplayConfigDataPins;
    data_rate?: any;
    dc_pin?: Pin;
    de_pin: Pin;
    dimensions: St7701sDisplayConfigDimensions;
    hsync_back_porch?: number;
    hsync_front_porch?: number;
    hsync_pin: Pin;
    hsync_pulse_width?: number;
    id?: ID;
    init_sequence?: any[];
    invert_colors?: boolean;
    pclk_frequency?: any;
    pclk_inverted?: boolean;
    pclk_pin: Pin;
    release_device?: boolean;
    reset_pin?: Pin;
    spi_id?: ID;
    spi_mode?: St7701sDisplayConfigSpiMode;
    transform?: St7701sDisplayConfigTransform;
    vsync_back_porch?: number;
    vsync_front_porch?: number;
    vsync_pin: Pin;
    vsync_pulse_width?: number;
    update_interval?: any;
    auto_clear_enabled?: any;
    pages?: any;
    rotation?: any;
    lambda?: any;
}
