/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: time.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/time
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes) 2023
 **/
import { ID, Pin, BaseComponent } from "../base.js";
import { CoreCOMPONENT_SCHEMA } from "./esphome.js";

export abstract class Time extends BaseComponent {
    componentName: string = "time";
}

export interface TimeTIME_SCHEMA extends CoreCOMPONENT_SCHEMA {
    timezone?: any;
    on_time?: object[];
    on_time_sync?: object[];
    update_interval?: any;
}
