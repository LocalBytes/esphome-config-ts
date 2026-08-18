/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: mapping.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/mapping
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes)
 **/
import { type ID, type Pin, EsphomeComponent } from "@/lib/base.js";

export class Mapping extends EsphomeComponent<MappingConfig> {
    componentName: string = "mapping";
}

export type MappingConfigFrom = 'int' | 'string';

export interface MappingConfig {
    from: MappingConfigFrom;
    id: string;
    to: string;
}
