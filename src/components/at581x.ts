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
import type { CoreCOMPONENTSCHEMA } from "./esphome.js";
import type { SwitchSWITCHSCHEMA } from "./switch.js";

export class At581x extends EsphomeComponent<At581xConfig> {
    componentName: string = "at581x";
}

export interface At581xConfig extends CoreCOMPONENTSCHEMA {
    address?: any;
    i2c_id?: ID;
    id?: ID;
}

export class At581xSwitch extends EsphomeComponent<At581xSwitchConfig> {
    componentName: string = "at581x.switch";
}

export interface At581xSwitchConfig extends SwitchSWITCHSCHEMA {
    at581x_id?: ID;
    device_class?: any;
    icon?: any;
    id?: ID;
}
