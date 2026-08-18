/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: shutdown.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/shutdown
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes)
 **/
import { type ID, type Pin, EsphomeComponent } from "@/lib/base.js";
import type { Button_BUTTON_SCHEMA } from "./button.js";
import type { CoreCOMPONENT_SCHEMA } from "./esphome.js";
import type { Switch_SWITCH_SCHEMA } from "./switch.js";

export class ShutdownButton extends EsphomeComponent<ShutdownButtonConfig> {
    componentName: string = "shutdown.button";
}

export type ShutdownButtonConfig = {
        entity_category?: any;
        icon?: any;
        id?: ID;
    } & Button_BUTTON_SCHEMA & CoreCOMPONENT_SCHEMA;

export class ShutdownSwitch extends EsphomeComponent<ShutdownSwitchConfig> {
    componentName: string = "shutdown.switch";
}

export type ShutdownSwitchConfig = {
        entity_category?: any;
        icon?: any;
        id?: ID;
    } & Switch_SWITCH_SCHEMA & CoreCOMPONENT_SCHEMA;
