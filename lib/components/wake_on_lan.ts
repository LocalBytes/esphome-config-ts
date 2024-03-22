/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: wake_on_lan.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/wake_on_lan
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes) 2023
 **/
import type { ID, Pin } from "../base.js";
import { BaseComponent } from "../base.js";
import type { ButtonBUTTON_SCHEMA } from "./button.js";
import type { CoreCOMPONENT_SCHEMA } from "./esphome.js";

export class WakeOnLanButton extends BaseComponent<WakeOnLanButtonConfig> {
    componentName: string = "wake_on_lan.button";
}

export interface WakeOnLanButtonConfig extends ButtonBUTTON_SCHEMA, CoreCOMPONENT_SCHEMA {
    id?: ID;
    target_mac_address: string;
}
