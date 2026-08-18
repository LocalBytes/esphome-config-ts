/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: bmp581_spi.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/bmp581_spi
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes)
 **/
import { type ID, type Pin, EsphomeComponent } from "@/lib/base.js";
import type { Bmp581BaseCONFIGSCHEMABASE } from "./bmp581_base.js";

export class Bmp581SpiSensor extends EsphomeComponent<Bmp581SpiSensorConfig> {
    componentName: string = "bmp581_spi.sensor";
}

export type Bmp581SpiSensorConfigSpiMode = '0' | '1' | '2' | '3' | 'MODE0' | 'MODE1' | 'MODE2' | 'MODE3';

export interface Bmp581SpiSensorConfig extends Bmp581BaseCONFIGSCHEMABASE {
    cs_pin: Pin;
    data_rate?: any;
    id?: any;
    release_device?: boolean;
    spi_id?: ID;
    spi_mode?: Bmp581SpiSensorConfigSpiMode;
}
