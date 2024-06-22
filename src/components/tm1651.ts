/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 *
 * Schema: tm1651.json
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/tm1651
 *
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes)
 **/
import { type ID, type Pin, EsphomeComponent } from "@/lib/base.js";

export class Tm1651 extends EsphomeComponent<Tm1651Config> {
    componentName: string = "tm1651";
}

export interface Tm1651Config {
    id?: ID;
    clk_pin: Pin;
    dio_pin: Pin;
}

export interface Tm1651BINARY_OUTPUT_ACTION_SCHEMA {
    id: ID;
}
