/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: ruuvi_ble.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/ruuvi_ble
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes)
 **/
import { type ID, type Pin, EsphomeComponent } from "@/lib/base.js";
import type { BthomeMithermometerBLE_DEVICE_SCHEMA } from "./bthome_mithermometer.js";

export class RuuviBle extends EsphomeComponent<RuuviBleConfig> {
    componentName: string = "ruuvi_ble";
}

export interface RuuviBleConfig extends BthomeMithermometerBLE_DEVICE_SCHEMA {
    id?: ID;
}
