/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: sm10bit_base.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/sm10bit_base
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes) 2023
 **/
import { ID, Pin, BaseComponent } from "../base.js";
import { CoreCOMPONENT_SCHEMA } from "./esphome.js";

export abstract class Sm10bitBase extends BaseComponent {
    componentName: string = "sm10bit_base";
}

export interface Sm10bitBaseSM10BIT_BASE_CONFIG_SCHEMA extends CoreCOMPONENT_SCHEMA {
    data_pin: Pin;
    clock_pin: Pin;
    max_power_color_channels?: number;
    max_power_white_channels?: number;
}
