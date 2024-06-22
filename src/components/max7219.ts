/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 *
 * Schema: max7219.json
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/max7219
 *
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes)
 **/
import { type ID, type Pin, EsphomeComponent } from "@/lib/base.js";
import type { DisplayBASIC_DISPLAY_SCHEMA } from "./display.js";
import type { CoreCOMPONENT_SCHEMA } from "./esphome.js";

export class Max7219Display extends EsphomeComponent<Max7219DisplayConfig> {
    componentName: string = "max7219.display";
}

export type Max7219DisplayConfig = {
        id?: ID;
        num_chips?: number;
        intensity?: number;
        reverse_enable?: boolean;
        update_interval?: any;
        spi_id?: ID;
        cs_pin: Pin;
    } & DisplayBASIC_DISPLAY_SCHEMA & CoreCOMPONENT_SCHEMA;
