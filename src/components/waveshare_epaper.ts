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

export type WaveshareEpaperDisplayConfigModel = '1.54in' | '1.54inv2' | '2.13in' | '2.13in-ttgo' | '2.13in-ttgo-b1' | '2.13in-ttgo-b73' | '2.13in-ttgo-b74' | '2.90in' | '2.90inv2' | 'gdey029t94' | '2.70in' | '2.90in-b' | '4.20in' | '4.20in-bv2' | '5.83in' | '5.83inv2' | '7.50in' | '7.50in-bv2' | '7.50in-bv3' | '7.50in-bc' | '7.50inv2' | '7.50inv2alt' | '7.50in-hd-b' | '2.13in-ttgo-dke' | '1.54in-m5coreink-m09';
export type WaveshareEpaperDisplayConfigResetDuration = CorePositiveTimePeriodMilliseconds;
export type WaveshareEpaperDisplayConfig = {
        id?: ID;
        dc_pin: Pin;
        model: WaveshareEpaperDisplayConfigModel;
        reset_pin?: Pin;
        busy_pin?: Pin;
        full_update_every?: number;
        reset_duration?: WaveshareEpaperDisplayConfigResetDuration;
        update_interval?: any;
        spi_id?: ID;
        cs_pin: Pin;
    } & DisplayFULL_DISPLAY_SCHEMA & CoreCOMPONENT_SCHEMA;
