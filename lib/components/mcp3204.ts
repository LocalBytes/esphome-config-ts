/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: mcp3204.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/mcp3204
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes) 2023
 **/
import type { ID, Pin } from "../base.js";
import { BaseComponent } from "../base.js";
import type { SensorSENSOR_SCHEMA } from "./sensor.js";
import type { CoreCOMPONENT_SCHEMA } from "./esphome.js";

export class Mcp3204 extends BaseComponent<Mcp3204Config> {
    componentName: string = "mcp3204";
}

export interface Mcp3204Config {
    id?: ID;
    reference_voltage?: any;
    spi_id?: ID;
    cs_pin: Pin;
}

export class Mcp3204Sensor extends BaseComponent<Mcp3204SensorConfig> {
    componentName: string = "mcp3204.sensor";
}

export interface Mcp3204SensorConfig extends SensorSENSOR_SCHEMA, CoreCOMPONENT_SCHEMA {
    id?: any;
    mcp3204_id?: ID;
    number: number;
    update_interval?: any;
}
