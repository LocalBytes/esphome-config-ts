/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: display.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/display
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes) 2023
 **/
import type { ID, Pin } from "../base.js";
import { BaseComponent } from "../base.js";

export abstract class Display extends BaseComponent {
    componentName: string = "display";
}

export interface DisplayBASIC_DISPLAY_SCHEMA {
    lambda?: any;
}

export interface DisplayFULL_DISPLAY_SCHEMA extends DisplayBASIC_DISPLAY_SCHEMA {
    rotation?: any;
    pages?: DisplayFULL_DISPLAY_SCHEMAPages[];
    on_page_change?: object[];
    auto_clear_enabled?: boolean;
}

export interface DisplayFULL_DISPLAY_SCHEMAPages {
    id?: ID;
    lambda: string;
}
