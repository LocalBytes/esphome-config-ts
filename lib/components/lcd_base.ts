/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: lcd_base.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/lcd_base
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes) 2023
 **/
import type { ID, Pin } from "../base.js";
import { BaseComponent } from "../base.js";
import type { DisplayBASIC_DISPLAY_SCHEMA } from "./display.js";
import type { CoreCOMPONENT_SCHEMA } from "./esphome.js";

export abstract class LcdBase extends BaseComponent {
    componentName: string = "lcd_base";
}

export interface LcdBaseLCD_SCHEMA extends DisplayBASIC_DISPLAY_SCHEMA, CoreCOMPONENT_SCHEMA {
    dimensions: string;
    user_characters?: LcdBaseLCD_SCHEMAUserCharacters[];
    update_interval?: any;
}

export interface LcdBaseLCD_SCHEMAUserCharacters {
    position: number;
    data: number[];
}
