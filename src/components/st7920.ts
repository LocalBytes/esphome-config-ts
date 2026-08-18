/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: st7920.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/st7920
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes)
 **/
import { type ID, type Pin, EsphomeComponent } from "@/lib/base.js";
import type { DisplayFULLDISPLAYSCHEMA } from "./display.js";
import type { CoreCOMPONENTSCHEMA } from "./esphome.js";

export class St7920Display extends EsphomeComponent<St7920DisplayConfig> {
    componentName: string = "st7920.display";
}

export type St7920DisplayConfigSpiMode = '0' | '1' | '2' | '3' | 'MODE0' | 'MODE1' | 'MODE2' | 'MODE3';
export type St7920DisplayConfig = {
        cs_pin: Pin;
        data_rate?: any;
        height: number;
        id?: ID;
        release_device?: boolean;
        spi_id?: ID;
        spi_mode?: St7920DisplayConfigSpiMode;
        update_interval?: any;
        width: number;
        rotation?: any;
        lambda?: any;
        pages?: any;
    } & DisplayFULLDISPLAYSCHEMA & CoreCOMPONENTSCHEMA;
