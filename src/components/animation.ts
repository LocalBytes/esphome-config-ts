/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: animation.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/animation
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes)
 **/
import { type ID, type Pin, EsphomeComponent } from "@/lib/base.js";

export class Animation extends EsphomeComponent<AnimationConfig> {
    componentName: string = "animation";
}

export type AnimationConfigByteOrder = 'BIG_ENDIAN' | 'LITTLE_ENDIAN';
export type AnimationConfigDither = 'NONE' | 'FLOYDSTEINBERG';
export type AnimationConfigFile = AnimationConfigFileLocal | AnimationConfigFileMdi | AnimationConfigFileMdil | AnimationConfigFileMemory | AnimationConfigFileWeb;

export interface AnimationConfigFileLocal {
    source: "local" | "LOCAL";
    path: string;
}

export interface AnimationConfigFileMdi {
    source: "mdi" | "MDI";
    icon: string;
}

export interface AnimationConfigFileMdil {
    source: "mdil" | "MDIL";
    icon: string;
}

export interface AnimationConfigFileMemory {
    source: "memory" | "MEMORY";
    icon: string;
}

export interface AnimationConfigFileWeb {
    source: "web" | "WEB";
    url: string;
}

export interface AnimationConfigLoop {
    end_frame?: number;
    repeat?: number;
    start_frame?: number;
}

export interface AnimationConfig {
    byte_order?: AnimationConfigByteOrder;
    dither?: AnimationConfigDither;
    file: AnimationConfigFile;
    id: string;
    invert_alpha?: boolean;
    loop?: AnimationConfigLoop;
    raw_data_id?: ID;
    resize?: any;
    transparency?: any;
    type: string;
}
