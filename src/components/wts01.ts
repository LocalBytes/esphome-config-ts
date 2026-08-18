/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: wts01.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/wts01
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes)
 **/
import { type ID, type Pin, EsphomeComponent } from "@/lib/base.js";
import type { SensorSENSORSCHEMA } from "./sensor.js";
import type { CoreCOMPONENTSCHEMA } from "./esphome.js";
import type { UartUARTDEVICESCHEMA } from "./uart.js";

export class Wts01Sensor extends EsphomeComponent<Wts01SensorConfig> {
    componentName: string = "wts01.sensor";
}

export type Wts01SensorConfig = {
        accuracy_decimals?: any;
        device_class?: any;
        id?: any;
        state_class?: any;
        unit_of_measurement?: any;
    } & SensorSENSORSCHEMA & CoreCOMPONENTSCHEMA & UartUARTDEVICESCHEMA;
