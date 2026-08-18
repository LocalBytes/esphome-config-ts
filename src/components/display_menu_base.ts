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
import type { CoreCOMPONENT_SCHEMA } from "./esphome.js";

export abstract class DisplayMenuBase extends EsphomeComponent {
    componentName: string = "display_menu_base";
}

export type DisplayMenuBaseDISPLAY_MENU_BASE_SCHEMAMode = 'rotary' | 'joystick';
export type DisplayMenuBaseDISPLAY_MENU_BASE_SCHEMA = {
        active?: boolean;
        mode?: DisplayMenuBaseDISPLAY_MENU_BASE_SCHEMAMode;
        on_enter?: object[];
        on_leave?: object[];
        root_item_id?: ID;
    } & CoreCOMPONENT_SCHEMA & DisplayMenuBaseMENU_TYPES;

export interface DisplayMenuBaseMENU_ACTION_SCHEMA {
    id?: ID;
}

export interface DisplayMenuBaseMENU_ITEM_COMMON_SCHEMA {
    text?: string;
}

export interface DisplayMenuBaseMENU_ITEM_ENTER_LEAVE_SCHEMA extends DisplayMenuBaseMENU_ITEM_COMMON_SCHEMA {
    on_enter?: object[];
    on_leave?: object[];
}

export interface DisplayMenuBaseMENU_ITEM_ENTER_LEAVE_VALUE_SCHEMA extends DisplayMenuBaseMENU_ITEM_ENTER_LEAVE_SCHEMA {
    on_value?: object[];
}

export type DisplayMenuBaseMENU_TYPESItems = DisplayMenuBaseMENU_TYPESItemsBack | DisplayMenuBaseMENU_TYPESItemsCommand | DisplayMenuBaseMENU_TYPESItemsCustom | DisplayMenuBaseMENU_TYPESItemsLabel | DisplayMenuBaseMENU_TYPESItemsMenu | DisplayMenuBaseMENU_TYPESItemsNumber | DisplayMenuBaseMENU_TYPESItemsSelect | DisplayMenuBaseMENU_TYPESItemsSwitch;

export interface DisplayMenuBaseMENU_TYPESItemsBack {
    type: "back" | "BACK";
    id?: ID;
}

export interface DisplayMenuBaseMENU_TYPESItemsCommand {
    type: "command" | "COMMAND";
    on_value?: object[];
}

export interface DisplayMenuBaseMENU_TYPESItemsCustom {
    type: "custom" | "CUSTOM";
    id?: ID;
    immediate_edit?: boolean;
    on_next?: object[];
    on_prev?: object[];
    value_lambda?: any;
}

export interface DisplayMenuBaseMENU_TYPESItemsLabel {
    type: "label" | "LABEL";
    id?: ID;
}

export interface DisplayMenuBaseMENU_TYPESItemsMenu {
    type: "menu" | "MENU";
    id?: ID;
}

export interface DisplayMenuBaseMENU_TYPESItemsNumber {
    type: "number" | "NUMBER";
    format?: string;
    id?: ID;
    immediate_edit?: boolean;
    number: ID;
    value_lambda?: any;
}

export interface DisplayMenuBaseMENU_TYPESItemsSelect {
    type: "select" | "SELECT";
    id?: ID;
    immediate_edit?: boolean;
    select: ID;
    value_lambda?: any;
}

export interface DisplayMenuBaseMENU_TYPESItemsSwitch {
    type: "switch" | "SWITCH";
    id?: ID;
    immediate_edit?: boolean;
    off_text?: string;
    on_text?: string;
    switch: ID;
    value_lambda?: any;
}

export interface DisplayMenuBaseMENU_TYPES {
    items: DisplayMenuBaseMENU_TYPESItems[];
}
