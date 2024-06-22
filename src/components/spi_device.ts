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

export type SpiDeviceConfigDataRate = '80000000.0' | '40000000.0' | '20000000.0' | '10000000.0' | '8000000.0' | '5000000.0' | '4000000.0' | '2000000.0' | '1000000.0' | '200000.0' | '75000.0' | '1000.0';
export type SpiDeviceConfigBitOrder = 'msb_first' | 'lsb_first';
export type SpiDeviceConfigMode = '0' | '1' | '2' | '3' | 'MODE0' | 'MODE1' | 'MODE2' | 'MODE3';

export interface SpiDeviceConfig {
    id?: ID;
    data_rate?: SpiDeviceConfigDataRate;
    bit_order?: SpiDeviceConfigBitOrder;
    mode?: SpiDeviceConfigMode;
    spi_id?: ID;
    cs_pin?: Pin;
}
