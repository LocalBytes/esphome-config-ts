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
import { type ID, type Pin, EsphomeComponent } from "@/lib/base.js";
import type { SensorSENSORSCHEMA } from "./sensor.js";
import type { CoreCOMPONENTSCHEMA } from "./esphome.js";

export class Mcp3008 extends EsphomeComponent<Mcp3008Config> {
    componentName: string = "mcp3008";
}

export type Mcp3008ConfigSpiMode = '0' | '1' | '2' | '3' | 'MODE0' | 'MODE1' | 'MODE2' | 'MODE3';

export interface Mcp3008Config {
    cs_pin: Pin;
    data_rate?: any;
    id?: ID;
    release_device?: boolean;
    spi_id?: ID;
    spi_mode?: Mcp3008ConfigSpiMode;
}

export class Mcp3008Sensor extends EsphomeComponent<Mcp3008SensorConfig> {
    componentName: string = "mcp3008.sensor";
}

export type Mcp3008SensorConfig = {
        device_class?: any;
        id?: any;
        mcp3008_id?: ID;
        number: number;
        reference_voltage?: any;
        state_class?: any;
        unit_of_measurement?: any;
        update_interval?: any;
    } & SensorSENSORSCHEMA & CoreCOMPONENTSCHEMA;
