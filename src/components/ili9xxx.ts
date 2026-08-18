/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: ili9xxx.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/ili9xxx
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes)
 **/
import { type ID, type Pin, EsphomeComponent } from "@/lib/base.js";
import type { DisplayFULL_DISPLAY_SCHEMA } from "./display.js";
import type { CoreCOMPONENT_SCHEMA } from "./esphome.js";

export class Ili9xxxDisplay extends EsphomeComponent<Ili9xxxDisplayConfig> {
    componentName: string = "ili9xxx.display";
}

export type Ili9xxxDisplayConfigColorOrder = 'RGB' | 'BGR';
export type Ili9xxxDisplayConfigColorPalette = 'NONE' | 'GRAYSCALE' | 'IMAGE_ADAPTIVE' | '8BIT';

export interface Ili9xxxDisplayConfigDimensions {
    height: number;
    offset_height?: number;
    offset_width?: number;
    width: number;
}

export type Ili9xxxDisplayConfigModel = 'GC9A01A' | 'GC9D01N' | 'M5STACK' | 'M5CORE' | 'TFT_2.4' | 'TFT_2.4R' | 'ILI9341' | 'ILI9342' | 'ILI9481' | 'ILI9481-18' | 'ILI9486' | 'ILI9488' | 'ILI9488_A' | 'ST7735' | 'ST7796' | 'ST7789V' | 'S3BOX' | 'S3BOX_LITE' | 'WAVESHARE_RES_3_5' | 'CUSTOM';
export type Ili9xxxDisplayConfigPixelMode = '16bit' | '18bit';
export type Ili9xxxDisplayConfigSpiMode = '0' | '1' | '2' | '3' | 'MODE0' | 'MODE1' | 'MODE2' | 'MODE3';

export interface Ili9xxxDisplayConfigTransform {
    mirror_x?: boolean;
    mirror_y?: boolean;
    swap_xy?: boolean;
}

export type Ili9xxxDisplayConfig = {
        color_order?: Ili9xxxDisplayConfigColorOrder;
        color_palette?: Ili9xxxDisplayConfigColorPalette;
        color_palette_images?: any[];
        cs_pin?: Pin;
        data_rate?: any;
        dc_pin: Pin;
        dimensions?: Ili9xxxDisplayConfigDimensions;
        id?: ID;
        init_sequence?: any[];
        invert_colors: boolean;
        model: Ili9xxxDisplayConfigModel;
        pixel_mode?: Ili9xxxDisplayConfigPixelMode;
        raw_data_id?: ID;
        release_device?: boolean;
        reset_pin?: Pin;
        rotation?: any;
        spi_id?: ID;
        spi_mode?: Ili9xxxDisplayConfigSpiMode;
        transform?: Ili9xxxDisplayConfigTransform;
        update_interval?: any;
    } & DisplayFULL_DISPLAY_SCHEMA & CoreCOMPONENT_SCHEMA;
