/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: ir_rf_proxy.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/ir_rf_proxy
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes)
 **/
import { type ID, type Pin, EsphomeComponent } from "@/lib/base.js";
import type { CoreENTITYBASESCHEMA, CoreCOMPONENTSCHEMA } from "./esphome.js";

export class IrRfProxyInfrared extends EsphomeComponent<IrRfProxyInfraredConfig> {
    componentName: string = "ir_rf_proxy.infrared";
}

export type IrRfProxyInfraredConfig = {
        frequency?: any;
        id?: ID;
        receiver_frequency?: any;
        remote_receiver_id?: ID;
        remote_transmitter_id?: ID;
    } & CoreENTITYBASESCHEMA & CoreCOMPONENTSCHEMA;

export class IrRfProxyRadioFrequency extends EsphomeComponent<IrRfProxyRadioFrequencyConfig> {
    componentName: string = "ir_rf_proxy.radio_frequency";
}

export type IrRfProxyRadioFrequencyConfig = {
        frequency?: any;
        id?: ID;
        on_control?: object[];
        remote_receiver_id?: ID;
        remote_transmitter_id?: ID;
    } & CoreENTITYBASESCHEMA & CoreCOMPONENTSCHEMA;
