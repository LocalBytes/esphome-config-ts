/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: ssd1331_spi.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/ssd1331_spi
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes)
 **/
import { type ID, type Pin, EsphomeComponent } from "@/lib/base.js";
import type { DisplayFULL_DISPLAY_SCHEMA } from "./display.js";
import type { CoreCOMPONENT_SCHEMA } from "./esphome.js";

export class Ssd1331SpiDisplay extends EsphomeComponent<Ssd1331SpiDisplayConfig> {
    componentName: string = "ssd1331_spi.display";
}

export type Ssd1331SpiDisplayConfig = {
        id?: ID;
        dc_pin: Pin;
        spi_id?: ID;
        cs_pin: Pin;
        reset_pin?: Pin;
        brightness?: any;
        update_interval?: any;
    } & DisplayFULL_DISPLAY_SCHEMA & CoreCOMPONENT_SCHEMA;
