/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: switch.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/switch
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes)
 **/
import { type ID, type Pin, BaseComponent } from "@/lib/base.js";
import type { CoreENTITY_BASE_SCHEMA, CoreMQTT_COMMAND_COMPONENT_SCHEMA } from "./esphome.js";

export abstract class Switch extends BaseComponent {
    componentName: string = "switch";
}

export type Switch_SWITCH_SCHEMADeviceClass = '' | 'outlet' | 'switch';
export type Switch_SWITCH_SCHEMA = {
        mqtt_id?: any;
        inverted?: boolean;
        on_turn_on?: object[];
        on_turn_off?: object[];
        device_class?: Switch_SWITCH_SCHEMADeviceClass;
    } & CoreENTITY_BASE_SCHEMA & CoreMQTT_COMMAND_COMPONENT_SCHEMA;
export type SwitchSWITCH_SCHEMARestoreMode = 'RESTORE_DEFAULT_OFF' | 'RESTORE_DEFAULT_ON' | 'ALWAYS_OFF' | 'ALWAYS_ON' | 'RESTORE_INVERTED_DEFAULT_OFF' | 'RESTORE_INVERTED_DEFAULT_ON' | 'DISABLED';

export interface SwitchSWITCH_SCHEMA extends Switch_SWITCH_SCHEMA {
    restore_mode?: SwitchSWITCH_SCHEMARestoreMode;
}

export interface SwitchSWITCH_ACTION_SCHEMA {
    id: ID;
}
