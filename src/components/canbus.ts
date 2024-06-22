/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: canbus.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/canbus
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes)
 **/
import { type ID, type Pin, EsphomeComponent } from "@/lib/base.js";
import type { CoreCOMPONENT_SCHEMA } from "./esphome.js";

export abstract class Canbus extends EsphomeComponent {
    componentName: string = "canbus";
}

export type CanbusCANBUS_SCHEMABitRate = '1KBPS' | '5KBPS' | '10KBPS' | '12K5BPS' | '16KBPS' | '20KBPS' | '25KBPS' | '31K25BPS' | '33KBPS' | '40KBPS' | '50KBPS' | '80KBPS' | '83K3BPS' | '95KBPS' | '100KBPS' | '125KBPS' | '200KBPS' | '250KBPS' | '500KBPS' | '800KBPS' | '1000KBPS';

export interface CanbusCANBUS_SCHEMA extends CoreCOMPONENT_SCHEMA {
    id?: ID;
    can_id: number;
    bit_rate?: CanbusCANBUS_SCHEMABitRate;
    use_extended_id?: boolean;
    on_frame?: object[];
}
