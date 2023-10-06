/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: mcp23016.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/mcp23016
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes) 2023
 **/
import { ID, Pin, BaseComponent } from "../base.js";
import { CoreCOMPONENT_SCHEMA } from "./esphome.js";

export class Mcp23016 extends BaseComponent<Mcp23016Config> {
    componentName: string = "mcp23016";
}

export interface Mcp23016Config extends CoreCOMPONENT_SCHEMA {
    id: string;
    i2c_id?: ID;
    address?: any;
}
