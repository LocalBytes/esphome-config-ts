/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: sm16716.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/sm16716
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes) 2023
 **/
import { ID, Pin, BaseComponent } from "../base.js";
import { CoreCOMPONENT_SCHEMA } from "./esphome.js";
import { OutputFLOAT_OUTPUT_SCHEMA } from "./output.js";

export class Sm16716 extends BaseComponent<Sm16716Config> {
    componentName: string = "sm16716";
}

export interface Sm16716Config extends CoreCOMPONENT_SCHEMA {
    id?: ID;
    data_pin: Pin;
    clock_pin: Pin;
    num_channels?: number;
    num_chips?: number;
}

export class Sm16716Output extends BaseComponent<Sm16716OutputConfig> {
    componentName: string = "sm16716.output";
}

export interface Sm16716OutputConfig extends OutputFLOAT_OUTPUT_SCHEMA, CoreCOMPONENT_SCHEMA {
    sm16716_id?: ID;
    id: string;
    channel: number;
}
