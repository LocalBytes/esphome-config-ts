/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: spi_device.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/spi_device
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes)
 **/
import { type ID, type Pin, EsphomeComponent } from "@/lib/base.js";

export class SpiDevice extends EsphomeComponent<SpiDeviceConfig> {
    componentName: string = "spi_device";
}

export type SpiDeviceConfigBitOrder = 'msb_first' | 'lsb_first';
export type SpiDeviceConfigSpiMode = '0' | '1' | '2' | '3' | 'MODE0' | 'MODE1' | 'MODE2' | 'MODE3';

export interface SpiDeviceConfig {
    bit_order?: SpiDeviceConfigBitOrder;
    cs_pin?: Pin;
    data_rate?: any;
    id?: ID;
    release_device?: boolean;
    spi_id?: ID;
    spi_mode?: SpiDeviceConfigSpiMode;
}
