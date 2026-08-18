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
import { type ID, type Pin, EsphomeComponent } from "@/lib/base.js";
import type { CoreENTITYBASESCHEMA, CoreMQTTCOMMANDCOMPONENTSCHEMA, CoreCOMPONENTSCHEMA } from "./esphome.js";
import type { BinarySensorBINARYSENSORSCHEMA } from "./binary_sensor.js";

export abstract class Switch extends EsphomeComponent {
    componentName: string = "switch";
}

export interface SwitchSWITCHACTIONSCHEMA {
    id: ID;
}

export interface SwitchSWITCHCONTROLACTIONSCHEMA {
    id: ID;
    state: boolean;
}

export type SwitchSWITCHSCHEMADeviceClass = '' | 'outlet' | 'switch';
export type SwitchSWITCHSCHEMARestoreMode = 'RESTORE_DEFAULT_OFF' | 'RESTORE_DEFAULT_ON' | 'ALWAYS_OFF' | 'ALWAYS_ON' | 'RESTORE_INVERTED_DEFAULT_OFF' | 'RESTORE_INVERTED_DEFAULT_ON' | 'DISABLED';

export interface SwitchSWITCHSCHEMAWebServer {
    sorting_group_id?: ID;
    sorting_weight?: any;
    web_server_id?: ID;
}

export type SwitchSWITCHSCHEMA = {
        device_class?: SwitchSWITCHSCHEMADeviceClass;
        inverted?: boolean;
        mqtt_id?: any;
        on_state?: object[];
        on_turn_off?: object[];
        on_turn_on?: object[];
        restore_mode?: SwitchSWITCHSCHEMARestoreMode;
        web_server?: SwitchSWITCHSCHEMAWebServer;
        zigbee_id?: ID;
        zigbee_switch?: any;
        id?: any;
        name?: any;
        icon?: any;
        internal?: any;
        disabled_by_default?: any;
        entity_category?: any;
    } & CoreENTITYBASESCHEMA & CoreMQTTCOMMANDCOMPONENTSCHEMA;

export class SwitchBinarySensor extends EsphomeComponent<SwitchBinarySensorConfig> {
    componentName: string = "switch.binary_sensor";
}

export type SwitchBinarySensorConfig = {
        id?: any;
        source_id: ID;
    } & BinarySensorBINARYSENSORSCHEMA & CoreCOMPONENTSCHEMA;
