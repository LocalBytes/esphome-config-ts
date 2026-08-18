/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: sntp.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/sntp
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes)
 **/
import { type ID, type Pin, EsphomeComponent } from "@/lib/base.js";
import type { TimeTIMESCHEMA } from "./time.js";
import type { CoreCOMPONENTSCHEMA } from "./esphome.js";

export class SntpTime extends EsphomeComponent<SntpTimeConfig> {
    componentName: string = "sntp.time";
}

export type SntpTimeConfig = {
        id?: ID;
        servers?: any[];
    } & TimeTIMESCHEMA & CoreCOMPONENTSCHEMA;
