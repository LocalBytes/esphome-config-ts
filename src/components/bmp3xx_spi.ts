/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: bmp3xx_spi.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/bmp3xx_spi
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes)
 **/
import { type ID, type Pin, EsphomeComponent } from "@/lib/base.js";
import type { Bmp3xxBaseConfig_BASE } from "./bmp3xx_base.js";

export class Bmp3xxSpiSensor extends EsphomeComponent<Bmp3xxSpiSensorConfig> {
    componentName: string = "bmp3xx_spi.sensor";
}

export type Bmp3xxSpiSensorConfigSpiMode = '0' | '1' | '2' | '3' | 'MODE0' | 'MODE1' | 'MODE2' | 'MODE3';

export interface Bmp3xxSpiSensorConfig extends Bmp3xxBaseConfig_BASE {
    cs_pin: Pin;
    data_rate?: any;
    id?: ID;
    release_device?: boolean;
    spi_id?: ID;
    spi_mode?: Bmp3xxSpiSensorConfigSpiMode;
}
