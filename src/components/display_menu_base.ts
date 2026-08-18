/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: display_menu_base.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/display_menu_base
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes)
 **/
import { type ID, type Pin, EsphomeComponent } from "@/lib/base.js";
import type { CoreCOMPONENTSCHEMA } from "./esphome.js";

export abstract class DisplayMenuBase extends EsphomeComponent {
    componentName: string = "display_menu_base";
}

export type DisplayMenuBaseDISPLAYMENUBASESCHEMAMode = 'rotary' | 'joystick';
export type DisplayMenuBaseDISPLAYMENUBASESCHEMA = {
        active?: boolean;
        mode?: DisplayMenuBaseDISPLAYMENUBASESCHEMAMode;
        on_enter?: object[];
        on_leave?: object[];
        root_item_id?: ID;
    } & CoreCOMPONENTSCHEMA & DisplayMenuBaseMENUTYPES;

export interface DisplayMenuBaseMENUACTIONSCHEMA {
    id?: ID;
}

export interface DisplayMenuBaseMENUITEMCOMMONSCHEMA {
    text?: string;
}

export interface DisplayMenuBaseMENUITEMENTERLEAVESCHEMA extends DisplayMenuBaseMENUITEMCOMMONSCHEMA {
    on_enter?: object[];
    on_leave?: object[];
}

export interface DisplayMenuBaseMENUITEMENTERLEAVEVALUESCHEMA extends DisplayMenuBaseMENUITEMENTERLEAVESCHEMA {
    on_value?: object[];
}

export type DisplayMenuBaseMENUTYPESItems = DisplayMenuBaseMENUTYPESItemsBack | DisplayMenuBaseMENUTYPESItemsCommand | DisplayMenuBaseMENUTYPESItemsCustom | DisplayMenuBaseMENUTYPESItemsLabel | DisplayMenuBaseMENUTYPESItemsMenu | DisplayMenuBaseMENUTYPESItemsNumber | DisplayMenuBaseMENUTYPESItemsSelect | DisplayMenuBaseMENUTYPESItemsSwitch;

export interface DisplayMenuBaseMENUTYPESItemsBack {
    type: "back" | "BACK";
    id?: ID;
}

export interface DisplayMenuBaseMENUTYPESItemsCommand {
    type: "command" | "COMMAND";
    on_value?: object[];
}

export interface DisplayMenuBaseMENUTYPESItemsCustom {
    type: "custom" | "CUSTOM";
    id?: ID;
    immediate_edit?: boolean;
    on_next?: object[];
    on_prev?: object[];
    value_lambda?: any;
}

export interface DisplayMenuBaseMENUTYPESItemsLabel {
    type: "label" | "LABEL";
    id?: ID;
}

export interface DisplayMenuBaseMENUTYPESItemsMenu {
    type: "menu" | "MENU";
    id?: ID;
}

export interface DisplayMenuBaseMENUTYPESItemsNumber {
    type: "number" | "NUMBER";
    format?: string;
    id?: ID;
    immediate_edit?: boolean;
    number: ID;
    value_lambda?: any;
}

export interface DisplayMenuBaseMENUTYPESItemsSelect {
    type: "select" | "SELECT";
    id?: ID;
    immediate_edit?: boolean;
    select: ID;
    value_lambda?: any;
}

export interface DisplayMenuBaseMENUTYPESItemsSwitch {
    type: "switch" | "SWITCH";
    id?: ID;
    immediate_edit?: boolean;
    off_text?: string;
    on_text?: string;
    switch: ID;
    value_lambda?: any;
}

export interface DisplayMenuBaseMENUTYPES {
    items: DisplayMenuBaseMENUTYPESItems[];
}
