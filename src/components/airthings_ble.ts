/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: airthings_ble.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/airthings_ble
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes)
 **/
import { type ID, type Pin, EsphomeComponent } from "@/lib/base.js";

export class AirthingsBle extends EsphomeComponent<AirthingsBleConfig> {
    componentName: string = "airthings_ble";
}

export interface AirthingsBleConfig {
    esp32_ble_id?: ID;
    id?: ID;
}
