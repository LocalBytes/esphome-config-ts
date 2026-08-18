/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: esp32_can.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/esp32_can
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes)
 **/
import { type ID, type Pin, EsphomeComponent } from "@/lib/base.js";
import type { CorePositiveTimePeriodMilliseconds } from "./esphome.js";
import type { CanbusCANBUSSCHEMA } from "./canbus.js";

export class Esp32CanCanbus extends EsphomeComponent<Esp32CanCanbusConfig> {
    componentName: string = "esp32_can.canbus";
}

export type Esp32CanCanbusConfigMode = 'NORMAL' | 'LISTENONLY';
export type Esp32CanCanbusConfigTxEnqueueTimeout = CorePositiveTimePeriodMilliseconds;

export interface Esp32CanCanbusConfig extends CanbusCANBUSSCHEMA {
    bit_rate?: any;
    id?: any;
    mode?: Esp32CanCanbusConfigMode;
    rx_pin: Pin;
    rx_queue_len?: number;
    tx_enqueue_timeout?: Esp32CanCanbusConfigTxEnqueueTimeout;
    tx_pin: Pin;
    tx_queue_len?: number;
}
