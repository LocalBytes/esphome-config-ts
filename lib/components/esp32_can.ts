/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: esp32_can.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/esp32_can
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes) 2023
 **/
import type { ID, Pin } from "../base.js";
import { BaseComponent } from "../base.js";
import type { CanbusCANBUS_SCHEMA } from "./canbus.js";

export class Esp32CanCanbus extends BaseComponent<Esp32CanCanbusConfig> {
    componentName: string = "esp32_can.canbus";
}

export interface Esp32CanCanbusConfig extends CanbusCANBUS_SCHEMA {
    id?: any;
    bit_rate?: any;
    rx_pin: Pin;
    tx_pin: Pin;
}
