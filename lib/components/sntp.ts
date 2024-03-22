/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: sntp.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/sntp
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes) 2023
 **/
import type { ID, Pin } from "../base.js";
import { BaseComponent } from "../base.js";
import type { TimeTIME_SCHEMA } from "./time.js";
import type { CoreCOMPONENT_SCHEMA } from "./esphome.js";

export class SntpTime extends BaseComponent<SntpTimeConfig> {
    componentName: string = "sntp.time";
}

export interface SntpTimeConfig extends TimeTIME_SCHEMA, CoreCOMPONENT_SCHEMA {
    id?: ID;
    servers?: any[];
}
