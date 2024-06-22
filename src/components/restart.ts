/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: restart.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/restart
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes)
 **/
import { type ID, type Pin, EsphomeComponent } from "@/lib/base.js";
import type { ButtonBUTTON_SCHEMA } from "./button.js";
import type { CoreCOMPONENT_SCHEMA } from "./esphome.js";
import type { Switch_SWITCH_SCHEMA } from "./switch.js";

export class RestartButton extends EsphomeComponent<RestartButtonConfig> {
    componentName: string = "restart.button";
}

export type RestartButtonConfig = {
        id?: ID;
        entity_category?: any;
        device_class?: any;
    } & ButtonBUTTON_SCHEMA & CoreCOMPONENT_SCHEMA;

export class RestartSwitch extends EsphomeComponent<RestartSwitchConfig> {
    componentName: string = "restart.switch";
}

export type RestartSwitchConfigRestoreMode = 'RESTORE_DEFAULT_OFF' | 'RESTORE_DEFAULT_ON' | 'ALWAYS_OFF' | 'ALWAYS_ON' | 'RESTORE_INVERTED_DEFAULT_OFF' | 'RESTORE_INVERTED_DEFAULT_ON' | 'DISABLED';
export type RestartSwitchConfig = {
        restore_mode?: RestartSwitchConfigRestoreMode;
        id?: ID;
        entity_category?: any;
        icon?: any;
    } & Switch_SWITCH_SCHEMA & CoreCOMPONENT_SCHEMA;
