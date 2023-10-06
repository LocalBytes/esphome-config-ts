/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: animation.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/animation
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes) 2023
 **/
import { ID, Pin, BaseComponent } from "../base.js";

export class Animation extends BaseComponent<AnimationConfig> {
    componentName: string = "animation";
}

export interface AnimationConfig {
    id: string;
    file: string;
    resize?: any;
    type?: AnimationConfigType;
    use_transparency?: boolean;
    loop?: AnimationConfigLoop;
    raw_data_id?: ID;
}

export type AnimationConfigType = 'BINARY' | 'TRANSPARENT_BINARY' | 'GRAYSCALE' | 'RGB565' | 'RGB24' | 'RGBA';

export interface AnimationConfigLoop {
    start_frame?: number;
    end_frame?: number;
    repeat?: number;
}
