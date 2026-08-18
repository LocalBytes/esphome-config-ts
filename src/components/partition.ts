/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: partition.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/partition
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes)
 **/
import { type ID, type Pin, EsphomeComponent } from "@/lib/base.js";
import type { CoreCOMPONENTSCHEMA } from "./esphome.js";
import type { LightADDRESSABLELIGHTSCHEMA } from "./light.js";

export class PartitionLight extends EsphomeComponent<PartitionLightConfig> {
    componentName: string = "partition.light";
}

export interface PartitionLightConfigSegments extends CoreCOMPONENTSCHEMA {
    addressable_light_id?: ID;
    from: number;
    id: ID;
    light_id?: ID;
    reversed?: boolean;
    single_light_id: ID;
    to: number;
}

export interface PartitionLightConfig extends LightADDRESSABLELIGHTSCHEMA {
    output_id?: ID;
    segments: PartitionLightConfigSegments[];
}
