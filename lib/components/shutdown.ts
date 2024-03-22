/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: shutdown.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/shutdown
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes) 2023
 **/
import type { ID, Pin } from "../base.js";
import { BaseComponent } from "../base.js";
import type { ButtonBUTTON_SCHEMA } from "./button.js";
import type { CoreCOMPONENT_SCHEMA } from "./esphome.js";
import type { Switch_SWITCH_SCHEMA } from "./switch.js";

export class ShutdownButton extends BaseComponent<ShutdownButtonConfig> {
    componentName: string = "shutdown.button";
}

export interface ShutdownButtonConfig extends ButtonBUTTON_SCHEMA, CoreCOMPONENT_SCHEMA {
    id?: ID;
    icon?: any;
    entity_category?: any;
}

export class ShutdownSwitch extends BaseComponent<ShutdownSwitchConfig> {
    componentName: string = "shutdown.switch";
}

export interface ShutdownSwitchConfig extends Switch_SWITCH_SCHEMA, CoreCOMPONENT_SCHEMA {
    restore_mode?: ShutdownSwitchConfigRestoreMode;
    id?: ID;
    entity_category?: any;
    icon?: any;
}

export type ShutdownSwitchConfigRestoreMode = 'RESTORE_DEFAULT_OFF' | 'RESTORE_DEFAULT_ON' | 'ALWAYS_OFF' | 'ALWAYS_ON' | 'RESTORE_INVERTED_DEFAULT_OFF' | 'RESTORE_INVERTED_DEFAULT_ON' | 'DISABLED';
