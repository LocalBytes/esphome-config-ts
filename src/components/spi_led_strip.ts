/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: spi_led_strip.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/spi_led_strip
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes)
 **/
import { type ID, type Pin, EsphomeComponent } from "@/lib/base.js";
import type { LightADDRESSABLE_LIGHT_SCHEMA } from "./light.js";

export class SpiLedStripLight extends EsphomeComponent<SpiLedStripLightConfig> {
    componentName: string = "spi_led_strip.light";
}

export type SpiLedStripLightConfigSpiMode = '0' | '1' | '2' | '3' | 'MODE0' | 'MODE1' | 'MODE2' | 'MODE3';

export interface SpiLedStripLightConfig extends LightADDRESSABLE_LIGHT_SCHEMA {
    cs_pin?: Pin;
    data_rate?: any;
    num_leds?: number;
    output_id?: ID;
    release_device?: boolean;
    spi_id?: ID;
    spi_mode?: SpiLedStripLightConfigSpiMode;
}
