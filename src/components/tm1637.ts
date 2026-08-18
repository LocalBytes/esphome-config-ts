/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: tm1637.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/tm1637
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes)
 **/
import { type ID, type Pin, EsphomeComponent } from "@/lib/base.js";
import type { BinarySensorBINARYSENSORSCHEMA } from "./binary_sensor.js";
import type { DisplayBASICDISPLAYSCHEMA } from "./display.js";
import type { CoreCOMPONENTSCHEMA } from "./esphome.js";

export class Tm1637BinarySensor extends EsphomeComponent<Tm1637BinarySensorConfig> {
    componentName: string = "tm1637.binary_sensor";
}

export interface Tm1637BinarySensorConfig extends BinarySensorBINARYSENSORSCHEMA {
    id?: any;
    key: number;
    tm1637_id?: ID;
    name?: any;
}

export class Tm1637Display extends EsphomeComponent<Tm1637DisplayConfig> {
    componentName: string = "tm1637.display";
}

export type Tm1637DisplayConfig = {
        clk_pin: Pin;
        dio_pin: Pin;
        id?: ID;
        intensity?: number;
        inverted?: boolean;
        length?: number;
        update_interval?: any;
        lambda?: any;
    } & DisplayBASICDISPLAYSCHEMA & CoreCOMPONENTSCHEMA;
