/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: rpi_dpi_rgb.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/rpi_dpi_rgb
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes)
 **/
import { type ID, type Pin, EsphomeComponent } from "@/lib/base.js";
import type { DisplayFULL_DISPLAY_SCHEMA } from "./display.js";

export class RpiDpiRgbDisplay extends EsphomeComponent<RpiDpiRgbDisplayConfig> {
    componentName: string = "rpi_dpi_rgb.display";
}

export type RpiDpiRgbDisplayConfigColorOrder = 'RGB' | 'BGR';

export interface RpiDpiRgbDisplayConfigDataPins {
    blue: string;
    green: string;
    red: string;
}

export interface RpiDpiRgbDisplayConfigDimensions {
    height: number;
    offset_height?: number;
    offset_width?: number;
    width: number;
}

export interface RpiDpiRgbDisplayConfig extends DisplayFULL_DISPLAY_SCHEMA {
    color_order?: RpiDpiRgbDisplayConfigColorOrder;
    data_pins: RpiDpiRgbDisplayConfigDataPins;
    de_pin: Pin;
    dimensions: RpiDpiRgbDisplayConfigDimensions;
    enable_pin?: Pin;
    hsync_back_porch?: number;
    hsync_front_porch?: number;
    hsync_pin: Pin;
    hsync_pulse_width?: number;
    id?: ID;
    invert_colors?: boolean;
    pclk_frequency?: any;
    pclk_inverted?: boolean;
    pclk_pin: Pin;
    reset_pin?: Pin;
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
