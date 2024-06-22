/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 *
 * Schema: mcp3204.json
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/mcp3204
 *
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes)
 **/
import { type ID, type Pin, EsphomeComponent } from "@/lib/base.js";
import type { SensorSENSOR_SCHEMA } from "./sensor.js";
import type { CoreCOMPONENT_SCHEMA } from "./esphome.js";

export class Mcp3204 extends EsphomeComponent<Mcp3204Config> {
    componentName: string = "mcp3204";
}

export interface Mcp3204Config {
    id?: ID;
    reference_voltage?: any;
    spi_id?: ID;
    cs_pin: Pin;
}

export class Mcp3204Sensor extends EsphomeComponent<Mcp3204SensorConfig> {
    componentName: string = "mcp3204.sensor";
}

export type Mcp3204SensorConfig = {
        id?: any;
        mcp3204_id?: ID;
        number: number;
        update_interval?: any;
    } & SensorSENSOR_SCHEMA & CoreCOMPONENT_SCHEMA;
