/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: demo.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/demo
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes) 2023
 **/
import type { ID, Pin } from "../base.js";
import { BaseComponent } from "../base.js";

export class Demo extends BaseComponent<DemoConfig> {
    componentName: string = "demo";
}

export interface DemoConfig {
    binary_sensors?: any;
    climates?: any;
    covers?: any;
    fans?: any;
    lights?: any;
    numbers?: any;
    sensors?: any;
    switches?: any;
    text_sensors?: any;
}
