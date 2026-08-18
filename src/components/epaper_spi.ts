/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: epaper_spi.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/epaper_spi
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes)
 **/
import { type ID, type Pin, EsphomeComponent } from "@/lib/base.js";
import type { CorePositiveTimePeriodMilliseconds } from "./esphome.js";
import type { DisplayFULLDISPLAYSCHEMA } from "./display.js";

export class EpaperSpiDisplay extends EsphomeComponent<EpaperSpiDisplayConfig> {
    componentName: string = "epaper_spi.display";
}

export interface EpaperSpiDisplayConfigDimensions {
    height: number;
    width: number;
}

export type EpaperSpiDisplayConfigModel = '7.3IN-SPECTRA-E6' | 'GOODISPLAY-GDEY042T81-4.2' | 'JD79660' | 'SEEED-EE04-MONO-4.26' | 'SEEED-RETERMINAL-E1002' | 'SEEED-RETERMINAL-STICKY' | 'SPECTRA-E6' | 'SSD1677' | 'SSD1683' | 'WAVESHARE-1.54IN-G' | 'WAVESHARE-2.13IN-V3' | 'WAVESHARE-3.97IN' | 'WAVESHARE-4.26IN' | 'WAVESHARE-7.5IN-H' | 'WEACT-2.13IN-3C' | 'WEACT-2.9IN-3C' | 'WEACT-4.2IN-3C';
export type EpaperSpiDisplayConfigResetDuration = CorePositiveTimePeriodMilliseconds;
export type EpaperSpiDisplayConfigSpiMode = '0' | '1' | '2' | '3' | 'MODE0' | 'MODE1' | 'MODE2' | 'MODE3';

export interface EpaperSpiDisplayConfigTransform {
    mirror_x: boolean;
    mirror_y: boolean;
}

export interface EpaperSpiDisplayConfig extends DisplayFULLDISPLAYSCHEMA {
    busy_pin?: Pin;
    cs_pin: Pin;
    data_rate?: any;
    dc_pin: Pin;
    dimensions: EpaperSpiDisplayConfigDimensions;
    enable_pin?: Pin[];
    full_update_every?: number;
    id?: ID;
    init_sequence?: any[];
    init_sequence_id?: ID;
    model: EpaperSpiDisplayConfigModel;
    release_device?: boolean;
    reset_duration?: EpaperSpiDisplayConfigResetDuration;
    reset_pin?: Pin;
    rotation?: any;
    spi_id?: ID;
    spi_mode?: EpaperSpiDisplayConfigSpiMode;
    transform?: EpaperSpiDisplayConfigTransform;
    update_interval?: any;
    lambda?: any;
}
