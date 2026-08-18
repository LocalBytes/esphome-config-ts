/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: bme280_spi.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/bme280_spi
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes)
 **/
import { type ID, type Pin, EsphomeComponent } from "@/lib/base.js";
import type { Bme280BaseConfig_BASE } from "./bme280_base.js";

export class Bme280SpiSensor extends EsphomeComponent<Bme280SpiSensorConfig> {
    componentName: string = "bme280_spi.sensor";
}

export type Bme280SpiSensorConfigSpiMode = '0' | '1' | '2' | '3' | 'MODE0' | 'MODE1' | 'MODE2' | 'MODE3';

export interface Bme280SpiSensorConfig extends Bme280BaseConfig_BASE {
    cs_pin: Pin;
    data_rate?: any;
    id?: ID;
    release_device?: boolean;
    spi_id?: ID;
    spi_mode?: Bme280SpiSensorConfigSpiMode;
}
