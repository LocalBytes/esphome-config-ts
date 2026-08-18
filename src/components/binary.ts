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
import type { FanFANSCHEMA } from "./fan.js";
import type { CoreCOMPONENTSCHEMA } from "./esphome.js";
import type { LightBINARYLIGHTSCHEMA } from "./light.js";

export class BinaryFan extends EsphomeComponent<BinaryFanConfig> {
    componentName: string = "binary.fan";
}

export type BinaryFanConfig = {
        direction_output?: ID;
        id?: ID;
        oscillation_output?: ID;
        output: ID;
    } & FanFANSCHEMA & CoreCOMPONENTSCHEMA;

export class BinaryLight extends EsphomeComponent<BinaryLightConfig> {
    componentName: string = "binary.light";
}

export interface BinaryLightConfig extends LightBINARYLIGHTSCHEMA {
    output: ID;
    output_id?: ID;
}
