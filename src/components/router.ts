/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: router.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/router
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes)
 **/
import { type ID, type Pin, EsphomeComponent } from "@/lib/base.js";
import type { CoreCOMPONENT_SCHEMA } from "./esphome.js";

export class RouterSpeaker extends EsphomeComponent<RouterSpeakerConfig> {
    componentName: string = "router.speaker";
}

export interface RouterSpeakerConfig extends CoreCOMPONENT_SCHEMA {
    bits_per_sample: number;
    id?: ID;
    num_channels: number;
    output_speakers: ID[];
    sample_rate: number;
}
