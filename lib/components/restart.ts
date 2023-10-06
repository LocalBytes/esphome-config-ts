/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: restart.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/restart
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes) 2023
 **/
import { ID, Pin, BaseComponent } from "../base.js";
import { ButtonBUTTON_SCHEMA } from "./button.js";
import { CoreCOMPONENT_SCHEMA } from "./esphome.js";
import { Switch_SWITCH_SCHEMA } from "./switch.js";

export class RestartButton extends BaseComponent<RestartButtonConfig> {
    componentName: string = "restart.button";
}

export interface RestartButtonConfig extends ButtonBUTTON_SCHEMA, CoreCOMPONENT_SCHEMA {
    id?: ID;
    entity_category?: any;
    device_class?: any;
}

export class RestartSwitch extends BaseComponent<RestartSwitchConfig> {
    componentName: string = "restart.switch";
}

export interface RestartSwitchConfig extends Switch_SWITCH_SCHEMA, CoreCOMPONENT_SCHEMA {
    restore_mode?: RestartSwitchConfigRestoreMode;
    id?: ID;
    entity_category?: any;
    icon?: any;
}

export type RestartSwitchConfigRestoreMode = 'RESTORE_DEFAULT_OFF' | 'RESTORE_DEFAULT_ON' | 'ALWAYS_OFF' | 'ALWAYS_ON' | 'RESTORE_INVERTED_DEFAULT_OFF' | 'RESTORE_INVERTED_DEFAULT_ON' | 'DISABLED';
