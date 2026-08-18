/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: image.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/image
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes)
 **/
import { type ID, type Pin, EsphomeComponent } from "@/lib/base.js";

export class Image extends EsphomeComponent<ImageConfig> {
    componentName: string = "image";
}

export type ImageConfigByteOrder = 'BIG_ENDIAN' | 'LITTLE_ENDIAN';
export type ImageConfigDither = 'NONE' | 'FLOYDSTEINBERG';
export type ImageConfigFile = ImageTYPED_FILE_SCHEMA;

export interface ImageConfig {
    byte_order?: ImageConfigByteOrder;
    dither?: ImageConfigDither;
    file: ImageConfigFile;
    id: string;
    invert_alpha?: boolean;
    raw_data_id?: ID;
    resize?: any;
    transparency?: any;
    type: string;
}

export type ImageTYPED_FILE_SCHEMA = ImageTYPED_FILE_SCHEMALocal | ImageTYPED_FILE_SCHEMAMdi | ImageTYPED_FILE_SCHEMAMdil | ImageTYPED_FILE_SCHEMAMemory | ImageTYPED_FILE_SCHEMAWeb;

export interface ImageTYPED_FILE_SCHEMALocal {
    source: "local" | "LOCAL";
    path: string;
}

export interface ImageTYPED_FILE_SCHEMAMdi {
    source: "mdi" | "MDI";
    icon: string;
}

export interface ImageTYPED_FILE_SCHEMAMdil {
    source: "mdil" | "MDIL";
    icon: string;
}

export interface ImageTYPED_FILE_SCHEMAMemory {
    source: "memory" | "MEMORY";
    icon: string;
}

export interface ImageTYPED_FILE_SCHEMAWeb {
    source: "web" | "WEB";
    url: string;
}
