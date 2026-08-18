/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: ens160_spi.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/ens160_spi
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes)
 **/
import { type ID, type Pin, EsphomeComponent } from "@/lib/base.js";
import type { Ens160BaseCONFIGSCHEMABASE } from "./ens160_base.js";

export class Ens160SpiSensor extends EsphomeComponent<Ens160SpiSensorConfig> {
    componentName: string = "ens160_spi.sensor";
}

export type Ens160SpiSensorConfigSpiMode = '0' | '1' | '2' | '3' | 'MODE0' | 'MODE1' | 'MODE2' | 'MODE3';

export interface Ens160SpiSensorConfig extends Ens160BaseCONFIGSCHEMABASE {
    cs_pin: Pin;
    data_rate?: any;
    id?: ID;
    release_device?: boolean;
    spi_id?: ID;
    spi_mode?: Ens160SpiSensorConfigSpiMode;
}
