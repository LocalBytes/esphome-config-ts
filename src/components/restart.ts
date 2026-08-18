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
import type { ButtonBUTTONSCHEMA } from "./button.js";
import type { CoreCOMPONENTSCHEMA } from "./esphome.js";
import type { SwitchSWITCHSCHEMA } from "./switch.js";

export class RestartButton extends EsphomeComponent<RestartButtonConfig> {
    componentName: string = "restart.button";
}

export type RestartButtonConfig = {
        device_class?: any;
        entity_category?: any;
        icon?: any;
        id?: ID;
    } & ButtonBUTTONSCHEMA & CoreCOMPONENTSCHEMA;

export class RestartSwitch extends EsphomeComponent<RestartSwitchConfig> {
    componentName: string = "restart.switch";
}

export type RestartSwitchConfig = {
        entity_category?: any;
        icon?: any;
        id?: ID;
    } & SwitchSWITCHSCHEMA & CoreCOMPONENTSCHEMA;
