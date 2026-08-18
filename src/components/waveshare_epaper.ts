/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: waveshare_epaper.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/waveshare_epaper
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes)
 **/
import { type ID, type Pin, EsphomeComponent } from "@/lib/base.js";
import type { CorePositiveTimePeriodMilliseconds, CoreCOMPONENT_SCHEMA } from "./esphome.js";
import type { DisplayFULL_DISPLAY_SCHEMA } from "./display.js";

export class WaveshareEpaperDisplay extends EsphomeComponent<WaveshareEpaperDisplayConfig> {
    componentName: string = "waveshare_epaper.display";
}

export type WaveshareEpaperDisplayConfigModel = '1.54in' | '1.54inv2' | '1.54inv2-b' | '2.13in' | '2.13inv2' | '2.13in-ttgo' | '2.13in-ttgo-b1' | '2.13in-ttgo-b73' | '2.13in-ttgo-b74' | '2.90in' | '2.90inv2' | 'gdew029t5' | '2.70in' | '2.70in-b' | '2.70in-bv2' | '2.70inv2' | '2.90in-b' | '2.90in-bv3' | 'gdey029t94' | '2.90inv2-r2' | '2.90in-d' | '2.90in-dke' | 'gdey042t81' | '4.20in' | '4.20in-bv2' | '4.20in-bv2-bwr' | '5.65in-f' | '5.83in' | '5.83inv2' | 'gdey0583t81' | '7.30in-f' | '7.50in' | '7.50in-bv2' | '7.50in-bv3' | '7.50in-bv3-bwr' | '7.50in-bc' | '7.50inv2' | '7.50inv2alt' | '7.50inv2p' | '7.50in-hd-b' | '2.13in-ttgo-dke' | '2.13inv3' | '1.54in-m5coreink-m09' | '13.3in-k';
export type WaveshareEpaperDisplayConfigResetDuration = CorePositiveTimePeriodMilliseconds;
export type WaveshareEpaperDisplayConfigSpiMode = '0' | '1' | '2' | '3' | 'MODE0' | 'MODE1' | 'MODE2' | 'MODE3';
export type WaveshareEpaperDisplayConfig = {
        busy_pin?: Pin;
        cs_pin: Pin;
        data_rate?: any;
        dc_pin: Pin;
        full_update_every?: number;
        id?: ID;
        model: WaveshareEpaperDisplayConfigModel;
        release_device?: boolean;
        reset_duration?: WaveshareEpaperDisplayConfigResetDuration;
        reset_pin?: Pin;
        spi_id?: ID;
        spi_mode?: WaveshareEpaperDisplayConfigSpiMode;
        update_interval?: any;
        rotation?: any;
        lambda?: any;
        pages?: any;
    } & DisplayFULL_DISPLAY_SCHEMA & CoreCOMPONENT_SCHEMA;
