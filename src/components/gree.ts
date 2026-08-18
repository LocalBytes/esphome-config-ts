/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: gree.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/gree
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes)
 **/
import { type ID, type Pin, EsphomeComponent } from "@/lib/base.js";
import type { ClimateCLIMATESCHEMA } from "./climate.js";
import type { CoreCOMPONENTSCHEMA } from "./esphome.js";
import type { SwitchSWITCHSCHEMA } from "./switch.js";

export class GreeClimate extends EsphomeComponent<GreeClimateConfig> {
    componentName: string = "gree.climate";
}

export type GreeClimateConfigModel = 'generic' | 'yan' | 'yaa' | 'yac' | 'yac1fb9' | 'yx1ff' | 'yag';
export type GreeClimateConfig = {
        humidity_sensor?: ID;
        id?: ID;
        model: GreeClimateConfigModel;
        receiver_id?: ID;
        sensor?: ID;
        supports_cool?: boolean;
        supports_heat?: boolean;
        transmitter_id?: ID;
    } & ClimateCLIMATESCHEMA & CoreCOMPONENTSCHEMA;

export class GreeSwitch extends EsphomeComponent<GreeSwitchConfig> {
    componentName: string = "gree.switch";
}

export interface GreeSwitchConfigHealth extends SwitchSWITCHSCHEMA {
    device_class?: any;
    entity_category?: any;
    icon?: any;
    id?: ID;
    restore_mode?: any;
}

export interface GreeSwitchConfigLight extends SwitchSWITCHSCHEMA {
    device_class?: any;
    entity_category?: any;
    icon?: any;
    id?: ID;
    restore_mode?: any;
}

export interface GreeSwitchConfigTurbo extends SwitchSWITCHSCHEMA {
    device_class?: any;
    entity_category?: any;
    icon?: any;
    id?: ID;
    restore_mode?: any;
}

export interface GreeSwitchConfigXfan extends SwitchSWITCHSCHEMA {
    device_class?: any;
    entity_category?: any;
    icon?: any;
    id?: ID;
    restore_mode?: any;
}

export interface GreeSwitchConfig {
    gree_id: ID;
    health?: GreeSwitchConfigHealth;
    light?: GreeSwitchConfigLight;
    turbo?: GreeSwitchConfigTurbo;
    xfan?: GreeSwitchConfigXfan;
}
