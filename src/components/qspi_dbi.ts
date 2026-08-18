/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: qspi_dbi.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/qspi_dbi
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes)
 **/
import { type ID, type Pin, EsphomeComponent } from "@/lib/base.js";
import type { DisplayFULL_DISPLAY_SCHEMA } from "./display.js";

export class QspiDbiDisplay extends EsphomeComponent<QspiDbiDisplayConfig> {
    componentName: string = "qspi_dbi.display";
}

export interface QspiDbiDisplayBASE_SCHEMADimensions {
    height: string;
    offset_height?: any;
    offset_width?: any;
    width: string;
}

export type QspiDbiDisplayBASE_SCHEMASpiMode = '0' | '1' | '2' | '3' | 'MODE0' | 'MODE1' | 'MODE2' | 'MODE3';

export interface QspiDbiDisplayBASE_SCHEMA extends DisplayFULL_DISPLAY_SCHEMA {
    brightness?: number;
    cs_pin?: Pin;
    data_rate?: any;
    dimensions: QspiDbiDisplayBASE_SCHEMADimensions;
    draw_from_origin?: boolean;
    enable_pin?: Pin;
    id?: ID;
    init_sequence?: any[];
    release_device?: boolean;
    reset_pin?: Pin;
    spi_id?: ID;
    spi_mode?: QspiDbiDisplayBASE_SCHEMASpiMode;
}

export type QspiDbiDisplayConfig = QspiDbiDisplayConfigAXS15231 | QspiDbiDisplayConfigCUSTOM | QspiDbiDisplayConfigJC3636W518 | QspiDbiDisplayConfigJC4832W535 | QspiDbiDisplayConfigRM67162 | QspiDbiDisplayConfigRM690B0;
export type QspiDbiDisplayConfigAXS15231ColorOrder = 'RGB' | 'BGR';

export interface QspiDbiDisplayConfigAXS15231Transform {
    mirror_x?: boolean;
    mirror_y?: boolean;
}

export interface QspiDbiDisplayConfigAXS15231 {
    model: "AXS15231" | "AXS15231";
    color_order?: QspiDbiDisplayConfigAXS15231ColorOrder;
    draw_rounding?: any;
    invert_colors?: boolean;
    transform?: QspiDbiDisplayConfigAXS15231Transform;
    update_interval?: any;
    auto_clear_enabled?: any;
    pages?: any;
    rotation?: any;
    lambda?: any;
}

export type QspiDbiDisplayConfigCUSTOMColorOrder = 'RGB' | 'BGR';

export interface QspiDbiDisplayConfigCUSTOMTransform {
    mirror_x?: boolean;
    mirror_y?: boolean;
    swap_xy?: boolean;
}

export interface QspiDbiDisplayConfigCUSTOM {
    model: "CUSTOM" | "CUSTOM";
    color_order?: QspiDbiDisplayConfigCUSTOMColorOrder;
    draw_rounding?: any;
    invert_colors?: boolean;
    transform?: QspiDbiDisplayConfigCUSTOMTransform;
    update_interval?: any;
    auto_clear_enabled?: any;
    pages?: any;
    rotation?: any;
    lambda?: any;
}

export type QspiDbiDisplayConfigJC3636W518ColorOrder = 'RGB' | 'BGR';

export interface QspiDbiDisplayConfigJC3636W518Transform {
    mirror_x?: boolean;
    mirror_y?: boolean;
    swap_xy?: boolean;
}

export interface QspiDbiDisplayConfigJC3636W518 {
    model: "JC3636W518" | "JC3636W518";
    color_order?: QspiDbiDisplayConfigJC3636W518ColorOrder;
    draw_rounding?: any;
    invert_colors?: boolean;
    transform?: QspiDbiDisplayConfigJC3636W518Transform;
    update_interval?: any;
    auto_clear_enabled?: any;
    pages?: any;
    rotation?: any;
    lambda?: any;
}

export type QspiDbiDisplayConfigJC4832W535ColorOrder = 'RGB' | 'BGR';

export interface QspiDbiDisplayConfigJC4832W535Transform {
    mirror_x?: boolean;
    mirror_y?: boolean;
}

export interface QspiDbiDisplayConfigJC4832W535 {
    model: "JC4832W535" | "JC4832W535";
    color_order?: QspiDbiDisplayConfigJC4832W535ColorOrder;
    draw_rounding?: any;
    invert_colors?: boolean;
    transform?: QspiDbiDisplayConfigJC4832W535Transform;
    update_interval?: any;
    auto_clear_enabled?: any;
    pages?: any;
    rotation?: any;
    lambda?: any;
}

export type QspiDbiDisplayConfigRM67162ColorOrder = 'RGB' | 'BGR';

export interface QspiDbiDisplayConfigRM67162Transform {
    mirror_x?: boolean;
    mirror_y?: boolean;
    swap_xy?: boolean;
}

export interface QspiDbiDisplayConfigRM67162 {
    model: "RM67162" | "RM67162";
    color_order?: QspiDbiDisplayConfigRM67162ColorOrder;
    draw_rounding?: any;
    invert_colors?: boolean;
    transform?: QspiDbiDisplayConfigRM67162Transform;
    update_interval?: any;
    auto_clear_enabled?: any;
    pages?: any;
    rotation?: any;
    lambda?: any;
}

export type QspiDbiDisplayConfigRM690B0ColorOrder = 'RGB' | 'BGR';

export interface QspiDbiDisplayConfigRM690B0Transform {
    mirror_x?: boolean;
    mirror_y?: boolean;
    swap_xy?: boolean;
}

export interface QspiDbiDisplayConfigRM690B0 {
    model: "RM690B0" | "RM690B0";
    color_order?: QspiDbiDisplayConfigRM690B0ColorOrder;
    draw_rounding?: any;
    invert_colors?: boolean;
    transform?: QspiDbiDisplayConfigRM690B0Transform;
    update_interval?: any;
    auto_clear_enabled?: any;
    pages?: any;
    rotation?: any;
    lambda?: any;
}
