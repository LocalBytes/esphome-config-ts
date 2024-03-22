/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: ssd1306_spi.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/ssd1306_spi
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes) 2023
 **/
import type { ID, Pin } from "../base.js";
import { BaseComponent } from "../base.js";
import type { Ssd1306BaseSSD1306_SCHEMA } from "./ssd1306_base.js";
import type { CoreCOMPONENT_SCHEMA } from "./esphome.js";

export class Ssd1306SpiDisplay extends BaseComponent<Ssd1306SpiDisplayConfig> {
    componentName: string = "ssd1306_spi.display";
}

export interface Ssd1306SpiDisplayConfig extends Ssd1306BaseSSD1306_SCHEMA, CoreCOMPONENT_SCHEMA {
    id?: ID;
    dc_pin: Pin;
    spi_id?: ID;
    cs_pin: Pin;
}
