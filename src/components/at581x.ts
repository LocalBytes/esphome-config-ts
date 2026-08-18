/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: at581x.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/at581x
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes)
 **/
import { type ID, type Pin, EsphomeComponent } from "@/lib/base.js";
import type { CoreCOMPONENT_SCHEMA } from "./esphome.js";
import type { Switch_SWITCH_SCHEMA } from "./switch.js";

export class At581x extends EsphomeComponent<At581xConfig> {
    componentName: string = "at581x";
}

export interface At581xConfig extends CoreCOMPONENT_SCHEMA {
    address?: any;
    i2c_id?: ID;
    id?: ID;
}

export class At581xSwitch extends EsphomeComponent<At581xSwitchConfig> {
    componentName: string = "at581x.switch";
}

export interface At581xSwitchConfig extends Switch_SWITCH_SCHEMA {
    at581x_id?: ID;
    device_class?: any;
    icon?: any;
    id?: ID;
}
