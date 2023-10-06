/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: as3935_spi.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/as3935_spi
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes) 2023
 **/
import { ID, Pin, BaseComponent } from "../base.js";
import { As3935AS3935_SCHEMA } from "./as3935.js";
import { CoreCOMPONENT_SCHEMA } from "./esphome.js";

export class As3935Spi extends BaseComponent<As3935SpiConfig> {
    componentName: string = "as3935_spi";
}

export interface As3935SpiConfig extends As3935AS3935_SCHEMA, CoreCOMPONENT_SCHEMA {
    id?: any;
    spi_id?: ID;
    cs_pin: Pin;
}
