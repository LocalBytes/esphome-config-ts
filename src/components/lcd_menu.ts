/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: lcd_menu.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/lcd_menu
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes)
 **/
import { type ID, type Pin, EsphomeComponent } from "@/lib/base.js";
import type { DisplayMenuBaseDISPLAY_MENU_BASE_SCHEMA } from "./display_menu_base.js";

export class LcdMenu extends EsphomeComponent<LcdMenuConfig> {
    componentName: string = "lcd_menu";
}

export interface LcdMenuConfig extends DisplayMenuBaseDISPLAY_MENU_BASE_SCHEMA {
    id?: ID;
    display_id?: ID;
    mark_selected?: number;
    mark_editing?: number;
    mark_submenu?: number;
    mark_back?: number;
}
