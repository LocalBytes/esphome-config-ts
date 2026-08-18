/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: spa06_spi.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/spa06_spi
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes)
 **/
import { type ID, type Pin, EsphomeComponent } from "@/lib/base.js";
import type { Spa06BaseCONFIGSCHEMABASE } from "./spa06_base.js";

export class Spa06SpiSensor extends EsphomeComponent<Spa06SpiSensorConfig> {
    componentName: string = "spa06_spi.sensor";
}

export type Spa06SpiSensorConfigSpiMode = '0' | '1' | '2' | '3' | 'MODE0' | 'MODE1' | 'MODE2' | 'MODE3';

export interface Spa06SpiSensorConfig extends Spa06BaseCONFIGSCHEMABASE {
    cs_pin: Pin;
    data_rate?: any;
    id?: any;
    release_device?: boolean;
    spi_id?: ID;
    spi_mode?: Spa06SpiSensorConfigSpiMode;
}
