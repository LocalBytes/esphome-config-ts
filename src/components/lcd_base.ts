/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: lcd_base.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/lcd_base
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes)
 **/
import { type ID, type Pin, EsphomeComponent } from "@/lib/base.js";
import type { DisplayBASIC_DISPLAY_SCHEMA } from "./display.js";
import type { CoreCOMPONENT_SCHEMA } from "./esphome.js";

export abstract class LcdBase extends EsphomeComponent {
    componentName: string = "lcd_base";
}

export interface LcdBaseLCD_SCHEMAUserCharacters {
    data: number[];
    position: number;
}

export type LcdBaseLCD_SCHEMA = {
        dimensions: string;
        update_interval?: any;
        user_characters?: LcdBaseLCD_SCHEMAUserCharacters[];
    } & DisplayBASIC_DISPLAY_SCHEMA & CoreCOMPONENT_SCHEMA;
