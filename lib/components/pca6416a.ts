/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: pca6416a.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/pca6416a
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes) 2023
 **/
import type { ID, Pin } from "../base.js";
import { BaseComponent } from "../base.js";
import type { CoreCOMPONENT_SCHEMA } from "./esphome.js";

export class Pca6416a extends BaseComponent<Pca6416aConfig> {
    componentName: string = "pca6416a";
}

export interface Pca6416aConfig extends CoreCOMPONENT_SCHEMA {
    id: string;
    i2c_id?: ID;
    address?: any;
}
