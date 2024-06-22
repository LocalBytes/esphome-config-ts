/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: mcp3008.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/mcp3008
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes)
 **/
import { type ID, type Pin, BaseComponent } from "@/lib/base.js";
import type { SensorSENSOR_SCHEMA } from "./sensor.js";
import type { CoreCOMPONENT_SCHEMA } from "./esphome.js";

export class Mcp3008 extends BaseComponent<Mcp3008Config> {
    componentName: string = "mcp3008";
}

export interface Mcp3008Config {
    id?: ID;
    spi_id?: ID;
    cs_pin: Pin;
}

export class Mcp3008Sensor extends BaseComponent<Mcp3008SensorConfig> {
    componentName: string = "mcp3008.sensor";
}

export type Mcp3008SensorConfig = {
        id?: any;
        mcp3008_id?: ID;
        number: number;
        reference_voltage?: any;
        update_interval?: any;
    } & SensorSENSOR_SCHEMA & CoreCOMPONENT_SCHEMA;
