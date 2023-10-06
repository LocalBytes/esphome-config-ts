/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: tca9548a.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/tca9548a
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes) 2023
 **/
import { ID, Pin, BaseComponent } from "../base.js";
import { CoreCOMPONENT_SCHEMA } from "./esphome.js";

export class Tca9548a extends BaseComponent<Tca9548aConfig> {
    componentName: string = "tca9548a";
}

export interface Tca9548aConfig extends CoreCOMPONENT_SCHEMA {
    id?: ID;
    channels?: Tca9548aConfigChannels[];
    i2c_id?: ID;
    address?: any;
}

export interface Tca9548aConfigChannels {
    bus_id: string;
    channel: number;
}
