/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: ssd1327_base.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/ssd1327_base
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes)
 **/
import { type ID, type Pin, EsphomeComponent } from "@/lib/base.js";
import type { DisplayFULLDISPLAYSCHEMA } from "./display.js";
import type { CoreCOMPONENTSCHEMA } from "./esphome.js";

export abstract class Ssd1327Base extends EsphomeComponent {
    componentName: string = "ssd1327_base";
}

export type Ssd1327BaseSSD1327SCHEMAModel = 'SSD1327_128X128';
export type Ssd1327BaseSSD1327SCHEMA = {
        brightness?: any;
        model: Ssd1327BaseSSD1327SCHEMAModel;
        reset_pin?: Pin;
        update_interval?: any;
    } & DisplayFULLDISPLAYSCHEMA & CoreCOMPONENTSCHEMA;
