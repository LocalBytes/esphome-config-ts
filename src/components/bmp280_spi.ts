/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: bmp280_spi.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/bmp280_spi
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes)
 **/
import { type ID, type Pin, EsphomeComponent } from "@/lib/base.js";
import type { Bmp280BaseConfig_BASE } from "./bmp280_base.js";

export class Bmp280SpiSensor extends EsphomeComponent<Bmp280SpiSensorConfig> {
    componentName: string = "bmp280_spi.sensor";
}

export type Bmp280SpiSensorConfigSpiMode = '0' | '1' | '2' | '3' | 'MODE0' | 'MODE1' | 'MODE2' | 'MODE3';

export interface Bmp280SpiSensorConfig extends Bmp280BaseConfig_BASE {
    cs_pin: Pin;
    data_rate?: any;
    id?: ID;
    release_device?: boolean;
    spi_id?: ID;
    spi_mode?: Bmp280SpiSensorConfigSpiMode;
}
