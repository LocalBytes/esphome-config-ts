/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: remote_transmitter.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/remote_transmitter
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes)
 **/
import { type ID, type Pin, EsphomeComponent } from "@/lib/base.js";
import type { CoreCOMPONENTSCHEMA } from "./esphome.js";

export class RemoteTransmitter extends EsphomeComponent<RemoteTransmitterConfig> {
    componentName: string = "remote_transmitter";
}

export interface RemoteTransmitterConfig extends CoreCOMPONENTSCHEMA {
    carrier_duty_percent: string;
    clock_resolution?: any;
    eot_level?: boolean;
    id?: ID;
    non_blocking?: boolean;
    on_complete?: object[];
    on_transmit?: object[];
    pin: Pin;
    rmt_symbols?: number;
    use_dma?: boolean;
}
