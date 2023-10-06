/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: font.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/font
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes) 2023
 **/
import { ID, Pin, BaseComponent } from "../base.js";

export class Font extends BaseComponent<FontConfig> {
    componentName: string = "font";
}

export interface FontConfig {
    id: string;
    file: FontConfigFile;
    glyphs?: any;
    size?: number;
    raw_data_id?: ID;
    raw_glyph_id?: ID;
}

export type FontConfigFile = FontConfigFileLocal | FontConfigFileGfonts | FontConfigFileLocalBitmap;

export interface FontConfigFileLocal {
    type: "local" | "LOCAL";
    path: string;
}

export interface FontConfigFileGfonts {
    type: "gfonts" | "GFONTS";
    family: string;
    weight?: number;
    italic?: boolean;
}

export interface FontConfigFileLocalBitmap {
    type: "local_bitmap" | "LOCAL_BITMAP";
    path: string;
}
