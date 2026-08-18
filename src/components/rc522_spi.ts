/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: rc522_spi.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/rc522_spi
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes)
 **/
import { type ID, type Pin, EsphomeComponent } from "@/lib/base.js";
import type { Rc522RC522SCHEMA } from "./rc522.js";
import type { BinarySensorBINARYSENSORSCHEMA } from "./binary_sensor.js";

export class Rc522Spi extends EsphomeComponent<Rc522SpiConfig> {
    componentName: string = "rc522_spi";
}

export type Rc522SpiConfigSpiMode = '0' | '1' | '2' | '3' | 'MODE0' | 'MODE1' | 'MODE2' | 'MODE3';

export interface Rc522SpiConfig extends Rc522RC522SCHEMA {
    cs_pin: Pin;
    data_rate?: any;
    id?: any;
    release_device?: boolean;
    spi_id?: ID;
    spi_mode?: Rc522SpiConfigSpiMode;
}

export class Rc522SpiBinarySensor extends EsphomeComponent<Rc522SpiBinarySensorConfig> {
    componentName: string = "rc522_spi.binary_sensor";
}

export interface Rc522SpiBinarySensorConfig extends BinarySensorBINARYSENSORSCHEMA {
    id?: any;
    rc522_id?: ID;
    uid: string;
}
