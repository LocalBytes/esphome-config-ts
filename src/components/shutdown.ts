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
import type { ButtonBUTTONSCHEMA } from "./button.js";
import type { CoreCOMPONENTSCHEMA } from "./esphome.js";
import type { SwitchSWITCHSCHEMA } from "./switch.js";

export class ShutdownButton extends EsphomeComponent<ShutdownButtonConfig> {
    componentName: string = "shutdown.button";
}

export type ShutdownButtonConfig = {
        entity_category?: any;
        icon?: any;
        id?: ID;
    } & ButtonBUTTONSCHEMA & CoreCOMPONENTSCHEMA;

export class ShutdownSwitch extends EsphomeComponent<ShutdownSwitchConfig> {
    componentName: string = "shutdown.switch";
}

export type ShutdownSwitchConfig = {
        entity_category?: any;
        icon?: any;
        id?: ID;
    } & SwitchSWITCHSCHEMA & CoreCOMPONENTSCHEMA;
