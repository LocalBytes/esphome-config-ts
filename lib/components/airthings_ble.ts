/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: airthings_ble.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/airthings_ble
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes) 2023
 **/
import { ID, Pin, BaseComponent } from "../base.js";

export class AirthingsBle extends BaseComponent<AirthingsBleConfig> {
    componentName: string = "airthings_ble";
}

export interface AirthingsBleConfig {
    id?: ID;
    esp32_ble_id?: ID;
}
