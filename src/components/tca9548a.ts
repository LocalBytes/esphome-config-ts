/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: tca9548a.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/tca9548a
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes)
 **/
import { type ID, type Pin, EsphomeComponent } from "@/lib/base.js";
import type { CoreCOMPONENTSCHEMA } from "./esphome.js";

export class Tca9548a extends EsphomeComponent<Tca9548aConfig> {
    componentName: string = "tca9548a";
}

export interface Tca9548aConfigChannels {
    bus_id: string;
    channel: number;
}

export interface Tca9548aConfig extends CoreCOMPONENTSCHEMA {
    address?: any;
    channels?: Tca9548aConfigChannels[];
    i2c_id?: ID;
    id?: ID;
}
