/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: sonoff_d1.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/sonoff_d1
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes) 2023
 **/
import { ID, Pin, BaseComponent } from "../base.js";
import { LightBRIGHTNESS_ONLY_LIGHT_SCHEMA } from "./light.js";
import { CoreCOMPONENT_SCHEMA } from "./esphome.js";

export class SonoffD1Light extends BaseComponent<SonoffD1LightConfig> {
    componentName: string = "sonoff_d1.light";
}

export interface SonoffD1LightConfig extends LightBRIGHTNESS_ONLY_LIGHT_SCHEMA, CoreCOMPONENT_SCHEMA {
    output_id?: ID;
    use_rm433_remote?: boolean;
    min_value?: number;
    max_value?: number;
    uart_id?: ID;
}
