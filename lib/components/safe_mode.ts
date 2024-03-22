/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: safe_mode.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/safe_mode
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes) 2023
 **/
import type { ID, Pin } from "../base.js";
import { BaseComponent } from "../base.js";
import type { ButtonBUTTON_SCHEMA } from "./button.js";
import type { CoreCOMPONENT_SCHEMA } from "./esphome.js";
import type { Switch_SWITCH_SCHEMA } from "./switch.js";

export class SafeModeButton extends BaseComponent<SafeModeButtonConfig> {
    componentName: string = "safe_mode.button";
}

export interface SafeModeButtonConfig extends ButtonBUTTON_SCHEMA, CoreCOMPONENT_SCHEMA {
    id?: ID;
    icon?: any;
    entity_category?: any;
    device_class?: any;
    ota?: ID;
}

export class SafeModeSwitch extends BaseComponent<SafeModeSwitchConfig> {
    componentName: string = "safe_mode.switch";
}

export interface SafeModeSwitchConfig extends Switch_SWITCH_SCHEMA, CoreCOMPONENT_SCHEMA {
    restore_mode?: SafeModeSwitchConfigRestoreMode;
    id?: ID;
    entity_category?: any;
    icon?: any;
    ota?: ID;
}

export type SafeModeSwitchConfigRestoreMode = 'RESTORE_DEFAULT_OFF' | 'RESTORE_DEFAULT_ON' | 'ALWAYS_OFF' | 'ALWAYS_ON' | 'RESTORE_INVERTED_DEFAULT_OFF' | 'RESTORE_INVERTED_DEFAULT_ON' | 'DISABLED';
