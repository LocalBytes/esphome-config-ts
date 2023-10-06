/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: rp2040.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/rp2040
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes) 2023
 **/
import { ID, Pin, BaseComponent } from "../base.js";

export class Rp2040 extends BaseComponent<Rp2040Config> {
    componentName: string = "rp2040";
}

export interface Rp2040Config {
    board: string;
    framework?: Rp2040ConfigFramework;
}

export interface Rp2040ConfigFramework {
    version?: string;
    source?: string;
    platform_version?: any;
}
