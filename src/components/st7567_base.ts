/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: st7567_base.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/st7567_base
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes)
 **/
import { type ID, type Pin, EsphomeComponent } from "@/lib/base.js";
import type { DisplayFULL_DISPLAY_SCHEMA } from "./display.js";
import type { CoreCOMPONENT_SCHEMA } from "./esphome.js";

export abstract class St7567Base extends EsphomeComponent {
    componentName: string = "st7567_base";
}

export interface St7567BaseST7567_SCHEMATransform {
    mirror_x?: boolean;
    mirror_y?: boolean;
}

export type St7567BaseST7567_SCHEMA = {
        invert_colors?: boolean;
        reset_pin?: Pin;
        transform?: St7567BaseST7567_SCHEMATransform;
        update_interval?: any;
    } & DisplayFULL_DISPLAY_SCHEMA & CoreCOMPONENT_SCHEMA;
