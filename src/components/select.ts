/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 *
 * Schema: select.json
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/select
 *
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes)
 **/
import { type ID, type Pin, EsphomeComponent } from "@/lib/base.js";
import type { CoreENTITY_BASE_SCHEMA, CoreMQTT_COMMAND_COMPONENT_SCHEMA } from "./esphome.js";

export abstract class Select extends EsphomeComponent {
    componentName: string = "select";
}

export type SelectSELECT_SCHEMA = {
        mqtt_id?: any;
        id?: ID;
        on_value?: object[];
    } & CoreENTITY_BASE_SCHEMA & CoreMQTT_COMMAND_COMPONENT_SCHEMA;

export interface SelectOPERATION_BASE_SCHEMA {
    id: ID;
}
