/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: grove_tb6612fng.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/grove_tb6612fng
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes) 2023
 **/
import { ID, Pin, BaseComponent } from "../base.js";
import { CoreCOMPONENT_SCHEMA } from "./esphome.js";

export class GroveTb6612fng extends BaseComponent<GroveTb6612fngConfig> {
    componentName: string = "grove_tb6612fng";
}

export interface GroveTb6612fngConfig extends CoreCOMPONENT_SCHEMA {
    id: string;
    i2c_id?: ID;
    address?: any;
}
