/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: ssd1327_spi.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/ssd1327_spi
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes)
 **/
import { type ID, type Pin, BaseComponent } from "@/lib/base.js";
import type { Ssd1327BaseSSD1327_SCHEMA } from "./ssd1327_base.js";
import type { CoreCOMPONENT_SCHEMA } from "./esphome.js";

export class Ssd1327SpiDisplay extends BaseComponent<Ssd1327SpiDisplayConfig> {
    componentName: string = "ssd1327_spi.display";
}

export type Ssd1327SpiDisplayConfig = {
        id?: ID;
        dc_pin: Pin;
        spi_id?: ID;
        cs_pin?: Pin;
    } & Ssd1327BaseSSD1327_SCHEMA & CoreCOMPONENT_SCHEMA;
