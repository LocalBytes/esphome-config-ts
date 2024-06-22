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

export interface DisplayMenuBaseMENU_ITEM_COMMON_SCHEMA {
    text?: string;
}

export type DisplayMenuBaseDISPLAY_MENU_BASE_SCHEMAMode = 'rotary' | 'joystick';
export type DisplayMenuBaseDISPLAY_MENU_BASE_SCHEMA = {
        active?: boolean;
        root_item_id?: ID;
        mode?: DisplayMenuBaseDISPLAY_MENU_BASE_SCHEMAMode;
        on_enter?: object[];
        on_leave?: object[];
    } & CoreCOMPONENT_SCHEMA & DisplayMenuBaseMENU_TYPES;

export interface DisplayMenuBaseMENU_ACTION_SCHEMA {
    id?: ID;
}

export type DisplayMenuBaseMENU_TYPESItems = DisplayMenuBaseMENU_TYPESItemsLabel | DisplayMenuBaseMENU_TYPESItemsBack | DisplayMenuBaseMENU_TYPESItemsMenu | DisplayMenuBaseMENU_TYPESItemsSelect | DisplayMenuBaseMENU_TYPESItemsNumber | DisplayMenuBaseMENU_TYPESItemsSwitch | DisplayMenuBaseMENU_TYPESItemsCommand | DisplayMenuBaseMENU_TYPESItemsCustom;

export interface DisplayMenuBaseMENU_TYPESItemsLabel {
    type: "label" | "LABEL";
    text?: string;
    id?: ID;
}

export interface DisplayMenuBaseMENU_TYPESItemsBack {
    type: "back" | "BACK";
    text?: string;
    id?: ID;
}

export interface DisplayMenuBaseMENU_TYPESItemsMenu {
    type: "menu" | "MENU";
    text?: string;
    on_enter?: object[];
    on_leave?: object[];
    id?: ID;
}

export interface DisplayMenuBaseMENU_TYPESItemsSelect {
    type: "select" | "SELECT";
    text?: string;
    on_enter?: object[];
    on_leave?: object[];
    on_value?: object[];
    id?: ID;
    select: ID;
    immediate_edit?: boolean;
    value_lambda?: any;
}

export interface DisplayMenuBaseMENU_TYPESItemsNumber {
    type: "number" | "NUMBER";
    text?: string;
    on_enter?: object[];
    on_leave?: object[];
    on_value?: object[];
    id?: ID;
    number: ID;
    immediate_edit?: boolean;
    format?: string;
    value_lambda?: any;
}

export interface DisplayMenuBaseMENU_TYPESItemsSwitch {
    type: "switch" | "SWITCH";
    text?: string;
    on_enter?: object[];
    on_leave?: object[];
    on_value?: object[];
    id?: ID;
    switch: ID;
    immediate_edit?: boolean;
    on_text?: string;
    off_text?: string;
    value_lambda?: any;
}

export interface DisplayMenuBaseMENU_TYPESItemsCommand {
    type: "command" | "COMMAND";
    text?: string;
    on_value?: object[];
    id?: ID;
}

export interface DisplayMenuBaseMENU_TYPESItemsCustom {
    type: "custom" | "CUSTOM";
    text?: string;
    on_enter?: object[];
    on_leave?: object[];
    on_value?: object[];
    id?: ID;
    immediate_edit?: boolean;
    value_lambda?: any;
    on_next?: object[];
    on_prev?: object[];
}

export interface DisplayMenuBaseMENU_TYPES {
    items: DisplayMenuBaseMENU_TYPESItems[];
}
