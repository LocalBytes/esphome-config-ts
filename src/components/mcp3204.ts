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
import type { SensorSENSORSCHEMA } from "./sensor.js";
import type { CoreCOMPONENTSCHEMA } from "./esphome.js";

export class Mcp3204 extends EsphomeComponent<Mcp3204Config> {
    componentName: string = "mcp3204";
}

export type Mcp3204ConfigSpiMode = '0' | '1' | '2' | '3' | 'MODE0' | 'MODE1' | 'MODE2' | 'MODE3';

export interface Mcp3204Config {
    cs_pin: Pin;
    data_rate?: any;
    id?: ID;
    reference_voltage?: any;
    release_device?: boolean;
    spi_id?: ID;
    spi_mode?: Mcp3204ConfigSpiMode;
}

export class Mcp3204Sensor extends EsphomeComponent<Mcp3204SensorConfig> {
    componentName: string = "mcp3204.sensor";
}

export type Mcp3204SensorConfig = {
        diff_mode?: boolean;
        id?: any;
        mcp3204_id?: ID;
        number: number;
        update_interval?: any;
    } & SensorSENSORSCHEMA & CoreCOMPONENTSCHEMA;
