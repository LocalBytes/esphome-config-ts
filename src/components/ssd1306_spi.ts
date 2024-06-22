/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 *
 * Schema: ssd1306_spi.json
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/ssd1306_spi
 *
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes)
 **/
import { type ID, type Pin, EsphomeComponent } from "@/lib/base.js";
import type { Ssd1306BaseSSD1306_SCHEMA } from "./ssd1306_base.js";
import type { CoreCOMPONENT_SCHEMA } from "./esphome.js";

export class Ssd1306SpiDisplay extends EsphomeComponent<Ssd1306SpiDisplayConfig> {
    componentName: string = "ssd1306_spi.display";
}

export type Ssd1306SpiDisplayConfig = {
        id?: ID;
        dc_pin: Pin;
        spi_id?: ID;
        cs_pin: Pin;
    } & Ssd1306BaseSSD1306_SCHEMA & CoreCOMPONENT_SCHEMA;
