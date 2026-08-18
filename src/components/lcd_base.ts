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
import type { DisplayBASICDISPLAYSCHEMA } from "./display.js";
import type { CoreCOMPONENTSCHEMA } from "./esphome.js";

export abstract class LcdBase extends EsphomeComponent {
    componentName: string = "lcd_base";
}

export interface LcdBaseLCDSCHEMAUserCharacters {
    data: number[];
    position: number;
}

export type LcdBaseLCDSCHEMA = {
        dimensions: string;
        update_interval?: any;
        user_characters?: LcdBaseLCDSCHEMAUserCharacters[];
    } & DisplayBASICDISPLAYSCHEMA & CoreCOMPONENTSCHEMA;
