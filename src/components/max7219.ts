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

export type Max7219DisplayConfigSpiMode = '0' | '1' | '2' | '3' | 'MODE0' | 'MODE1' | 'MODE2' | 'MODE3';
export type Max7219DisplayConfig = {
        cs_pin: Pin;
        data_rate?: any;
        id?: ID;
        intensity?: number;
        num_chips?: number;
        release_device?: boolean;
        reverse_enable?: boolean;
        spi_id?: ID;
        spi_mode?: Max7219DisplayConfigSpiMode;
        update_interval?: any;
        lambda?: any;
    } & DisplayBASIC_DISPLAY_SCHEMA & CoreCOMPONENT_SCHEMA;
