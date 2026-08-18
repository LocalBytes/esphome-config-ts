/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: online_image.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/online_image
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes)
 **/
import { type ID, type Pin, EsphomeComponent } from "@/lib/base.js";
import type { CoreCOMPONENTSCHEMA } from "./esphome.js";

export class OnlineImage extends EsphomeComponent<OnlineImageConfig> {
    componentName: string = "online_image";
}

export type OnlineImageConfigByteOrder = 'BIG_ENDIAN' | 'LITTLE_ENDIAN';
export type OnlineImageConfigFormat = 'BMP' | 'JPEG' | 'PNG' | 'JPG';

export interface OnlineImageConfigRequestHeaders {
    string: string;
}

export interface OnlineImageConfig extends CoreCOMPONENTSCHEMA {
    buffer_size?: number;
    byte_order?: OnlineImageConfigByteOrder;
    format: OnlineImageConfigFormat;
    http_request_id?: ID;
    id: string;
    on_download_finished?: object[];
    on_error?: object[];
    placeholder?: ID;
    request_headers?: OnlineImageConfigRequestHeaders;
    resize?: any;
    transparency?: any;
    type: string;
    update_interval?: any;
    url: string;
}
