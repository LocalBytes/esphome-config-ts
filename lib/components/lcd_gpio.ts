/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: lcd_gpio.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/lcd_gpio
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes) 2023
 **/
import { ID, Pin, BaseComponent } from "../base.js";
import { LcdBaseLCD_SCHEMA } from "./lcd_base.js";

export class LcdGpioDisplay extends BaseComponent<LcdGpioDisplayConfig> {
    componentName: string = "lcd_gpio.display";
}

export interface LcdGpioDisplayConfig extends LcdBaseLCD_SCHEMA {
    id?: ID;
    data_pins: string;
    enable_pin: Pin;
    rs_pin: Pin;
    rw_pin?: Pin;
}
