/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: lock.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/lock
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes) 2023
 **/
import type { ID, Pin } from "../base.js";
import { BaseComponent } from "../base.js";
import type { CoreENTITY_BASE_SCHEMA, CoreMQTT_COMMAND_COMPONENT_SCHEMA } from "./esphome.js";

export abstract class Lock extends BaseComponent {
    componentName: string = "lock";
}

export interface LockLOCK_SCHEMA extends CoreENTITY_BASE_SCHEMA, CoreMQTT_COMMAND_COMPONENT_SCHEMA {
    mqtt_id?: any;
    on_lock?: object[];
    on_unlock?: object[];
}

export interface LockLOCK_ACTION_SCHEMA {
    id: ID;
}
