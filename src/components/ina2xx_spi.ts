/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: ina2xx_spi.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/ina2xx_spi
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes)
 **/
import { type ID, type Pin, EsphomeComponent } from "@/lib/base.js";
import type { Ina2xxBaseINA2XXSCHEMA } from "./ina2xx_base.js";

export class Ina2xxSpiSensor extends EsphomeComponent<Ina2xxSpiSensorConfig> {
    componentName: string = "ina2xx_spi.sensor";
}

export type Ina2xxSpiSensorConfigModel = 'INA229' | 'INA239';
export type Ina2xxSpiSensorConfigSpiMode = '0' | '1' | '2' | '3' | 'MODE0' | 'MODE1' | 'MODE2' | 'MODE3';

export interface Ina2xxSpiSensorConfig extends Ina2xxBaseINA2XXSCHEMA {
    cs_pin: Pin;
    data_rate?: any;
    id?: ID;
    model: Ina2xxSpiSensorConfigModel;
    release_device?: boolean;
    spi_id?: ID;
    spi_mode?: Ina2xxSpiSensorConfigSpiMode;
}
