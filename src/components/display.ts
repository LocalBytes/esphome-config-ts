/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: display.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/display
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes)
 **/
import { type ID, type Pin, EsphomeComponent } from "@/lib/base.js";
import type { CoreCOMPONENT_SCHEMA } from "./esphome.js";

export abstract class Display extends EsphomeComponent {
    componentName: string = "display";
}

export interface DisplayBASIC_DISPLAY_SCHEMA extends CoreCOMPONENT_SCHEMA {
    lambda?: any;
    update_interval?: any;
}

export interface DisplayFULL_DISPLAY_SCHEMAPages {
    id?: ID;
    lambda: string;
}

export interface DisplayFULL_DISPLAY_SCHEMA extends DisplayBASIC_DISPLAY_SCHEMA {
    auto_clear_enabled?: any;
    on_page_change?: object[];
    pages?: DisplayFULL_DISPLAY_SCHEMAPages[];
    rotation?: any;
    show_test_card?: boolean;
}
