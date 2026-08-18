/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: esp32_hosted.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/esp32_hosted
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes)
 **/
import { type ID, type Pin, EsphomeComponent } from "@/lib/base.js";
import type { Update_UPDATE_SCHEMA } from "./update.js";
import type { CoreCOMPONENT_SCHEMA } from "./esphome.js";

export class Esp32Hosted extends EsphomeComponent<Esp32HostedConfig> {
    componentName: string = "esp32_hosted";
}

export type Esp32HostedBASE_SCHEMAVariant = 'ESP32' | 'ESP32C2' | 'ESP32C3' | 'ESP32C5' | 'ESP32C6' | 'ESP32C61' | 'ESP32H2' | 'ESP32H4' | 'ESP32H21' | 'ESP32P4' | 'ESP32S2' | 'ESP32S3' | 'ESP32S31';

export interface Esp32HostedBASE_SCHEMA {
    active_high: boolean;
    reset_pin: Pin;
    use_psram?: boolean;
    variant: Esp32HostedBASE_SCHEMAVariant;
}

export type Esp32HostedConfig = Esp32HostedConfigSdio | Esp32HostedConfigSpi;
export type Esp32HostedConfigSdioBusWidth = '1' | '4';

export interface Esp32HostedConfigSdio {
    type: "sdio" | "SDIO";
    bus_width?: Esp32HostedConfigSdioBusWidth;
    clk_pin: Pin;
    cmd_pin: Pin;
    d0_pin: Pin;
    d1_pin?: Pin;
    d2_pin?: Pin;
    d3_pin?: Pin;
    sdio_frequency?: any;
    slot?: number;
}

export interface Esp32HostedConfigSpi {
    type: "spi" | "SPI";
    clk_pin: Pin;
    cs_pin: Pin;
    data_ready_active_high?: boolean;
    data_ready_pin: Pin;
    frequency?: any;
    handshake_active_high?: boolean;
    handshake_pin: Pin;
    miso_pin: Pin;
    mosi_pin: Pin;
    spi_mode?: number;
}

export class Esp32HostedUpdate extends EsphomeComponent<Esp32HostedUpdateConfig> {
    componentName: string = "esp32_hosted.update";
}

export type Esp32HostedUpdateBASE_SCHEMA = {
        device_class?: any;
        id?: ID;
        update_interval?: any;
    } & Update_UPDATE_SCHEMA & CoreCOMPONENT_SCHEMA;
export type Esp32HostedUpdateConfig = Esp32HostedUpdateConfigEmbedded | Esp32HostedUpdateConfigHttp;

export interface Esp32HostedUpdateConfigEmbedded {
    type: "embedded" | "EMBEDDED";
    path: string;
    sha256: string;
}

export interface Esp32HostedUpdateConfigHttp {
    type: "http" | "HTTP";
    http_request_id?: ID;
    source: string;
}
