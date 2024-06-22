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
import { type ID, type Pin, BaseComponent } from "@/lib/base.js";
import type { ButtonBUTTON_SCHEMA } from "./button.js";
import type { CoreCOMPONENT_SCHEMA } from "./esphome.js";
import type { Switch_SWITCH_SCHEMA } from "./switch.js";

export class ShutdownButton extends BaseComponent<ShutdownButtonConfig> {
    componentName: string = "shutdown.button";
}

export type ShutdownButtonConfig = {
        id?: ID;
        icon?: any;
        entity_category?: any;
    } & ButtonBUTTON_SCHEMA & CoreCOMPONENT_SCHEMA;

export class ShutdownSwitch extends BaseComponent<ShutdownSwitchConfig> {
    componentName: string = "shutdown.switch";
}

export type ShutdownSwitchConfigRestoreMode = 'RESTORE_DEFAULT_OFF' | 'RESTORE_DEFAULT_ON' | 'ALWAYS_OFF' | 'ALWAYS_ON' | 'RESTORE_INVERTED_DEFAULT_OFF' | 'RESTORE_INVERTED_DEFAULT_ON' | 'DISABLED';
export type ShutdownSwitchConfig = {
        restore_mode?: ShutdownSwitchConfigRestoreMode;
        id?: ID;
        entity_category?: any;
        icon?: any;
    } & Switch_SWITCH_SCHEMA & CoreCOMPONENT_SCHEMA;
