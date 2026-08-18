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
export type ImageConfigFile = ImageTYPEDFILESCHEMA;

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

export type ImageTYPEDFILESCHEMA = ImageTYPEDFILESCHEMALocal | ImageTYPEDFILESCHEMAMdi | ImageTYPEDFILESCHEMAMdil | ImageTYPEDFILESCHEMAMemory | ImageTYPEDFILESCHEMAWeb;

export interface ImageTYPEDFILESCHEMALocal {
    source: "local" | "LOCAL";
    path: string;
}

export interface ImageTYPEDFILESCHEMAMdi {
    source: "mdi" | "MDI";
    icon: string;
}

export interface ImageTYPEDFILESCHEMAMdil {
    source: "mdil" | "MDIL";
    icon: string;
}

export interface ImageTYPEDFILESCHEMAMemory {
    source: "memory" | "MEMORY";
    icon: string;
}

export interface ImageTYPEDFILESCHEMAWeb {
    source: "web" | "WEB";
    url: string;
}
