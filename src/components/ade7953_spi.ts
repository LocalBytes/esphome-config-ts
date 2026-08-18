/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: ade7953_spi.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/ade7953_spi
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes)
 **/
import { type ID, type Pin, EsphomeComponent } from "@/lib/base.js";
import type { Ade7953BaseADE7953_CONFIG_SCHEMA } from "./ade7953_base.js";

export class Ade7953SpiSensor extends EsphomeComponent<Ade7953SpiSensorConfig> {
    componentName: string = "ade7953_spi.sensor";
}

export type Ade7953SpiSensorConfigSpiMode = '0' | '1' | '2' | '3' | 'MODE0' | 'MODE1' | 'MODE2' | 'MODE3';

export interface Ade7953SpiSensorConfig extends Ade7953BaseADE7953_CONFIG_SCHEMA {
    cs_pin: Pin;
    data_rate?: any;
    id?: ID;
    release_device?: boolean;
    spi_id?: ID;
    spi_mode?: Ade7953SpiSensorConfigSpiMode;
}
