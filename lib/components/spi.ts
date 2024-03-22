/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: spi.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/spi
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes) 2023
 **/
import type { ID, Pin } from "../base.js";
import { BaseComponent } from "../base.js";

export class Spi extends BaseComponent<SpiConfig> {
    componentName: string = "spi";
}

export interface SpiConfig {
    id?: ID;
    clk_pin: Pin;
    miso_pin?: Pin;
    mosi_pin?: Pin;
    force_sw?: boolean;
}
