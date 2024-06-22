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

export type SpiLedStripLightConfigDataRate = '80000000.0' | '40000000.0' | '20000000.0' | '10000000.0' | '8000000.0' | '5000000.0' | '4000000.0' | '2000000.0' | '1000000.0' | '200000.0' | '75000.0' | '1000.0';

export interface SpiLedStripLightConfig extends LightADDRESSABLE_LIGHT_SCHEMA {
    output_id?: ID;
    num_leds?: number;
    data_rate?: SpiLedStripLightConfigDataRate;
    spi_id?: ID;
    cs_pin?: Pin;
}
