/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: pn532_spi.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/pn532_spi
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes) 2023
 **/
import { ID, Pin, BaseComponent } from "../base.js";
import { Pn532PN532_SCHEMA } from "./pn532.js";

export class Pn532Spi extends BaseComponent<Pn532SpiConfig> {
    componentName: string = "pn532_spi";
}

export interface Pn532SpiConfig extends Pn532PN532_SCHEMA {
    id?: any;
    spi_id?: ID;
    cs_pin: Pin;
}
