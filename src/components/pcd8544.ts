/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: pcd8544.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/pcd8544
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes)
 **/
import { type ID, type Pin, EsphomeComponent } from "@/lib/base.js";
import type { DisplayFULLDISPLAYSCHEMA } from "./display.js";
import type { CoreCOMPONENTSCHEMA } from "./esphome.js";

export class Pcd8544Display extends EsphomeComponent<Pcd8544DisplayConfig> {
    componentName: string = "pcd8544.display";
}

export type Pcd8544DisplayConfigSpiMode = '0' | '1' | '2' | '3' | 'MODE0' | 'MODE1' | 'MODE2' | 'MODE3';
export type Pcd8544DisplayConfig = {
        contrast?: number;
        cs_pin: Pin;
        data_rate?: any;
        dc_pin: Pin;
        id?: ID;
        release_device?: boolean;
        reset_pin: Pin;
        spi_id?: ID;
        spi_mode?: Pcd8544DisplayConfigSpiMode;
        update_interval?: any;
        lambda?: any;
        pages?: any;
    } & DisplayFULLDISPLAYSCHEMA & CoreCOMPONENTSCHEMA;
