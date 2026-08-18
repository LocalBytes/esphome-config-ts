/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: graphical_display_menu.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/graphical_display_menu
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes)
 **/
import { type ID, type Pin, EsphomeComponent } from "@/lib/base.js";
import type { DisplayMenuBaseDISPLAYMENUBASESCHEMA } from "./display_menu_base.js";

export class GraphicalDisplayMenu extends EsphomeComponent<GraphicalDisplayMenuConfig> {
    componentName: string = "graphical_display_menu";
}

export interface GraphicalDisplayMenuConfig extends DisplayMenuBaseDISPLAYMENUBASESCHEMA {
    background_color?: ID;
    display?: ID;
    font: ID;
    foreground_color?: ID;
    id?: ID;
    menu_item_value?: string;
    on_redraw?: object[];
}
