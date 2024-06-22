/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 *
 * Schema: lock.json
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/lock
 *
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes)
 **/
import { type ID, type Pin, EsphomeComponent } from "@/lib/base.js";
import type { CoreENTITY_BASE_SCHEMA, CoreMQTT_COMMAND_COMPONENT_SCHEMA } from "./esphome.js";

export abstract class Lock extends EsphomeComponent {
    componentName: string = "lock";
}

export type LockLOCK_SCHEMA = {
        mqtt_id?: any;
        on_lock?: object[];
        on_unlock?: object[];
    } & CoreENTITY_BASE_SCHEMA & CoreMQTT_COMMAND_COMPONENT_SCHEMA;

export interface LockLOCK_ACTION_SCHEMA {
    id: ID;
}
