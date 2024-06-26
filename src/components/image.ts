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

export type ImageConfigFile = {};
export type ImageConfigType = 'BINARY' | 'TRANSPARENT_BINARY' | 'GRAYSCALE' | 'RGB565' | 'RGB24' | 'RGBA';
export type ImageConfigDither = 'NONE' | 'FLOYDSTEINBERG';

export interface ImageConfig {
    id: string;
    file: ImageConfigFile;
    resize?: any;
    type?: ImageConfigType;
    use_transparency?: boolean;
    dither?: ImageConfigDither;
    raw_data_id?: ID;
}
