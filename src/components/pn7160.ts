/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: pn7160.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/pn7160
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes)
 **/
import { type ID, type Pin, EsphomeComponent } from "@/lib/base.js";
import type { CorePositiveTimePeriodMilliseconds, CoreCOMPONENT_SCHEMA } from "./esphome.js";

export abstract class Pn7160 extends EsphomeComponent {
    componentName: string = "pn7160";
}

export type Pn7160PN7160_SCHEMATagTtl = CorePositiveTimePeriodMilliseconds;

export interface Pn7160PN7160_SCHEMA extends CoreCOMPONENT_SCHEMA {
    dwl_req_pin?: Pin;
    emulation_message?: string;
    id?: ID;
    irq_pin: Pin;
    on_emulated_tag_scan?: object[];
    on_finished_write?: object[];
    on_tag?: object[];
    on_tag_removed?: object[];
    tag_ttl?: Pn7160PN7160_SCHEMATagTtl;
    ven_pin: Pin;
    wkup_req_pin?: Pin;
}

export interface Pn7160SET_MESSAGE_ACTION_SCHEMA {
    id?: ID;
    include_android_app_record?: boolean;
    message: string;
}

export interface Pn7160SIMPLE_ACTION_SCHEMA {
    id: ID;
}
