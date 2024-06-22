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
import type { TimeTIME_SCHEMA } from "./time.js";
import type { CoreCOMPONENT_SCHEMA } from "./esphome.js";

export class SntpTime extends EsphomeComponent<SntpTimeConfig> {
    componentName: string = "sntp.time";
}

export type SntpTimeConfig = {
        id?: ID;
        servers?: any[];
    } & TimeTIME_SCHEMA & CoreCOMPONENT_SCHEMA;
