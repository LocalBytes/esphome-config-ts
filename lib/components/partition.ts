/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: partition.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/partition
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes) 2023
 **/
import type { ID, Pin } from "../base.js";
import { BaseComponent } from "../base.js";
import type { CoreCOMPONENT_SCHEMA } from "./esphome.js";
import type { LightADDRESSABLE_LIGHT_SCHEMA } from "./light.js";

export class PartitionLight extends BaseComponent<PartitionLightConfig> {
    componentName: string = "partition.light";
}

export interface PartitionLightConfig extends LightADDRESSABLE_LIGHT_SCHEMA {
    output_id?: ID;
    segments: PartitionLightConfigSegments[];
}

export interface PartitionLightConfigSegments extends CoreCOMPONENT_SCHEMA {
    id: ID;
    from: number;
    to: number;
    reversed?: boolean;
    single_light_id: ID;
    addressable_light_id?: ID;
    light_id?: ID;
}
