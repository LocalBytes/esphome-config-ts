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

export type Ili9xxxDisplayConfigModel = 'M5STACK' | 'M5CORE' | 'TFT_2.4' | 'TFT_2.4R' | 'ILI9341' | 'ILI9342' | 'ILI9481' | 'ILI9481-18' | 'ILI9486' | 'ILI9488' | 'ILI9488_A' | 'ST7796' | 'S3BOX' | 'S3BOX_LITE';
export type Ili9xxxDisplayConfigColorPalette = 'NONE' | 'GRAYSCALE' | 'IMAGE_ADAPTIVE';
export type Ili9xxxDisplayConfigDataRate = '80000000.0' | '40000000.0' | '20000000.0' | '10000000.0' | '8000000.0' | '5000000.0' | '4000000.0' | '2000000.0' | '1000000.0' | '200000.0' | '75000.0' | '1000.0';
export type Ili9xxxDisplayConfig = {
        id?: ID;
        model: Ili9xxxDisplayConfigModel;
        dimensions?: any;
        dc_pin: Pin;
        reset_pin?: Pin;
        color_palette?: Ili9xxxDisplayConfigColorPalette;
        raw_data_id?: ID;
        color_palette_images?: any[];
        data_rate?: Ili9xxxDisplayConfigDataRate;
        update_interval?: any;
        spi_id?: ID;
        cs_pin?: Pin;
    } & DisplayFULL_DISPLAY_SCHEMA & CoreCOMPONENT_SCHEMA;
