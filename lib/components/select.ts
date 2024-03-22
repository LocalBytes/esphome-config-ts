/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: select.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/select
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes) 2023
 **/
import type { ID, Pin } from "../base.js";
import { BaseComponent } from "../base.js";
import type { CoreENTITY_BASE_SCHEMA, CoreMQTT_COMMAND_COMPONENT_SCHEMA } from "./esphome.js";

export abstract class Select extends BaseComponent {
    componentName: string = "select";
}

export interface SelectSELECT_SCHEMA extends CoreENTITY_BASE_SCHEMA, CoreMQTT_COMMAND_COMPONENT_SCHEMA {
    mqtt_id?: any;
    id?: ID;
    on_value?: object[];
}

export interface SelectOPERATION_BASE_SCHEMA {
    id: ID;
}
