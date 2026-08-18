/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: binary.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/binary
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes)
 **/
import { type ID, type Pin, EsphomeComponent } from "@/lib/base.js";
import type { Fan_FAN_SCHEMA } from "./fan.js";
import type { CoreCOMPONENT_SCHEMA } from "./esphome.js";
import type { LightBINARY_LIGHT_SCHEMA } from "./light.js";

export class BinaryFan extends EsphomeComponent<BinaryFanConfig> {
    componentName: string = "binary.fan";
}

export type BinaryFanConfig = {
        direction_output?: ID;
        id?: ID;
        oscillation_output?: ID;
        output: ID;
    } & Fan_FAN_SCHEMA & CoreCOMPONENT_SCHEMA;

export class BinaryLight extends EsphomeComponent<BinaryLightConfig> {
    componentName: string = "binary.light";
}

export interface BinaryLightConfig extends LightBINARY_LIGHT_SCHEMA {
    output: ID;
    output_id?: ID;
}
