/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: wl_134.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/wl_134
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes)
 **/
import { type ID, type Pin, EsphomeComponent } from "@/lib/base.js";
import type { TextSensorTEXTSENSORSCHEMA } from "./text_sensor.js";
import type { UartUARTDEVICESCHEMA } from "./uart.js";

export class Wl134TextSensor extends EsphomeComponent<Wl134TextSensorConfig> {
    componentName: string = "wl_134.text_sensor";
}

export type Wl134TextSensorConfig = {
        icon?: any;
        id?: any;
        reset?: boolean;
    } & TextSensorTEXTSENSORSCHEMA & UartUARTDEVICESCHEMA;
